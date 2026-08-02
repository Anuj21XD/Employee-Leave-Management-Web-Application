import type { Leave } from "../models/Leave";
import { getUserById, updateUser } from "./userService";
import type { User } from "../models/User";

const STORAGE_KEY = "leaveRequests";

export const getLeaves = (): Leave[] => {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data);
};

export const saveLeaves = (leaves: Leave[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(leaves));
};

export const addLeave = (leave: Leave): void => {
  const leaves = getLeaves();

  leaves.push(leave);

  saveLeaves(leaves);
};

export const getLeavesByEmployee = (employeeId: number): Leave[] => {
  return getLeaves().filter((leave) => leave.employeeId === employeeId);
};

export const updateLeave = (updatedLeave: Leave): void => {
  const leaves = getLeaves();

  const updatedLeaves = leaves.map((leave) =>
    leave.id === updatedLeave.id ? updatedLeave : leave,
  );

  saveLeaves(updatedLeaves);
};

export const deleteLeave = (id: number): void => {
  const leaves = getLeaves().filter((leave) => leave.id !== id);

  saveLeaves(leaves);
};

export const getPendingLeaves = (): Leave[] => {
  return getLeaves().filter((leave) => leave.status === "Pending");
};

export const approveLeave = (id: number): void => {
  const leaves = getLeaves();

  const leave = leaves.find((l) => l.id === id);

  if (!leave) return;

  leave.status = "Approved";

  saveLeaves(leaves);

  const user = getUserById(leave.employeeId);

  if (!user) return;

  const updatedUser: User = {
    ...user,
    leaveBalance: {
      ...user.leaveBalance,
    },
  };

  switch (leave.leaveType) {
    case "Casual Leave":
      updatedUser.leaveBalance.casual -= leave.numberOfDays;
      break;

    case "Sick Leave":
      updatedUser.leaveBalance.sick -= leave.numberOfDays;
      break;

    case "Earned Leave":
      updatedUser.leaveBalance.earned -= leave.numberOfDays;
      break;
  }

  updateUser(updatedUser);

  if (localStorage.getItem("currentUser")) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")!);

    if (currentUser.id === updatedUser.id) {
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    }
  }
};

export const rejectLeave = (id: number): void => {
  const leaves = getLeaves().map((leave) =>
    leave.id === id ? { ...leave, status: "Rejected" as const } : leave,
  );

  saveLeaves(leaves);
};

export const clearLeaves = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};
