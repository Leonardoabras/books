import React from 'react';

import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import Text from '@/components/Text';
import { BookData } from '@/store/slices/bookSlice';

type BookProps = {
  data: BookData;
  onPressDetail?: () => void;
};

const Book = ({
  onPressDetail,
  data: { imageUrl, title, authors, pageCount, publisher, published }
}: BookProps) => {
  return (
    <TouchableOpacity onPress={onPressDetail}>
      <StyledContainer>
        <StyledImage source={{ uri: imageUrl }} />
        <StyledBookView>
          <StyledHeaderView>
            <Text font='Heebo_Bold' size={14}>
              {title}
            </Text>
            <Text color='primary'>{authors}</Text>
          </StyledHeaderView>
          <StyledDescriptionView>
            <StyledDescriptionText>{pageCount} páginas</StyledDescriptionText>
            <StyledDescriptionText margin={4}>{publisher}</StyledDescriptionText>
            <StyledDescriptionText>Publicado em {published}</StyledDescriptionText>
          </StyledDescriptionView>
        </StyledBookView>
      </StyledContainer>
    </TouchableOpacity>
  );
};

const StyledContainer = styled.View`
  padding: 16px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  margin-bottom: 16px;
`;

const StyledImage = styled.Image`
  width: 81px;
  height: 122px;
  padding: 16px;
`;

const StyledBookView = styled.View`
  margin-left: 16px;
`;

const StyledHeaderView = styled.View``;

const StyledDescriptionView = styled.View`
  padding-top: 25px;
`;

const StyledDescriptionText = styled(Text).attrs({
  color: 'grayText'
})<{ margin?: number }>`
  margin: ${({ margin }) => margin || 0}px 0;
`;

export default Book;
