import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Title } from './styles';

export default function HotelAccordion() {
  return (
    <div>
      <Title component="h2">Как это работает ?</Title>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Как забрать ключи</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Вы сможете связаться напрямую с хозяином и обсудить этот вопрос. Возможно, вы встретитесь с ним лично или воспользуетесь специальным ящиком — в любом случае это будет просто.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>На связи с хозяином</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Вы всегда можете написать в объект размещения и задать любой вопрос о предстоящей поездке, а также сообщить, в какое время вы приедете, или отправить особый запрос.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Регистрация заезда</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Возможно, вы останавливались только в отелях и не знаете, как проходит регистрация заезда в апартаментах или доме для отпуска. Не переживайте! Хозяева объектов размещения предоставляют всю необходимую вам информацию.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
