import React from 'react';
import axios from 'axios';
import RSSParser from 'rss-parser';

import { httpReducer } from './httpReducer';

let parser = new RSSParser();

const useHttp = () => {
  const [httpState, dispathHttp] = React.useReducer(httpReducer, {
    loading: false,
    error: null,
    data: null,
    categoryData: null,
    genres: [],
  });

  const proxyurl = 'https://ancient-river-53390.herokuapp.com/';

  const sendRequest = React.useCallback((url) => {
    dispathHttp({ type: 'SEND' });
    axios
      .get(proxyurl + url)
      .then((response) => {
        if (response.data.results && response.data.results.length === 0) {
          dispathHttp({
            type: 'ERROR',
            errorMessage: 'No results found!',
          });
        } else {
          dispathHttp({
            type: 'RESPONSE',
            responseData: response.data,
            categoryData: null,
          });
        }
      })
      .catch((error) => {
        dispathHttp({ type: 'ERROR', errorMessage: 'Something went wrong!' });
      });
  }, []);

  const homeRequest = React.useCallback((url, categoryUrl) => {
    dispathHttp({ type: 'SEND' });
    axios
      .get(proxyurl + url)
      .then((response) => {
        axios.get(proxyurl + categoryUrl).then((resCat) => {
          dispathHttp({
            type: 'RESPONSE',
            responseData: response.data,
            categoryData: resCat.data,
          });
        });
      })
      .catch((error) => {
        dispathHttp({ type: 'ERROR', errorMessage: 'Something went wrong!' });
      });
  }, []);

  const sendPodcastRequest = React.useCallback((url) => {
    dispathHttp({ type: 'SEND' });
    axios
      .get(proxyurl + url)
      .then((response) => {
        let feedUrl = response.data.results[0].feedUrl;

        if (!feedUrl.includes('?format=xml')) {
          feedUrl = feedUrl + '?format=xml';
        }

        parser
          .parseURL(proxyurl + feedUrl)
          .then((feed) => {
            response.data.results.map((track) => {
              let minutes = Math.floor(
                (track.trackTimeMillis / (1000 * 60)) % 60
              );
              let seconds = Math.floor((track.trackTimeMillis / 1000) % 60);
              let hours = Math.floor(
                (track.trackTimeMillis / (1000 * 60 * 60)) % 24
              );

              hours = hours < 10 ? '0' + hours : hours;
              minutes = minutes < 10 ? '0' + minutes : minutes;
              seconds = seconds < 10 ? '0' + seconds : seconds;

              return (track.trackTimeMillis =
                hours + ':' + minutes + ':' + seconds);
            });

            const array = [...response.data.results];

            array.shift();

            feed.items.forEach((track) => {
              if (track.itunes.duration) {
                if (!track.itunes.duration.includes(':')) {
                  let totalSeconds = track.itunes.duration;
                  let hours = Math.floor(totalSeconds / 3600);
                  totalSeconds %= 3600;
                  let minutes = Math.floor(totalSeconds / 60);
                  let seconds = totalSeconds % 60;
                  if (minutes < 10) {
                    minutes = '0' + minutes;
                  }
                  if (seconds < 10) {
                    seconds = '0' + seconds;
                  }
                  return (track.itunes.duration =
                    '0' + hours + ':' + minutes + ':' + seconds);
                } else {
                  const insertCharacter = (track, position) => {
                    return [
                      track.slice(0, position),
                      ':',
                      track.slice(position),
                    ].join('');
                  };
                  if (track.itunes.duration.length === 4) {
                    return (track.itunes.duration =
                      '00:' + insertCharacter(track.itunes.duration, 2));
                  } else if (
                    track.itunes.duration.length === 3 &&
                    track.itunes.duration.includes(':')
                  ) {
                    return (track.itunes.duration =
                      '00:0' + insertCharacter(track.itunes.duration, 2));
                  } else if (
                    track.itunes.duration.length === 5 &&
                    track.itunes.duration.includes(':')
                  ) {
                    return (track.itunes.duration =
                      '00:' + track.itunes.duration);
                  } else if (
                    track.itunes.duration.length === 5 &&
                    !track.itunes.duration.includes(':')
                  ) {
                    track.itunes.duration =
                      '0' + +insertCharacter(track.itunes.duration, 3);
                    return (track.itunes.duration = insertCharacter(
                      track.itunes.duration,
                      2
                    ));
                  }
                }
              }
            });

            feed.items.map((track) => {
              const date = track.pubDate.substr(0, 17);
              return (track.pubDate = date);
            });

            dispathHttp({
              type: 'RESPONSE',
              responseData: feed,
              genres: response.data.results[0].genres,
            });
          })
          .catch((error) => {
            dispathHttp({
              type: 'ERROR',
              errorMessage: 'RSS!',
            });
          });
      })
      .catch((error) => {
        dispathHttp({ type: 'ERROR', errorMessage: 'Something went wrong!' });
      });
  }, []);

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest: sendRequest,
    sendPodcastRequest: sendPodcastRequest,
    categoryData: httpState.categoryData,
    homeRequest: homeRequest,
    genres: httpState.genres,
  };
};

export default useHttp;
