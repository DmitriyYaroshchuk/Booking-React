import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as DatePickerMUI } from '@mui/x-date-pickers/DatePicker';

export default function DatePicker(props) {
  const {
    label, disabled, input, meta, className,
  } = props;
  // const error = meta.touched && meta.error;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePickerMUI
        className={className}
        label={label}
        disabled={disabled}
        value={input.value || null}
        // slotProps={{
        //   textField: {
        //     helperText: error,
        //   },
        // }}
        onChange={input.onChange}
      />
      {meta.error
          && meta.touched
          && meta.pristine
          && (
          <span style={{ fontWeight: 400, fontSize: '15px', color: 'red' }}>
            {meta.error}
          </span>
          )}
    </LocalizationProvider>
  );
}
