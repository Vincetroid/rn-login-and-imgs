import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

const {height} = Dimensions.get('window');

export default LogoutScreen = ({ navigation }) => {

	useEffect(() => {
		setTimeout(()=>{
			navigation.navigate('Login');
		}, 1500);
	}, []);

	return (
		<View style={styles.wrapper}>
			<Text style={styles.text}>MANIAK</Text>
			<Text style={styles.text}>Thanks for using our app!</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: height,
		backgroundColor: 'black'
	},
	text: {
		color: 'white',
		fontSize: 22,
		marginBottom: 20
	}
});