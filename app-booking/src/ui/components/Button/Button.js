import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import ButtonMUI from '@mui/material/Button';
import { LinkWrapper } from './styles';

export default function Button(props) {
  const {
    children, disabled, loading, reactHref, type, sx,
    className, onClick,
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
    <ButtonMUI
      className={className}
      disabled={disabled}
      variant="contained"
      type={type}
      sx={sx}
      onClick={onClick}
    >
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
