import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Itunes = (props) => {
  // useEffect(() => {
  //   // const response = axios.get(
  //   //   'https://itunes.apple.com/search?term=jack+johnson',
  //   //   { crossdomain: true }
  //   // );
  //   // fetch('https://itunes.apple.com/search?term=jack+johnson', {
  //   //   method: 'GET',
  //   //   mode: 'no-cors',
  //   // }).then(function (response) {
  //   //   console.log(response);
  //   //   response.json().then(function (data) {
  //   //     console.log(data);
  //   //   });
  //   // });

  //   (async () => {
  //     try {
  //       const resp = await fetch(
  //         // 'https://itunes.apple.com/search?term=podcast&genreId=1321&limit=200'
  //         // 'https://itunes.apple.com/search?media=podcast&attribute=genreIndex'
  //         'https://itunes.apple.com/lookup?media=podcast&attribute=genreIndex&term=popular'
  //         // https://rss.itunes.apple.com/api/v1/us/podcasts/top-podcasts/all/uk/explicit.json
  //       );
  //       const json = await resp.json();
  //       console.log(json);
  //     } catch (e) {}
  //   })();
  // }, []);

  // 1321;

  // // export type SearchOption =
  // //   | 'All'
  // //   | 'Audiobook'
  // //   | 'eBook'
  // //   | 'Movie'
  // //   | 'Music'
  // //   | 'Music Video'
  // //   | 'Podcast'
  // //   | 'TV Show'
  // //   | 'Short Film'
  // //   | 'Software';

  // //   export type HeaderState = {
  // //     media: SearchOption,
  // //     query: string,
  // //   };

  // //   export type SearchResult = {
  // //     trackId: number,
  // //     trackPrice?: number,
  // //     collectionPrice?: number,
  // //     price?: number,
  // //     trackViewUrl?: string,
  // //     collectionViewUrl?: string,
  // //     artworkUrl100: string,
  // //     trackName?: string,
  // //     collectionName?: string,
  // //     kind: string,
  // //     longDescription?: string,
  // //     description?: string,
  // //   };

  // // export const getApiUrl = ({ media, query }: HeaderState) =>
  // //   `https://itunes.apple.com/search?media=${getMedia(
  // //     media || 'all'
  // //   )}&term=${query.split(' ').join('+')}`;

  return (
    <React.Fragment>
      <div>test</div>
    </React.Fragment>
  );
};

export default Itunes;
