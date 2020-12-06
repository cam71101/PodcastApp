import React, { useReducer, useCallback } from 'react';
import axios from 'axios';

import { actionTypes } from '../store/actions';
import { httpReducer } from './httpReducer';

const useHttp = () => {
  const [httpState, dispathHttp] = React.useReducer(httpReducer, {
    loading: false,
    error: null,
    data: null,
  });

  const sendRequest = React.useCallback((url) => {
    dispathHttp({ type: 'SEND' });
    axios
      .get(url)
      .then((response) => {
        dispathHttp({ type: 'RESPONSE', responseData: response.data });
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
  };
};

export default useHttp;
