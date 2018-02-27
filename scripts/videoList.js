'use strict';
const generateVideoItemHtml = function( video ) {
  return `
    <div>
      <h3>
        <a id="${video.id}" class="js-result-name" href="${video.thumbnails.url}" 
        target="_blank">${video.title}</a> 
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
      let decoratedResponse = decorateResponse(response);
      addVideosToStore( decoratedResponse );
      render();
    });
  });
};