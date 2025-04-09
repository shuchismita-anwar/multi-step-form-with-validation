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
   - Password (required, min 6 characters)
   - Confirm Password (must match password)

### Key Functionalities
- Step-by-step form navigation
- Real-time form validation
- Error message display
- Data summary before submission
- Responsive design
- Optional dark mode support

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

## Deployment

The project is optimized for Vercel deployment, but can be deployed on any platform supporting Next.js.

## Screenshots

Placeholder 


## Contact

Your Name - [Your Email]

Project Link: [https://github.com/yourusername/multi-step-form-with-validation](https://github.com/yourusername/multi-step-form-with-validation)