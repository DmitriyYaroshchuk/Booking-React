import Button from '../Button/Button';
import { links } from '../../../engine/config/routers';
import { InnerWrapper, StackWrapper, Wrapper } from './styles';
import Logo from '../Logo/Logo';

export default function Header() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Logo />
        <StackWrapper>
          <Button reactHref={links.main}>Home</Button>
          <Button reactHref={links.about}>About</Button>
        </StackWrapper>
      </InnerWrapper>
    </Wrapper>
  );
}
