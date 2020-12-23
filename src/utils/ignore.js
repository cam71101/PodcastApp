// response.data.results.map((track) => {
//   let minutes = Math.floor((track.trackTimeMillis / (1000 * 60)) % 60);
//   let seconds = Math.floor((track.trackTimeMillis / 1000) % 60);
//   let hours = Math.floor((track.trackTimeMillis / (1000 * 60 * 60)) % 24);

//   hours = hours < 10 ? '0' + hours : hours;
//   minutes = minutes < 10 ? '0' + minutes : minutes;
//   seconds = seconds < 10 ? '0' + seconds : seconds;

//   return (track.trackTimeMillis = hours + ':' + minutes + ':' + seconds);
// });

// response.data.results.map((track) => {
//   const date = track.releaseDate.substr(0, 10);
//   const newDate = new Date(date);
//   const string = String(newDate);
//   const newData = string.substr(4, 12);
//   return (track.releaseDate = newData);
// });

// dispathHttp({
//   type: 'RESPONSE',
//   responseData: response.data,
//   description: listen.data.results[0].description_original,
// });

// dispathHttp({
//   type: 'RESPONSE',
//   responseData: response.data,
//   description:
//     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   categoryData: null,
// });

// })
// .catch((error) => {
//   dispathHttp({
//     type: 'ERROR',
//     errorMessage: 'Something went wrong!',
//   });
// });
