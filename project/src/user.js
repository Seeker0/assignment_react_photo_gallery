import React, { Component } from "react";

const UserGenerator = ({ photos }) => (
	<a href={photos.html_url}>
		<h4>{photos.login} </h4>
	</a>
);

export default UserGenerator;
