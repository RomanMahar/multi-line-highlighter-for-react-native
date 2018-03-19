import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { Button, Card, CardSection, Input, MultiLine, Spinner } from './Common';
import { AT_LOGO_IMG, AT_BG } from '../../assets/images';

class HighlightContent extends Component {
	render() {
		const Text1 = 'This is a string of text is the Text1 variable.';
		const Text2 = 'This is the Text2 var.';
		const TextAll = Text1 + ' ' + Text2 + ' It is all concatinated in the TextAll var';
		const AdvText = 'Prepare for the adventure of a lifetime.';
		const AT = () => 'Adventure Time Travel Group'.toUpperCase();
		const DiscText = () => {
			return (
				<Text>
					*Not affiliated with Adventure
					<Text style={{ textDecorationLine: 'underline' }}> Time-Travel </Text>
					Group
				</Text>				
				);
			};
		return (
			<View>
				<ImageBackground
					style={{ height: 800 }}
					source={AT_BG}
				>
					<View style={{ paddingLeft: 30, paddingRight: 30, top: 60 }}>
						<MultiLine
							fontFamily={'Roboto'}
							splitOn={18}
							fontSize={38}
							portProps={{ marginTop: 8 }}
							shadow
							iceBlue
							textAlign={'left'}
						>
							{/*backgroundColor={'#ef4136'}*/}
							{AdvText}
						</MultiLine>
					</View>
					<View style={{ bottom: -140 }}>
						<Card>
							<CardSection style={{ alignSelf: 'center' }}>
								<View
									style={{
										flex: 1,
										flexDirection: 'column',
										justifyContent: 'space-between',
										alignItems: 'center'
									}}
								> 
									<Image
										ImageResizeMode={'contain'}
										style={{ 
											width: 100,
											height: 100,
											marginTop: -12,
											marginBottom: -12 }}
										source={AT_LOGO_IMG}
									/>
									<View>
										<Text style={{ fontFamily: 'Roboto', fontWeight: '300' }}>
											<AT />
										</Text>
									</View>
									<View>
										<Text 
											style={{ 
											fontStyle: 'italic', 
											fontSize: 10, 
											fontFamily: 'Roboto', 
											fontWeight: '400' }}
										>
											<DiscText />
										</Text>
									</View>
								</View>
							</CardSection>
							<CardSection>
								<Input
									placeholder="username@emailhost.com"
									label={'EMAIL'}
								/>
							</CardSection>
							<CardSection>
								<Input
									placeholder="password"
									label="PASSWORD"
								/>
							</CardSection>
							<CardSection borderBottomWidth={-1}>
								<Button>
									LOG IN
								</Button>
							</CardSection>
						</Card>
						<View style={{ paddingLeft: 30, paddingRight: 30, marginTop: 8 }}>
							<MultiLine
								fontFamily={'Roboto'}
								splitOn={48}
								fontSize={14}
								marginTop={2}
								portProps={{ backgroundColor: '#FF0' }}
								textAlign={'right'}
								shadow
								honeybee
							>
								Photo credit: Bryan Minear
							</MultiLine>
						</View>
					</View>

				</ImageBackground>
			</View>
		);
	}
}

export default HighlightContent;
