# How to Launch the Front-End (React + Electron + Vite)

This guide will walk you through setting up and running the front-end of the project.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14 or later)
- **npm** (v6 or later)

## Steps to Run the Front-End

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo/frontend
   ```

2. **Install Dependencies**
   Install the required dependencies by running:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the `frontend` folder with the following variable:

   ```env
   VITE_API_HOST=Back host
   VITE_API_PORT=Back port
   ```

4. **Run the Development Server**
   To start the front-end development server (with Electron-Vite):

   ```bash
   npm run dev
   ```

   This will start the front-end application, and it should now be accessible on [http://localhost:5173](http://localhost:5173).

5. **Build for Production**

## Electron Build Commands

If you are building the project for a desktop environment using Electron, you can use the following commands:

- **Windows Build**:

  ```bash
  npm run build:win
  ```

  This will compile the project and create a Windows executable. The output files will be available in the `dist` folder and `dist/win-unpacked`.

- **Mac Build**:
  ```bash
  npm run build:mac
  ```
  This will compile the project and create a macOS executable. The output files will be available in the `dist/mac` folder.

## Installing the Output Files

To install the output files after building for Windows or macOS, navigate to the respective `dist` folder and follow these steps:

- **For Windows**:
  Locate the `.exe` file in the `dist` folder and run the installer.

- **For macOS**:
  Locate the `.dmg` or `.app` file in the `dist` folder and open it to begin the installation process.
