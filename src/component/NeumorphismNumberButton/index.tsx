import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import {colors} from 'themes/colors';
import {dimensions} from 'themes/baseDimentions';
import {colors} from 'themes/colors';
import {basicStyle} from 'themes/basic.style';

interface NeumorphismNumberButtonProps {
  position: number;
}

export const Index: FunctionComponent<
  NeumorphismNumberButtonProps
> = ({position}) => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.boxShadowTop} />
        <View style={styles.boxShadowBottom} />
        <View style={styles.boxShadowInside}>
          <Text style={basicStyle.text}>{position}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: dimensions.spacing.bigger * 2,
    height: dimensions.spacing.bigger * 2,
    borderRadius: dimensions.spacing.bigger,
    borderColor: '#23262A',
    borderWidth: 1,
  },
  boxShadowTop: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
    borderRadius: dimensions.spacing.bigger * 2 + 4,
    shadowColor: '#959595',
    position: 'absolute',
    shadowOffset: {
      width: -1,
      height: -1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    backgroundColor: '#2C2F35',
    elevation: 5,
  },
  boxShadowBottom: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
    borderRadius: dimensions.spacing.bigger * 2 + 4,
    shadowColor: '#000000',
    position: 'absolute',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    backgroundColor: '#2C2F35',
    elevation: 5,
  },
  boxShadowInside: {
    zIndex: -1,
    borderRadius: dimensions.spacing.bigger * 2 + 4,
    shadowColor: '#000000',
    position: 'absolute',
    shadowOffset: {
      width: -1,
      height: -1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    backgroundColor: colors.defaultColor,
    elevation: 5,
    width: dimensions.spacing.bigger * 2 - 4,
    height: dimensions.spacing.bigger * 2 - 4,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
