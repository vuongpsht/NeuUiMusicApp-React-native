import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from 'themes/colors';
import {NeumorphismNumberButton} from 'component/NeumorphismNumberButton';
import {dimensions} from 'themes/baseDimentions';
import {NeumorphismButton} from 'component/NeumorphismButton';
import {basicStyle} from 'themes/basic.style';
import {SongType} from '../../typing/song.type';

interface NeumorphismItemProps {
  item: SongType;
}

export const NeumorphismItem: FunctionComponent<NeumorphismItemProps> = ({
  item,
}) => {
  const {name, author} = item;
  return (
    <View style={styles.container}>
      <NeumorphismNumberButton />
      <View style={styles.songDetailWrapper}>
        <Text style={basicStyle.title}>{name}</Text>
        <Text style={basicStyle.text}>{author}</Text>
      </View>
      <NeumorphismButton iconName={'play'} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.defaultColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: dimensions.screenWidth,
    padding: dimensions.spacing.bigger,
    paddingHorizontal: dimensions.spacing.bigger * 2,
  },
  songDetailWrapper: {
    flex: 5,
  },
});
