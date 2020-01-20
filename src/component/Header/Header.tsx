import React, {FunctionComponent, useEffect, useState} from 'react';
import {StyleSheet, Text, View, Animated, Easing} from 'react-native';
import {dimensions} from 'themes/baseDimentions';
import {NeumorphismBottom} from '../Neumorphism/NeumorphismBottom';
import {NeumorphismTop} from '../Neumorphism/NeumorphismTop';
import {NeumorphismButton} from '../NeumorphismButton';
import {colors} from 'themes/colors';
import {basicStyle} from 'themes/basic.style';
import {playlistType} from '../../typing/playlist.type';
import {playlistController} from '../../store/PlaylistController';
export const Header: FunctionComponent = ({}) => {
  /**
   * @State
   */

  // current playlist
  const [playlist, setPlaylist] = useState<playlistType>(
    playlistController.currentPlaylist,
  );

  /**
   * @animated_declare
   */

  // main animated value
  const animValue = new Animated.Value(0);

  // main actions
  const act = Animated.timing(animValue, {
    toValue: 1,
    duration: 2000,
    useNativeDriver: true,
    easing: Easing.linear,
  });

  // this animated value was interpolated from main animated value.
  // use for translateX --> it make detail part slide in from left
  const slideFromLeft = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-500, 0],
  });

  // this animated value was interpolated from main animated value.
  // use for translateX --> make button part slide in from right
  const slideFromRight = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [500, 0],
  });

  /**
   * @Hooks
   */

  // start transition, do every time playlist change
  useEffect(() => {
    act.start();
  }, [playlist]);

  // init subscribe, listen from playlist controller store
  useEffect(() => {
    const playlistSubscribe = playlistController.currentPlaylistSubject.subscribe(
      setPlaylist,
    );
    return () => {
      playlistSubscribe.unsubscribe();
    };
  });

  /**
   * @main_render
   */

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Animated.View style={{transform: [{translateX: slideFromLeft}]}}>
          <Text style={basicStyle.title}>
            {playlist ? playlist.name : 'Playlists'}
          </Text>
          <Text style={basicStyle.text}>
            {playlist ? playlist.createdCount : 16}{' '}
            {playlist ? playlist.type : 'created playlists'}
          </Text>
        </Animated.View>
        <Animated.View style={{transform: [{translateX: slideFromRight}]}}>
          <NeumorphismButton />
        </Animated.View>
      </View>
      <NeumorphismBottom />
      <NeumorphismTop />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    borderBottomWidth: 1.5,
    borderBottomColor: '#24272B',
    width: dimensions.screenWidth,
    justifyContent: 'center',
    paddingHorizontal: dimensions.spacing.bigger,
    backgroundColor: colors.defaultColor,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
