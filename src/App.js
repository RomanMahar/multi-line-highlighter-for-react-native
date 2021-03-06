import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './Components/Common';
import HighlightContent from './Examples/AdventureTime.js';

class App extends Component {
	render() {
		return (
			<View>
				<Header headerText="Multi Line Highlighter" />
				<View zIndex={-1} style={{ top: -40 }}>
					<HighlightContent />
				</View>
			</View>
		);
	}
}

export default App;
