import { users } from "../data/users";
import type { User } from "../models/User";

const STORAGE_KEY = "users";

export const getUsers = (): User[] => {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (stored) {
    return JSON.parse(stored);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));

  return users;
};

export const saveUsers = (users: User[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

export const getUserById = (id: number): User | undefined => {
  return getUsers().find((user) => user.id === id);
};

export const updateUser = (updatedUser: User) => {
  const users = getUsers();

  const updatedUsers = users.map((user) =>
    user.id === updatedUser.id ? updatedUser : user
  );

  saveUsers(updatedUsers);
};