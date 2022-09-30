import React from 'react';
import styled, { css } from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

type ButtonProps = {
  title: string;
  onPress?: () => void;
  showLoading?: boolean;
};

const Button = ({ title, onPress, showLoading }: ButtonProps) => {
  return (
    <StyledLoginButton onPress={onPress}>
      <StyledText>{title}</StyledText>
      <StyledActivityIndicator>
        {showLoading && <ActivityIndicator size='small' color='#AB2680' />}
      </StyledActivityIndicator>
    </StyledLoginButton>
  );
};

const StyledLoginButton = styled.TouchableOpacity`
  width: 85px;
  height: 36px;
  align-self: center;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  border-radius: 44px;
  background-color: ${({ theme }) => theme.colors.white};
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
