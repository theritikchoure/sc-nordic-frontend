# SC-Nordic Frontend Setup

This is a React project bootstrapped with Vite.

---

## Prerequisites

- Node.js (>=14 recommended)
- npm or yarn package manager

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/theritikchoure/sc-nordic-frontend.git
cd sc-nordic-frontend
```
### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Setup environment variables
Create a .env file in the project root and add the following variable:
```bash
VITE_API_BASE_URL=http://localhost:5000/api
```

### 4. Start the development server
```bash
npm run dev
# or
yarn dev
```
Your app will be running at http://localhost:3000 (or another port Vite chooses).


### 5. Build for production
```bash
npm run build
# or
yarn build
```
The build files will be in the dist/ folder.


## Additional Notes
After modifying .env file, restart the dev server.

Make sure your backend server is running and accessible at the URL set in VITE_API_BASE_URL.