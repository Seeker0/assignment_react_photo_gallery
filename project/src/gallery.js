import React, { Component } from 'react';
import UserGenerator from './user';
import PhotoGenerator from './photoindex';

const compare = (a, b) => {
  a = a.login.toLowerCase();
  b = b.login.toLowerCase();
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const Gallery = ({ data }, query) => {
  console.log(query);
  let { search, sort } = query;
  console.log(search, sort);
  let userlogins;
  if (sort === 'descending') {
    userlogins = data.data.sort(compare).reverse();
  } else {
    userlogins = data.data.sort(compare);
  }
  userlogins = data.data.map(photo => {
    if (photo.login.match(search)) {
      return (
        <div className="col-xs-4">
          <PhotoGenerator photos={photo} />
          <UserGenerator photos={photo} />
        </div>
      );
    } else {
      return null;
    }
  });

  return <div className="row">{userlogins}</div>;
};

export default Gallery;
