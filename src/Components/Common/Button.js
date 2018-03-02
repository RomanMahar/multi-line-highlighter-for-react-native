import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
	const { buttonStyle, buttonTextStyle } = styles;

	return (
		<TouchableOpacity 
			onPress={onPress} 
			style={buttonStyle}
		>
			<Text style={buttonTextStyle}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	buttonTextStyle: {
		alignSelf: 'center',
		fontFamily: 'Roboto',
		color: '#282828',
		fontSize: 16,
		fontWeight: '500',
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: 'transparent',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#282828',
		marginLeft: 5,
		marginRight: 5
	}
};


// Can be expressed as: export { Button: Button };
export { Button };
