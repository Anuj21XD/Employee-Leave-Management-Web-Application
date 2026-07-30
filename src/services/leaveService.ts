import type { Leave } from "../models/Leave";

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

export const getLeavesByEmployee = (
  employeeId: number
): Leave[] => {
  return getLeaves().filter(
    (leave) => leave.employeeId === employeeId
  );
};

export const updateLeave = (updatedLeave: Leave): void => {
  const leaves = getLeaves();

  const updatedLeaves = leaves.map((leave) =>
    leave.id === updatedLeave.id ? updatedLeave : leave
  );

  saveLeaves(updatedLeaves);
};

export const deleteLeave = (id: number): void => {
  const leaves = getLeaves().filter(
    (leave) => leave.id !== id
  );

  saveLeaves(leaves);
};

export const clearLeaves = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};