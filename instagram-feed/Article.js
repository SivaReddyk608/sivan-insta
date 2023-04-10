import data from './data';
import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

function getIntialState(item) {
    const article = data.articles.find(x => x.id === item.id);
    return {
        likes:article.likes,
        commentCount:article.commentCount
    }
}

export default function Article({ item }) {
    const intialState = getIntialState(item);
    const [likes,  setLike] = useState(intialState.likes)
    const [commentCount, setCommentCount] = useState(intialState.commentCount);
    const [comment, setComment] = useState('');
    const [isLiked, setIsLiked] = useState(false);

    useEffect(()=>{
        console.log(comment);
    },[comment])

    function handleCompment() {
        Alert.prompt("Leave a comment", "", text => {
            setComment(text);
            setCommentCount(prevCommentCount => prevCommentCount + 1)
        })
    }
    return (
        <View style={styles.article}>
            <View style={styles.header}>
                <View style={styles.user}>
                    <TouchableOpacity>
                        <Image source={data.profile.avatar} style={styles.avatar} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text numberOfLines={1} style={styles.name}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Feather name="more-horizontal" size={16} />
                </TouchableOpacity>
            </View>
            <Image source={item.image} style={styles.image} />
            <View style={styles.action}>
                <View style={styles.actionLeft}>
                    <TouchableOpacity style={styles.actionButton}
                    onPress= {()=>{
                        setIsLiked=(!isLiked);
                        if(isLiked){
                            setLike(prevLikes => prevLikes - 1);
                        } else {
                            setLike(prevLikes => prevLikes + 1);
                        }
                    }}>
                        <Feather name="heart" color={isLiked ? "red" : "black"}size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Feather name="message-circle" size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Feather name="send" size={24} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.actionButton}>
                    <Feather name="bookmark" size={24} />
                </TouchableOpacity>
            </View>
            <View style={styles.info}>
                <Text style={styles.likes}>{item.likes} likes</Text>
                <Text style={styles.commentCount}>View all {commentCount} comments</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    article: {
        marginBottom: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 14,
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    name: {
        textAlign: 'center',
        lineHeight: 14,
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 12,
    },
    image: {
        width: '100%',
        height: null,
        aspectRatio: 1,
        resizeMode: 'contain',
        backgroundColor: 'red',
        margin: 0,
        padding: 0,
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginTop: 10,
    },
    actionLeft: {
        flexDirection: 'row',
    },
    actionButton: {
        marginRight: 16,
    },
    info: {
        flexDirection: 'column',
        paddingHorizontal: 16,
        marginTop: 10,
    },
    likes: {
        fontWeight: 'bold',
    },
    commentCount: {
        color: '#8e8e8e',
    },
});
