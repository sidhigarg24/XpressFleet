# 🚀 XpressFleet – Instant Product Delivery Backend (Node.js)

**XpressFleet** is a backend solution for an instant product delivery service, similar to Blinkit, Zepto, or Swiggy. This Node.js-powered backend manages user authentication, real-time order tracking with Socket.io, and integrates email notifications using SMTP.

> 🔧 Built with scalability, security, and real-time capabilities in mind.

---

## 📌 Objective

You recently joined the startup **'XpressFleet'**, an ambitious instant delivery platform aiming to deliver not only food and groceries, but also electronics, mobile phones, and other essentials — instantly. Your role involved implementing new backend features, integrating real-time functionalities, and optimizing overall performance.

---

## 🧰 Tech Stack

| Category      | Tools / Technologies                 |
|---------------|--------------------------------------|
| Backend       | Node.js, Express.js                 |
| Database      | MongoDB                             |
| Auth          | JWT (JSON Web Token)                |
| Real-Time     | Socket.io                           |
| Email         | SMTP (Gmail)                        |
| API Testing   | Postman                             |
| Hosting       | (Run locally in development)        |

---

## 🔧 Environment Variables

Create a `.env` file in the `backend/` directory with the following keys:

```env
# Server Configuration
PORT=3000

# MongoDB Connection
mongoURI=your_mongodb_connection_string

# JWT Configuration
JWT_Secret=your_jwt_secret
JWT_Expire=1d

# Cookie Expiry Time (in days)
COOKIE_EXPIRES_IN=1

# SMTP Email Configuration
STORFLEET_SMPT_MAIL=your_email@gmail.com
STORFLEET_SMPT_MAIL_PASSWORD=your_app_password
SMPT_SERVICE=gmail
```

> ⚠️ Do not commit your `.env` file to version control.

---

## 🚀 Getting Started (Run Locally)

1. Clone the repository:

```bash
git clone https://github.com/your-username/XpressFleet.git
```

2. Navigate to the backend directory:

```bash
cd XpressFleet/backend
```

3. Install dependencies:

```bash
npm install
```

4. Run the server:

```bash
node server.js
```

Once started, the backend connects to MongoDB and begins listening for API requests and real-time events.

---

## 📫 Postman Documentation

Explore the live API collection here:  
🔗 [Postman Workspace](https://www.postman.com/solar-escape-571108/workspace/54fcd003-1f88-42da-8172-cbac9cd575cf/collection/15790133-eb941792-d2d5-41dd-8b20-b089d6649157)

---
🧭 To ensure smooth testing of the API collection via your browser, kindly install the Postman Agent for Windows if it is not already installed on your system.

**- Output based on default scaffold:**   

![image](https://github.com/user-attachments/assets/badfc19e-91b7-43c5-aec0-bc7196a29df8)

![image](https://github.com/user-attachments/assets/174c3c66-fe5a-4d15-917d-6c41afb84dc7)



## 🔥 Key Features

- 🔐 **JWT Authentication** for secure user access.
- 📦 **MongoDB Integration** for storing users, products, and orders.
- 🔔 **SMTP Integration** for real-time email alerts.
- ⚡ **Socket.io Support** for live order tracking and notifications.
- 🧪 **Postman Tested** endpoints for robust API handling.

---

🔧 Tools & Packages Used
Node.js + Express.js – Backend and routing

MongoDB + Mongoose – Database and schema modeling

JWT – Authentication with token-based login

bcrypt – Password hashing for security

Nodemailer – Sending emails (welcome + password reset)

dotenv – Environment variable management

Postman – API testing

Cookie-parser – Handling cookies for auth tokens

## 👨‍💻 Author & Contact

**👤 Author:** Sidhi Garg  
📧 Email: sidhigargofficial20@gmail.com  
🔗 LinkedIn: [linkedin.com/in/sidhi-garg-999932359](https://www.linkedin.com/in/sidhi-garg-999932359/)

---

## 🤝 Open to Work & Collaboration

I’m actively looking for opportunities as a **Backend** or **Full Stack Developer**.  
If you’re hiring or collaborating on innovative backend systems — **let’s connect!**
