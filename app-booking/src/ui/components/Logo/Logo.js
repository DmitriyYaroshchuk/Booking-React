import { Icon, Text, Wrapper } from './styles';
import { links } from '../../../engine/config/routers';

export default function Logo() {
  return (
    <Wrapper to={links.main} component="div">
      <Icon component="div" />
      <Text component="h1">Booking</Text>
    </Wrapper>
  );
}
