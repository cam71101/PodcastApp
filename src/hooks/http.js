import React from 'react';
import axios from 'axios';

import { httpReducer } from './httpReducer';

const useHttp = () => {
  const [httpState, dispathHttp] = React.useReducer(httpReducer, {
    loading: false,
    error: null,
    data: null,
    description: null,
    categoryData: null,
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
            description: null,
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
        axios
          .get(
            `https://listen-api.listennotes.com/api/v2/search?q=${response.data.results[0].collectionName}&sort_by_date=0&type=podcast&offset=0&len_min=10&len_max=30&published_after=0&only_in=title&language=English&safe_mode=0`,
            {
              headers: {
                'X-ListenAPI-Key': '8cdcd14f4279491aba4bf627524febe2',
              },
            }
          )
          .then((listen) => {
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

            response.data.results.map((track) => {
              const date = track.releaseDate.substr(0, 10);
              const newDate = new Date(date);
              const string = String(newDate);
              const newData = string.substr(4, 12);
              return (track.releaseDate = newData);
            });

            let description = 'Description is not available';
            let title = null;

            if (listen.data.results.length !== 0) {
              description = listen.data.results[0].description_original;
            }

            dispathHttp({
              type: 'RESPONSE',
              responseData: response.data,
              description: description,
              title: title,
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
    description: httpState.description,
    sendRequest: sendRequest,
    sendPodcastRequest: sendPodcastRequest,
    categoryData: httpState.categoryData,
    homeRequest: homeRequest,
  };
};

export default useHttp;
