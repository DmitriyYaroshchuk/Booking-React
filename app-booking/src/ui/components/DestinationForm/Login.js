import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import {
  CustomGridContainer, FormButton, FormField, Wrapper,
} from './styles';
import TextField from '../TextField/TextField';
import Select from '../Select/Select';
import { selectors } from '../../../engine/core/destinations/sliceDestinations';
import { composeValidators, validation } from './validation';
import DatePicker from '../DatePicker/DatePicker';

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
      <CustomGridContainer container>
        <Grid item xs={2}>
          <FormField
            name="destination"
            label="Destination"
            component={Select}
            disabled={pending}
            options={destinationItems}
            validate={validation.required}
          />
        </Grid>
        <Grid item xs={2.5}>
          <FormField
            name="check-in"
            label="Check in"
            component={DatePicker}
            disabled={pending}
            validate={validation.required}
          />
        </Grid>
        <Grid item xs={2.5}>
          <FormField
            name="check-out"
            label="Check out"
            component={DatePicker}
            disabled={pending}
            validate={validation.required}
          />
        </Grid>
        <Grid item xs={1}>
          <FormField
            name="adults"
            label="Adults"
            component={TextField}
            disabled={pending}
            validate={composeValidators(validation.required, validation.onlyNumbers)}
          />
        </Grid>
        <Grid item xs={1}>
          <FormField
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
          >Send
          </FormButton>
        </Grid>
      </CustomGridContainer>
    </Wrapper>
  );
}
