import { Grid } from '@mui/material';
import { Field } from 'react-final-form';
import { useSelector } from 'react-redux';
import { FormButton, Wrapper } from './styles';
import TextField from '../TextField/TextField';
import Select from '../Select/Select';
import { selectors } from '../../../engine/core/destinations/sliceDestinations';
import { composeValidators, validation } from './validation';
import DatePicker from '../DatePicker/DatePicker';
import { CustomGridContainer } from '../Logo/styles';

export default function Login(props) {
  const { handleSubmit } = props;
  const destinationItems = useSelector(selectors.items);
  const destinationsLoading = useSelector(selectors.loading);
  const hotelsLoading = useSelector(selectors.loading);
  const pending = destinationsLoading || hotelsLoading;
  return (
    <Wrapper
      component="form"
      onSubmit={handleSubmit}
    >
      <CustomGridContainer container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Grid item xs={2}>
          <Field
            name="destination"
            label="Destination"
            component={Select}
            disabled={pending}
            options={destinationItems}
            validate={validation.required}
          />
        </Grid>
        <Grid item xs={2.5}>
          <Field
            name="check-in"
            label="Check in"
            component={DatePicker}
            disabled={pending}
            validate={validation.required}
          />
        </Grid>
        <Grid item xs={2.5}>
          <Field
            name="check-out"
            label="Check out"
            component={DatePicker}
            disabled={pending}
            validate={validation.required}
          />
        </Grid>
        <Grid item xs={1}>
          <Field
            name="adults"
            label="Adults"
            component={TextField}
            disabled={pending}
            validate={composeValidators(validation.required, validation.onlyNumbers)}
          />
        </Grid>
        <Grid item xs={1}>
          <Field
            name="children"
            label="Children"
            component={TextField}
            disabled={pending}
            validate={composeValidators(validation.required, validation.onlyNumbers)}
          />
        </Grid>
        <Grid item xs={1.5}>
          <FormButton
            type="submit"
            loading={pending}
            // sx={{
            //   maxWidth: '200px', width: '100%', backgroundColor: 'orange', height: '50px', '&:hover': { backgroundColor: '#bb7c09' },
            // }}
          >Send
          </FormButton>
        </Grid>
      </CustomGridContainer>
    </Wrapper>
  );
}
