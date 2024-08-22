import { getRoles, getSessions, getUsers } from "@/services/schedule.service";
import { useEffect, useState } from "react";
import groupSessionsByDay from "@/utils/groupSessionsByDay";
import sortSessions from "@/utils/sortSessions";

const useScheduleData = () => {
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const [{ data: sessions }, { data: roles }, { data: users }] =
          await Promise.all([getSessions(), getRoles(), getUsers()]);

        // Filter inactive sessions
        const activeSessions = sessions.filter(
          (session) => session.active === "Y"
        );

        // Sort session by date
        const sortedSessions = sortSessions(activeSessions);

        const usersMap = users.reduce((accum, user) => {
          accum[user.id] = user;

          return accum;
        }, {});

        const rolesMap = roles.reduce((accum, role) => {
          const userData = usersMap[role.userid];
          if (!userData) return accum;

          const data = [{ ...role, ...userData }];
          accum[role.sessionid] = accum[role.sessionid]
            ? [...accum[role.sessionid], ...data]
            : data;

          return accum;
        }, {});

        // Include roles data
        const sessionsWithRoles = sortedSessions.map((session) => ({
          ...session,
          roles: rolesMap[session.id] ?? [],
        }));
        const sessionsGroupedByDay = groupSessionsByDay(sessionsWithRoles);

        setScheduleData(sessionsGroupedByDay);
      } catch (error) {
        console.error("Something went wrong: ", error);

        alert("Something went wrong, please refresh the page");
      }
    })();
  }, []);

  return { scheduleData };
};

export default useScheduleData;
