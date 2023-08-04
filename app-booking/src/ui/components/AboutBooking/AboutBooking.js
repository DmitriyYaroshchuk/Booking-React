import {
  Container, Grid,
} from '@mui/material';
import { links } from '../../../engine/config/links';
import {
  CustomLink,
  CustomListItem, ListWrapper, Subtitle, Text, Title, Wrapper,
} from './styles';

export default function AboutBooking() {
  return (
    <Wrapper>
      <Container>
        <Grid container>
          <Grid item xs={4}>
            <Subtitle component="h5">Про компанію Booking.com™</Subtitle>
            <ListWrapper>
              <CustomListItem>
                <CustomLink to={links.main}>Юридическая информация</CustomLink>
              </CustomListItem>
              <CustomListItem>
                <CustomLink to={links.main}>Digital Services Act</CustomLink>
              </CustomListItem>
              <CustomListItem>
                <CustomLink to={links.main}>Правила и условия</CustomLink>
              </CustomListItem>
              <CustomListItem>
                <CustomLink to={links.main}>Офисы</CustomLink>
              </CustomListItem>
              <CustomListItem>
                <CustomLink to={links.main}>Свяжитесь с нами</CustomLink>
              </CustomListItem>
              <CustomListItem>
                <CustomLink to={links.main}>Пресс-центр</CustomLink>
              </CustomListItem>
              <CustomListItem>
                <CustomLink to={links.main}>Вакансии</CustomLink>
              </CustomListItem>
              <CustomListItem>
                <CustomLink to={links.main}>Устойчивое развитие в Booking.com</CustomLink>
              </CustomListItem>
              <CustomListItem>
                <CustomLink to={links.main}>Добавить объект размещения</CustomLink>
              </CustomListItem>
              <CustomListItem>
                <CustomLink to={links.main}>Booking.com для бизнеса</CustomLink>
              </CustomListItem>
              <CustomListItem>
                <CustomLink to={links.main}>Войти в Экстранет</CustomLink>
              </CustomListItem>
              <CustomListItem>
                <CustomLink to={links.main}>Стать партнером-аффилиатом</CustomLink>
              </CustomListItem>
              <CustomListItem>
                <CustomLink to={links.main}>Кодекс правил для поставщиков</CustomLink>
              </CustomListItem>
            </ListWrapper>
          </Grid>
          <Grid item xs={8}>
            <Title component="h1">О Booking.com™</Title>
            <Text component="p">
              Компания Booking.com, основанная в 1996 году в Амстердаме, прошла путь от маленького голландского стартапа до одного из мировых цифровых лидеров в сфере путешествий. Миссия Booking.com, подразделения Booking Holdings Inc. (NASDAQ: BKNG), — делать путешествия доступными каждому
            </Text>
            <Text component="p">
              Инвестируя в технологии, которые помогают путешествовать без хлопот, Booking.com предлагает миллионам гостей потрясающие варианты досуга, транспортные услуги и невероятное жилье, начиная от домов и заканчивая отелями и не только. Будучи крупнейшей в мире туристической платформой как для известных брендов, так и для предпринимателей разного уровня, Booking.com помогает владельцам объектов размещения по всему миру привлекать гостей и расширять бизнес.
            </Text>
            <Text component="p">
              Платформа Booking.com переведена на 43 языка. На ней доступно для бронирования более 28 миллионов заявленных единиц размещения, среди которых более 6,6 миллионов в домах, апартаментах и других уникальных объектах размещения. Куда бы вы ни отправились и чем бы ни захотели заняться, Booking.com поможет вам в этом. Служба поддержки компании работает круглосуточно и без выходных.
            </Text>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}
