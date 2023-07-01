import { FC, ReactNode } from "react";

interface ScheduleBox {
  weekday: string;
  children: ReactNode;
}

const ScheduleBox: FC<ScheduleBox> = ({ weekday, children }) => {
  const isWeekend =
    weekday.toLowerCase().includes("sobota") ||
    weekday.toLowerCase().includes("niedziela");

  const gymStart = isWeekend ? "08:00" : "07:00";
  const gymTo = isWeekend ? "18:00" : "22:00";

  return (
    <div className="border border-gray-950">
      <div className="w-full bg-yellow-400 text-center p-2 mb-2 uppercase font-bold">
        <h3>{weekday}</h3>
      </div>
      <div className="flex flex-col gap-4 px-6 py-2">
        <div className="flex items-center justify-around border-b-4 border-gray-800">
          <span className="w-2/5 text-start">
            <time>{gymStart}</time>-<time className="block">{gymTo}</time>
          </span>
          <span className="font-bold w-3/5 uppercase text-end">Siłownia</span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ScheduleBox;
