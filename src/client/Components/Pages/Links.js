import React from 'react';
import { Typography, Link } from '@material-ui/core';

const Links = () => {
	return (
		<>
			<Typography variant="h6" color="inherit">
				Links
			</Typography>
			<Typography variant="body1" color="inherit">
				Maple user profile useful for danish high schools
				<Link href="downloads/maple.mapleprofile" />
			</Typography>
		</>
	);
};

export default Links;
