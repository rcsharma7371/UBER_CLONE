# Backend API Documentation

### Endpoints

`/users/register`
  
### Description

Registers a new user by creating a user account with the provided information

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `fullname` (object):

    - `firstname` (string, required): User's first name (minimum 3 characters).
    - `lasttname` (string): User's first name (minimum 3 characters).
- `email` (email, required): User's email address (must be a valid email).
- `password` (password, required): User's password (minimum 6 characters)

### Example
- `users` (object):
    - `fullname` (object):
        - `firstname` (string): User's first name.
        - `lasttname` (string): User's first name.
    - `email` (string): User's email address.
- `token`(string): JWT token

---

`/users/login`

### Description

Logs in a user with the provided email and password.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `email` (email, required): User's email address (must be a valid email).
- `password` (password, required): User's password (minimum 6 characters)

### Example
- `email` (string): User's email address.
- `password` (string): User's password.

### Response

- `token` (string): JWT token
- `user` (object): User object containing user details.

---

`/users/logout`

### Description

Logs out a user.

### HTTP Method

`POST`

### Response

- `message` (string): Logout successfully

---

`/users/profile`

### Description

Fetches the profile of the logged-in user.

### HTTP Method

`GET`

### Headers

- `Authorization` (string, required): Bearer token for authentication.

### Example

#### Request
```http
GET /users/profile HTTP/1.1
Host: example.com
Authorization: Bearer <JWT token>
```

---

`/captains/register`

### Description

Registers a new captain by creating a captain account with the provided information.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `fullname` (object):
  - `firstname` (string, required): Captain's first name (minimum 3 characters).
  - `lastname` (string, required): Captain's last name.
- `email` (email, required): Captain's email address (must be a valid email).
- `password` (password, required): Captain's password (minimum 6 characters).
- `vehicle` (object):
  - `color` (string, required): Vehicle color (minimum 3 characters).
  - `plate` (string, required): Vehicle plate number (minimum 3 characters).
  - `capacity` (number, required): Vehicle capacity.
  - `vehicleType` (string, required): Vehicle type (must be one of 'car', 'motorcycle', 'auto').

### Example

#### Request
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Response
```json
{
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  },
  "token": "JWT token"
}
```
