import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Story({ avatar, name, isCreateStory = true, isSeen }) {
    return (
        <TouchableOpacity style={styles.user}>
            <View>
                <View
                    style={[
                        styles.avatarBorder, {
                            borderColor: isCreateStory
                                ? "transparent"
                                : isSeen
                                    ? "rgba(0,0,0,.0975)"
                                    : "#c73191",
                        }
                    ]}
                >
                    <Image source={avatar} style={styles.avatar} />
                    {isCreateStory && (
                        <View style={styles.plusIcon}>
                            <Feather name="plus" size={14} color="#fff" />
                        </View>
                    )}
                </View>
                <Text numberOfLines={1} style={styles.name}>{name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    user: {
        width: 80,
        paddingHorizontal: 4,
    },
    avatarBorder: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#fff',
        margin: 4,
        marginBottom: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    plusIcon: {
        overflow: 'hidden',
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: 20,
        height: 20,
        backgroundColor: 'blue',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        alignSelf: 'center',
        fontSize: 14,
        lineHeight: 20,
        color: 'gray',
        maxWidth: 70,
    },
    story: {
        textAlign: 'center',
        fontSize: 12,
        width: 90,
        height: 120,
        borderRadius: 10,
        marginRight: 10,
        justifyContent: 'space-between',
        overflow: 'hidden',
    },
    storyImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    storySeen: {
        position: 'absolute',
        top: 5,
        left: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 2,
    },
    storyName: {
        color: 'white',
        fontWeight: 'bold',
        margin: 5,
    },
});
