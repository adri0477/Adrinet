/* eslint-disable arrow-parens */
import React from 'react';

import { AppBar, Toolbar, Typography, Tab, Tabs, Box } from '@material-ui/core';

const Header = props => {
	const { selectedTab, handleTabChange } = props;

	return (
		<AppBar color="primary" position="fixed">
			<Toolbar>
				<Typography variant="h6" color="inherit">
					Adrinet
				</Typography>
				<Box mx="auto">
					<Tabs value={selectedTab} onChange={handleTabChange}>
						<Tab label="HOME" value="0" />
						<Tab label="LINKS" value="2" />
						<Tab label="ABOUT" value="1" />
					</Tabs>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
