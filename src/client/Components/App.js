import React, { Component } from 'react';

import { Typography, Box } from '@material-ui/core';
import AppBarSpacer from './Layouts/AppBarSpacer';
import Header from './Layouts/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Links from './Pages/Links';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { selectedTab: '0' };
	}

	handleTabChange = (object, index) => this.setState({ selectedTab: index });

	content = () => {
		const { selectedTab } = this.state;

		switch (selectedTab) {
			case '0':
				return <Home />;
			case '1':
				return <About />;
			case '2':
				return <Typography variant="h3">Coming soon</Typography>;

			default:
				console.warn('Selected tab is out of range');
				return null;
		}
	};

	render() {
		const { selectedTab } = this.state;
		return (
			<>
				<Header
					selectedTab={selectedTab}
					handleTabChange={this.handleTabChange}
				/>

				<AppBarSpacer />
				{this.content()}
			</>
		);
	}
}
//
