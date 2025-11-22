// components/Text.tsx
import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';

type TextProps = RNTextProps & {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  weight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  align?: 'left' | 'center' | 'right' | 'justify';
};

const sizeMap = {
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
};

export const Text: React.FC<TextProps> = ({
  children,
  size = 'md',
  color = '#000',
  weight = 'normal',
  align = 'left',
  style,
  ...props
}) => {
  return (
    <RNText
      style={[{ fontSize: sizeMap[size], color, fontWeight: weight, textAlign: align }, style]}
      {...props}
    >
      {children}
    </RNText>
  );
};