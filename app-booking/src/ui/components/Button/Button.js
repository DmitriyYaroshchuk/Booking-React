import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import ButtonMUI from '@mui/material/Button';
import { LinkWrapper } from './styles';

export default function Button(props) {
  const {
    children, disabled, loading, reactHref, type, sx,
  } = props;
  if (loading) {
    return (
      <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
      >
        {children}
      </LoadingButton>
    );
  }
  return (
    <ButtonMUI disabled={disabled} variant="contained" type={type} sx={sx}>
      {
                reactHref
                  ? <LinkWrapper to={reactHref}>{children}</LinkWrapper>
                  : children
      }
    </ButtonMUI>
  );
}
Button.defaultProps = {
  type: 'button',
};
