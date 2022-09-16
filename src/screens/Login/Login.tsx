import React from 'react';
import { ImageBackground } from 'react-native';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import styled from 'styled-components/native';

import backgroundImage from '@/assets/images/background.png';
import Header from '@/assets/images/header.svg';

import Input from '@/screens/Login/Input';

const schema = yup.object().shape({
  email: yup.string().email('Email Inválido').required('O e-mail é obrigatório'),
  password: yup.string().required('A senha é obrigatória')
});

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  function handleSignIn(data: any) {
    console.log(data);
  }

  return (
    <StyledBackground source={backgroundImage}>
      <StyledContentLogo>
        <Header height={40} />
      </StyledContentLogo>
      <StyledView>
        <Controller
          control={control}
          name='email'
          render={({ field: { value, onChange } }) => (
            <Input
              title='Email'
              marginBottom={16}
              keyboardType='email-address'
              placeholder='Digite o seu email'
              value={value}
              onChangeText={onChange}
              textError={errors?.email?.message as string}
            />
          )}
        />
        <Controller
          control={control}
          name='password'
          render={({ field: { value, onChange } }) => (
            <Input
              title='Password'
              showButton
              secureTextEntry
              placeholder='Digite a sua senha'
              value={value}
              onChangeText={onChange}
              onSubmit={handleSubmit(handleSignIn)}
              textError={errors?.password?.message as string}
            />
          )}
        />
      </StyledView>
    </StyledBackground>
  );
};

const StyledBackground = styled(ImageBackground)`
  padding: 0px 15px;
  flex: 1;
  justify-content: center;
`;

const StyledContentLogo = styled.View`
  margin-bottom: 48px;
`;

const StyledView = styled.View`
  align-self: stretch;
`;

export default Login;
