# Apna Property - Setup Guide

## Quick Start

1. **Run the application:**
   ```bash
   # Double-click start.bat or run:
   start.bat
   ```

2. **Access the application:**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000
   - Seed sample data: http://localhost:5000/seed

## Manual Setup

### Backend
```bash
cd Backend
npm install
npm run dev
```

### Frontend
```bash
npm install
npm run dev
```

### Create Sample Data
Visit: http://localhost:5000/seed

## Features

### ✅ Implemented
- User authentication (signup/login)
- Property listing with search and filters
- Responsive design
- SQLite in-memory database
- Sample data seeding
- Authentication context
- Protected routes

### 🔧 Available Functionality
- **Search & Filter**: By location, property type, area
- **Authentication**: Login/logout with JWT tokens
- **Property Management**: View properties, detailed listings
- **Responsive UI**: Works on desktop and mobile

### 📱 Pages
- Home page with featured properties
- Property listing with filters
- Property details
- User authentication (login/signup)
- About Us, Contact, Help pages
- Home loan calculator

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login

### Properties
- `GET /api/properties` - Get all properties (with filters)
- `GET /api/properties/:id` - Get single property
- `POST /api/properties` - Create property (auth required)
- `PUT /api/properties/:id` - Update property (auth required)
- `DELETE /api/properties/:id` - Delete property (auth required)

### Utility
- `GET /seed` - Create sample data
- `GET /` - API status

## Sample Login
- Email: demo@apnaproperty.com
- Password: password123

## Tech Stack
- **Frontend**: React, Tailwind CSS, Axios
- **Backend**: Node.js, Express, SQLite
- **Authentication**: JWT tokens
- **Database**: SQLite (in-memory)