# 📁 Collection: Users

## End-point: Create User

### Method: POST

> ```
> http://localhost:3000/api/users/:user_id
> ```

### Headers

| Content-Type | Value                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cookie       | next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..-nMXmNbi-VqCLCR7.GQ2fO37sgqkit7jyhYIRAUvQDhB9RN4x-PLMnMesdl61SvTZvSwfwSCojNQtBxCwvxRGpZsyhmxS6BEe9eGPpMtAIOf0HgivkGtIV-byjhgJjyKTfcqUN2yKFsK8D5OAtSQhwHG6AbE6UyXNVlmSEN-K8_3RppV5txJrKSb416TFbQVCxwPHBiHej-TzMatl38q-Y7d_JGOiNS-r9-ZFA09zvHuSHYMvwWIN1E67gALcR8iMX7pV4Q.CXbiSe5WHTZDtXPzmMSPGw; Path=/; Expires=Wed, 10 Jul 2024 02:28:24 GMT; HttpOnly; SameSite=Lax |

### Body (**raw**)

```json
{
  "name": "postmanuser",
  "email": "postmanuser@gmail.com",
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
> http://localhost:3000/api/users/:user_id
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
> http://localhost:3000/api/users/:user_id
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
