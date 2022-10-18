import React from 'react';
import styled, { css } from 'styled-components/native';
import { ActivityIndicator, ButtonProps } from 'react-native';

import colors, { ColorType } from '@/config/styles/colors';

type ButtonAddProps = ButtonProps & {
  color?: keyof ColorType;
  title: string;
  onPress?: () => void;
  showLoading?: boolean;
};

const Button = ({ title, onPress, showLoading, ...rest }: ButtonAddProps) => {
  return (
    <StyledLoginButton {...rest} onPress={onPress}>
      <StyledText>{title}</StyledText>
      <StyledActivityIndicator>
        {showLoading && <ActivityIndicator size='small' color='#AB2680' />}
      </StyledActivityIndicator>
    </StyledLoginButton>
  );
};

const StyledLoginButton = styled.TouchableOpacity<ButtonAddProps>`
  width: 85px;
  height: 36px;
  align-self: center;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  border-radius: 44px;
  background-color: ${({ color = 'white' }) => colors[color]};
`;

const StyledText = styled.Text`
  align-self: center;
  font-size: 16px;
  font-weight: bold;

  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.Heebo_Bold};
  `}
`;

const StyledActivityIndicator = styled.View``;
export default Button;
