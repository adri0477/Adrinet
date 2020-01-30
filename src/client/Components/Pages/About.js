/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import { Typography, Link } from '@material-ui/core';

const About = () => {
	return (
		<>
			<Typography variant="h6" color="inherit">
				About adrinet
			</Typography>
			<Typography variant="body1" color="inherit">
				I created this site for fun, and to have something to do.
			</Typography>
			<Typography variant="body1" color="inherit">
				This site uses cookies, and if you don&apos;t like it you can
				fuck off &lt;3
			</Typography>
			<Typography variant="body1" color="inherit">
				If you want to ask me something you can write to me at:{' '}
				<Link href="mailto:adri0477@gmail.com">adri0477@gmail.com</Link>
			</Typography>
		</>
	);
};

export default About;
