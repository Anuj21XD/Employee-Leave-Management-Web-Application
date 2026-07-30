export interface User {
  id: number;
  name: string;
  username: string;
  password: string;
  role: "employee" | "manager";
  leaveBalance: {
    casual: number;
    sick: number;
    earned: number;
  };
}