import React, { Component } from "react";
import "./app.css";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";

export default class App extends Component {
	componentDidMount() {}

	render() {
		return (
			<div>
				<AppBar color="primary" position="static">
					<Toolbar>
						<TypoGraphy variant="h5" color="inherit">
							Adrinet
						</TypoGraphy>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}
//
