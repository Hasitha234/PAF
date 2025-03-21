# PAF Application

This is a full-stack application with a Spring Boot backend and React frontend.

## Project Structure

- `/backend` - Spring Boot backend application
- `/frontend` - React frontend application

## Backend (Spring Boot)

### Prerequisites
- Java 17 or higher
- Maven

### Running the Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Build the project:
   ```bash
   mvn clean install
   ```

3. Run the application:
   ```bash
   mvn spring-boot:run
   ```

The backend server will start at http://localhost:8080.

## Frontend (React)

### Prerequisites
- Node.js and npm

### Running the Frontend

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

The frontend application will start at http://localhost:3000.

## API Endpoints

- `GET /api/hello` - Returns a simple greeting message

## Technologies Used

### Backend
- Spring Boot 3.2.3
- Spring Data JPA
- H2 Database
- Maven

### Frontend
- React
- Axios for API calls 