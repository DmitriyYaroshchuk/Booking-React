import { Container, Grid } from '@mui/material';
import { links } from '../../../engine/config/links';
import {
  Content, CustomBox, CustomLink, Subtitle, Text, Title, Wrapper,
} from './styles';

export default function Offers() {
  return (
    <Wrapper>
      <Container>
        <Content container>
          <Grid item xs={4}>
            <Title component="h3">Что предлагает Booking.com?</Title>
          </Grid>
          <Grid item xs={8}>
            <CustomBox>
              <Subtitle component="h4">Огромный выбор</Subtitle>
              <Text component="p">
                На Booking.com можно забронировать самые разнообразные варианты проживания: от стильных городских квартир и уютных загородных мини-гостиниц до роскошных курортных отелей на пляже.
              </Text>
            </CustomBox>
            <CustomBox>
              <Subtitle component="h4">Низкие цены</Subtitle>
              <Text component="p">
                Booking.com гарантирует, что вы можете получить лучшую цену. Если найдете дешевле, мы вернем разницу в стоимости — вы всегда остаетесь в выигрыше.
              </Text>
            </CustomBox>
            <CustomBox>
              <Subtitle component="h4">Моментальное подтверждение</Subtitle>
              <Text component="p">
                Бронирования Booking.com подтверждаются автоматически и мгновенно. Чтобы забронировать вариант, который пришелся вам по душе, нужно всего несколько действий.
              </Text>
            </CustomBox>
            <CustomBox>
              <Subtitle component="h4">Бронирование без комиссии</Subtitle>
              <Text>
                Мы не взимаем комиссию за оформление бронирования или другие услуги. Во многих случаях бронирование можно отменить бесплатно.
              </Text>
            </CustomBox>
            <CustomBox>
              <Subtitle component="h4">Безопасность</Subtitle>
              <Text component="p">
                Каждый день мы помогаем осуществить через нашу надежную платформу сотни тысяч транзакций. Мы поддерживаем самые высокие стандарты безопасности, чтобы гарантировать сохранность ваших данных. Подробности в <CustomLink to={links.main}>«Положении о конфиденциальности»</CustomLink>
              </Text>
            </CustomBox>
            <CustomBox>
              <Subtitle component="h4">Круглосуточная поддержка</Subtitle>
              <Text component="p">
                Наша команда ответит на вопросы и защитит ваши интересы на любом этапе: как после бронирования, так и во время поездки. Поддержка оказывается круглосуточно на более чем 40 языках. Не забудьте прочитать <CustomLink to={links.main}>«Часто задаваемые вопросы»</CustomLink> для путешественников.
              </Text>
            </CustomBox>
          </Grid>
        </Content>
        <Content container sx={{ justifyContent: 'space-between' }}>
          <Grid item xs={3}>
            <Title component="h3">Продвижение объектов размещения</Title>
          </Grid>
          <Grid item xs={8}>
            <CustomBox>
              <Text component="p">
                Мы считаем, что отличные варианты проживания стоят того, чтобы о них узнали. Поэтому Booking.com дает партнерам возможность привлечь новых гостей и добиться успеха для своего бизнеса с помощью нашей платформы.
              </Text>
            </CustomBox>
            <CustomBox>
              <Text component="p">
                Чтобы узнать подробности или добавить свой объект на Booking.com, ознакомьтесь с <CustomLink to={links.main}>Партнерской программой для объектов размещения</CustomLink> и <CustomLink to={links.main}>Кодексом правил для поставщиков</CustomLink>
              </Text>
            </CustomBox>
          </Grid>
        </Content>
      </Container>
    </Wrapper>
  );
}
