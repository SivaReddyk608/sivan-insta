import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Stories from './Stories';
// import { Camera } from 'expo-camera';
import Article from './Article';
import data from './data';
import Constants from 'expo-constants'

const INSTAGRAM_LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1600px-Instagram_logo.svg.png?20160616034027";

export default function Instagram() {

    // const [showcamera, setShowCamera] = useState(false);
    // const [cameraType, setCameratype] = useState(Camera.Constants.Type.back)

    function renderItem({ item, index }) {
        if (index === 0) {
            return (
                <>
                    <View style={styles.stories}>
                        <Stories stories={data.stories} profile={data.profile} />
                    </View>
                    <Article item={item} />
                </>
            );
        } else {
            return <Article item={item} />
        }
    }

    console.log('Data:', data);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            <View style={styles.header}>
                <TouchableOpacity>
                    <Feather name="camera" size={24}
                    // onPress={()=>{
                    //     setShowCamera(!setShowCamera);
                    //     setCameratype(cameraType === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)
                    // }}
                    />
                </TouchableOpacity>
                <Image source={{ uri: INSTAGRAM_LOGO }} style={styles.logo} />
                <TouchableOpacity>
                    <Feather name="send" size={24} />
                </TouchableOpacity>
            </View>

            <View style={{ height: 100, width: '100%' }}>
                <FlatList
                    data={data.stories}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={{ height: 500, width: '100%' }}>
                <FlatList
                    data={data.articles}
                    renderItem={({ item }) => <Article item={item} />}
                    keyExtractor={(item) => item.id.toString()}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            {/* {
                showcamera && (
                    <Camera style={styles.camera} type={cameraType}>
                        <View style={styles.camraContainer}>
                            <TouchableOpacity>
                                <Feather name="X" size={24} color="white"/>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                )
            } */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.StatusBarHeight
    },
    header: {
        borderBottomWidth: 1,
        borderBottomColor: '#dbdbdb',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 80,
    },
    logo: {
        flex: 1,
        width: 100,
        height: 80,
    },
    stories: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#dbdbdb',
        height: 104,
        padding: 10,
        backgroundColor: 'fafafa'
    },
    profile: {
        backgroundColor: 'blue',
        // height: 100,
    }
});
