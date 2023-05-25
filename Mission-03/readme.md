# Be A NoSQL Backend Brainiac

# Authentication service

### We are building a university management system where we have three types of roles such as Admin , Student , Faculty.

# Functional Requirements:

- Student

  - Student can login and log out
  - Student can manage and update their profile.
  - Student can update certain fields
  - Student can enroll in a semester.
  - Student can enroll in offered courses for a specific semester.
  - Student can pay their tuition fees through offline or online.(Partial / Full Payment)
  - Student can see their transaction histories.
  - Student can see their class routines.
  - Student can see their notice board and events
  - Student can see their result (Full / Semester Wise).
  - Student can evaluate their teachers.

- Admin
  - Admin can log in and log out
  - Admin can manage and update their profile.
  - Admin can only update certain fields.
  - Admin can manage user accounts
    - Block/Unblock
    - Change Password
    - Forcefully Log out
  - Admin can manage multiple process:
    - Semester
    - Offered Courses
    - Section
    - Faculty
    - Student
    - Building
    - Room
    - Payment
    - Permissions
    - Activity
- Faculty:
  - Faculty can log in and log out
  - Faculty can manage and update their profile.
  - Faculty can only update certain fields.
  - Faculty can manage user accounts
  - Faculty can manage student grades
  - Access to Academic and Personal Information.
  - Faculty can manage their lecture resources

---

# Module

**Models**

**Permission:**

- title

**UserPermission:**

- permissionId
- userId

**User:**

- Id
- role
- Password
- createdAt
- updatedAt
- studentId || adminId || facultyId

**Student**:

- id
- name
  - firstName
  - middleName
  - lastName
- gender
- dateOfBirth
- guardian
- contactNo
- emergencyContactNo
- email
- presentAddress
- permanentAddress
- department
- Subject

**Admin**:

- Id
- name
  - firstName
  - middleName
  - lastName
- gender
- dateOfbirth
- email
- contactNo
- emergencyContactNo
- department
- designation

**Faculty**:

- Id
- name
  - firstName
  - middleName
  - lastName
- gender
- dateOfBirth
- Email
- contactNo
- emergencyContactNo
- department
- faculty
- Designation
