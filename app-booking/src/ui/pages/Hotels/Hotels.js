import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { push } from 'redux-first-history';
import HotelCard from '../../components/HotelCard/HotelCard';
import { selectors } from '../../../engine/core/hotels/sliceHotels';
import { links } from '../../../engine/config/routers';
import {
  GridContainer, GridWrapper, Title, Wrapper,
} from './styles';
import HotelAccordion from '../../components/HotelAccordion/HotelAccordion';
import ModalWindowBook from '../../components/ModalWindowBook/ModalWindowBook';

export default function Hotels() {
  const dispatch = useDispatch();
  const items = useSelector(selectors.items);
  useEffect(() => {
    if (items.length === 0) {
      dispatch(push(links.main));
    }
  }, []);
  return (
    <Wrapper>
      <Container>
        <Title component="h1" variant="h1" gutterBottom>Список отелей</Title>
        <GridWrapper container spacing={1.5}>
          {
                    items.map((item) => (
                      <GridContainer key={item.name} item>
                        <HotelCard
                          name={item.name}
                          address={item.address}
                          city={item.city}
                          countryCode={item.country_code}
                          hotelRating={item.hotel_rating}
                          phoneNumber={item.phone_number}
                        />
                      </GridContainer>
                    ))
                }
        </GridWrapper>
        <HotelAccordion />
        <ModalWindowBook />
      </Container>
    </Wrapper>
  );
}
