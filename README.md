# Assignment 10: Store Data in Firebase Firestore

## Setup

1. Enable Firestore in a Firebase project and create a service-account key.
2. Copy `.env.example` to `.env` and add the Firebase credentials.
3. From this folder, install dependencies and start the server:

```bash
npm install
npm start
```

The server prints `Firebase Firestore connected successfully` after it can reach Firestore.

## API

`POST /api/users` accepts JSON with these required fields:

```json
{
  "name": "Asha Singh",
  "email": "asha@example.com",
  "age": 21,
  "course": "Node.js"
}
```

Valid data is stored in the Firestore `users` collection. Invalid data returns status `400` with an `errors` array.