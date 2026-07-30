import { users } from "../data/users";
import type { User } from "../models/User";

export const login = (
  username: string,
  password: string,
  role: "employee" | "manager"
): User | null => {
  const user = users.find(
    (u) =>
      u.username === username &&
      u.password === password &&
      u.role === role
  );

  return user || null;
};