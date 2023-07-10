import { Grid } from '@mui/material';
import { Field } from 'react-final-form';
import { Wrapper } from './styles';
import TextField from '../TextField/TextField';
import Select from '../Select/Select';
import Button from '../Button/Button';

export default function Login(props) {
  const { handleSubmit, destinationItems, destinationLoading } = props;
  return (
    <Wrapper
      component="form"
      onSubmit={handleSubmit}
    >
      <Grid container>
        <Grid item xs={3}>
          <Field
            name="destination"
            label="Destination"
            component={Select}
            disabled={destinationLoading}
            options={[destinationItems]}
          />
        </Grid>
        <Grid item xs={1}>
          <Field
            name="adults"
            label="Adults"
            component={TextField}
          />
        </Grid>
        <Grid item xs={1}>
          <Button type="submit">Send</Button>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
