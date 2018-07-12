/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView,} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Hello world</Text>
                </View>

                <ScrollView contentContainerStyle={styles.repolist}>
                    <View style={styles.repo}></View>
                    <View style={styles.repo}></View>
                    <View style={styles.repo}></View>
                    <View style={styles.repo}></View>
                    <View style={styles.repo}></View>
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    instructions: {
        textAlign: 'center',
        color: '#333333',
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
