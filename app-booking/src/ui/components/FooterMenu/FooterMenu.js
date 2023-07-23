import { Container } from '@mui/material';
import { links } from '../../../engine/config/routers';
import {
  BoxTop, CustomButton, CustomLink, ListItemContainer, ListWrapper, Wrapper,
} from './styles';

export default function FooterMenu() {
  return (
    <Wrapper>
      <BoxTop>
        <CustomButton reactHref={links.main}>Зарегистрировать свое жилье</CustomButton>
      </BoxTop>
      <Container>
        <ListWrapper>
          <ListItemContainer>
            <CustomLink to={links.main}>Мобильная версия</CustomLink>
          </ListItemContainer>
          <ListItemContainer>
            <CustomLink to={links.main}>Управлять бронированиями</CustomLink>
          </ListItemContainer>
          <ListItemContainer>
            <CustomLink to={links.main}>Служба поддержки</CustomLink>
          </ListItemContainer>
          <ListItemContainer>
            <CustomLink to={links.main}>Программа для аффилиатов</CustomLink>
          </ListItemContainer>
          <ListItemContainer>
            <CustomLink to={links.main}>Booking.com для бизнеса</CustomLink>
          </ListItemContainer>
        </ListWrapper>
      </Container>
    </Wrapper>
  );
}
