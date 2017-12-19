import React, { Component } from 'react';


const Gallery = ({photos}) => {

let photos = photo.data.map(photo =>{
	return photo.avatar_url;

})


photos.forEach(photo =>{
	
return (
	
	    <div className="col-xs-4"><img src={photo} /></div>
	  
)

})

}


export default Gallery