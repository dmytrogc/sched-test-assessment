import { DATE_FORMAT_STR } from "@/constants/schedule";
import { format } from "date-fns";

const groupSessionsByDay = (sessions) => {
  const sessionsByDay = new Map();

  sessions.forEach((session) => {
    const day = format(session.session_start, DATE_FORMAT_STR);

    if (!sessionsByDay.has(day)) {
      sessionsByDay.set(day, []);
    }

    sessionsByDay.get(day).push(session);
  });

  // Convert to 2D array
  return Array.from(sessionsByDay.values());
};

export default groupSessionsByDay;
