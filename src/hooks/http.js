import React from 'react';
import axios from 'axios';

import { httpReducer } from './httpReducer';

const useHttp = () => {
  const [httpState, dispathHttp] = React.useReducer(httpReducer, {
    loading: false,
    error: null,
    data: null,
    description: null,
  });

  const proxyurl = 'https://ancient-river-53390.herokuapp.com/';
  // const proxyurl = '';
  const sendRequest = React.useCallback((url) => {
    dispathHttp({ type: 'SEND' });
    console.log('CORSS');
    axios
      .get(proxyurl + url)
      .then((response) => {
        dispathHttp({ type: 'RESPONSE', responseData: response.data });
      })
      .catch((error) => {
        dispathHttp({ type: 'ERROR', errorMessage: 'Something went wrong!' });
      });
  }, []);

  const sendPodcastRequest = React.useCallback((url) => {
    dispathHttp({ type: 'SEND' });
    axios.get(proxyurl + url).then((response) => {
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
          // dispathHttp({
          //   type: 'RESPONSE',
          //   responseData: response.data,
          //   description: listen.data.results[0].description_original,
          // })

          response.data.results.map((track) => {
            const minutes = Math.floor(track.trackTimeMillis / 60000);
            const seconds = ((track.trackTimeMillis % 60000) / 1000).toFixed(0);
            return (track.trackTimeMillis =
              minutes + ':' + (seconds < 10 ? '0' : '') + seconds);
          });

          response.data.results.map((track) => {
            const date = track.releaseDate.substr(0, 10);
            const newDate = new Date(date);
            const string = String(newDate);
            const newData = string.substr(4, 12);
            return (track.releaseDate = newData);
          });

          dispathHttp({
            type: 'RESPONSE',
            responseData: response.data,
            description: listen.data.results[0].description_original,
          });

          // dispathHttp({
          //   type: 'RESPONSE',
          //   responseData: response.data,
          //   description:
          //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          // });
          // })
          // .catch((error) => {
          //   dispathHttp({
          //     type: 'ERROR',
          //     errorMessage: 'Something went wrong!',
          //   });
          // });
        });
    });
  }, []);

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    description: httpState.description,
    sendRequest: sendRequest,
    sendPodcastRequest: sendPodcastRequest,
  };
};

export default useHttp;
