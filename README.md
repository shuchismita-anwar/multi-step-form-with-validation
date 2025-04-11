# 🌟 Multi-Step Form with Validation

## 🚀 Project Overview

This is a responsive and accessible multi-step registration form built with **Next.js 14 (App Router)**. It showcases advanced form handling, input validation, conditional rendering, and a polished UI/UX with dark mode support.

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Form Handling:** React Hook Form
- **Validation:** Zod
- **Styling:** TailwindCSS
- **Type System:** TypeScript
- **Dark Mode:** `next-themes`
- **State & API Sim:** React Query (optional)

---

## ✨ Features

### 🧾 Step-wise Form Structure
1. **Personal Information**
   - Full Name (required)
   - Email (required, must be valid)
   - Phone Number (required, minimum 10 digits)

2. **Address Details**
   - Street Address
   - City
   - Zip Code (minimum 5 digits)

3. **Account Setup**
   - Username (min 4 characters)
   - Password (min 6 chars, 1 number, 1 upper, 1 lower)
   - Confirm Password (must match)

4. **Summary & Confirmation**
   - Preview all entered data before final submission
   - Confetti effect on success
   - Console logs data

### ✅ Key Functionalities

- Real-time validation using **Zod**
- Form navigation (`Next` / `Previous`)
- Error messages under each field
- Dark/Light theme toggle
- Responsive and mobile-friendly layout

---

## 📸 Screenshots

### ☀️ Light Mode — Personal Info Step
![Light Mode - Personal Info](/images/1.png)

### 🌙 Dark Mode — Personal Info Step
![Dark Mode - Personal Info](/images/2.png)

### ❌ Validation Errors Displayed
![Validation Errors](/images/3.png)

### 🏡 Address Entry Step
![Address Step](/images/4.png)

### 🔐 Password Rules Feedback
![Account Setup Step](/images/5.png)

### 🧾 Summary Before Submission
![Summary Page](/images/6.png)

### 🎉 Success Message (Toast + Confetti)
![Submission Success](/images/7.png)

---

## ⚙️ Prerequisites

- Node.js `v18` or later
- npm

