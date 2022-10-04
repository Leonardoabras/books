import React, { useEffect } from 'react';
import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';

import { useDispatch } from 'react-redux';
import { getBook } from '@/store/slices/bookSlice';
import { ActivityIndicator } from 'react-native';

import Book from '@/components/Book';
import { BookData } from '@/store/slices/bookSlice';

import HeaderBlack from '@/assets/images/headerBlack.svg';
import LogoutIcon from '@/assets/icons/logoutIcon.svg';
import SearchIcon from '@/assets/icons/searchIcon.svg';
import FilterIcon from '@/assets/icons/filterIcon.svg';

import { useReduxSelector } from '@/hooks/useReduxSelector';

const Home = () => {
  const { book } = useReduxSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBook());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      {book.isLoading && (
        <StyledActivityIndicator>
          <ActivityIndicator size='large' color='#AB2680' />
        </StyledActivityIndicator>
      )}
      <StyledList
        data={book.bookData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Book data={item} />}
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

const StyledList = styled(FlatList as new (props: FlatListProps<BookData>) => FlatList<BookData>)``;

const StyledActivityIndicator = styled.View`
  justify-content: center;
  margin-bottom: 16px;
`;

export default Home;
