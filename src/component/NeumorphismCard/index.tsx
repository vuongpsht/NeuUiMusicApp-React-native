import React, {FunctionComponent, useCallback} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {dimensions} from 'themes/baseDimentions';
import {NeumorphismButton} from '../NeumorphismButton';
import {basicStyle} from 'themes/basic.style';
import {playlistType} from '../../typing/playlist.type';
import {playlistController} from '../../store/PlaylistController';
import _ from 'lodash';
import {useNavigation} from 'react-navigation-hooks';

interface NeumorphismCardProps {}
export const NeumorphismCard: FunctionComponent<
  NeumorphismCardProps
> = ({}) => {
  const {navigate} = useNavigation();
  const playlist: playlistType = {
    name: 'Favorites',
    createdCount: 365,
    type: 'Songs',
  };
  const slide = new Animated.Value(0);
  const act = Animated.timing(slide, {
    toValue: 1,
    duration: 200,
    useNativeDriver: true,
  });
  const translateX = slide.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 400],
  });
  const handleNavigate = useCallback(
    _.debounce(() => {
      navigate('PlaylistScreen');
    }, 600),
    [],
  );
  const _onPress = () => {
    act.start(() => {
      playlistController.currentPlaylist = playlist;
      handleNavigate();
    });
  };
  return (
    <Animated.View
      style={{
        transform: [{translateX}],
      }}>
      <TouchableWithoutFeedback onPress={() => _onPress()}>
        <View style={styles.containerWrapper}>
          <LinearGradient
            style={styles.container}
            start={{
              x: 0,
              y: 0,
            }}
            end={{
              x: 1,
              y: 1,
            }}
            colors={['#2A2D32', '#1D2022']}>
            <View style={styles.contentWrapper}>
              <NeumorphismButton
                zoomColor={'#272A2E'}
                iconName={'heart'}
                iconColor={'#D04A44'}
                disabled={true}
              />
              <View style={styles.infoWrapper}>
                {/**
                 *@name_and_author
                 */}
                <View>
                  <Text style={basicStyle.title}>Favorites</Text>
                  <Text style={basicStyle.text}>VuongPSHT</Text>
                </View>
                {/**
                 *@playlist_detail
                 */}
                <View>
                  <Text style={basicStyle.title}>365</Text>
                  <Text style={basicStyle.text}>Songs</Text>
                </View>
              </View>
            </View>
          </LinearGradient>
          <View style={styles.topShadow} />
          <View style={styles.bottomShadow} />
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  containerWrapper: {
    marginVertical: dimensions.spacing.normal,
    backgroundColor: 'black',
    borderRadius: dimensions.spacing.bigger,
  },
  container: {
    width: dimensions.component.width.big,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: dimensions.spacing.small,
    borderRadius: dimensions.spacing.bigger,
    zIndex: 1,
  },
  contentWrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#272A2E',
    borderRadius: dimensions.spacing.bigger,
    padding: dimensions.spacing.bigger,
    justifyContent: 'space-between',
  },
  topShadow: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    zIndex: -1,
    shadowColor: '#ffffff',
    shadowOffset: {
      width: -2,
      height: -2,
    },
    borderRadius: dimensions.spacing.bigger,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    backgroundColor: '#2C2F35',
    elevation: 5,
  },
  bottomShadow: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    zIndex: -1,
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    borderRadius: dimensions.spacing.bigger,
    shadowOpacity: 0.4,
    shadowRadius: 8,
    backgroundColor: '#2C2F35',
    elevation: 5,
  },
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
