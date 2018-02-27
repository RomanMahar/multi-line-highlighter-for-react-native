import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { Button, Card, CardSection, Input, HighlightText, Spinner } from './Common';

class HighlightContent extends Component {

	render() {
		const Text1 = 'This is a string of text that is stored in the Text1 variable.';
		const Text2 = 'Whereas this is the Text2 var.';
		const TextAll = Text1 + ' ' + Text2 + ' It is all eventually rendered by the TextAll var';
		const AdvText = 'Prepare for the adventure of a lifetime.'
		return (

				<ImageBackground
					style={{ bottom: 0, height: 800 }}
					source={{ uri: 'https://lh3.googleusercontent.com/-p7DmqVANC7d6yrD82N3ITAkaxh56HhVDncTRyNwi5TlY17JgmqST3HHRYXRCHSEtZOTN9dbRt1AriYIb_YaU_YLyueAmZpbnwekZoUGG4AWlK1Oa3xWjlrMxQcyHsBc7sgwO-2jtvgXAndB5A8l_l-M5lGoIzOEXjj1YT6EInpIXzgg0YrAkb_KJ89VGvJ1jiFkj9ELnnx_25N3fZYxXhEi0Lcxka53zoZnnmYdeuO0-mwdqxfW33KGTITxEOGF4qVu0q7kVh73ohIoZvcP0G7FCon5uGaGu8P9ZmsNyUWr61lpzCJiOHntVs_3OGsD3-NGEzGCRd59fi87jZjfZGjNkPfYB4nxC5HaUGR2U5mShbwtt6bXNSnHkoLMw6GFrYjLiIQ2NPIVzu9bbj56AplRRMHTYLPvyrSnVHiPZk2EjynvT9MHrGD_0Q2WFiZXr6ftTOWfo5W3TwZJu5LXLoi5X2oqmI6yIFvSQ-Oas7k4UR9cjebzmVENc6rinlKuATOqM1AHSB9sBsDswcrJ_UuDu7-MfrdhNnfWI8IDFdFR3q2Ps8E0G5KMd5j1TIbTRiZ0u8iuLgWYZBttLdPqjNohG1JDq_sF4qY58GsJ=w984-h1474-no' }}
				>
					<View style={{ paddingLeft: 8, top: 80 }}>
						<HighlightText
							splitOn={25}
							fontSize={32}
							marginTop={6}
							color={'#f9f9ff'}
							backgroundColor={'#4F0A72'}
						>
					{/* Can only render one variable or one string. 
					Trying to render more will break functionality */}
							{TextAll}
						</HighlightText>
					</View>
				</ImageBackground>
		);
	}
}

const styles = {
	errorMessageStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: '#e73042'
	}
}

export default HighlightContent;
