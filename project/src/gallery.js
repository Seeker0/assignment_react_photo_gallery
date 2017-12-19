import React, { Component } from "react";
import UserGenerator from "./user";
import PhotoGenerator from "./photoindex";

const Gallery = ({ data }) => {
	let userlogins = data.data.map(photo => (
		<div className="col-xs-4">
			<PhotoGenerator photos={photo} />
			<UserGenerator photos={photo} />
		</div>
	));

	return <div className="row">{userlogins}</div>;
};

export default Gallery;
