import React, {FunctionComponent} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {dimensions} from 'themes/baseDimentions';
import {colors} from 'themes/colors';

interface NeumorphismButtonProps {
  onPress?: () => void;
  iconName?: string; // FontAwesome5 only
  iconColor?: string;
  zoomColor?: string;
  disabled?: boolean;
}

export const NeumorphismButton: FunctionComponent<NeumorphismButtonProps> = ({
  onPress,
  iconColor,
  iconName,
  zoomColor,
  disabled,
}) => {
  /**
   * @Animated_declare
   */

  // root anim value
  const x = new Animated.Value(0);

  // background color inside ring will interpolated
  const bgColorInside = x.interpolate({
    inputRange: [0, 1],
    outputRange: ['#24272B', zoomColor ? zoomColor : colors.defaultColor],
  });

  // background color middle ring will interpolated
  const bgColorMiddle = x.interpolate({
    inputRange: [0, 1],
    outputRange: ['#2C2F35', zoomColor ? zoomColor : colors.defaultColor],
  });

  // action when press in
  const actIn = Animated.timing(x, {
    toValue: 1,
    duration: 200,
    easing: Easing.linear,
  });

  // action when press out
  const actOut = Animated.timing(x, {
    toValue: 0,
    duration: 200,
    easing: Easing.linear,
  });

  // inside ring diameter will be scale down when press
  const insideDiameter = x.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  // middle ring diameter will be scale up when press
  const middleDiameter = x.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.6],
  });

  /**
   * @Main_render
   */
  return (
    <>
      <TouchableOpacity
        {...{onPress, disabled}}
        style={styles.container}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        activeOpacity={1}
        onPressIn={() => actIn.start()}
        onPressOut={() => actOut.start()}>
        <View style={styles.container}>
          <Animated.View
            style={[
              styles.middleRing,
              {
                backgroundColor: bgColorMiddle,
                transform: [
                  {
                    scale: middleDiameter,
                  },
                ],
              },
            ]}>
            <Animated.View
              style={[
                styles.inside,
                {
                  backgroundColor: bgColorInside,
                  transform: [
                    {
                      scale: insideDiameter,
                    },
                  ],
                },
              ]}
            />
            <Icon
              style={{position: 'absolute'}}
              size={15}
              name={iconName ? iconName : 'plus'}
              color={iconColor ? iconColor : '#6b6d6f'}
            />
          </Animated.View>
        </View>
        <Animated.View style={[styles.coverRingTop]} />
        <Animated.View style={[styles.coverRingBottom]} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: dimensions.spacing.bigger * 2 - 4,
    height: dimensions.spacing.bigger * 2 - 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverRingTop: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
    borderRadius: dimensions.spacing.bigger * 2 + 4,
    shadowOffset: {
      width: -1,
      height: -1,
    },
    position: 'absolute',
    shadowColor: '#ffffff',
    shadowRadius: 4,
    backgroundColor: '#2C2F35',
    shadowOpacity: 0.5,
    elevation: 5,
  },
  coverRingBottom: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
    borderRadius: dimensions.spacing.bigger * 2 + 4,
    shadowColor: '#000000',
    position: 'absolute',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    backgroundColor: '#2C2F35',
    elevation: 5,
  },
  middleRing: {
    width: dimensions.spacing.bigger + 15,
    height: dimensions.spacing.bigger + 15,
    borderRadius: dimensions.spacing.bigger * 2 + 4,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  inside: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: dimensions.spacing.bigger * 2,
    width: dimensions.spacing.bigger + 10,
    height: dimensions.spacing.bigger + 10,
  },
});
