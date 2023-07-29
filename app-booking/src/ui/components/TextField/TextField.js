import TextFieldMUI from '@mui/material/TextField';

export default function TextField(props) {
  const {
    meta, input, sx, className, type, ...rest
  } = props;
  const error = meta.touched && meta.error;
  return (
    <TextFieldMUI
      sx={sx}
      className={className}
      type={type}
      error={Boolean(error)}
      helperText={error}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...input}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...rest}
    />
  );
}
