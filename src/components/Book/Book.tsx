import React from 'react';
import styled from 'styled-components/native';

import Text from '@/components/Text';

type BookProps = {
  data: {
    imageUrl: string;
    title: string;
    author: string;
    pageCount: number;
    publisher: string;
    published: number;
  };
};

const Book = ({
  data: { imageUrl, title, author, pageCount, publisher, published }
}: BookProps) => {
  return (
    <StyledContainer>
      <StyledImage source={{ uri: imageUrl }} />
      <StyledBookView>
        <StyledHeaderView>
          <Text font='Heebo_Bold' size={14}>
            {title}
          </Text>
          <Text color='primary'>{author}</Text>
        </StyledHeaderView>
        <StyledDescriptionView>
          <StyledDescriptionText>{pageCount} páginas</StyledDescriptionText>
          <StyledDescriptionText margin={4}>{publisher}</StyledDescriptionText>
          <StyledDescriptionText>Publicado em {published}</StyledDescriptionText>
        </StyledDescriptionView>
      </StyledBookView>
    </StyledContainer>
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
