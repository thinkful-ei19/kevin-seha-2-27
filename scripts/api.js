'use strict';
const API_KEY = 'AIzaSyDbPk1cPv54DwHd-ao4NY6qGjAqb5Wn6w8';


const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

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
  return response.items.map( item => ( {
    id: item.id.videoId,
    title: item.snippet.title,
    thumbnails: item.snippet.thumbnails.default
  } ) );
};