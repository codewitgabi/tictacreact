import { io } from "socket.io-client";
import { getSessionToken } from "./utils";

const URL = import.meta.env.VITE_SOCKET_HOST;

export const socket = io(URL, {
  retries: 5,
  auth: {
    token: getSessionToken(),
  },
});
console.log(socket);
