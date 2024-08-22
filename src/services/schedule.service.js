import MockAdapter from "axios-mock-adapter";
import RoleJson from "@/assets/role.json";
import SessionJson from "@/assets/session.json";
import UserJson from "@/assets/user.json";

import axios from "axios";

const mockAdapterClient = new MockAdapter(axios);

mockAdapterClient.onGet("/api/sessions").reply(200, SessionJson);
mockAdapterClient.onGet("/api/roles").reply(200, RoleJson);
mockAdapterClient.onGet("/api/users").reply(200, UserJson);

export const getSessions = () => axios.get("/api/sessions");

export const getRoles = () => axios.get("/api/roles");

export const getUsers = () => axios.get("/api/users");
