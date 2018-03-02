import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
	return (
		<View style={styles.containerStyle}>
			{ props.children }
		</View>
	);
};

const marginLR = 30;

const styles = {
	containerStyle: {
		backgroundColor: 'rgba(255, 255, 255, 0.9)',
		borderWidth: 1,
		borderRadius: 4,
		borderColor: 'rgba(255, 255, 255, 1)',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		marginLeft: marginLR,
		marginRight: marginLR,
		marginTop: 10
	}
};

export { Card };
