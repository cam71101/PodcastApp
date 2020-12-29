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

PodApp is inspired by my love for Podcasts! It's an application to discover and listen to podcasts in the web browser. The user can browse different categories or search for a podcast. The application pulls images and data from the <a  href="https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/">ITunes API</a> and <a  href="https://www.listennotes.com/api/">Listen Notes API.</a>

I've written a few blog posts about the making of the app <a  href="https://d-fisher.com/blogs">here</a>.

## Technical details

This project was built with React and Material UI.

In my previous project, I used Redux and Middleware to handle state management and HTTP requests. I wanted to learn more about custom hooks, and I felt that this project did not need Redux, so I used a custom HTTP hook to handle API requests. The hook was made with a reducer and is used throughout most of my containers. The hook can be found <a href="https://github.com/cam71101/PodcastApp/blob/f6d09907bc2a1a214175486806292889b728a746/src/hooks/http.js#L1-L165">here</a>.

To control the state of the audio track, I used context. This was so I wouldn't have to pass down props to the audio player container. The context file is <a href="https://github.com/cam71101/PodcastApp/blob/f6d09907bc2a1a214175486806292889b728a746/src/context/audio-context.js#L1-L40"> here </a>.

I also had to fetch the RSS feeds for the podcast pages to gather more information about each episode along with fetching data from the APIs. However, the RSS feed is only called when the user clicks on the episode to display more information. I also used useReducer to handle state management. You can find the code <a href="https://github.com/cam71101/PodcastApp/blob/616db3f7df881b692d26d380dcbabd7123072a9b/src/containers/PodcastPage/PodcastPage.js#L119-L147"> here</a>.

I also focused heavily on unit testing when making this application, using a mixture of Jest/Enzyme and the React Testing Library.

## Responsive Design

<p align="center">
<img src="https://res.cloudinary.com/dndp8567v/image/upload/v1608584482/PodcastAppResponsiveLowRes_9084851fc7.gif" />
</p>

## Main Features

- Audio player (courtesy of https://www.npmjs.com/package/react-h5-audio-player)
- Podcast charts
- Search
- Categories

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
