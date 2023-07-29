import { Field } from 'react-final-form';
import { Stack, TextareaAutosize } from '@mui/material';
import { useDispatch } from 'react-redux';
import TextField from '../../TextField/TextField';
import { composeValidators, validation } from './validation';
import Button from '../../Button/Button';
import {
  ContainerField,
  CustomField, Text, Title, Wrapper,
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
      <ContainerField>
        <Field
          name="room"
          label="Room"
          value="Single Room"
          component={TextField}
          type="radio"
          validate={validation.required}
        />
        <Text>Single Room</Text>
      </ContainerField>
      <ContainerField>
        <Field
          name="room"
          label="Room"
          value="Double Room"
          component={TextField}
          type="radio"
          validate={validation.required}
        />
        <Text>Double Room</Text>
      </ContainerField>
      <ContainerField>
        <Field
          name="room"
          label="Room"
          value="Luxury Room"
          component={TextField}
          type="radio"
          validate={validation.required}
        />
        <Text>Luxury Room</Text>
      </ContainerField>
      <Title component="h3">Additional services</Title>
      <ContainerField>
        <Field
          name="additional-services"
          label="Service"
          value="breakfast"
          component={TextField}
          type="checkbox"
        />
        <Text>Breakfast</Text>
      </ContainerField>
      <ContainerField>
        <Field
          name="additional-services"
          label="Service"
          value="lunch"
          component={TextField}
          type="checkbox"
        />
        <Text>Lunch</Text>
      </ContainerField>
      <ContainerField>
        <Field
          name="additional-services"
          label="Service"
          value="dinner"
          component={TextField}
          type="checkbox"
        />
        <Text>Dinner</Text>
      </ContainerField>
      <ContainerField>
        <Field
          name="additional-services"
          label="Service"
          value="supper"
          component={TextField}
          type="checkbox"
        />
        <Text>Supper</Text>
      </ContainerField>
      <ContainerField>
        <Field
          name="additional-services"
          label="Service"
          value="pool"
          component={TextField}
          type="checkbox"
        />
        <Text>Pool</Text>
      </ContainerField>
      <ContainerField>
        <Field
          name="additional-services"
          label="Service"
          value="SPA"
          component={TextField}
          type="checkbox"
        />
        <Text>SPA</Text>
      </ContainerField>
      <ContainerField>
        <Field
          name="additional-services"
          label="Service"
          value="excursions"
          component={TextField}
          type="checkbox"
        />
        <Text>Excursions</Text>
      </ContainerField>
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
