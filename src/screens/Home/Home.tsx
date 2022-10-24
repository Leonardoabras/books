import React, { useEffect, useState } from 'react';
import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';

import { useDispatch } from 'react-redux';
import { getBook } from '@/store/slices/bookSlice';
import { ActivityIndicator } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Book from '@/components/Book';
import { BookData } from '@/store/slices/bookSlice';

import ModalFilter from '@/screens/Home/ModalFilter';

import HeaderBlack from '@/assets/images/headerBlack.svg';
import LogoutIcon from '@/assets/icons/logoutIcon.svg';
import SearchIcon from '@/assets/icons/searchIcon.svg';
import FilterIcon from '@/assets/icons/filterIcon.svg';

import { useReduxSelector } from '@/hooks/useReduxSelector';

import { MainStackNavigationProp } from '@/routes/stacks/MainStack';

const Home = () => {
  const { book } = useReduxSelector(state => state);
  const dispatch = useDispatch();

  const [selected, setSelected] = useState<string[]>([]);
  const [yearSelected, setYearSelected] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation<MainStackNavigationProp>();

  function handleDetailBook(id: string) {
    navigation.navigate('DetailBook', { bookId: id });
  }

  function setFilterState(text: string, state: (old: (texts: string[]) => string[]) => void) {
    state(oldState => {
      const categoryIndex = oldState.findIndex(category => category === text);

      if (categoryIndex >= 0) {
        return oldState.filter(category => category !== text);
      }
      return [...oldState, text];
    });
  }

  function handleCategoryFilter(name: string) {
    setFilterState(name, setSelected);
    // setSelected(oldState => {
    //   const categoryIndex = oldState.findIndex(category => category === name);

    //   if (categoryIndex >= 0) {
    //     return oldState.filter(category => category !== name);
    //   }
    //   return [...oldState, name];
    // });
  }
  console.log(selected);
  function handleYearFilter(year: string) {
    setFilterState(year, setYearSelected);
    // setYearSelected(oldState => {
    //   const yearIndex = oldState.findIndex(category => category === year);
    //   console.log(yearIndex);

    //   if (yearIndex >= 0) {
    //     return oldState.filter(category => category !== year);
    //   }
    //   return [...oldState, year];
    // });
  }
  console.log(yearSelected);

  function handleModalBook() {
    // eslint-disable-next-line prettier/prettier

    dispatch(getBook({ bookCategory: selected }));
    setModalVisible(!modalVisible);
  }

  useEffect(() => {
    dispatch(getBook({}));
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
        <StyledFilterContainer onPress={() => setModalVisible(true)}>
          <FilterIcon />
          <StyledModalView>
            <ModalFilter
              onFilterCategory={handleCategoryFilter}
              onFilterYear={handleYearFilter}
              selectedCategory={selected}
              selectedYear={yearSelected}
              modalVisible={modalVisible}
              onCloseModal={() => setModalVisible(!modalVisible)}
              onSubmitCategory={handleModalBook}
            />
          </StyledModalView>
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
        renderItem={({ item }) => (
          <Book data={item} onPressDetail={() => handleDetailBook(item.id)} />
        )}
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

const StyledFilterContainer = styled.TouchableOpacity`
  padding-left: 22px;
`;

const StyledModalView = styled.View``;

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
