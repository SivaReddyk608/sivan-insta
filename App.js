import React from 'react';
import {View} from 'react-native';
import data from './instagram-feed/data';
import Instagram from './instagram-feed/InstagramFeed';
import Stories from './instagram-feed/Stories';

export default function App() {
  return (
    <View>
      <Instagram />
      {/* <Stories
        stories={data.stories}
        profile={data.profile}
      /> */}
    </View>
  );
}
