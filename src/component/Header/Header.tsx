import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {dimensions} from 'themes/baseDimentions';
import {NeumorphismBottom} from '../Neumorphism/NeumorphismBottom';
import {NeumorphismTop} from '../Neumorphism/NeumorphismTop';
import {NeumorphismButton} from '../NeumorphismButton';
import {colors} from 'themes/colors'

export const Header: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Playlists</Text>
          <Text style={styles.text}>16 created playlists</Text>
        </View>
        <View>
          <NeumorphismButton />
        </View>
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
    backgroundColor: colors.defaultColor
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#e0e0e0',
    fontSize: 20,
    fontWeight: '500',
  },
  text: {
    color: '#7E7F81',
    fontSize: 12,
    fontWeight: '400',
    marginTop: dimensions.spacing.small,
  },
});
