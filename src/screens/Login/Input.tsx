import React from 'react';
import styled, { css } from 'styled-components/native';

import { TextInputProps } from 'react-native';

import Button from '@/components/Button';

type InputLoginProps = TextInputProps & {
  title: string;
  showButton?: boolean;
  marginBottom?: number;
  onSubmit?: () => void;
  textError?: string;
};

const Input = ({
  title,
  showButton,
  marginBottom,
  onSubmit,
  textError,
  ...rest
}: InputLoginProps) => {
  const marginWithError = !!textError && marginBottom ? marginBottom + 4 : marginBottom;
  return (
    <StyledContainer marginBottom={marginWithError}>
      <StyledView>
        <StyledInputView>
          <StyledInputTitle>{title}</StyledInputTitle>
          <StyledTextInput {...rest} />
        </StyledInputView>
        {showButton && <Button title='Entrar' onPress={onSubmit} />}
      </StyledView>
      {!!textError && <StyledTextError>{textError}</StyledTextError>}
    </StyledContainer>
  );
};

const StyledContainer = styled.View<{ marginBottom?: number }>`
  margin-bottom: ${({ marginBottom }) => marginBottom || 0}px;
`;

const StyledView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 16px;
  border-radius: 4px;

  ${({ theme }) => css`
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
const StyledTextError = styled.Text<{ textError?: boolean }>`
  font-size: 14px;
  margin-top: 4px;
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.Heebo_Bold};
  `}
  font-weight: bold;
`;

export default Input;
