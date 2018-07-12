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

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    state = {
      repos: [
          {
              id: 1,
              thumbnail: 'data:image/jpeg;base64,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',
              title: 'Dev Master',
              author: 'Lucas'
          },
          {
              id: 2,
              thumbnail: 'https://i.pinimg.com/originals/d3/da/7f/d3da7f50c7a2b41aa163861d4f3f8af0.jpg',
              title: 'Voltando com tudo',
              author: 'Lucas'
          }
      ]
    };


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Repositories</Text>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={styles.headerButton}>+</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView contentContainerStyle={styles.repolist}>
                    { this.state.repos.map(repo =>
                    <Repo key={repo.id} data={repo} />)}
                </ScrollView>

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
