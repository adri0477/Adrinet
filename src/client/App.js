import React, { Component } from 'react';

import { AppBar, Toolbar, Typography, Tabs, Tab, Box } from '@material-ui/core';

export default class App extends Component {
	componentDidMount() {}

	render() {
		return (
			<div>
				<AppBar color="primary" position="fixed">
					<Toolbar>
						<Typography variant="h5" color="inherit">
							Adrinet
						</Typography>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}
