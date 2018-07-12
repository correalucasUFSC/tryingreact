/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import Repo from './components/Repo';
import NewRepoModal from './components/NewRepoModal'

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
	'Double tap R on your keyboard to reload,\n' +
	'Shake or press menu button for dev menu',
});


type Props = {};
export default class App extends Component<Props> {

	state = {
		modalVisible: false,
		repos: [],
	};

	_addRepository = async (newRepoText) => {
		const repoCall = await fetch(`https://api.github.com/repos/${newRepoText}`);
		const response = await repoCall.json();

		const repository = {
			id: response.id,
			thumbnail: response.owner.avatar_url,
			title: response.name,
			author: response.owner.login,
		};

		this.setState({
			modalVisible: false,
			repos: [
				...this.state.repos,
				repository,
			],
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerText}>Repositories</Text>
					<TouchableOpacity onPress={() => this.setState({ modalVisible: true})}>
						<Text style={styles.headerButton}>+</Text>
					</TouchableOpacity>
				</View>
				<ScrollView contentContainerStyle={styles.repolist}>
					{ this.state.repos.map(repo =>
						<Repo key={repo.id} data={repo} />)}
				</ScrollView>
				<NewRepoModal onCancel={() => this.setState({ modalVisible: false})}
							  onAdd={this._addRepository}
							  visible={this.state.modalVisible}>

				</NewRepoModal>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333',
	},
	header: {
		height: 50,
		paddingTop: 20,
		backgroundColor: '#FFF',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: 20,
	},
	headerButton: {
		fontSize:24,
		fontWeight: 'bold',
		color: 'black',
	},
	headerText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'black',
	},
	instructions: {
		textAlign: 'center',
		color: '#333',
		marginBottom: 5,
	},
	repolist:{
		padding:20,
	},
	repo: {
		backgroundColor: '#FFF',
		height: 120,
		marginBottom:20,
		borderRadius: 5
	}
});
