import React, {FunctionComponent} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {colors} from 'themes/colors';
import {NeumorphismItem} from 'component/NeumorphismItem';
import {SongType} from '../../typing/song.type';

const fakeDataList: SongType[] = [
  {
    name: 'Dance Monkey',
    author: 'Tone and I',
    id: 'song1',
    position: 1,
  },
  {
    name: 'Con trai cưng',
    author: 'Bray ft. K-icm',
    id: 'song2',
    position: 2,
  },
  {
    name: 'Ok',
    author: 'Binz',
    id: 'song3',
    position: 3,
  },
  {
    name: 'Bài này chill phết',
    author: 'Đen',
    id: 'song4',
    position: 4,
  },
];
export const PlaylistScreen: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <FlatList<SongType>
        key={'SongList'}
        removeClippedSubviews={true}
        keyExtractor={item => item.id}
        data={fakeDataList}
        renderItem={({item}) => <NeumorphismItem {...{item}} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.defaultColor,
  },
});
