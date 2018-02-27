import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Card, CardSection, Spinner } from './Components/Common';
import HighlightContent from './Components/HighlightContent';

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
