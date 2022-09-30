import React from 'react';
import styled from 'styled-components/native';

import Book from '@/components/Book';

import HeaderBlack from '@/assets/images/headerBlack.svg';
import LogoutIcon from '@/assets/icons/logoutIcon.svg';
import SearchIcon from '@/assets/icons/searchIcon.svg';
import FilterIcon from '@/assets/icons/filterIcon.svg';

const Home = () => {
  return (
    <StyledBackground>
      <StyledHeaderView>
        <HeaderBlack />
        <LogoutIcon />
      </StyledHeaderView>
      <StyledSearchView>
        <StyledInputView>
          <StyledSearchText placeholder='Procure um livro' />
          <SearchIcon />
        </StyledInputView>
        <StyledFilterContainer>
          <FilterIcon />
        </StyledFilterContainer>
      </StyledSearchView>
      <Book
        data={{
          imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
          title: 'A Culpa é das Estrelas',
          author: 'Jonh Green',
          pageCount: 150,
          publisher: 'Intrínseca',
          published: 2020
        }}
      />
      <Book
        data={{
          imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
          title: 'A Culpa é das Estrelas',
          author: 'Jonh Green',
          pageCount: 150,
          publisher: 'Intrínseca',
          published: 2020
        }}
      />
    </StyledBackground>
  );
};

const StyledBackground = styled.View`
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${({ theme }) => theme.colors.homeBackground};
`;

const StyledHeaderView = styled.View`
  margin: 42px 0px 34px 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledInputView = styled.View`
  width: 320px;
  height: 48px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 20px 0 20px;
  align-items: center;
  border: 1px;
  border-radius: 2px;
  border-color: ${({ theme }) => theme.colors.inputBackground};
`;

const StyledSearchView = styled.View`
  flex-direction: row;
  margin-bottom: 32px;
  justify-content: space-between;
  align-items: center;
`;

const StyledFilterContainer = styled.View`
  padding-left: 22px;
`;

const StyledSearchText = styled.TextInput`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.Heebo_Regular};
  padding: 14px 0 14px 0;
`;

export default Home;
