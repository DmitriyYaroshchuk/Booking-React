import TextFieldMUI from '@mui/material/TextField';

export default function TextField(props) {
  const {
    meta, input, sx, ...rest
  } = props;
  const error = !!(meta.touched && meta.error);
  console.log('error :', error);
  return (
    <TextFieldMUI
      sx={sx}
      error={error}
      helperText={error}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...input}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...rest}
    />
  );
}
