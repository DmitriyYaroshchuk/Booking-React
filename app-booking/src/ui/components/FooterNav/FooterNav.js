import Box from '@mui/material/Box';
import {
  Container, Grid,
} from '@mui/material';
import { links } from '../../../engine/config/routers';
import {
  CustomLink, ListItemCustom, WrapperGrid, WrapperList,
} from './styles';

export default function FooterNav() {
  return (
    <Box>
      <Container>
        <WrapperGrid container>
          <Grid item>
            <WrapperList>
              <ListItemCustom>
                <CustomLink to={links.main}>Страны</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Регионы</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Города</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Районы</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Аэропорты</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Отели</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Достопримечательности</CustomLink>
              </ListItemCustom>
            </WrapperList>
          </Grid>
          <Grid item>
            <WrapperList>
              <ListItemCustom>
                <CustomLink to={links.main}>Дома и апартаменты</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Апартаменты/квартиры</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Курортныйе отели</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Виллы</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Хостелы</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Отели типа «постель и завтрак</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Гостевые дома</CustomLink>
              </ListItemCustom>
            </WrapperList>
          </Grid>
          <Grid item>
            <WrapperList>
              <ListItemCustom>
                <CustomLink to={links.main}>Уникальное жилье</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Отзывы</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Жилье на месяц</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Статьи</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Сезонные и праздничные спецпредложения</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Traveller Review Awards</CustomLink>
              </ListItemCustom>
            </WrapperList>
          </Grid>
          <Grid item>
            <WrapperList>
              <ListItemCustom>
                <CustomLink to={links.main}>Прокат автомобилей</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Поиск авиабилетов</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Заказ столиков в ресторанах</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Booking.com для турагентов</CustomLink>
              </ListItemCustom>
            </WrapperList>
          </Grid>
          <Grid item>
            <WrapperList>
              <ListItemCustom>
                <CustomLink to={links.main}>Коронавирус (COVID-19): часто задаваемые вопросы</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>О Booking.com</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Служба поддержки</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Центр помощи партнерам</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Careers</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Устойчивое развитие</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Пресс-центр</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Центр знаний по безопасности</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Для инвесторов</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Правила и условия</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Разрешение споров</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Как мы работаем</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Положение о конфиденциальности и cookie</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Заявление (MSA)</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Корпоративные контакты</CustomLink>
              </ListItemCustom>
              <ListItemCustom>
                <CustomLink to={links.main}>Требования к контенту</CustomLink>
              </ListItemCustom>
            </WrapperList>
          </Grid>
        </WrapperGrid>
      </Container>
    </Box>
  );
}
