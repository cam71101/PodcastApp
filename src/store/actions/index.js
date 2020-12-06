import axios from 'axios';

export const actionTypes = {
  UPDATE_DATA: 'UPDATE_DATA',
};

export function updateData(link) {
  // const newLink = 'https://itunes.apple.com/' + link;
  return (dispatch) => {
    // (async () => {
    //   try {
    //     const resp = await axios.get('https://itunes.apple.com/', {
    //       method: 'GET',
    //       'Access-Control-Allow-Origin': '*',
    //     });

    //     console.log(resp);

    //     // const reducedPodcasts = resp.data.feed.results;
    //     // const reducedPodcastsFurther = reducedPodcasts.slice(0, 50);

    //     return {
    //       type: actionTypes.UPDATE_DATA,
    //       payload: resp.data,
    //     };
    //   } catch (e) {
    //     return {
    //       type: actionTypes.UPDATE_DATA,
    //       data: null,
    //     };
    //   }
    // })();

    return axios.get(link).then((response) => {
      dispatch({
        type: actionTypes.UPDATE_DATA,
        payload: response.data,
      });
    });
  };
  // return {
  //   type: actionTypes.UPDATE_DATA,
  //   data: link,
  // };
}
