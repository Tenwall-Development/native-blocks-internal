import React from 'react';
import { withStyle } from './hoc/WithStyle';
import {
  Text,
  type DimensionValue,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { HStack } from '../../src/components/primatives/Stack';

export type ProgressBarProps = {
  backgroundStyle?: ViewStyle;
  barStyle?: ViewStyle;
  textStyle?: TextStyle;
  height?: DimensionValue;
  progress: Number;
};

export const ProgessBar = (props: ProgressBarProps) => {
  return (
    <HStack
      style={props.backgroundStyle}
      height={props.height}
      flexMain={props.height === undefined}
      justifyContent="flex-start"
    >
      <HStack
        style={props.barStyle}
        width={`${props.progress}%` as DimensionValue}
        flexMain={false}
        justifyContent="flex-start"
      >
        <Text style={props.textStyle}>{`${props.progress}%`}</Text>
      </HStack>
    </HStack>
  );
};

const makeStyle = (theme: any) => {
  return {
    backgroundStyle: {
      backgroundColor: theme.primary,
    },
    barStyle: {
      backgroundColor: theme.secondary,
    },
    textStyle: {
      color: theme.primary,
    },
  };
};

export const StyledProgessBar = withStyle<ProgressBarProps>(
  ProgessBar,
  makeStyle
);
