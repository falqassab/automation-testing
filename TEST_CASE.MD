
# Test Cases Documentation
## Authentication Tests  

### 1. User Signup Tests (`signup.spec.ts`)

| **Test ID**   | **Test Case**                     | **Description** |
|---------------|-----------------------------------|----------------|
| **TC-SU-001** | Successful Sign Up                | User can sign up successfully with a unique username and valid password. Dialog shows "Sign up successful". |
| **TC-SU-002** | Duplicate Username                | Sign up fails when the username already exists. Dialog shows "This user already exists." |
| **TC-SU-003** | Empty Username                    | Sign up fails when the username field is empty. Dialog shows "Please fill out Username and Password." |
| **TC-SU-004** | Empty Password                    | Sign up fails when the password field is empty. Dialog shows "Please fill out Username and Password." |


---
### 2. User Login Tests (`login.spec.ts`)

| **Test ID**   | **Test Case**                    | **Description** |
|---------------|-----------------------------------|------------------|
| **TC-LI-001** | Valid Login                      | User can successfully log in with valid username and password. Welcome message is displayed and logout is successful. |
| **TC-LI-002** | Incorrect Password               | Login fails when a valid username is entered with an incorrect password. An alert dialog appears with the message "Wrong password". |
| **TC-LI-003** | Unregistered Username            | Login fails when an unregistered/non-existent username is used. An alert displays "User does not exist". |
| **TC-LI-004** | Empty Username & Password        | Login attempt with both username and password empty triggers alert "Please fill out Username and Password." |
| **TC-LI-005** | Empty Username                   | Login fails when username is empty and password is entered. Alert shows "Please fill out Username and Password." |
| **TC-LI-006** | Empty Password                   | Login fails when password is empty and username is entered. Alert shows "Please fill out Username and Password." |

---
  
### 3. User Logout Tests (`logout.spec.ts`)

| **Test ID**   | **Test Case**                             | **Description** |
|---------------|-------------------------------------------|----------------|
| **TC-LO-001** | Successful Logout                          | User can log out successfully after logging in. Logout button is visible before logout, and login button is visible after logout. |
| **TC-LO-002** | Logout Button Disappears                   | Logout button disappears after the user logs out. |
| **TC-LO-003** | Access Protected Page After Logout         | User cannot access protected pages after logging out. Welcome message is hidden and login button is visible. |
| **TC-LO-004** | Remain Logged Out After Page Reload        | User remains logged out even after reloading the page. Login button is visible and welcome message is hidden. |
| **TC-LO-005** | Reset User-Specific Elements on Logout    | Logging out resets user-specific elements. Welcome message and any user-related content are cleared. |


---
## Notes

- Include **cross-browser tests**: Chrome, Firefox, Webkit.
- Include **mobile-friendly tests**: emulate devices in Playwright.
- Negative test cases include: empty fields, invalid credentials, unregistered users.
