import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {basicStyle} from 'themes/basic.style';
import {dimensions} from 'themes/baseDimentions';
import Icon from 'react-native-vector-icons/FontAwesome5';
export const AudioController: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.detailWrapper}>
        <Text style={basicStyle.title}>Con trai cung</Text>
        <Text style={basicStyle.text}>K-icm ft. Bray</Text>
      </View>
      <View style={styles.controllerWrapper}>
        <TouchableWithoutFeedback>
          <Icon color={'white'} name={'backward'} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.playButton}>
            <Icon size={20} color={'white'} name={'play'} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Icon color={'white'} name={'forward'} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#151719',
    height: 100,
    position: 'absolute',
    bottom: 0,
    width: dimensions.screenWidth,
    padding: dimensions.spacing.bigger,
    flexDirection: 'row',
  },
  detailWrapper: {
    flex: 3,
  },
  controllerWrapper: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  playButton: {
    width: dimensions.spacing.bigger * 2,
    height: dimensions.spacing.bigger * 2,
    backgroundColor: '#CE5328',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: dimensions.spacing.bigger * 2,
    borderWidth: 4,
    borderColor: '#ff6d2e',
    shadowColor: '#ffffff',
    shadowOffset: {
      width: -3,
      height: -3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
});
