import React from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Tooltip } from 'react-tooltip';
import { format } from 'date-fns';

// Add interface for event details
interface EventContent {
  event: {
    title: string;
    start: Date;
    end: Date;
    extendedProps?: {
      instructor?: string;
      aircraft?: string;
      comments?: string;
    };
  };
}

const SchedulerPage = () => {
  const calendarRef = React.useRef<any>(null);

  // Define all resources inside the component
  const resources = [
    // Staff Section
    { title: 'Diego Acevedo (B)(Aeros)(IFR)(TAWA)', id: 'staff-1', eventColor: '#4a90e2', order: 1 },
    { title: 'Trinity Hart (B)(Aeros)(IFR)', id: 'staff-2', eventColor: '#4a90e2', order: 2 },
    { title: 'Justin Smith (B)(IFR)', id: 'staff-3', eventColor: '#4a90e2', order: 3 },
    { title: 'Sam Andrews (B)(Aeros)', id: 'staff-4', eventColor: '#4a90e2', order: 4 },
    { title: 'Conor Souness (C)', id: 'staff-5', eventColor: '#4a90e2', order: 5 },
    { title: 'Callum Soutar (C)', id: 'staff-6', eventColor: '#4a90e2', order: 6 },
    // Divider
    { 
      id: 'divider', 
      title: '\u00A0',
      eventColor: '#grey',
      resourceAreaClassName: 'bg-gray-200 !h-[40px] w-full', // Darker gray and full width
      className: 'bg-gray-600', // This should style the entire row
      order: 7,
      editable: false,
      selectable: false
    },
    // Aircraft Section
    { title: 'FLC (C-152)', id: 'aircraft-1', eventColor: '#f5a623', order: 8 },
    { title: 'JEN (A-152 Aerobat)', id: 'aircraft-2', eventColor: '#f5a623', order: 9 },
    { title: 'KID (A-152 Aerobat)', id: 'aircraft-3', eventColor: '#f5a623', order: 10 },
    { title: 'ELA (C-152)', id: 'aircraft-4', eventColor: '#f5a623', order: 11 },
    { title: 'FPI (C-152)', id: 'aircraft-5', eventColor: '#f5a623', order: 12 },
    { title: 'EKM (C-152)', id: 'aircraft-6', eventColor: '#f5a623', order: 13 },
    { title: 'ELS (A-152 Aerobat)', id: 'aircraft-7', eventColor: '#f5a623', order: 14 },
    { title: 'TDL (PA-38 Tomahawk)', id: 'aircraft-8', eventColor: '#f5a623', order: 15 },
    { title: 'DRP (C172M Skyhawk)', id: 'aircraft-9', eventColor: '#f5a623', order: 16 },
    { title: 'KAZ (C-172SP Skyhawk G1000)', id: 'aircraft-10', eventColor: '#f5a623', order: 17 },
  ];

  const events = [
    {
      id: '1',
      title: 'LWOP',
      start: '2024-12-24T09:00:00+13:00',
      end: '2024-12-24T17:00:00+13:00',
      resourceId: 'staff-1',
      backgroundColor: '#4a90e2',
      extendedProps: {
        instructor: 'Diego Acevedo',
        aircraft: 'N/A',
        comments: 'Leave without pay'
      }
    },
    {
      id: '2',
      title: 'Liau - Boxing Day',
      start: '2024-12-25T08:00:00+13:00',
      end: '2024-12-25T18:00:00+13:00',
      resourceId: 'staff-2',
      backgroundColor: '#4a90e2',
      extendedProps: {
        instructor: 'Trinity Hart',
        aircraft: 'N/A',
        comments: 'Boxing Day leave'
      }
    },
    {
      id: '3',
      title: 'TDL 100 HR (Maintenance)',
      start: '2024-12-24T08:00:00+13:00',
      end: '2024-12-24T20:00:00+13:00',
      resourceId: 'aircraft-8',
      backgroundColor: '#7f8c8d',
      extendedProps: {
        instructor: 'N/A',
        aircraft: 'TDL (PA-38 Tomahawk)',
        comments: '100 hour maintenance check'
      }
    },
  ];

  const renderEventContent = (eventInfo: EventContent) => {
    const tooltipId = `tooltip-${eventInfo.event.title}-${eventInfo.event.start}`;
    
    return (
      <>
        <div 
          className="fc-event-main-frame h-full flex items-center px-2"
          data-tooltip-id={tooltipId}
        >
          <div className="fc-event-title-container flex-1">
            <div className="fc-event-title">{eventInfo.event.title}</div>
          </div>
        </div>
        <Tooltip id={tooltipId} place="right">
          <div className="p-2 max-w-xs">
            <div className="font-semibold mb-1">{eventInfo.event.title}</div>
            <div className="text-sm">
              <p><span className="font-medium">Time:</span> {format(eventInfo.event.start, 'HH:mm')} - {format(eventInfo.event.end, 'HH:mm')}</p>
              {eventInfo.event.extendedProps?.instructor && (
                <p><span className="font-medium">Instructor:</span> {eventInfo.event.extendedProps.instructor}</p>
              )}
              {eventInfo.event.extendedProps?.aircraft && (
                <p><span className="font-medium">Aircraft:</span> {eventInfo.event.extendedProps.aircraft}</p>
              )}
              {eventInfo.event.extendedProps?.comments && (
                <p><span className="font-medium">Comments:</span> {eventInfo.event.extendedProps.comments}</p>
              )}
            </div>
          </div>
        </Tooltip>
      </>
    );
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Flight Scheduler</h1>
        <div className="flex gap-4 items-center">
          <button 
            onClick={() => {
              const calendarApi = calendarRef.current?.getApi();
              calendarApi?.prev();
            }}
            className="px-3 py-1 rounded border hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            onClick={() => {
              const calendarApi = calendarRef.current?.getApi();
              calendarApi?.today();
            }}
            className="px-3 py-1 rounded border hover:bg-gray-50"
          >
            Today
          </button>
          <button
            onClick={() => {
              const calendarApi = calendarRef.current?.getApi();
              calendarApi?.next();
            }}
            className="px-3 py-1 rounded border hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      </div>
      <div className="h-[800px]">
        <FullCalendar
          ref={calendarRef}
          plugins={[resourceTimelinePlugin, timeGridPlugin]}
          initialView="resourceTimelineDay"
          resources={resources}
          events={events}
          slotMinTime="07:00:00"
          slotMaxTime="21:00:00"
          slotDuration="00:30:00"
          headerToolbar={{
            left: '',
            center: 'title',
            right: ''
          }}
          resourceAreaWidth="250px"
          height="100%"
          editable={true}
          selectable={true}
          nowIndicator={true}
          allDaySlot={false}
          resourceOrder="order"
          resourceAreaHeaderContent=""
          timeZone="Pacific/Auckland"
          initialDate="2024-12-24"
          eventContent={renderEventContent}
          eventClassNames="h-full"
          datesSet={(dateInfo) => {
            // You can handle date changes here if needed
            console.log('Current date:', dateInfo.start);
          }}
        />
      </div>
    </div>
  );
};

export default SchedulerPage; 