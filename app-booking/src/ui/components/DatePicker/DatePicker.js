import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as DatePickerMUI } from '@mui/x-date-pickers/DatePicker';
// import { TextField } from '@mui/material';

export default function DatePicker(props) {
  const { label, disabled, ...input } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePickerMUI
        label={label}
        disabled={disabled}
        value={input.value || null}
        onChange={input.onChange}
          /* eslint-disable-next-line react/jsx-props-no-spreading */
        // renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
