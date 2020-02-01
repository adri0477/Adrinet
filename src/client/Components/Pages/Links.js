import React from 'react';
import { Typography, Link } from '@material-ui/core';

const Links = () => {
	return (
		<>
			<Typography variant="h5" color="inherit">
				Links
			</Typography>
			<Typography variant="h6" color="inherit">
				Maple user profile useful for danish high schools.
			</Typography>
			<Typography variant="body1" color="inherit">
				Place the file in %appdata%&#92;Maple&#92;2019&#92;profiles.
			</Typography>
			<Typography variant="body1" color="inherit">
				The folder profiles may not exist, you can just create it
				manually.
			</Typography>
			<Typography variant="body1" color="inherit">
				Then go to maple and open new empty document, press edit and
				select user profile. (or use shortcut CTRl + SHIFT + I)
			</Typography>
			<Typography variant="body1" color="inherit">
				Then select the new profile and press &quot;Apply and set as
				default&quot;.
			</Typography>
			<Typography variant="body1" color="inherit">
				Now all new maple documents will load Gym and plots libraries.
			</Typography>
			<Link href="downloads/GymProfile.mapleprofile" download>
				Maple profile
			</Link>
		</>
	);
};

export default Links;
