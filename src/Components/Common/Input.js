import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) =>  {
	const { labelStyle, textInputStyle, containerStyle } = styles;
	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				placeholder={placeholder}
				secureTextEntry={secureTextEntry}
				autoCorrect={false}
				value={value}
				onChangeText={onChangeText}
				style={textInputStyle}
			/>
		</View>
	);
};

const styles = {
	labelStyle: {
		fontSize: 13,
		fontWeight: '300',
		paddingLeft: 8,
		flex: 1,
		fontFamily: 'Roboto'
	},
	textInputStyle: {
		flex: 3,
		color: '#000',
		paddingLeft: 5,
		paddingRight: 5,
		fontSize: 13,
		fontFamily: 'Roboto'
	},
	containerStyle: {
		height: 40,
		backgroundColor: '#fff',
		borderRadius: 4,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export { Input };
