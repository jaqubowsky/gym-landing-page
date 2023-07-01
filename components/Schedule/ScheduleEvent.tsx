import { FC } from "react";

interface ScheduleEvent {
  start: string;
  to: string;
  eventName: string;
}

const ScheduleEvent: FC<ScheduleEvent> = ({ start, to, eventName }) => {
  return (
    <div className="flex items-center">
      <span className="w-2/5 text-start">
        <time>{start}</time>-<time className="block">{to}</time>
      </span>
      <span className="w-3/5 text-end font-bold uppercase">{eventName}</span>
    </div>
  );
};

export default ScheduleEvent;