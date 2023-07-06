import ButtonMUI from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { LinkWrapper } from './styles';

export default function Button(props) {
  const {
    children, disabled, loading, reactHref,
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
    <ButtonMUI disabled={disabled} variant="contained">
      {
                reactHref
                  ? <LinkWrapper to={reactHref}>{children}</LinkWrapper>
                  : { children }
      }
    </ButtonMUI>
  );
}
