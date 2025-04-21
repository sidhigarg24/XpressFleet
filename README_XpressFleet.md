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
🛠️ Tools & Packages Used
⚙️ Node.js + Express.js – Backend runtime & routing

🗄️ MongoDB + Mongoose – NoSQL database & schema modeling

🔐 JWT – Token-based authentication

🔑 bcrypt – Password hashing and security

📬 Nodemailer – Email services for welcome & reset links

🧪 Postman – API testing and validation

🔒 cookie-parser – Manage HTTP-only auth cookies

📦 dotenv – Environment variable configuration

📌 APIs Used in XpressFleet (Backend)

📦 Product APIs

📥 GET /product/products – Retrieve all products (supports pagination)

➕ POST /product/add – Add a new product

🔄 PUT /product/update/:id – Update product details

❌ DELETE /product/delete/:id – Delete a product

🔍 GET /product/:id – Get product details by ID

🔎 GET /product/search – Search products by keyword

📂 GET /product/category/:category – Filter products by category

💰 GET /product/price – Filter products by price range

⭐ GET /product/rating – Filter products by rating

💬 PUT /product/rate/:id – Rate a product

📝 GET /product/reviews/:id – Get all reviews for a product

🗑️ DELETE /product/review/:reviewId – Delete a specific review

👤 User Authentication & Profile APIs

📝 POST /user/register – Register a new user

🔑 POST /user/login – User login

🚪 GET /user/logout – Logout user

🔑 POST /user/password/forgot – Send password reset link via email

🔒 PUT /user/password/reset/:token – Reset password using token

👤 GET /user/profile – Get logged-in user info

🔄 PUT /user/password/update – Update current password

📝 PUT /user/profile/update – Update name or email

🛡️ Admin APIs

👥 GET /admin/users – Get all users

👤 GET /admin/user/:id – Get single user details

❌ DELETE /admin/user/:id – Delete user

🔧 PUT /admin/user/update – Update user role & profile

📦 Order APIs

🛒 POST /order/new – Place a new order

📜 GET /order/:id – Get details of a single order

🛍️ GET /orders/me – Get all orders of the logged-in user

📦 GET /admin/orders – Get all placed orders (admin)

🔧 PUT /admin/order/:id – Update order details (admin)



## 👨‍💻 Author & Contact

**👤 Author:** Sidhi Garg  
📧 Email: sidhigargofficial20@gmail.com  
🔗 LinkedIn: [linkedin.com/in/sidhi-garg-999932359](https://www.linkedin.com/in/sidhi-garg-999932359/)

---

## 🤝 Open to Work & Collaboration

I’m actively looking for opportunities as a **Backend** or **Full Stack Developer**.  
If you’re hiring or collaborating on innovative backend systems — **let’s connect!**
