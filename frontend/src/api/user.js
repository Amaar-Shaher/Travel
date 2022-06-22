import client from "./client";

const profile = () => client.get("/auth/users/me/");

export default {
  profile,
};
