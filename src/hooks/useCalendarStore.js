import {useSelector,useDispatch} from 'react-redux'
import { onAddNewEvent, onSetActiveEvent, onUpdateEvent } from '../store';

export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const {events,activeEvent} = useSelector(state => state.calendar);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    }

    const startSavingEvent = async(calendarEvent)=> {
        // TODO: llegar al backend

        //todo bien

        if(calendarEvent._id){
          dispatch(onUpdateEvent({...calendarEvent}));
        } else {
          dispatch(onAddNewEvent({...calendarEvent, _id: new Date().getTime()}))
        }
    }

  return {
    //* Propiedades
    events,
    activeEvent,
    //* Metodos
    setActiveEvent,
    startSavingEvent
  }
   
  
}