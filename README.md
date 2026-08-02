# Employee Leave Management System

A modern web-based Employee Leave Management System built using **React**, **TypeScript**, and **Vite**. The application provides separate interfaces for Employees and Managers to streamline the leave request and approval process while following a professional Git workflow.

---

## Features

### Authentication & Security

- Employee and Manager login
- Role-based authentication
- Protected routes
- Session management using Local Storage
- Logout functionality

---

## Employee Module

### Employee Dashboard

- Personalized dashboard
- Dynamic leave balance cards
- Recent leave requests
- Quick navigation actions

### Apply Leave

- Apply different types of leave
- Automatic leave duration calculation
- Input validation
- Leave balance validation
- Prevents applying when balance is insufficient
- Optional supporting document upload

### Leave History

- View complete leave history
- Leave status tracking
- Automatic updates after manager action

### Dynamic Leave Balance

- Displays real-time available leave balance
- Automatically updates after leave approval
- Supports:
  - Casual Leave
  - Sick Leave
  - Earned Leave

---

## Manager Module

### Manager Dashboard

- Dashboard overview
- Pending Requests count
- Approved Requests count
- Rejected Requests count
- Employee count

### Leave Request Management

- View all employee leave requests
- Approve leave requests
- Reject leave requests
- Dynamic status updates
- Automatic employee leave balance deduction
- Prevent approval when leave balance is insufficient

---

## Business Logic

- Dynamic leave balance management
- Automatic leave duration calculation
- Real-time dashboard updates
- Leave approval workflow
- Leave rejection workflow
- Employee and Manager synchronization
- Local Storage persistence

---

## Project Structure

```
src/
│
├── components/
│   ├── auth/
│   ├── common/
│   ├── dashboard/
│   ├── employee/
│   ├── leave/
│   └── manager/
│
├── data/
├── hooks/
├── models/
├── pages/
│   ├── Employee/
│   ├── Login/
│   └── Manager/
│
├── routes/
├── services/
├── styles/
└── utils/
```

---

## Technologies Used

- React
- TypeScript
- Vite
- React Router DOM
- Local Storage API
- CSS

---

## Current Workflow

### Employee

1. Login
2. View Dashboard
3. Apply Leave
4. View Leave History
5. Logout

### Manager

1. Login
2. View Dashboard
3. Review Leave Requests
4. Approve / Reject Requests
5. Leave Balance Updates Automatically
6. Logout

---

## Test Accounts

### Employees

| Username | Password |
|----------|----------|
| anuj | 1234 |
| rahul | 1234 |
| priya | 1234 |
| amit | 1234 |
| sneha | 1234 |
| vikram | 1234 |

### Managers

| Username | Password |
|----------|----------|
| manager1 | admin123 |
| manager2 | admin123 |

---

## Git Workflow

This project follows a feature-branch workflow.

```
main
│
└── develop
    ├── feature/login-role-selection
    ├── feature/employee-dashboard
    ├── feature/apply-leave-form
    ├── feature/leave-history
    └── feature/manager-dashboard
```

Each feature is developed in its own branch, reviewed through Pull Requests, and merged into the `develop` branch before release.

---

## Future Enhancements

- Search and Filtering
- Responsive Design
- Charts & Analytics
- Email Notifications
- Backend Integration
- Database Support
- Unit Testing
- CI/CD Pipeline

---

## Screenshots

> Screenshots will be added after project completion.

---

## Author

**Anuj Mahajan**

GitHub: https://github.com/Anuj21XD

---
