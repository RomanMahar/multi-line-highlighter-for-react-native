import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HighlightText extends Component {
	lines = [];
	renderLines() {
		let textString = this.props.children;
		// splitOn is integer value. Input expected char count max per line as prop
		const splitOn = this.props.splitOn;
		// Adds space to end of string, preventing cutoff of last word
		const spaceMultiplier = this.props.linePadding;
		let singleSpace = ' ';
		if (spaceMultiplier && spaceMultiplier != 0) {
			singleSpace = '';
			for (i = 0; i < spaceMultiplier; i++) {
				singleSpace += ' ';
			}
		} else if (spaceMultiplier == 0) {
			singleSpace = '';
		}
		textString = textString.concat(singleSpace);
		const numOfLines = Math.ceil(textString.length / splitOn);
		let lineStart = 0;
		let lineEnd = textString.slice(0, splitOn).lastIndexOf(' ');
		let fakeLineEnd = lineStart + splitOn;
		/* multiplying x2 to handle for awkward splits before very long words
		 that can push content beyond the above calculated numOfLines */
		for (i = 0; i < numOfLines * 2; i++) {
			let line = textString.slice(lineStart, lineEnd);
			/* 1. Adds spaces to start and end of already populated lines for visual padding 
			   2. only pushes to Array if length of line is > 0 */
			if (line.length > 0) {
				line = singleSpace + line + singleSpace;
				this.lines.push(line);
			}
			lineStart = lineEnd + 1;
			fakeLineEnd = lineStart + splitOn;
			lineEnd = textString.slice(0, fakeLineEnd).lastIndexOf(' ');
		}
		return this.lines.map((line, i) => 
			<View
				style={{
					marginTop: this.props.marginTop,
					shadowColor: '#000',
					shadowOffset: { width: 1, height: 2},
					shadowOpacity: 0.5
			}}
			>
				<Text>
					<Text
						selectable
						selectionColor={'#ff0'}
						style={{
							fontSize: this.props.fontSize,
							fontWeight: 'bold',
							color: this.props.color,
							backgroundColor: this.props.backgroundColor }} 
						key={i.toString()}
					>
							{line}
						</Text>
				</Text>
			</View>
		);
	}
	render() {
		return (
			<View>
				{this.renderLines()}
			</View>
		);
	}
}

export { HighlightText };
