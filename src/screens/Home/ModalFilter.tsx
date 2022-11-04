import React from 'react';
import styled from 'styled-components/native';

import { TouchableOpacity, Dimensions } from 'react-native';

import CloseIcon from '@/assets/icons/close.svg';
import Text from '@/components/Text';
import Button from '@/components/Button';

const { width } = Dimensions.get('screen');

const category = [
  {
    id: 1,
    label: 'Biografias',
    title: 'biographies'
  },
  {
    id: 2,
    label: 'Coleções',
    title: 'collections'
  },
  {
    id: 3,
    label: 'Comportamento',
    title: 'behavior'
  },
  {
    id: 4,
    label: 'Contos',
    title: 'tales'
  },
  {
    id: 5,
    label: 'Crítica Literária',
    title: 'literary-criticism'
  },
  {
    id: 6,
    label: 'Ficção Científica',
    title: 'scienceFiction'
  },
  {
    id: 7,
    label: 'Folclore',
    title: 'folklore'
  },
  {
    id: 8,
    label: 'Genealogia',
    title: 'genealogy'
  },
  {
    id: 9,
    label: 'Humor',
    title: 'humor'
  },
  {
    id: 10,
    label: 'Crianças',
    title: 'children'
  },
  {
    id: 11,
    label: 'Jogos',
    title: 'games'
  },
  {
    id: 12,
    label: 'Jornais',
    title: 'newspapers'
  },
  {
    id: 13,
    label: 'Literatura-Brasileira',
    title: 'brazilian-literature'
  },
  {
    id: 14,
    label: 'Literatura-Estrangeira',
    title: 'foreign-literature'
  },
  {
    id: 15,
    label: 'Livros Raros',
    title: 'rare-books'
  },
  {
    id: 16,
    label: 'Manuscritos',
    title: 'manuscripts'
  },
  {
    id: 17,
    label: 'Poesia',
    title: 'poetry'
  },
  {
    id: 18,
    label: 'Outros-assuntos',
    title: 'another-subjects'
  }
];

const categoryYear = [
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021'
];

type FilterCategoryProps = {
  onFilterCategory: (item: string) => void;
  onFilterYear: (item: string) => void;
  selectedCategory?: string[];
  selectedYear?: string[];
  modalVisible?: boolean;
  onCloseModal: () => void;
  onSubmitCategory: () => void;
};

const ModalFilter = ({
  onFilterCategory,
  onFilterYear,
  selectedCategory,
  selectedYear,
  modalVisible,
  onCloseModal,
  onSubmitCategory
}: FilterCategoryProps) => {
  return (
    <StyledModalView animationType='fade' visible={modalVisible} transparent={true}>
      <StyledModalContentContainer>
        <StyledModal>
          <StyledCloseIconView onPress={onCloseModal}>
            <CloseIcon />
          </StyledCloseIconView>
          <StyledContentView showsVerticalScrollIndicator={false}>
            <StyledTitleView>
              <Text color='boxSearchColor' font='Heebo_Bold'>
                Selecione a categoria
              </Text>
            </StyledTitleView>
            <StyledOptionsView>
              {category.map(item => (
                <TouchableOpacity onPress={() => onFilterCategory(item.title)}>
                  <StyledOptionsText
                    key={item.id}
                    isSelected={selectedCategory?.includes(item.title)}
                  >
                    {item.label}
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
                <TouchableOpacity onPress={() => onFilterYear(item)}>
                  <StyledOptionsText key={index} isSelected={selectedYear?.includes(item)}>
                    {item}
                  </StyledOptionsText>
                </TouchableOpacity>
              ))}
            </StyledOptionsView>
          </StyledContentView>
          <StyledButtonView>
            <StyledButton title='Filtrar' onPress={onSubmitCategory} />
          </StyledButtonView>
        </StyledModal>
        <StyledShadow onPress={onCloseModal} />
      </StyledModalContentContainer>
    </StyledModalView>
  );
};

const StyledModalView = styled.Modal``;

const StyledModalContentContainer = styled.View`
  flex: 1;
  padding: 0 16px;
  justify-content: center;
`;

const StyledModal = styled.View`
  height: 70%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 2;
`;

const StyledCloseIconView = styled.TouchableOpacity`
  margin: 16px 16px 2px;
  align-self: flex-end;
`;

const StyledContentView = styled.ScrollView`
  margin-left: 16px;
`;

const StyledTitleView = styled.View``;

const StyledOptionsText = styled(Text)<{ isSelected?: boolean }>`
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
  padding: 16px;
`;

const StyledButton = styled(Button).attrs({})`
  border: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
`;

const StyledShadow = styled.TouchableOpacity`
  position: absolute;
  width: ${width}px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

export default ModalFilter;
