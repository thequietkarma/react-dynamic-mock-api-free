# React Dynamic Mock API (Free) 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2014.x-brightgreen.svg)](https://nodejs.org/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/thequietkarma/react-dynamic-mock-api-free/graphs/commit-activity)

A **free dynamic mock API generator** that allows developers to instantly create REST endpoints and store JSON data without building a backend. Perfect for frontend developers, testers, and rapid prototyping.

---

## 📖 Table of Contents
- [Why This Exists](#-why-this-exists)
- [Features](#-features)
- [How It Works](#-how-it-works)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Usage Examples](#-usage-examples)
- [Contributing](#-contributing)

---

## 🚀 Why This Exists
When building frontend applications, developers often face "the waiting game" for backend APIs. This tool bridges that gap.

- **Frontend Development:** Code against real-feeling endpoints immediately.
- **Testing UI:** Easily simulate different data states.
- **Rapid Prototyping:** Go from idea to demo in minutes.
- **Hackathons & Learning:** Focus on the UI without worrying about DB schemas.

---

## ✨ Features
* **Dynamic Generation:** Create REST endpoints on the fly.
* **No-Schema Storage:** Store any JSON structure without migrations.
* **Tag-Based Collections:** Organize your data efficiently.
* **Developer Dashboard:** Manage and monitor your APIs visually.
* **Robust Security:** Includes Rate Limiting.
* **Documentation:** Built-in Swagger/Docs page and API tester. Visit /open-source/docs.
* **Modular Code:** Clean Controller-Service-Repository architecture.

---

## 🧠 How It Works
1.  **Create a Project:** Define a `rootRoute` (e.g., your project name).
2.  **Define Collections:** Use **tags** to separate data (e.g., `users`, `products`).
3.  **Interact:** Push JSON data via POST and retrieve it via GET.

**Endpoint Structure:**
`GET /user-api/{projectName}/{tag}`

---

## 🛠 Tech Stack
| Layer | Technology |
| :--- | :--- |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose) |
| **Frontend/UI** | EJS, TailwindCSS |
| **Security** | JWT, Rate Limiting |
| **Deployment** | Vercel |

---

## 🏗 Architecture
The project follows clean design principles to ensure scalability:
```text
src
 ├── controllers    # Request handling & responses
 ├── services       # Business logic layer
 ├── validators     # Input validation (Joi/Zod style)
 ├── models         # Mongoose schemas
 ├── middlewares    # Auth, Error handling, Rate limiting
 ├── routes         # API route definitions
 ├── utils          # Helpers & Async wrappers
 └── config         # Environment variables 
```
##⚡Getting Started (Local Development)
1. Clone the repository
Bash:
git clone [https://github.com/thequietkarma/react-dynamic-mock-api-free](https://github.com/thequietkarma/react-dynamic-mock-api-free)
cd react-dynamic-mock-api-free
2. Install dependencies
Bash:
npm install
3. Setup Environment Variables
Create a .env file in the root directory:

Code snippet
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
4. Run the server
Bash
# Development mode
npm run dev

# Production mode
npm start
The server will start on http://localhost:3000.

📦 Usage Examples
Create Data (POST)
POST /user-api/create/myproject/users

JSON
{
  "name": "John Doe",
  "email": "john@email.com"
}
Fetch Data (GET)
GET /user-api/myproject/users
Response:

JSON
{
  "status": 200,
  "data": [
    {
      "id": "64ef...",
      "name": "John Doe",
      "email": "john@email.com"
    }
  ]
}
Update/Delete
Update: PATCH /user-api/myproject/{docId}

Delete: DELETE /user-api/myproject/{docId}

💡 Future Improvements
[ ] API Key Authentication for private projects.

[ ] Redis caching for faster responses.

[ ] Built-in Pagination and Query Filtering.

[ ] Docker Compose support.

[ ] CI/CD pipeline integration.

🤝 Contributing
Contributions make the open-source community amazing!

Fork the Project.

Create your Feature Branch (git checkout -b feature/AmazingFeature).

Commit your Changes (git commit -m 'Add some AmazingFeature').

Push to the Branch (git push origin feature/AmazingFeature).

Open a Pull Request.

🧑‍💻 Author
Shyam Sundar

Student developer passionate about backend systems and developer tools.

GitHub: @thequietkarma

⭐ Support
If you find this project useful, please consider giving it a star on GitHub to help others find it!