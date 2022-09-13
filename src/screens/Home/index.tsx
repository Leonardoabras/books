import React from 'react';
import styled from 'styled-components/native';

const Home = () => {
  return (
    <StyledView>
      <StyledTextView>Home</StyledTextView>
    </StyledView>
  );
};

const StyledView = styled.View``;

const StyledTextView = styled.Text`
  font-size: 12px;
`;

export default Home;
