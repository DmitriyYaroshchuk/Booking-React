import { Icon, Text, Wrapper } from './styles';
import { links } from '../../../engine/config/links';
import logotype from '../../../images/logo.svg';

export default function Logo() {
  return (
    <Wrapper to={links.main} component="div">
      <Icon component="img" src={logotype} alt="booking" />
      <Text component="h1">Booking</Text>
    </Wrapper>
  );
}
