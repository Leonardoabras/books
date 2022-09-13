import React from 'react';
import { ImageBackground } from 'react-native';

import styled from 'styled-components/native';

import backgroundImage from '@/assets/images/background.png';

const LoginScreen = () => {
  return (
    <StyledBackground source={backgroundImage}>
      <StyledContentLogo>
        <Logo />
      </StyledContentLogo>
      <StyledView>
        <StyledInputTitle>{'E-mail'}</StyledInputTitle>
        <StyledTextInput keyboardType='email-address' placeholder='Enter your email' />
      </StyledView>
      <StyledView>
        <StyledRow>
          <StyledColumn>
            <StyledInputTitle>{'Password'}</StyledInputTitle>
            <StyledTextInput secureTextEntry={true} placeholder='Enter your password' />
          </StyledColumn>
          <StyledLoginButton>
            <StyledText>{'Entrar'}</StyledText>
          </StyledLoginButton>
        </StyledRow>
      </StyledView>
    </StyledBackground>
  );
};

const StyledBackground = styled(ImageBackground)`
  padding: 0px 15px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledContentLogo = styled.View`
  width: 100%;
  margin-bottom: 50px;
`;

const StyledTextInput = styled.TextInput`
  height: 24px;
  margin-top: 5px;
  padding: 0px;
  color: white;
`;
const StyledView = styled.View`
  width: 100%;
  margin-bottom: 15px;
  border-radius: 4px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
`;

const StyledInputTitle = styled.Text`
  color: ${({ theme }) => theme.colors.grayText};
  opacity: 0.5;
`;

const StyledRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledColumn = styled.View`
  width: 50%;
  flex-direction: column;
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
  color: ${({ theme }) => theme.colors.primary};
`;

export default LoginScreen;
