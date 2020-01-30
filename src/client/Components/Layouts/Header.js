/* eslint-disable arrow-parens */
import React, { Component } from 'react';

import { AppBar, Toolbar, Typography, Tab, Tabs } from '@material-ui/core';

// eslint-disable-next-line react/prefer-stateless-function
export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = { selectedTab: '0' };
	}

	handleTabChange = (object, index) => this.setState({ selectedTab: index });

	render() {
		const { selectedTab } = this.state;

		return (
			<AppBar color="primary" position="static">
				<Toolbar>
					<Typography variant="h6" color="inherit">
						Adrinet
					</Typography>
					<Tabs value={selectedTab} onChange={this.handleTabChange}>
						<Tab label="HOME" value="0" />
						<Tab label="ABOUT" value="1" />
					</Tabs>
				</Toolbar>
			</AppBar>
		);
	}
}
