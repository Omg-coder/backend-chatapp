# Ai caption generator chat-app (Backend only)

An AI-powered social media backend built with Node.js, Express.js, MongoDB, JWT Authentication, ImageKit, and Google Gemini AI.

## Features

* User Registration & Login
* JWT Authentication
* Secure Cookie-based Authentication
* Image Upload using ImageKit
* AI Generated Captions using Google Gemini
* MongoDB Database Integration
* Protected Routes using Middleware
* RESTful API Architecture

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Cookie Parser
* Multer
* ImageKit
* Google Gemini AI

## Project Structure

```bash
src/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── services/
├── db/
│
├── app.js
└── server.js
```

## Installation

Clone the repository

```bash
git clone https://github.com/Omg-coder/backend-chatapp.git
```

Move into project directory

```bash
cd backend-chatapp
```

Install dependencies

```bash
npm init
npm i express
npm i mongoose
npm i dotenv
npm i nodemon
npm i cookie-parser
npm i bcrypt
npm i uuid
npm i multer
npm i @google/genai
npm install @imagekit/nodejs@7.6.2
```

Create a `.env` file

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint

GEMINI_API_KEY=your_gemini_api_key
```

Start the server


```bash
nodemon server.js
```

## API Endpoints

### Authentication

#### Register User

```http
POST /api/register
```

#### Login User

```http
POST /api/login
```

---

### Posts

#### Create Post

```http
POST /api/posts
```

Request Type:

```text
multipart/form-data
```

Fields:

| Field | Type |
| ----- | ---- |
| image | File |

Features:

* Upload image to ImageKit
* Generate AI caption using Gemini
* Save post in MongoDB

## Environment Variables

| Variable              | Description               |
| --------------------- | ------------------------- |
| MONGODB_URI           | MongoDB Connection String |
| JWT_SECRET            | JWT Secret Key            |
| IMAGEKIT_PUBLIC_KEY   | ImageKit Public Key       |
| IMAGEKIT_PRIVATE_KEY  | ImageKit Private Key      |
| IMAGEKIT_URL_ENDPOINT | ImageKit URL Endpoint     |
| GEMINI_API_KEY        | Google Gemini API Key     |

## Future Improvements

* Like System
* Comments
* Follow / Unfollow
* Feed API
* User Profiles
* Realtime Notifications
* AI Content Moderation

## Author

Om Gulhane

---

Built with Node.js, MongoDB, ImageKit and Google Gemini AI.
