import type { User } from "../models/User";

export const users: User[] = [
  {
    id: 1,
    name: "Anuj Mahajan",
    username: "anuj",
    password: "1234",
    role: "employee",
    leaveBalance: {
      casual: 8,
      sick: 12,
      earned: 15,
    },
  },
  {
    id: 2,
    name: "Rahul Sharma",
    username: "rahul",
    password: "1234",
    role: "employee",
    leaveBalance: {
      casual: 10,
      sick: 10,
      earned: 18,
    },
  },
  {
    id: 3,
    name: "Priya Verma",
    username: "priya",
    password: "1234",
    role: "employee",
    leaveBalance: {
      casual: 7,
      sick: 14,
      earned: 16,
    },
  },
  {
    id: 4,
    name: "Amit Patel",
    username: "amit",
    password: "1234",
    role: "employee",
    leaveBalance: {
      casual: 9,
      sick: 11,
      earned: 17,
    },
  },
  {
    id: 5,
    name: "Sneha Joshi",
    username: "sneha",
    password: "1234",
    role: "employee",
    leaveBalance: {
      casual: 8,
      sick: 13,
      earned: 15,
    },
  },
  {
    id: 6,
    name: "Vikram Singh",
    username: "vikram",
    password: "1234",
    role: "employee",
    leaveBalance: {
      casual: 6,
      sick: 12,
      earned: 20,
    },
  },
  {
    id: 7,
    name: "Neha Kapoor",
    username: "manager1",
    password: "admin123",
    role: "manager",
    leaveBalance: {
      casual: 15,
      sick: 15,
      earned: 20,
    },
  },
  {
    id: 8,
    name: "Rohit Mehta",
    username: "manager2",
    password: "admin123",
    role: "manager",
    leaveBalance: {
      casual: 15,
      sick: 15,
      earned: 20,
    },
  },
];