import { Field } from 'react-final-form';
import {
  FormControlLabel, RadioGroup, Stack, TextareaAutosize,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import TextField from '../../TextField/TextField';
import { composeValidators, validation } from './validation';
import Button from '../../Button/Button';
import {
  CustomField, Title, Wrapper,
} from './styles';
import { TextArea } from '../styles';
import { setPopup } from '../../../../engine/core/hotels/sliceHotels';

export default function ModalWindowBookForm(props) {
  const { handleSubmit, pristine, errors } = props;
  const dispatch = useDispatch();
  const handleClose = () => dispatch(setPopup(false));
  return (
    <Wrapper
      component="form"
      onSubmit={handleSubmit}
    >
      <CustomField
        name="name"
        label="Name"
        placeholder="Enter your name"
        component={TextField}
        validate={composeValidators(validation.required, validation.validateName)}
      />
      <CustomField
        name="surname"
        label="Surname"
        placeholder="Enter your surname"
        component={TextField}
        validate={composeValidators(validation.required, validation.validateName)}
      />
      <CustomField
        name="email"
        label="Email"
        placeholder="Enter your email"
        component={TextField}
        validate={composeValidators(validation.required, validation.validateEmail)}
      />
      <CustomField
        name="passport"
        label="Passport"
        placeholder="Enter your passport"
        component={TextField}
        validate={composeValidators(validation.required, validation.validatePassport)}
      />
      <CustomField
        name="phone"
        label="Phone"
        type="tel"
        placeholder="Enter your phone"
        component={TextField}
        validate={composeValidators(validation.required, validation.validatePhone)}
      />
      <Title component="h3">Hotel room</Title>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="room"
      >
        <FormControlLabel
          label="Single"
          control={(
            <Field
              name="room"
              value="single"
              component={Radio}
              validate={validation.required}
              type="radio"
            />
            )}
        />
        <FormControlLabel
          label="Double"
          control={(
            <Field
              name="room"
              value="double"
              component={Radio}
              validate={validation.required}
              type="radio"
            />
              )}
        />
        <FormControlLabel
          label="Luxury"
          control={(
            <Field
              name="room"
              value="luxury"
              component={Radio}
              validate={validation.required}
              type="radio"
            />
              )}
        />
      </RadioGroup>
      <Title component="h3">Additional services</Title>
      <Box>
        <Field
          name="additional-services"
          label="Breakfast"
          component={FormControlLabel}
          control={<Checkbox />}
        />
        <Field
          name="additional-services"
          label="Lunch"
          component={FormControlLabel}
          control={<Checkbox />}
        />
        <Field
          name="additional-services"
          label="Dinner"
          component={FormControlLabel}
          control={<Checkbox />}
        />
        <Field
          name="additional-services"
          label="Supper"
          component={FormControlLabel}
          control={<Checkbox />}
        />
        <Field
          name="additional-services"
          label="Pool"
          component={FormControlLabel}
          control={<Checkbox />}
        />
        <Field
          name="additional-services"
          label="SPA"
          component={FormControlLabel}
          control={<Checkbox />}
        />
        <Field
          name="additional-services"
          label="Excursions"
          component={FormControlLabel}
          control={<Checkbox />}
        />
      </Box>
      <Title component="h3">Notes</Title>
      <TextArea
        name="notes"
        label="Notes"
        placeholder="Notes"
        component={TextareaAutosize}
      />
      <Stack>
        <Button
          sx={{ marginBottom: '20px' }}
          type="submit"
          onClick={handleClose}
          disabled={Boolean(pristine || Object.values(errors).length)}
        >Confirm booking
        </Button>
        <Button onClick={handleClose}>Cancel</Button>
      </Stack>
    </Wrapper>
  );
}
