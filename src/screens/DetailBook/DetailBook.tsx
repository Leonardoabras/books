import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

import Text from '@/components/Text';

import { MainStackParamsList } from '@/routes/stacks/MainStack';

import QuotationIcon from '@/assets/icons/quotationIcon.svg';
import GobackIcon from '@/assets/icons/gobackIcon.svg';

import { useReduxSelector } from '@/hooks/useReduxSelector';
import { useReduxDispatch } from '@/hooks/useReduxDispatch';

import { getDetailBook } from '@/store/slices/bookSlice';
import { MainStackNavigationProp } from '@/routes/stacks/MainStack';

type DetailBookRouteProp = RouteProp<MainStackParamsList, 'DetailBook'>;

const DetailBook = () => {
  const dispatch = useReduxDispatch();
  const { book } = useReduxSelector(state => state);

  const navigation = useNavigation<MainStackNavigationProp>();
  const route = useRoute<DetailBookRouteProp>();

  useEffect(() => {
    dispatch(getDetailBook({ id: route.params.bookId }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView>
      <StyledGoBack onPress={() => navigation.goBack()}>
        <GobackIcon />
      </StyledGoBack>
      {book.isLoading && (
        <StyledActivityIndicator>
          <ActivityIndicator size='large' color='#AB2680' />
        </StyledActivityIndicator>
      )}
      <StyledView>
        <StyledImage source={{ uri: book.bookDetailData?.imageUrl }} />
        <StyledBookView>
          <StyledHeaderView>
            <Text font='Heebo_Bold' color='boxSearchColor' size={28}>
              {book.bookDetailData?.title}
            </Text>
            {book.bookDetailData?.authors.map((author, index) => (
              <Text color='primary'>
                {`${author}`}
                {book?.bookDetailData?.authors?.length - 1 !== index && ', '}
              </Text>
            ))}
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
                <StyledInfoText>{book.bookDetailData?.pageCount} páginas</StyledInfoText>
                <StyledInfoText>{book.bookDetailData?.publisher}</StyledInfoText>
                <StyledInfoText>{book.bookDetailData?.published}</StyledInfoText>
                <StyledInfoText>{book.bookDetailData?.language}</StyledInfoText>
                <StyledInfoText>{book.bookDetailData?.title}</StyledInfoText>
                <StyledInfoText>{book.bookDetailData?.isbn10}</StyledInfoText>
                <StyledInfoText>{book.bookDetailData?.isbn13}</StyledInfoText>
                <StyledInfoText>{book.bookDetailData?.category}</StyledInfoText>
              </StyledTitleInfo>
            </StyledBookInfo>
            <StyledDescription>
              <StyledDescriptionText font='Heebo_Bold' color='boxSearchColor'>
                RESENHA DA EDITORA
              </StyledDescriptionText>
              <StyledDescriptionText font='Heebo_Bold' color='grayText'>
                <QuotationIcon />
                {'   '}
                {book.bookDetailData?.description}
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

const StyledActivityIndicator = styled.View`
  justify-content: center;
  margin-bottom: 16px;
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
