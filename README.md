# Multi-Step Form with Validation

## Project Overview

This is a multi-step form application built using Next.js 14 with App Router, demonstrating advanced form handling, validation, and state management.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Styling**: TailwindCSS
- **Language**: TypeScript

## Features

### Form Steps
1. **Personal Information**
   - Full Name (required)
   - Email (required, valid format)
   - Phone Number (required, min 10 digits)

2. **Address Details**
   - Street Address (required)
   - City (required)
   - Zip Code (required, numeric, min 5 digits)

3. **Account Setup**
   - Username (required, min 4 characters)
   - Password (required, min 6 characters, min 1 number, 1 uppercase, 1 lowercase)
   - Confirm Password (must match password)

### Key Functionalities
- Step-by-step form navigation
- Zod validation
- Real-time form validation
- "Next" and "Previous" buttons
- Data logged in console
- Error messages under each field
- Data summary before submission
- React Query for API simulation
- Dark mode support via `next-themes`
- Responsive design
- Confetti effect on successful submission


## Prerequisites

- Node.js (v18 or later)
- npm 

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/multi-step-form-with-validation.git
```

2. Install dependencies
```bash
npm i --legacy-peer-deps
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser


## Screenshots

Placeholder 
