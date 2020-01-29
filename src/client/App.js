import React, { Component } from 'react';
import './app.css';

import { AppBar, Toolbar, Typography, Tabs, Tab } from '@material-ui/core';

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
						<Tabs
							indicatorColor="primary"
							textColor="primary"
							centered
						>
							<Tab label="Home" />
						</Tabs>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}
