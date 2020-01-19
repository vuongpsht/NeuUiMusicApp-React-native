import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {dimensions} from 'themes/baseDimentions';
import {NeumorphismButton} from '../NeumorphismButton';
export const NeumorphismCard: FunctionComponent = () => {
  return (
    <>
      <TouchableWithoutFeedback>
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
                  <Text style={styles.title}>Favorites</Text>
                  <Text style={styles.text}>VuongPSHT</Text>
                </View>
                {/**
                 *@playlist_detail
                 */}
                <View>
                  <Text style={styles.title}>365</Text>
                  <Text style={styles.text}>Songs</Text>
                </View>
              </View>
            </View>
          </LinearGradient>
          <View style={styles.topShadow} />
          <View style={styles.bottomShadow} />
        </View>
      </TouchableWithoutFeedback>
    </>
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
