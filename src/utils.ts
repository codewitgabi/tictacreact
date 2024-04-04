export const createSession = (token: string) => {
  sessionStorage.setItem("token", token);
};

export const getSessionToken = () => {
  if (!sessionStorage.getItem("token")) {
    createSession(`${Math.floor(Math.random() * 1000000000)}`);
  }
  return sessionStorage.getItem("token");
};
