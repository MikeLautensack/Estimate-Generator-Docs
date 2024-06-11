# Project: Estimate Generator

# 📁 Collection: Profiles

## End-point: Create Profile

### Method: POST

> ```
> http://localhost:3000/api/users/:id/profile
> ```

### Headers

| Content-Type | Value                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cookie       | next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..-nMXmNbi-VqCLCR7.GQ2fO37sgqkit7jyhYIRAUvQDhB9RN4x-PLMnMesdl61SvTZvSwfwSCojNQtBxCwvxRGpZsyhmxS6BEe9eGPpMtAIOf0HgivkGtIV-byjhgJjyKTfcqUN2yKFsK8D5OAtSQhwHG6AbE6UyXNVlmSEN-K8_3RppV5txJrKSb416TFbQVCxwPHBiHej-TzMatl38q-Y7d_JGOiNS-r9-ZFA09zvHuSHYMvwWIN1E67gALcR8iMX7pV4Q.CXbiSe5WHTZDtXPzmMSPGw; Path=/; Expires=Wed, 10 Jul 2024 02:28:24 GMT; HttpOnly; SameSite=Lax |

### Body (**raw**)

```json
{
  "businessAddress": "123 example st",
  "businessEmail": "exampleemail@email.com",
  "businessName": "the best business ever LLC",
  "businessPhone": "610-333-4444"
}
```

### Response: 200

```json
{
  "message": "Profile successfully created",
  "profile": {
    "id": 53548406,
    "user_id": "36680340",
    "businessAddress": "123 example st",
    "businessEmail": "exampleemail@email.com",
    "businessName": "the best business ever LLC",
    "businessPhone": "610-333-4444",
    "createdAt": "2024-06-11T01:36:32.989Z",
    "updatedAt": "2024-06-11T01:36:32.989Z"
  }
}
```

### Response: 400

```json
{
  "error": "Invalid id"
}
```

### Response: 401

```json
{
  "error": "No session"
}
```

### Response: 500

```json
{
  "error": "null value in column \"business_name\" of relation \"profiles\" violates not-null constraint"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Profile

### Method: PATCH

> ```
> http://localhost:3000/api/users/:id/profile
> ```

### Headers

| Content-Type | Value                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cookie       | next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..-nMXmNbi-VqCLCR7.GQ2fO37sgqkit7jyhYIRAUvQDhB9RN4x-PLMnMesdl61SvTZvSwfwSCojNQtBxCwvxRGpZsyhmxS6BEe9eGPpMtAIOf0HgivkGtIV-byjhgJjyKTfcqUN2yKFsK8D5OAtSQhwHG6AbE6UyXNVlmSEN-K8_3RppV5txJrKSb416TFbQVCxwPHBiHej-TzMatl38q-Y7d_JGOiNS-r9-ZFA09zvHuSHYMvwWIN1E67gALcR8iMX7pV4Q.CXbiSe5WHTZDtXPzmMSPGw; Path=/; Expires=Wed, 10 Jul 2024 02:28:24 GMT; HttpOnly; SameSite=Lax |

### Body (**raw**)

```json
{
  "businessAddress": "123 edited st",
  "businessEmail": "edited@email.com",
  "businessName": "Edited name",
  "businessPhone": "610-987-6543"
}
```

### Response: 200

```json
{
  "message": "Profile successfully updated",
  "profile": {
    "businessAddress": "123 edited st",
    "businessEmail": "edited@email.com",
    "businessName": "Edited name",
    "businessPhone": "610-987-6543",
    "updatedAt": "2024-06-11T02:06:40.488Z"
  }
}
```

### Response: 400

```json
{
  "error": "Invalid id"
}
```

### Response: 401

```json
{
  "error": "No session"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Profile

### Method: DELETE

> ```
> http://localhost:3000/api/users/:id/profile
> ```

### Headers

| Content-Type | Value                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cookie       | next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..-nMXmNbi-VqCLCR7.GQ2fO37sgqkit7jyhYIRAUvQDhB9RN4x-PLMnMesdl61SvTZvSwfwSCojNQtBxCwvxRGpZsyhmxS6BEe9eGPpMtAIOf0HgivkGtIV-byjhgJjyKTfcqUN2yKFsK8D5OAtSQhwHG6AbE6UyXNVlmSEN-K8_3RppV5txJrKSb416TFbQVCxwPHBiHej-TzMatl38q-Y7d_JGOiNS-r9-ZFA09zvHuSHYMvwWIN1E67gALcR8iMX7pV4Q.CXbiSe5WHTZDtXPzmMSPGw; Path=/; Expires=Wed, 10 Jul 2024 02:28:24 GMT; HttpOnly; SameSite=Lax |

### Response: 200

```json
{
  "message": "Profile successfully deleted"
}
```

### Response: 400

```json
{
  "error": "Invalid id"
}
```

### Response: 401

```json
{
  "error": "No session"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Users

## End-point: Create User

### Method: POST

> ```
> http://localhost:3000/api/users/:id
> ```

### Headers

| Content-Type | Value                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cookie       | next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..-nMXmNbi-VqCLCR7.GQ2fO37sgqkit7jyhYIRAUvQDhB9RN4x-PLMnMesdl61SvTZvSwfwSCojNQtBxCwvxRGpZsyhmxS6BEe9eGPpMtAIOf0HgivkGtIV-byjhgJjyKTfcqUN2yKFsK8D5OAtSQhwHG6AbE6UyXNVlmSEN-K8_3RppV5txJrKSb416TFbQVCxwPHBiHej-TzMatl38q-Y7d_JGOiNS-r9-ZFA09zvHuSHYMvwWIN1E67gALcR8iMX7pV4Q.CXbiSe5WHTZDtXPzmMSPGw; Path=/; Expires=Wed, 10 Jul 2024 02:28:24 GMT; HttpOnly; SameSite=Lax |

### Body (**raw**)

```json
{
  "name": "postmanuser",
  "email": "postmanuser@email.com",
  "password": "pass",
  "role": "contractor"
}
```

### Response: 200

```json
{
  "message": "User successfully created",
  "user": {
    "id": "92043050",
    "name": "postmanuser",
    "email": "postmanuser@email.com",
    "password": "$2b$10$EfZ4UY8VrrmQtzKbsNDlcuW6XqPcadkoLC0pXmEVnFRqgrB6QXtJS",
    "newUser": true,
    "role": "contractor",
    "emailVerified": null,
    "createdAt": "2024-06-10T23:17:33.011Z",
    "updatedAt": "2024-06-10T23:17:33.011Z"
  }
}
```

### Response: 409

```json
{
  "error": "User already registered"
}
```

### Response: 400

```json
{
  "error": "Body data is missing fields",
  "bodyData": {
    "name": "contractor",
    "password": "pass",
    "role": "contractor"
  }
}
```

### Response: 500

```json
{
  "error": "data must be a string or Buffer and salt must either be a salt string or a number of rounds"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update User

### Method: PATCH

> ```
> http://localhost:3000/api/users/:id
> ```

### Headers

| Content-Type | Value                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cookie       | next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..-nMXmNbi-VqCLCR7.GQ2fO37sgqkit7jyhYIRAUvQDhB9RN4x-PLMnMesdl61SvTZvSwfwSCojNQtBxCwvxRGpZsyhmxS6BEe9eGPpMtAIOf0HgivkGtIV-byjhgJjyKTfcqUN2yKFsK8D5OAtSQhwHG6AbE6UyXNVlmSEN-K8_3RppV5txJrKSb416TFbQVCxwPHBiHej-TzMatl38q-Y7d_JGOiNS-r9-ZFA09zvHuSHYMvwWIN1E67gALcR8iMX7pV4Q.CXbiSe5WHTZDtXPzmMSPGw; Path=/; Expires=Wed, 10 Jul 2024 02:28:24 GMT; HttpOnly; SameSite=Lax |

### Body (**raw**)

```json
{
  "name": "updatedpostmanuser",
  "role": "contractor",
  "newUser": 123
}
```

### Response: 200

```json
{
  "message": "User successfully updated",
  "user": [
    {
      "id": "92043050",
      "name": "updatedpostmanuser",
      "email": "postmanuser@email.com",
      "password": "$2b$10$EfZ4UY8VrrmQtzKbsNDlcuW6XqPcadkoLC0pXmEVnFRqgrB6QXtJS",
      "role": "contractor",
      "newUser": false,
      "emailVerified": null,
      "createdAt": "2024-06-10T23:17:33.011Z",
      "updatedAt": "2024-06-10T23:17:33.011Z"
    }
  ]
}
```

### Response: 401

```json
{
  "error": "No session"
}
```

### Response: 500

```json
{
  "error": "invalid input syntax for type boolean: \"123\""
}
```

### Response: 400

```json
{
  "error": "Invalid id"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete User

### Method: DELETE

> ```
> http://localhost:3000/api/users/:id
> ```

### Headers

| Content-Type | Value                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cookie       | next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..-nMXmNbi-VqCLCR7.GQ2fO37sgqkit7jyhYIRAUvQDhB9RN4x-PLMnMesdl61SvTZvSwfwSCojNQtBxCwvxRGpZsyhmxS6BEe9eGPpMtAIOf0HgivkGtIV-byjhgJjyKTfcqUN2yKFsK8D5OAtSQhwHG6AbE6UyXNVlmSEN-K8_3RppV5txJrKSb416TFbQVCxwPHBiHej-TzMatl38q-Y7d_JGOiNS-r9-ZFA09zvHuSHYMvwWIN1E67gALcR8iMX7pV4Q.CXbiSe5WHTZDtXPzmMSPGw; Path=/; Expires=Wed, 10 Jul 2024 02:28:24 GMT; HttpOnly; SameSite=Lax |

### Response: 200

```json
{
  "message": "User successfully deleted"
}
```

### Response: 404

```json
{
  "error": "User not found"
}
```

### Response: 401

```json
{
  "error": "No session"
}
```

### Response: 400

```json
{
  "error": "Invalid id"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Verify User Email

### Method: POST

> ```
> http://localhost:3000/api/users/:id/verify-email
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Forgot Password

### Method: POST

> ```
> http://localhost:3000/api/users/:id/forgot-password
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Reset Password

### Method: PATCH

> ```
> http://localhost:3000/api/users/:id/reset-password
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Customers

## End-point: Create Customer

### Method: POST

> ```
> http://localhost:3000/api/customers/create
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Edit Customer

### Method: PUT

> ```
> http://localhost:3000/api/customers/edit/:id
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Customer

### Method: DELETE

> ```
> http://localhost:3000/api/customers/delete/:id
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Estimates

## End-point: Create Estimate

### Method: POST

> ```
> http://localhost:3000/api/estimates/create
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Edit Customer

### Method: PUT

> ```
> http://localhost:3000/api/estimates/edit/:id
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Estimate

### Method: DELETE

> ```
> http://localhost:3000/api/estimates/delete/:id
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get By User

### Method: GET

> ```
> http://localhost:3000/api/estimates/get-by-user/:id
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Change Orders

## End-point: Create Change Order

### Method: POST

> ```
> http://localhost:3000/api/change-orders/create
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Edit Change Order

### Method: PUT

> ```
> http://localhost:3000/api/change-orders/edit/:id
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Change Order

### Method: DELETE

> ```
> http://localhost:3000/api/change-orders/delete/:id
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Work Orders

## End-point: Get Work Orders

### Method: GET

> ```
> undefined
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Work Order

### Method: GET

> ```
> undefined
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Create Work Order

### Method: POST

> ```
> undefined
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Edit Work Order

### Method: PUT

> ```
> undefined
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Work Order

### Method: DELETE

> ```
> undefined
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Invoices

# 📁 Collection: Emails

# 📁 Collection: Auth

## End-point: Sign In

### Method: POST

> ```
> http://localhost:3000/api/auth/signin/:provider
> ```

### Body (**raw**)

```json
{
  "email": "contractor@email.com",
  "password": "pass"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Sign Out

### Method: POST

> ```
> http://localhost:3000/api/auth/signout
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Session

### Method: GET

> ```
> http://localhost:3000/api/auth/session
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: CSFR

### Method: GET

> ```
> http://localhost:3000/api/auth/csrf
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Providers

### Method: GET

> ```
> http://localhost:3000/api/auth/providers
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Pages

## 📁 Collection: Customer Pages

## 📁 Collection: Admin Pages

## End-point: Sign In

### Method: GET

> ```
> http://localhost:3000/api/auth/signin
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Sign Out

### Method: GET

> ```
> http://localhost:3000/api/auth/signout
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Redirect

### Method: GET

> ```
> http://localhost:3000/api/redirect
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

---

Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
