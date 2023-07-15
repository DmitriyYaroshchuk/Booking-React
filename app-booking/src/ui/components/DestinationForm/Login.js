import { Grid } from '@mui/material';
import { Field } from 'react-final-form';
import { useSelector } from 'react-redux';
import { Wrapper } from './styles';
import TextField from '../TextField/TextField';
import Select from '../Select/Select';
import { selectors } from '../../../engine/core/destinations/slice';
import Button from '../Button/Button';
import { composeValidators, validation } from './validation';
import DatePicker from '../DatePicker/DatePicker';

export default function Login(props) {
  const { handleSubmit } = props;
  const destinationItems = useSelector(selectors.items);
  const loading = useSelector(selectors.loading);
  return (
    <Wrapper
      component="form"
      onSubmit={handleSubmit}
    >
      <Grid container sx={{ alignItems: 'center' }}>
        <Grid item xs={2}>
          <Field
            name="destination"
            label="Destination"
            component={Select}
            disabled={loading}
            options={destinationItems}
            validate={validation.required}
          />
        </Grid>
        <Grid item xs={2}>
          <Field
            name="check-in"
            label="Check in"
            component={DatePicker}
            disabled={loading}
            validate={validation.required}
          />
        </Grid>
        <Grid item xs={2}>
          <Field
            name="check-out"
            label="Check out"
            component={DatePicker}
            disabled={loading}
            validate={validation.required}
          />
        </Grid>
        <Grid item xs={1}>
          <Field
            name="adults"
            label="Adults"
            component={TextField}
            disabled={loading}
            validate={composeValidators(validation.required, validation.onlyNumbers)}
          />
        </Grid>
        <Grid item>
          <Button type="submit" loading={loading} sx={{ backgroundColor: 'orange', padding: 0 }}>Send</Button>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
