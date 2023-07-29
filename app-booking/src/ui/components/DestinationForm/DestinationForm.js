import { Form } from 'react-final-form';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '@mui/material';
import Login from './Login';
import destinationsAsyncActions from '../../../engine/core/destinations/saga/asyncActions';
import { hotelsAsyncActions } from '../../../engine/core/hotels/saga/asyncActions';
import {
  MainWrapper, Text, Title, TopContent,
} from './styles';

export default function DestinationForm() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(destinationsAsyncActions.getDestinationsAsync());
  }, []);
  const onSubmit = (value) => {
    dispatch(hotelsAsyncActions.getHotelsAsync(value));
    console.log(value);
  };

  return (
    <MainWrapper>
      <Container>
        <TopContent>
          <Title component="h1">Домашний уют</Title>
          <Title component="h1">Радость поездки</Title>
          <Text>Найдите пляжные домики, шале и не только</Text>
        </TopContent>
        <Form
          onSubmit={onSubmit}
          render={Login}
        />
      </Container>
    </MainWrapper>
  );
}
