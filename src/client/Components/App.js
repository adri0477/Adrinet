import React, { Component } from 'react';

import AppBarSpacer from './Layouts/AppBarSpacer';
import Header from './Layouts/Header';
import Home from './Pages/Home';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { selectedTab: '0' };
	}

	handleTabChange = (object, index) => this.setState({ selectedTab: index });

	content = () => {
		const { selectedTab } = this.state;
		if (selectedTab === '0') {
			return <Home />;
		}
		return null;
	};

	render() {
		const { selectedTab } = this.state;
		console.log(typeof selectedTab);
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
