export type LeaveType =
  | "Casual Leave"
  | "Sick Leave"
  | "Earned Leave"
  | "Maternity Leave"
  | "Paternity Leave"
  | "Work From Home";

export type LeaveStatus =
  | "Pending"
  | "Approved"
  | "Rejected"
  | "Cancelled";

export interface Leave {
  id: number;
  employeeId: number;
  employeeName: string;

  leaveType: LeaveType;

  startDate: string;
  endDate: string;

  numberOfDays: number;

  reason: string;

  status: LeaveStatus;

  appliedOn: string;

  rejectionReason?: string;
}