import { compareAsc } from "date-fns";

const sortSessions = (sessions) => {
  const sorted = [...sessions].sort((a, b) =>
    compareAsc(a.session_start, b.session_start)
  );

  return sorted;
};

export default sortSessions;
