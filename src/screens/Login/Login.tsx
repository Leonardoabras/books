import React from 'react';
import { ImageBackground } from 'react-native';

import styled from 'styled-components/native';

import backgroundImage from '@/assets/images/background.png';
import LogoImage from '@/assets/images/logo.svg';

import InputLogin from '@/screens/Login/Input';

const Login = () => {
  return (
    <StyledBackground source={backgroundImage}>
      <StyledContentLogo>
        <LogoImage />
      </StyledContentLogo>
      <StyledView>
        <InputLogin
          title='Email'
          marginBottom={16}
          keyboardType='email-address'
          placeholder='Digite o seu email'
        />
        <InputLogin title='Password' showButton secureTextEntry placeholder='Digite a sua senha' />
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
  margin-bottom: 50px;
`;

const StyledView = styled.View`
  align-self: stretch;
`;

export default Login;
