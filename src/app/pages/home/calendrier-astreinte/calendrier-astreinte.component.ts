import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions, DateSelectArg, EventApi, EventClickArg, formatDate } from '@fullcalendar/core';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';

defineFullCalendarElement();
let str = formatDate(new Date(), {
  month: 'long',
  year: 'numeric',
  day: 'numeric'
});


@Component({
  selector: 'app-calendrier-astreinte',
  templateUrl: './calendrier-astreinte.component.html',
  styleUrls: ['./calendrier-astreinte.component.css']
})

export class CalendrierAstreinteComponent implements OnInit {
  calendarVisible = true;
  // references the #calendar in the template
  @ViewChild('calendar') calendarRef: ElementRef<any>;
  calendarOptions: CalendarOptions = {


    plugins: [dayGridPlugin, resourceTimelinePlugin],

    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    // initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true, // initial value
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
    schedulerLicenseKey: 'XXX'

  };

  currentEvents: EventApi[] = [];

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }




  toggleWeekends() {
    // make a copy while overriding some values
    this.calendarOptions = {
      ...this.calendarOptions,
      weekends: !this.calendarOptions.weekends,
    }
  }

  someMethod() {
    let calendarApi = this.calendarRef.nativeElement.getApi();
    calendarApi.next();
  }
  constructor() {

    console.log(str);

  }

  ngOnInit(): void {

  }
}

function defineFullCalendarElement() {
  throw new Error('Function not implemented.');
}

