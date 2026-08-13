# Employee Leave Management System

A web-based Employee Leave Management System built using **React, TypeScript, and Vite**. The application provides separate interfaces for Employees and Managers to manage the complete leave application, review, approval, rejection, cancellation, and leave-balance workflow.

The project follows a **feature-branch Git workflow with Pull Requests and code reviews**.

---

## Features

### Authentication & Security

- Employee and Manager login
- Role-based authentication
- Protected routes
- Session management using Local Storage
- Logout functionality
- Separate Employee and Manager workflows

---

# Employee Module

## Employee Dashboard

- Personalized employee dashboard
- Dynamic leave balance cards
- Recent leave requests
- Quick navigation to leave-related actions
- Leave balance updates after manager approval

---

## Apply Leave

Employees can submit leave requests through a validated leave application form.

### Supported Leave Types

- Casual Leave
- Sick Leave
- Earned Leave

Unsupported leave types such as Maternity Leave, Paternity Leave, and Work From Home have been removed because their corresponding business rules are not currently implemented.

### Leave Application Features

- Start date and end date selection
- Automatic leave duration calculation
- Reason for leave
- Leave balance display based on the logged-in employee
- Leave balance validation
- Prevents requests exceeding available leave balance
- Prevents overlapping Pending or Approved leave requests
- Rejected and Cancelled requests do not block new leave applications

---

## Leave History

Employees can view their previously submitted leave requests.

### Information Displayed

- Leave type
- Start date
- End date
- Number of days
- Reason
- Application date
- Current status
- Cancellation action for Pending requests

### Supported Statuses

- Pending
- Approved
- Rejected
- Cancelled

Cancelled leave requests remain in the employee's leave history with a `Cancelled` status.

---

# Manager Module

## Manager Dashboard

The Manager Dashboard provides an overview of leave activity and employee information.

### Dashboard Information

- Pending leave requests
- Approved leave requests
- Rejected leave requests
- Employee count
- Leave-related quick actions

---

## Leave Request Management

Managers can review employee leave requests through a dedicated review page.

### Manager Actions

- View employee leave requests
- Search employees
- Filter by leave type
- Filter by status
- Sort requests
- Approve Pending leave requests
- Reject Pending leave requests
- View leave reasons
- View application dates
- View leave duration

Actions are displayed only for requests with a `Pending` status.

---

## Leave Approval

When a manager approves a leave request:

- The request status changes to `Approved`
- The corresponding employee's leave balance is deducted
- The updated balance is stored
- The employee's displayed balance is updated when the data is refreshed

Supported balance categories:

- Casual Leave
- Sick Leave
- Earned Leave

---

## Leave Rejection

Managers can reject Pending leave requests.

- Rejected requests remain in leave history
- The status changes to `Rejected`
- A rejection reason can be provided by the manager
- Rejected leave does not reduce the employee's leave balance

---

## Leave Cancellation

Employees can cancel Pending leave requests.

- Only Pending requests can be cancelled
- Cancelled requests remain in leave history
- Status changes to `Cancelled`
- Cancellation does not reduce the employee's leave balance
- Approved, Rejected, and already Cancelled requests cannot be cancelled

---

# Business Rules

The application currently implements the following business rules:

- Leave balance is retrieved from the logged-in user's stored mock data.
- Employees cannot apply for more leave than their available balance.
- Employees cannot submit overlapping Pending or Approved leave requests.
- Rejected and Cancelled requests do not prevent a new leave request for the same dates.
- Only Pending requests can be cancelled.
- Cancellation does not affect leave balance.
- Only Pending requests can be approved or rejected.
- Approved leave deducts the appropriate number of days from the employee's balance.
- Rejected leave does not affect leave balance.
- Cancelled leave does not affect leave balance.
- Unsupported leave types are not available in the application workflow.

---

# Data Persistence

The current application uses the browser's **Local Storage API** as a mock persistence layer.

Data such as:

- Users
- Current logged-in user
- Leave requests
- Leave statuses
- Leave balances

are stored and retrieved through service-layer functions.

This provides persistence between page refreshes without requiring a backend database.

---

# Project Architecture

The project follows a modular React architecture separating UI components, pages, models, services, routes, and mock data.

```text
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
│
├── hooks/
│
├── models/
│
├── pages/
│   ├── Employee/
│   ├── Login/
│   └── Manager/
│
├── routes/
│
├── services/
│
├── styles/
│
└── utils/

## Technologies Used

- **React**
- **TypeScript**
- **Vite**
- **React Router DOM**
- **Local Storage API**
- **CSS**

---

## Application Workflow

### Employee Workflow

```text
Login
  ↓
Employee Dashboard
  ↓
Apply Leave
  ↓
Validation
  ↓
Pending Request
  ↓
Manager Review
  ↓
 ┌───────────────┬───────────────┐
 ↓               ↓               ↓
Approved       Rejected       Cancelled
 ↓               ↓               ↓
Balance        No Balance     No Balance
Deducted       Deduction      Deduction
```

### Manager Workflow

```text
Login
  ↓
Manager Dashboard
  ↓
Review Leave Requests
  ↓
Search / Filter / Sort
  ↓
Select Pending Request
  ↓
 ┌──────────────┐
 ↓              ↓
Approve       Reject
 ↓              ↓
Balance       Rejection
Deducted       Reason
```

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

> **Note:** These are mock credentials intended only for development and demonstration purposes.

---

## Git Workflow

The project follows a feature-branch workflow.

```text
main
│
└── develop
    │
    ├── feature/login-role-selection
    ├── feature/employee-dashboard
    ├── feature/apply-leave-form
    ├── feature/leave-history
    ├── feature/manager-dashboard
    ├── feature/manager-review-page
    └── feature/dynamic-leave-balance
```

### Development Workflow

1. Create a separate feature branch from `develop`.
2. Implement the feature or enhancement.
3. Test the changes locally.
4. Commit the changes with a descriptive commit message.
5. Push the feature branch to GitHub.
6. Create a Pull Request targeting `develop`.
7. Address review comments.
8. Push additional commits to the same branch when changes are requested.
9. Merge the Pull Request after review and approval.

Each Pull Request is intended to remain focused on a specific feature or enhancement.

---

## Validation & Error Handling

The application performs frontend validation for important leave workflows, including:

- Missing leave type
- Missing start date
- Missing end date
- Invalid date ranges
- Insufficient leave balance
- Overlapping leave requests
- Missing leave reason
- Invalid user/session state
- Invalid manager actions

---

## Future Enhancements

The following improvements are planned for future iterations:

- Complete Employee Leave History search and filtering
- Manager-to-employee mapping
- More realistic initial mock leave-request data
- Automated/component testing
- Complete responsive design for desktop and mobile
- Improved documentation
- Charts and analytics
- Email notifications
- Backend API integration
- Database integration
- CI/CD pipeline

---

## Testing

The application is currently tested through local manual workflow verification.

Important workflows include:

- Employee login
- Manager login
- Leave application
- Leave validation
- Leave balance validation
- Overlapping leave validation
- Leave cancellation
- Manager approval
- Manager rejection
- Leave balance deduction
- Status updates
- Local Storage persistence
- Manager search, filtering, and sorting

Automated/component testing will be added as part of the testing phase.

---

## Screenshots

Screenshots will be added after the major application workflows and responsive behaviour are finalized.

---

## Author

**Anuj Mahajan**

GitHub: **[Anuj21XD](https://github.com/Anuj21XD)**
