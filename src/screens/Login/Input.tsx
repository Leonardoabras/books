import React from 'react';
import styled, { css } from 'styled-components/native';

import { TextInputProps } from 'react-native';

import Button from '@/components/Button';

type InputLoginProps = TextInputProps & {
  title: string;
  showButton?: boolean;
  marginBottom?: number;
  onSubmit?: () => void;
};

const Input = ({ title, showButton, marginBottom, onSubmit, ...rest }: InputLoginProps) => {
  return (
    <StyledView marginBottom={marginBottom}>
      <StyledInputView>
        <StyledInputTitle>{title}</StyledInputTitle>
        <StyledTextInput {...rest} />
      </StyledInputView>
      {showButton && <Button title='Entrar' onPress={onSubmit} />}
    </StyledView>
  );
};

const StyledView = styled.View<{ marginBottom?: number }>`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 16px;
  border-radius: 4px;

  ${({ theme, marginBottom }) => css`
    margin-bottom: ${marginBottom || 0}px;
    background-color: ${theme.colors.inputBackground};
  `}
`;
const StyledInputView = styled.View``;

const StyledInputTitle = styled.Text`
  opacity: 0.5;
  font-size: 16px;

  ${({ theme }) => css`
    color: ${theme.colors.grayText};
    font-family: ${theme.fonts.Heebo_Regular};
  `}
`;
const StyledTextInput = styled.TextInput`
  font-size: 16px;
  margin-top: 5px;
  color: white;
  padding: 0;
  font-family: ${({ theme }) => theme.fonts.Heebo_Regular};
`;

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

export default Input;
