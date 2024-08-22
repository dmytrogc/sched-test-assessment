import "./App.css";
import { DATE_FORMAT_STR } from "@/constants/schedule";
import SessionCard from "@/components/SessionCard";
import { format } from "date-fns";
import useScheduleData from "@/hooks/useScheduleData";

function App() {
  const { scheduleData } = useScheduleData();

  return scheduleData.map((daySessions) => {
    const { session_start: sessionStart } = daySessions[0];

    return (
      <div key={sessionStart} className="text-left">
        <h2 className="my-6 text-2xl font-bold text-slate-100">
          {format(sessionStart, DATE_FORMAT_STR)}
        </h2>

        {daySessions.map((session) => (
          <div key={session.id} className="flex items-stretch">
            <div className="grow-0 text-right text-sm text-slate-400 pr-4 min-w-[15%]">
              {format(sessionStart, "h:mmaaa z")}
            </div>
            <div className="pl-4 flex-1 w-full border-l-2 border-slate-400">
              <SessionCard
                name={session.name}
                description={session.description}
                sessionType={session.session_type}
                roles={session.roles}
              />
            </div>
          </div>
        ))}
      </div>
    );
  });
}

export default App;
