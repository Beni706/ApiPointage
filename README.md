# ApiPointage Project

This project is an API for managing a school system, allowing for the management of students (Apprenants), teachers (Enseignants), administrators (Administrateurs), and attendance records (Presence). The API is built using Node.js and Prisma, with SQLite as the database.

## Features

- **Apprenants**: 
  - Create, read, update, and delete student records.
  - Manage student details including name, class, gender, and guardian information.

- **Enseignants**: 
  - Create, read, update, and delete teacher records.
  - Manage teacher details including name and other relevant information.

- **Administrateurs**: 
  - Create, read, update, and delete administrator records.
  - Manage administrator details including name, email, and password.

- **Presence**: 
  - Create, read, update, and delete attendance records.
  - Manage attendance details including date, arrival time, departure time, and presence status.

## Project Structure

```
ApiPointage
├── controllers
│   ├── apprenantController.js
│   ├── enseignantController.js
│   ├── administrateurController.js
│   └── presenceController.js
├── routes
│   ├── apprenantRoutes.js
│   ├── enseignantRoutes.js
│   ├── administrateurRoutes.js
│   └── presenceRoutes.js
├── prisma
│   └── schema.prisma
├── src
│   ├── app.js
│   └── server.js
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd ApiPointage
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up the database:
   - Ensure you have SQLite installed and configured.
   - Update the `DATABASE_URL` in your environment variables or `.env` file.

5. Run the migrations:
   ```
   npx prisma migrate dev --name init
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```

2. The API will be available at `http://localhost:3000`.

## API Endpoints

- **Apprenants**
  - `GET /apprenants`: Retrieve all students.
  - `GET /apprenants/:id`: Retrieve a student by ID.
  - `POST /apprenants`: Create a new student.
  - `PUT /apprenants/:id`: Update a student by ID.
  - `DELETE /apprenants/:id`: Delete a student by ID.

- **Enseignants**
  - `GET /enseignants`: Retrieve all teachers.
  - `GET /enseignants/:id`: Retrieve a teacher by ID.
  - `POST /enseignants`: Create a new teacher.
  - `PUT /enseignants/:id`: Update a teacher by ID.
  - `DELETE /enseignants/:id`: Delete a teacher by ID.

- **Administrateurs**
  - `GET /administrateurs`: Retrieve all administrators.
  - `GET /administrateurs/:id`: Retrieve an administrator by ID.
  - `POST /administrateurs`: Create a new administrator.
  - `PUT /administrateurs/:id`: Update an administrator by ID.
  - `DELETE /administrateurs/:id`: Delete an administrator by ID.

- **Presence**
  - `GET /presence`: Retrieve all attendance records.
  - `GET /presence/:id`: Retrieve an attendance record by ID.
  - `POST /presence`: Create a new attendance record.
  - `PUT /presence/:id`: Update an attendance record by ID.
  - `DELETE /presence/:id`: Delete an attendance record by ID.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.