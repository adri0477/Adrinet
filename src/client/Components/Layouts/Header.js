/* eslint-disable arrow-parens */
import React, { Component } from 'react';

import { AppBar, Toolbar, Typography, Tab, Tabs } from '@material-ui/core';

// eslint-disable-next-line react/prefer-stateless-function
export default class Header extends Component {
	render() {
		const { selectedTab, handleTabChange } = this.props;
		return (
			<AppBar color="primary" position="fixed">
				<Toolbar>
					<Typography variant="h6" color="inherit">
						Adrinet
					</Typography>
					<Tabs
						value={selectedTab}
						onChange={handleTabChange}
						centered
					>
						<Tab label="HOME" value="0" />

						<Tab label="ABOUT" value="1" />
					</Tabs>
				</Toolbar>
			</AppBar>
		);
	}
}
