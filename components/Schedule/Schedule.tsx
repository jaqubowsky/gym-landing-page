import ScheduleBox from "./ScheduleBox";
import ScheduleEvent from "./ScheduleEvent";
import timetable from "./timetable";

const ScheduleGrid = () => {
  const scheduleBoxes = timetable.map((scheduleEvent) => {
    return (
      <ScheduleBox weekday={scheduleEvent.weekday} key={scheduleEvent.weekday}>
        {scheduleEvent.events.map((event) => (
          <ScheduleEvent
            eventName={event.eventName}
            start={event.start}
            to={event.to}
            key={event.eventName}
          />
        ))}
      </ScheduleBox>
    );
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {scheduleBoxes}
    </div>
  );
};

export default ScheduleGrid;
