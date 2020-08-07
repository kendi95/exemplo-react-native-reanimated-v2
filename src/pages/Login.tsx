import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
  sequence,
} from 'react-native-reanimated';

const Login: React.FC = () => {
  const titlePosition = useSharedValue(100);
  const imagePosition = useSharedValue(-30);

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: titlePosition.value}],
      opacity: interpolate(
        titlePosition.value,
        [100, 0],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  });

  const heroStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: imagePosition.value}],
    };
  });

  useEffect(() => {
    imagePosition.value = withTiming(0, {duration: 700}, () => {
      titlePosition.value = sequence(
        withTiming(0, {
          duration: 1000,
          easing: Easing.bounce,
        }),
        withTiming(-300, {
          duration: 500,
          easing: Easing.bounce,
        }),
      );
    });
  }, []);

  return (
    <>
      <StatusBar translucent backgroundColor="#13131A" />
      <View style={styles.container}>
        <Animated.Image
          style={[styles.hero, heroStyle]}
          source={require('../assets/hero.png')}
        />

        <Animated.Text style={[styles.text, titleStyle]}>
          Bem vindo ao app
        </Animated.Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#13131A',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  hero: {
    width: 288,
    height: 200,
    marginBottom: 40,
  },
});

export default Login;
