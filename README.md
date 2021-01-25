<p align="center">
  <img src="https://res.cloudinary.com/dndp8567v/image/upload/v1608566331/logo_cropped_ab3eb6bdd5.png">
</p>

<p align="center">
<img src="https://img.shields.io/badge/madeby-cam71101-green" />
<img src="https://img.shields.io/github/languages/top/cam71101/podcastapp" />
<img src="https://img.shields.io/github/last-commit/cam71101/podcastapp" />
<a href="https://twitter.com/d_fisherWebDev" alt="twitter">
<img src="https://img.shields.io/twitter/follow/d_fisherWebDev?style=social" />
</a>
<img src="https://img.shields.io/badge/react-17.0.1-green" />
<img src="https://travis-ci.com/cam71101/PodcastApp.svg?branch=main">
</p>

<h2 align="center"><a  href="https://cam71101.github.io/PodcastApp/">Live Demo</a></h2>

## Description

<p align="center">
<img src="https://res.cloudinary.com/dndp8567v/image/upload/v1608116331/PodcastApp_adeb2f3e15.gif" />
</p>

<h2 align="center"><a  href="https://d-fisher.com/podapp">CLICK HERE FOR FULL PROJECT BREAKDOWN</a></h2>

PodApp is inspired by my love for Podcasts! It's an application to discover and listen to podcasts in the web browser. The user can browse different categories or search for a podcast. The application pulls images and data from the <a  href="https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/">ITunes API</a>.

I've written a few blog posts about the making of the app <a  href="https://d-fisher.com/blogs">here</a>.

## Tecnologies Used

- React & Javascript
- Material UI
- Docker
- Jest/Enzyme
- React Testing Library
- Git & Github

## Main Features

- Audio player
- Podcast charts
- Search podcasts
- Genre catergories

## Technical details

Custom Hook used for fetching data. Full script <a href="https://github.com/cam71101/PodcastApp/blob0e1afdeac7519d021d372b40f204b2c2fc752cd5/src/hooks/http.js#L1-L191">here</a>.

```javascript
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
        dispathHttp({
          type: 'ERROR',
          errorMessage: 'Something went wrong! ' + error,
        });
      });
  }, []);
```

Audio Context for passing down audio data to the media player. Full script <a href="https://github.com/cam71101/PodcastApp/blob/f6d09907bc2a1a214175486806292889b728a746/src/context/audio-context.js#L1-L40"> here </a>.
```javascript
export const AudioContext = React.createContext({
  audio: null,
  image: null,
  toggleAudio: () => {},
  autoPlay: false,
  trackName: null,
  artistName: null,
});

const Audio = (props) => {
  const [audio, setAudio] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [trackName, setTrackName] = React.useState(null);
  const [artistName, setArtistkName] = React.useState(null);

  const toggleAudio = (audioLink, audioImage, artistName, trackName) => {
    setAudio(audioLink);
    setImage(audioImage);
    setArtistkName(artistName);
    setTrackName(trackName);
  };

  return (
    <AudioContext.Provider
      value={{
        audio: audio,
        image: image,
        setAudio: toggleAudio,
        artistName: artistName,
        trackName: trackName,
      }}
    >
      {props.children}
    </AudioContext.Provider>
  );
};
```

Example of testing with React Testing Library. Full script <a href="https://github.com/cam71101/PodcastApp/blob/main/src/hooks/http.test.js"> here </a>.

```javascript
test('should catch error', async () => {
  axios.get = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.reject(),
    })
  );

  const httpData = setup();
  expect(httpData.isLoading).toBe(false);
  expect(httpData.data).toBe(null);
  expect(httpData.error).toBe(null);
  expect(httpData.categoryData).toBe(null);
  expect(httpData.genres).toStrictEqual([]);

  await act(async () => {
    httpData.sendRequest('www.test.com');
  });

  expect(httpData.error).toBe(
    "Something went wrong! TypeError: Cannot read property 'results' of undefined"
  );
});
```

## Responsive Design

<p align="center">
<img src="https://res.cloudinary.com/dndp8567v/image/upload/v1608584482/PodcastAppResponsiveLowRes_9084851fc7.gif" />
</p>

## Future Features

- Authentication
- Subscription to Podcasts
- Links to download podcasts
- Listening history
- Listening feed
- Recommendation list
- Profile page

## Project setup

### Docker Container

In order to run this container you'll need docker installed.

- [Windows](https://docs.docker.com/windows/started)
- [OS X](https://docs.docker.com/mac/started/)
- [Linux](https://docs.docker.com/linux/started/)

#### Docker Build

```
docker build -t podcast-app_sample-prod -f Dockerfile .
```

#### Docker Test

```
docker run -e CI=true podcast-app_sample-prod npm run test
```

#### Docker Run

```
docker run -it --rm -p 1337:80 podcast-app_sample-prod
```

View http://localhost:1337/ in browser.

### NPM

```
npm install
npm start

```

#### Tests

```
npm test
```
