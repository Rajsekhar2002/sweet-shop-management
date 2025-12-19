# Sweet Shop Management System

A full-stack web application for managing a sweet shop, built with Node.js, Express, SQLite, and React. It includes user authentication, sweets inventory management, and a user-friendly interface for browsing and purchasing sweets.

## Features

- **User Authentication**: Register and login with JWT-based authentication.
- **Dashboard**: View available sweets with images, categories, prices, and quantities.
- **Search Functionality**: Search for sweets by name or category.
- **Sweets Management**: View available sweets with search functionality.
- **Responsive UI**: Built with React for a modern, responsive user experience.
- **Database**: SQLite for local data storage with sample sweets data.

## Tech Stack

### Backend
- **Node.js** with **Express.js** for the server
- **TypeScript** for type safety
- **SQLite** for database
- **JWT** for authentication
- **bcrypt** for password hashing
- **CORS** for cross-origin requests

### Frontend
- **React** with **TypeScript**
- **React Router** for navigation
- **Axios** for API calls
- **Context API** for state management

### Development Tools
- **tsx** for running TypeScript
- **Jest** for testing
- **ESLint** for code linting

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project:
   ```bash
   npm run build
   ```
4. Start the server:
   ```bash
   npm start
   ```
   The backend will run on `http://localhost:3000`.

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:3001` 

## Usage

1. **Register**: Create a new account on the registration page.
2. **Login**: Log in with your credentials.
3. **Dashboard**: View all available sweets.
4. **Search Sweets**: Use the search bar to find specific sweets.
5. **View Sweets**: Click on a sweet to see details and purchase options.

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Sweets
- `GET /api/sweets` - Get all sweets (protected)
- `POST /api/sweets` - Add a new sweet (admin only)
- `PUT /api/sweets/:id` - Update a sweet (admin only)
- `DELETE /api/sweets/:id` - Delete a sweet (admin only)

## Project Structure

```
sweet-shop-management/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── app.ts
│   │   └── server.ts
│   ├── tests/
│   ├── package.json
│   ├── tsconfig.json
│   └── jest.config.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   └── tsconfig.json
├── database.db
└── README.md
```



## My AI Usage

I used GitHub Copilot as the primary AI tool throughout the development of this project.

- **Backend Development**: Copilot assisted in generating boilerplate code for the backend structure, including models, services, controllers, and routes. It provided initial TypeScript types, error handling patterns, and database queries. For example, it suggested the structure for the User and Sweet models, authentication middleware, and API route handlers.
- **Frontend Development**: Copilot helped create React components, such as the Login, Register, Dashboard, and Sweets components. It also assisted with setting up the AuthContext for state management and Axios configurations for API calls.
- **Code Quality**: Copilot suggested improvements for code readability, such as adding proper error handling, using async/await patterns, and structuring the project with clear separation of concerns.
- **Reflection**: AI tools like Copilot significantly improved development speed by providing quick code snippets and reducing boilerplate writing. However, all AI-generated code was reviewed and modified to ensure it fit the project requirements, security standards, and best practices. This required manual verification for correctness, especially in areas like authentication logic and database interactions. Overall, AI enhanced productivity but emphasized the importance of human oversight for quality and security.



## Screenshots

![image alt](https://github.com/Rajsekhar2002/sweet-shop-management/blob/master/login.png?raw=true)
![image alt](https://github.com/Rajsekhar2002/sweet-shop-management/blob/master/register.png?raw=true)
![image alt](https://github.com/Rajsekhar2002/sweet-shop-management/blob/master/sweetdashboard.png?raw=true)
![image alt](https://github.com/Rajsekhar2002/sweet-shop-management/blob/master/sweet1.png?raw=true)
![image alt](https://github.com/Rajsekhar2002/sweet-shop-management/blob/master/sweet2.png?raw=true)


