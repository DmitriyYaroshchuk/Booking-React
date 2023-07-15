import { Form } from 'react-final-form';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Login from './Login';
import destinationsAsyncActions from '../../../engine/core/destinations/saga/asyncActions';
import { hotelsAsyncActions } from '../../../engine/core/hotels/saga/asyncActions';

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
    <Form
      onSubmit={onSubmit}
      render={Login}
    />
  );
}
