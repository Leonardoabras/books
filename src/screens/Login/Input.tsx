import React from 'react';
import styled, { css } from 'styled-components/native';

import { TextInputProps } from 'react-native';

type InputLoginProps = TextInputProps & {
  title: string;
  showButton?: boolean;
  marginBottom?: number;
};

const Input = ({ title, showButton, marginBottom, ...rest }: InputLoginProps) => {
  return (
    <StyledView marginBottom={marginBottom}>
      <StyledInputView>
        <StyledInputTitle>{title}</StyledInputTitle>
        <StyledTextInput {...rest} />
      </StyledInputView>
      {showButton && (
        <StyledLoginButton>
          <StyledText>Entrar</StyledText>
        </StyledLoginButton>
      )}
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
  color: ${({ theme }) => theme.colors.grayText};
  opacity: 0.5;
  font-size: 16px;
  font-family: 'Heebo-Regular';
`;
const StyledTextInput = styled.TextInput`
  font-family: 'Heebo-Regular';
  font-size: 16px;
  margin-top: 5px;
  color: white;
  padding: 0;
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
  font-family: 'Heebo-Bold';
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export default Input;
