import Button from '../Button/Button';
import { links } from '../../../engine/config/links';
import { InnerContainer, StackWrapper, Wrapper } from './styles';
import Logo from '../Logo/Logo';

export default function Header() {
  return (
    <Wrapper>
      <InnerContainer>
        <Logo />
        <StackWrapper>
          <Button reactHref={links.main}>Home</Button>
          <Button reactHref={links.about}>About</Button>
        </StackWrapper>
      </InnerContainer>
    </Wrapper>
  );
}
