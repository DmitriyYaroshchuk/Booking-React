import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { push } from 'redux-first-history';
import HotelCard from '../../components/HotelCard/HotelCard';
import { selectors } from '../../../engine/core/hotels/sliceHotels';
// eslint-disable-next-line import/no-cycle
import { links } from '../../../engine/config/routers';
import { GridContainer, GridWrapper } from './styles';

export default function Hotels() {
  const dispatch = useDispatch();
  const items = useSelector(selectors.items);
  useEffect(() => {
    if (items.length === 0) {
      dispatch(push(links.main));
    }
  }, []);
  return (
    <Box>
      <Typography component="h5" variant="h5" gutterBottom>Hotels</Typography>
      <GridWrapper container>
        {
                items.map((item) => (
                  <GridContainer key={item.name}>
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
    </Box>
  );
}
