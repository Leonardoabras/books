import React from 'react';
import styled from 'styled-components/native';

import { TextProps } from 'react-native';

import fonts, { FontType } from '@/config/styles/fonts';
import colors, { ColorType } from '@/config/styles/colors';

type TextComponentProps = TextProps & {
  font?: keyof FontType;
  color?: keyof ColorType;
  size?: number;
  children: React.ReactNode;
};

const Text = ({ children, ...rest }: TextComponentProps) => {
  return <StyledText {...rest}>{children}</StyledText>;
};

const StyledText = styled.Text<TextComponentProps>`
  font-family: ${({ font = 'Heebo_Regular' }) => fonts[font]};
  color: ${({ color = 'black' }) => colors[color]};
  font-size: ${({ size = 12 }) => size}px;
`;

export default Text;
