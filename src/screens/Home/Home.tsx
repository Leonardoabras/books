import React, { useEffect, useState } from 'react';
import { FlatList, FlatListProps, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import Modal from 'react-native-modal';

import { useDispatch } from 'react-redux';
import { getBook } from '@/store/slices/bookSlice';
import { ActivityIndicator } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Book from '@/components/Book';
import { BookData } from '@/store/slices/bookSlice';
import Text from '@/components/Text';
import Button from '@/components/Button';

import HeaderBlack from '@/assets/images/headerBlack.svg';
import LogoutIcon from '@/assets/icons/logoutIcon.svg';
import SearchIcon from '@/assets/icons/searchIcon.svg';
import FilterIcon from '@/assets/icons/filterIcon.svg';
import CloseIcon from '@/assets/icons/close.svg';

import { useReduxSelector } from '@/hooks/useReduxSelector';

import { MainStackNavigationProp } from '@/routes/stacks/MainStack';

const categoryData = [
  'Biografias',
  'Coleções',
  'Comportamento',
  'Contos',
  'Crítica Literária',
  'Ficção Científica',
  'Folclore',
  'Genealogia',
  'Humor',
  'Crianças',
  'Jogos',
  'Jornais',
  'Literatura-Brasileira',
  'Literatura-Estrangeira',
  'Livros Raros',
  'Manuscritos',
  'Poesia',
  'Outros-assuntos'
];

const categoryYear = ['2015', '2016', '2017', '2018', '2019', '2020', '2021'];

const Home = () => {
  const { book } = useReduxSelector(state => state);
  const dispatch = useDispatch();

  const [selected, setSelected] = useState<string[]>([]);
  const [yearSelected, setYearSelected] = useState<string[]>([]);

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
          <StyledModalView>
            <Modal isVisible={true}>
              <StyledModal>
                <StyledCloseIconView>
                  <CloseIcon />
                </StyledCloseIconView>
                <StyledContentView>
                  <StyledTitleView>
                    <Text color='boxSearchColor' font='Heebo_Bold'>
                      Selecione a categoria
                    </Text>
                  </StyledTitleView>
                  <StyledOptionsView>
                    {categoryData.map((item, index) => (
                      <TouchableOpacity onPress={() => handleCategoryFilter(item)}>
                        <StyledOptionsText key={index} isSelected={selected.includes(item)}>
                          {item}
                        </StyledOptionsText>
                      </TouchableOpacity>
                    ))}
                  </StyledOptionsView>
                  <StyledYearTitleView>
                    <Text color='boxSearchColor' font='Heebo_Bold'>
                      Selecione o Ano
                    </Text>
                  </StyledYearTitleView>
                  <StyledOptionsView>
                    {categoryYear.map((item, index) => (
                      <TouchableOpacity onPress={() => handleYearFilter(item)}>
                        <StyledOptionsText key={index} isSelected={yearSelected.includes(item)}>
                          {item}
                        </StyledOptionsText>
                      </TouchableOpacity>
                    ))}
                  </StyledOptionsView>
                  <StyledButtonView>
                    <StyledButton title='Filtrar' />
                  </StyledButtonView>
                </StyledContentView>
              </StyledModal>
            </Modal>
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

const StyledModal = styled.ScrollView`
  height: 700px;
  margin: 50px 16px;
  border: 1px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledCloseIconView = styled.View`
  margin: 16px 16px 2px;
  align-items: flex-end;
`;

const StyledContentView = styled.View`
  margin-left: 16px;
`;

const StyledTitleView = styled.View``;

const StyledOptionsText = styled(Text)<{ isSelected: boolean }>`
  padding: 6px 16px;
  margin: 14px 8px 0 0;
  border: 1px;
  border-radius: 44px;
  border-color: ${({ theme }) => theme.colors.boxSearchColor};
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.boxSearchColor : theme.colors.white};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.white : theme.colors.boxSearchColor};
`;

const StyledYearTitleView = styled.View`
  margin-top: 37px;
`;

const StyledOptionsView = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
`;

const StyledButtonView = styled.View`
  flex: 1;
  padding: 48px 0 24px 0;
`;

const StyledButton = styled(Button).attrs({})`
  border: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
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
