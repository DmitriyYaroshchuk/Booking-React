import { Form } from 'react-final-form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { selectors } from '../../../engine/core/destinations/slice';
import destinationsAsyncActions from '../../../engine/core/destinations/saga/asyncActions';

export default function DestinationForm() {
  const destinationItems = useSelector(selectors.items);
  const destinationLoading = useSelector(selectors.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(destinationsAsyncActions.getDestinationsAsync());
  }, []);
  const onSubmit = (value) => {
    console.log(value);
  };
  return (
    <Form
      onSubmit={onSubmit}
      render={Login}
      destinationItems={destinationItems}
      destinationLoading={destinationLoading}
    />
  );
}
