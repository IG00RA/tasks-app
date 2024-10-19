# How to Launch the Back-End (Node.js + Nest.js)

This guide will help you set up and run the back-end part of the project.

## Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v14 or later)
- **npm** (v6 or later)
- **PostgreSQL** database server

## Steps to Run the Back-End

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo/backend
   ```

2. **Install Dependencies**
   Install the necessary dependencies by running:

   ```bash
   npm install
   ```

3. **Set Up PostgreSQL Database**
   Ensure your PostgreSQL database is running and accessible. You will need the following credentials:

   - **Host**
   - **Port**
   - **Username**
   - **Password**
   - **Database Name**

4. **Set Up Environment Variables**
   Create a `.env` file in the `backend` folder with the following variables:

   ```env
   DATABASE_HOST=host
   DATABASE_PORT=port
   DATABASE_USERNAME=user
   DATABASE_PASSWORD=your_password
   DATABASE_NAME=db
   CLIENT_URL=Front-end URL
   ```

5. **Run the Development Server**
   To start the Nest.js development server:

   ```bash
   npm run start:dev
   ```

   The back-end will now be accessible on [http://localhost:3000](http://localhost:3000).

6. **Build for Production**
   To build the back-end for production:
   ```bash
   npm run build
   ```
   The compiled output will be available in the `dist` folder.
