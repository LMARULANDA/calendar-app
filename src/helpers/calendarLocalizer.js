import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import {format, parse, startOfWeek,getDay} from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import esES from 'date-fns/locale/es';

const locales = {
  'es': esES,
}

export const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})