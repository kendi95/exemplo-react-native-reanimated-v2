import React from 'react';
import {View} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';

// import { Container } from './styles';

const Drag: React.FC = () => {
  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(event, context) {
      context.posX = positionX.value;
      context.posY = positionY.value;
    },
    onActive(event, context) {
      positionX.value = context.posX + event.translationX;
      positionY.value = context.posY + event.translationY;
    },
    onEnd() {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    },
  });

  const positionStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: positionX.value}, {translateY: positionY.value}],
    };
  });

  return (
    <View style={{flex: 1}}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            {width: 150, height: 150, backgroundColor: 'red'},
            positionStyle,
          ]}
        />
      </PanGestureHandler>
    </View>
  );
};

export default Drag;
