'use strict';
const API_KEY = 'AIzaSyDbPk1cPv54DwHd-ao4NY6qGjAqb5Wn6w8';

const store = {
  videos: []
};

// TASK: Add the Youtube Search Base URL here:
// Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

// TASK:
// 1. Create a `fetchVideos` function that receives a `searchTerm` and `callback`
// 2. Use `searchTerm` to construct the right query object based on the Youtube API docs
// 3. Make a getJSON call using the query object and sending the provided callback in as the last argument
// TEST IT! Execute this function and console log the results inside the callback.
const fetchVideos = function( searchTerm, callback ) {
  const query = {
    q: `${searchTerm}`,
    part: 'snippet',
    key: API_KEY,
    maxResults: 5
  };
  $.getJSON( BASE_URL, query, callback );
};

const decorateResponse = function( response ) {
  console.log( 'global response from api', response );
  return response.items.map( item => ( {
    id: item.id.videoId,
    title: item.snippet.title,
    thumbnails: item.snippet.thumbnails.default
  } ) );
};