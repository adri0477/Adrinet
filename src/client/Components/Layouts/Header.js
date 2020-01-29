import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';

// eslint-disable-next-line react/prefer-stateless-function
export default class Header extends Component {
	render() {
		return (
			<AppBar color="primary" position="static">
				<Toolbar>
					<TypoGraphy variant="h5" color="inherit">
						Adrinet
					</TypoGraphy>
				</Toolbar>
			</AppBar>
		);
	}
}
