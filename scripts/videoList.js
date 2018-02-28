'use strict';
/* global $ fetchVideos decorateResponse addVideosToStore store */
const generateVideoItemHtml = function( video ) {
  const link = `https://www.youtube.com/watch?v=${video.id}`;
  console.log(video);
  return `
    <div>
      <h3>
        <a id="${video.id}" class="js-result-name" href="${link}" 
        target="_blank">${video.title}</a> 
        <img src="${video.thumbnails.url}"/>
      </h3>
    </div>`;
}; 

const render = function() {
  let videoStore = store.videos.map(video => generateVideoItemHtml(video));
  $('.results').html(videoStore);
};

const handleFormSubmit = function() {
  $('#videoSearchForm').on('submit', event => {
    event.preventDefault();
    const searchTerm = $('#search-term').val();
    $('#search-term').val('');
    fetchVideos(searchTerm, (response) => {
      console.log(response);
      let decoratedResponse = decorateResponse(response);
      addVideosToStore( decoratedResponse );
      render();
    });
  });
};