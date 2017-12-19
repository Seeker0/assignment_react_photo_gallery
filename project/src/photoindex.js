import React, { Component } from 'react';

const Gallery = ({ photos }) => {
  let pics = photos.data.map(photo => (
    <div className="col-xs-4">
      <img src={photo.avatar_url} />
    </div>
  ));

  return <div className="row">{pics}</div>;
};

export default Gallery;
