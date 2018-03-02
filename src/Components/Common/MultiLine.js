import React, { Component } from 'react';
import { View, Text } from 'react-native';

class MultiLine extends Component {
	lines = [];
	renderLines() {
		let textString = this.props.children;
		// splitOn is integer value. Input expected char count max per line as prop
		const splitOn = this.props.splitOn;
		const spaceMultiplier = this.props.linePadding;
		let singleSpace = ' ';
		if (spaceMultiplier && spaceMultiplier != 0) {
			singleSpace = '';
			for (i = 0; i < spaceMultiplier; i++) {
				singleSpace += ' ';
			}
		} else if (spaceMultiplier === 0) {
			singleSpace = '';
		}
		let rightBorderWidth = 0;
		if (this.props.textAlign === 'right') {
			rightBorderWidth = Math.ceil(this.props.fontSize * 0.25);
			if (spaceMultiplier && spaceMultiplier != 0) {
				rightBorderWidth *= spaceMultiplier;
			}
		}
		// Adds space to end of string, preventing cutoff of last word.
		textString = textString.concat(' ');
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
		const aubergine = this.props.aubergine;
		const iceBlue = this.props.iceBlue;
		const salmon = this.props.salmon;
		const honeybee = this.props.honeybee;
		let colorProfile = {};
		if (aubergine) { 
			colorProfile = { color: '#f9f9ff', backgroundColor: '#4F0A72' };
		} else if (iceBlue) { 
			colorProfile = { color: '#111133', backgroundColor: '#c0c0f4' };
		} else if (salmon) { 
			colorProfile = { color: '#fffafa', backgroundColor: '#ef3130' };
		} else if (honeybee) { 
			colorProfile = { color: '#442232', backgroundColor: '#ffdd10' };
		}
		const shadow = this.props.shadow;
		let defaultShadow = {};
		if (shadow) {
			defaultShadow = {
				shadowColor: '#000',
				shadowOffset: { width: 1, height: 2 },
				shadowOpacity: 0.5
			};
		}
		return this.lines.map(line => 
			<View
				style={{
					borderRightWidth: rightBorderWidth,
					borderRightColor: this.props.backgroundColor || colorProfile.backgroundColor,
					marginTop: this.props.marginTop,
					shadowColor: this.props.shadowColor || defaultShadow.shadowColor,
					shadowOffset: this.props.shadowOffset || defaultShadow.shadowOffset,
					shadowOpacity: this.props.shadowOpacity || defaultShadow.shadowOpacity
			}}
			>
				<Text style={{ textAlign: this.props.textAlign }}>
					<Text
						style={{
							lineHeight: this.props.lineHeight,
							fontFamily: this.props.fontFamily,
							fontSize: this.props.fontSize,
							fontWeight: 'bold',
							color: this.props.color || colorProfile.color,
							backgroundColor: this.props.backgroundColor || colorProfile.backgroundColor}} 
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

export { MultiLine };
