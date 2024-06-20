# 📁 Collection: Profiles

## End-point: Create Profile

### Method: POST

> ```
> http://localhost:3000/api/users/:user_id/profile
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
> http://localhost:3000/api/users/:user_id/profile
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
> http://localhost:3000/api/users/:user_id/profile
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
