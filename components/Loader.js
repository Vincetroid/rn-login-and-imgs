import React from 'react';
import { ActivityIndicator, View, StyleSheet, Dimensions, Text } from 'react-native';
import Toast from 'react-native-simple-toast';

const {height} = Dimensions.get('window');

export default class PreLoader extends React.Component {
	render() {
		return (
			<View style={styles.preloader}>
				<ActivityIndicator 
					size="large"
					color="#00f"
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	preloader: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: height,
	},
});