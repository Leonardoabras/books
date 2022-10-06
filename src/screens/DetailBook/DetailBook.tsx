import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Text from '@/components/Text';

import QuotationIcon from '@/assets/icons/quotationIcon.svg';
import GobackIcon from '@/assets/icons/gobackIcon.svg';

type BookProps = {
  data: {
    imageUrl?: string;
    title?: string;
    authors?: string;
    pageCount?: number;
    publisher?: string;
    published?: number;
    language?: string;
    isbn10?: string;
    isbn13?: string;
    category?: string;
    description?: string;
  };
};

const DetailBook = ({ navigation }) => {
  const data = {
    imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
    title: 'A Culpa é das Estrelas',
    authors: 'Jonh Green',
    pageCount: 288,
    publisher: 'Intrínseca',
    published: 2022,
    language: 'Inglês',
    isbn10: '0062856626',
    isbn13: '978-0062856623',
    category: 'Romance',
    description:
      'Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta.'
  };

  return (
    <ScrollView>
      <StyledGoBack title='Go Back ' onPress={() => navigation.goBack()}>
        <GobackIcon />
      </StyledGoBack>
      <StyledView>
        <StyledImage source={{ uri: data.imageUrl }} />
        <StyledBookView>
          <StyledHeaderView>
            <Text font='Heebo_Bold' color='boxSearchColor' size={28}>
              {data.title}
            </Text>
            <Text color='primary'>{data.authors}</Text>
          </StyledHeaderView>
          <StyledInfoView>
            <Text font='Heebo_Bold' color='boxSearchColor'>
              INFORMAÇÕES
            </Text>
            <StyledBookInfo>
              <Text font='Heebo_Bold' color='boxSearchColor'>
                {`Páginas\nEditora\nPublicação\nIdioma\nTítulo Original\nISBN-10\nISBN-13\nCategoria`}
              </Text>
              <StyledTitleInfo>
                <StyledInfoText>{data.pageCount} páginas</StyledInfoText>
                <StyledInfoText>{data.publisher}</StyledInfoText>
                <StyledInfoText>{data.published}</StyledInfoText>
                <StyledInfoText>{data.language}</StyledInfoText>
                <StyledInfoText>{data.title}</StyledInfoText>
                <StyledInfoText>{data.isbn10}</StyledInfoText>
                <StyledInfoText>{data.isbn13}</StyledInfoText>
                <StyledInfoText>{data.category}</StyledInfoText>
              </StyledTitleInfo>
            </StyledBookInfo>
            <StyledDescription>
              <StyledDescriptionText font='Heebo_Bold' color='boxSearchColor'>
                RESENHA DA EDITORA
              </StyledDescriptionText>
              <StyledDescriptionText font='Heebo_Bold' color='grayText'>
                <QuotationIcon />
                {'   '}
                {data.description}
              </StyledDescriptionText>
            </StyledDescription>
          </StyledInfoView>
        </StyledBookView>
      </StyledView>
    </ScrollView>
  );
};

const StyledGoBack = styled.TouchableOpacity`
  margin: 44px 0 0 16px;
`;

const StyledView = styled.View`
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled.Image`
  width: 240px;
  height: 351px;
  margin: 12px 0 24px;
`;

const StyledBookView = styled.View``;

const StyledHeaderView = styled.View`
  margin-bottom: 32px;
  align-items: center;
`;

const StyledInfoView = styled.View`
  margin: 0 40px;
`;

const StyledBookInfo = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding: 16px 0 16px 0;
`;

const StyledInfoText = styled(Text).attrs({
  color: 'grayText'
})``;

const StyledTitleInfo = styled.View`
  align-items: flex-end;
`;

const StyledDescription = styled.View`
  margin-bottom: 44px;
`;

const StyledDescriptionText = styled(Text)`
  padding-bottom: 24px;
`;

export default DetailBook;
