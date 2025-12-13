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
   The frontend will run on `http://localhost:3001` (to avoid port conflicts with the backend).

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

## Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm test
```

### Test Report
Run the backend tests to ensure all functionality works correctly. Example output:

```
PASS tests/auth.test.ts
  ✓ should register a new user (50ms)
  ✓ should login a user (30ms)
PASS tests/sweet.test.ts
  ✓ should get all sweets (40ms)
  ✓ should add a new sweet (35ms)

Test Suites: 2 passed, 2 total
Tests: 4 passed, 4 total
Snapshots: 0 total
Time: 2.5s
```

## My AI Usage

I used GitHub Copilot as the primary AI tool throughout the development of this project.

- **Backend Development**: Copilot assisted in generating boilerplate code for the backend structure, including models, services, controllers, and routes. It provided initial TypeScript types, error handling patterns, and database queries. For example, it suggested the structure for the User and Sweet models, authentication middleware, and API route handlers.
- **Frontend Development**: Copilot helped create React components, such as the Login, Register, Dashboard, and Sweets components. It also assisted with setting up the AuthContext for state management and Axios configurations for API calls.
- **Code Quality**: Copilot suggested improvements for code readability, such as adding proper error handling, using async/await patterns, and structuring the project with clear separation of concerns.
- **Reflection**: AI tools like Copilot significantly improved development speed by providing quick code snippets and reducing boilerplate writing. However, all AI-generated code was reviewed and modified to ensure it fit the project requirements, security standards, and best practices. This required manual verification for correctness, especially in areas like authentication logic and database interactions. Overall, AI enhanced productivity but emphasized the importance of human oversight for quality and security.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

### Co-author Commits
If AI tools are used in commits, attribute them as co-authors. At the end of your commit message, add two empty lines, followed by the co-author trailer.

Example:
```
git commit -m "feat: Implement user registration endpoint

Used an AI assistant to generate the initial boilerplate for the controller and service, then manually added validation logic.

Co-authored-by: GitHub Copilot <copilot@github.com>"
```

## License

This project is licensed under the ISC License.

## Screenshots

### Dashboard
![Dashboard Screenshot](screenshots/dashboard.png)

### Sweets Page
![Sweets Page Screenshot](screenshots/sweets.png)

### Login Page
![Login Page Screenshot](screenshots/login.png)

(Add actual screenshots in the `screenshots/` folder)

## Contact

For questions or support, please open an issue on GitHub.