import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

// import { Container } from './styles';

const Scroll: React.FC = () => {
  const scrollY = useSharedValue(0);
  const scrolHandler = useAnimatedScrollHandler((event: any) => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 180],
        [300, 120],
        Extrapolate.CLAMP,
      ),
    };
  });

  return (
    <View>
      <View style={[styles.header, headerStyle]}>
        <Image
          style={styles.avatar}
          source={{uri: 'https://github.com/kendi95.png'}}
        />

        <Text style={styles.name}>Alisson Kohatsu</Text>
      </View>

      <Animated.ScrollView
        contentContainerStyle={{paddingTop: 300}}
        scrollEventThrottle={16}
        onScroll={scrolHandler}>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 300,
    backgroundColor: '#6C63FF',
    paddingVertical: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',

    position: 'absolute',
    overflow: 'hidden',
    left: 0,
    right: 0,
    top: 0,
  },
  listItem: {
    padding: 20,
    fontSize: 18,
  },
  avatar: {
    height: 140,
    width: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#fff',
  },
});

export default Scroll;
