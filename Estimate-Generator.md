# Project: Estimate Generator
# 📁 Collection: Profiles 


## End-point: Create Profile
### Method: POST
>```
>http://localhost:3000/api/users/:user_id/profile
>```
### Headers

|Content-Type|Value|
|---|---|
|Cookie|next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..-nMXmNbi-VqCLCR7.GQ2fO37sgqkit7jyhYIRAUvQDhB9RN4x-PLMnMesdl61SvTZvSwfwSCojNQtBxCwvxRGpZsyhmxS6BEe9eGPpMtAIOf0HgivkGtIV-byjhgJjyKTfcqUN2yKFsK8D5OAtSQhwHG6AbE6UyXNVlmSEN-K8_3RppV5txJrKSb416TFbQVCxwPHBiHej-TzMatl38q-Y7d_JGOiNS-r9-ZFA09zvHuSHYMvwWIN1E67gALcR8iMX7pV4Q.CXbiSe5WHTZDtXPzmMSPGw; Path=/; Expires=Wed, 10 Jul 2024 02:28:24 GMT; HttpOnly; SameSite=Lax|


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
>```
>http://localhost:3000/api/users/:user_id/profile
>```
### Headers

|Content-Type|Value|
|---|---|
|Cookie|next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..-nMXmNbi-VqCLCR7.GQ2fO37sgqkit7jyhYIRAUvQDhB9RN4x-PLMnMesdl61SvTZvSwfwSCojNQtBxCwvxRGpZsyhmxS6BEe9eGPpMtAIOf0HgivkGtIV-byjhgJjyKTfcqUN2yKFsK8D5OAtSQhwHG6AbE6UyXNVlmSEN-K8_3RppV5txJrKSb416TFbQVCxwPHBiHej-TzMatl38q-Y7d_JGOiNS-r9-ZFA09zvHuSHYMvwWIN1E67gALcR8iMX7pV4Q.CXbiSe5WHTZDtXPzmMSPGw; Path=/; Expires=Wed, 10 Jul 2024 02:28:24 GMT; HttpOnly; SameSite=Lax|


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
>```
>http://localhost:3000/api/users/:user_id/profile
>```
### Headers

|Content-Type|Value|
|---|---|
|Cookie|next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..-nMXmNbi-VqCLCR7.GQ2fO37sgqkit7jyhYIRAUvQDhB9RN4x-PLMnMesdl61SvTZvSwfwSCojNQtBxCwvxRGpZsyhmxS6BEe9eGPpMtAIOf0HgivkGtIV-byjhgJjyKTfcqUN2yKFsK8D5OAtSQhwHG6AbE6UyXNVlmSEN-K8_3RppV5txJrKSb416TFbQVCxwPHBiHej-TzMatl38q-Y7d_JGOiNS-r9-ZFA09zvHuSHYMvwWIN1E67gALcR8iMX7pV4Q.CXbiSe5WHTZDtXPzmMSPGw; Path=/; Expires=Wed, 10 Jul 2024 02:28:24 GMT; HttpOnly; SameSite=Lax|


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
>```
>http://localhost:3000/api/users/:user_id
>```
### Headers

|Content-Type|Value|
|---|---|
|Cookie|next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..-nMXmNbi-VqCLCR7.GQ2fO37sgqkit7jyhYIRAUvQDhB9RN4x-PLMnMesdl61SvTZvSwfwSCojNQtBxCwvxRGpZsyhmxS6BEe9eGPpMtAIOf0HgivkGtIV-byjhgJjyKTfcqUN2yKFsK8D5OAtSQhwHG6AbE6UyXNVlmSEN-K8_3RppV5txJrKSb416TFbQVCxwPHBiHej-TzMatl38q-Y7d_JGOiNS-r9-ZFA09zvHuSHYMvwWIN1E67gALcR8iMX7pV4Q.CXbiSe5WHTZDtXPzmMSPGw; Path=/; Expires=Wed, 10 Jul 2024 02:28:24 GMT; HttpOnly; SameSite=Lax|


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
>```
>http://localhost:3000/api/users/:user_id
>```
### Headers

|Content-Type|Value|
|---|---|
|Cookie|next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..-nMXmNbi-VqCLCR7.GQ2fO37sgqkit7jyhYIRAUvQDhB9RN4x-PLMnMesdl61SvTZvSwfwSCojNQtBxCwvxRGpZsyhmxS6BEe9eGPpMtAIOf0HgivkGtIV-byjhgJjyKTfcqUN2yKFsK8D5OAtSQhwHG6AbE6UyXNVlmSEN-K8_3RppV5txJrKSb416TFbQVCxwPHBiHej-TzMatl38q-Y7d_JGOiNS-r9-ZFA09zvHuSHYMvwWIN1E67gALcR8iMX7pV4Q.CXbiSe5WHTZDtXPzmMSPGw; Path=/; Expires=Wed, 10 Jul 2024 02:28:24 GMT; HttpOnly; SameSite=Lax|


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
>```
>http://localhost:3000/api/users/:user_id
>```
### Headers

|Content-Type|Value|
|---|---|
|Cookie|next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..-nMXmNbi-VqCLCR7.GQ2fO37sgqkit7jyhYIRAUvQDhB9RN4x-PLMnMesdl61SvTZvSwfwSCojNQtBxCwvxRGpZsyhmxS6BEe9eGPpMtAIOf0HgivkGtIV-byjhgJjyKTfcqUN2yKFsK8D5OAtSQhwHG6AbE6UyXNVlmSEN-K8_3RppV5txJrKSb416TFbQVCxwPHBiHej-TzMatl38q-Y7d_JGOiNS-r9-ZFA09zvHuSHYMvwWIN1E67gALcR8iMX7pV4Q.CXbiSe5WHTZDtXPzmMSPGw; Path=/; Expires=Wed, 10 Jul 2024 02:28:24 GMT; HttpOnly; SameSite=Lax|


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
# 📁 Collection: Customers 


## End-point: Create Customer
### Method: POST
>```
>http://localhost:3000/api/users/:user_id/customers/:customer_id
>```
### Headers

|Content-Type|Value|
|---|---|
|Cookie|authjs.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwia2lkIjoiQkVBc21LZzRYUnZUUFNHQlMwbUxNelY3ZE9MelIzNEpmc3ZRQlJEWTVlZFJMYko0bmlhZVVaNHdjOWdfRDB4NndXVkM2ano0YkkyVWRmNzhhNnpuTkEifQ..wIfM9HB1TMyYOVFtlfjk7w.eIiHFOE-m6KBTcWXdICdusbcld8VlFyikNoBs8TLAMaWKRYrkgMD21pLlFd4OPOSc4lo4CvGoTbvmB7mm41zj8lAbZiQeWtaD56Ru1H3TLgalSomIqsFVSed6C77T0GP5oX0Me8aLsRmbdI-AgRG-nqZV3izMyiIAbP3qE6Hx1gLb2Pud2IYfPPj98FGtVfN00SbPGXk9Iq7OGk5_JJLT6QnlTH7W19MQ5-1vclouVsbIXS1TH7iZUAuRplENu71ImX09rPCPZ4XQbjkD0Lvgw.Uttpe5ra5QLgLYIup_tq6zKF9KXnDs05XwWOmNQMoqY|


### Body (**raw**)

```json
{
    "customer_user_id": "90909090",
    "address": "999 tesing St",
    "email": "testuser999@email.com",
    "name": "testuser999",
    "phone": "1234567890"
}
```

### Response: 200
```json
{
    "message": "Customer successfully created",
    "customer": {
        "id": 97531246,
        "contractor_user_id": 12345678,
        "customer_user_id": "07412580",
        "address": "101 tesing St",
        "email": "testuser101@email.com",
        "name": "testuser101",
        "phone": "1234567890",
        "createdAt": "2024-06-19T23:39:53.577Z",
        "updatedAt": "2024-06-19T23:39:53.577Z"
    },
    "customerUser": {
        "id": "07412580",
        "name": "testuser101",
        "email": "testuser101@email.com",
        "password": "$2b$10$Iwkcgptcnyqzi1vusO2PD.nmhxHQPxp5xuRZcvAjG3T57rnh3pGO6",
        "newUser": true,
        "role": "customer",
        "emailVerified": null,
        "createdAt": "2024-06-19T23:39:54.681Z",
        "updatedAt": "2024-06-19T23:39:54.681Z"
    }
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
    "error": "column \"address\" of relation \"customers\" does not exist"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Customer
### Method: PATCH
>```
>http://localhost:3000/api/users/:user_id/customers/:customer_id
>```
### Headers

|Content-Type|Value|
|---|---|
|Cookie|authjs.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwia2lkIjoiQkVBc21LZzRYUnZUUFNHQlMwbUxNelY3ZE9MelIzNEpmc3ZRQlJEWTVlZFJMYko0bmlhZVVaNHdjOWdfRDB4NndXVkM2ano0YkkyVWRmNzhhNnpuTkEifQ..wIfM9HB1TMyYOVFtlfjk7w.eIiHFOE-m6KBTcWXdICdusbcld8VlFyikNoBs8TLAMaWKRYrkgMD21pLlFd4OPOSc4lo4CvGoTbvmB7mm41zj8lAbZiQeWtaD56Ru1H3TLgalSomIqsFVSed6C77T0GP5oX0Me8aLsRmbdI-AgRG-nqZV3izMyiIAbP3qE6Hx1gLb2Pud2IYfPPj98FGtVfN00SbPGXk9Iq7OGk5_JJLT6QnlTH7W19MQ5-1vclouVsbIXS1TH7iZUAuRplENu71ImX09rPCPZ4XQbjkD0Lvgw.Uttpe5ra5QLgLYIup_tq6zKF9KXnDs05XwWOmNQMoqY|


### Body (**raw**)

```json
{
    "customer_user_id": "07412580",
    "address": "101 tesing St(updated)",
    "email": "testuser101@email.com(updated)",
    "name": "testuser101(updated)",
    "phone": "1234567890"
}
```

### Response: 200
```json
{
    "message": "Customer successfully updated",
    "updatedCustomer": {
        "command": "UPDATE",
        "fields": [],
        "rowAsArray": false,
        "rowCount": 0,
        "rows": [],
        "viaNeonFetch": true
    },
    "updatedCustomerUser": {
        "command": "UPDATE",
        "fields": [],
        "rowAsArray": false,
        "rowCount": 1,
        "rows": [],
        "viaNeonFetch": true
    }
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
null
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Customer
### Method: DELETE
>```
>http://localhost:3000/api/users/:user_id/customers/:customer_id
>```
### Headers

|Content-Type|Value|
|---|---|
|Cookie|authjs.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwia2lkIjoiQkVBc21LZzRYUnZUUFNHQlMwbUxNelY3ZE9MelIzNEpmc3ZRQlJEWTVlZFJMYko0bmlhZVVaNHdjOWdfRDB4NndXVkM2ano0YkkyVWRmNzhhNnpuTkEifQ..wIfM9HB1TMyYOVFtlfjk7w.eIiHFOE-m6KBTcWXdICdusbcld8VlFyikNoBs8TLAMaWKRYrkgMD21pLlFd4OPOSc4lo4CvGoTbvmB7mm41zj8lAbZiQeWtaD56Ru1H3TLgalSomIqsFVSed6C77T0GP5oX0Me8aLsRmbdI-AgRG-nqZV3izMyiIAbP3qE6Hx1gLb2Pud2IYfPPj98FGtVfN00SbPGXk9Iq7OGk5_JJLT6QnlTH7W19MQ5-1vclouVsbIXS1TH7iZUAuRplENu71ImX09rPCPZ4XQbjkD0Lvgw.Uttpe5ra5QLgLYIup_tq6zKF9KXnDs05XwWOmNQMoqY|


### Response: 200
```json
{
    "message": "Customer: 97531246 successfully deleted"
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
    "error": "invalid input syntax for type bigint: \"NaN\""
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Estimates 


## End-point: Create Estimate
### Method: POST
>```
>http://localhost:3000/api/users/:user_id/customers/:customer_id/estimates/:estimate_id
>```
### Headers

|Content-Type|Value|
|---|---|
|Cookie|authjs.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwia2lkIjoiQkVBc21LZzRYUnZUUFNHQlMwbUxNelY3ZE9MelIzNEpmc3ZRQlJEWTVlZFJMYko0bmlhZVVaNHdjOWdfRDB4NndXVkM2ano0YkkyVWRmNzhhNnpuTkEifQ..wIfM9HB1TMyYOVFtlfjk7w.eIiHFOE-m6KBTcWXdICdusbcld8VlFyikNoBs8TLAMaWKRYrkgMD21pLlFd4OPOSc4lo4CvGoTbvmB7mm41zj8lAbZiQeWtaD56Ru1H3TLgalSomIqsFVSed6C77T0GP5oX0Me8aLsRmbdI-AgRG-nqZV3izMyiIAbP3qE6Hx1gLb2Pud2IYfPPj98FGtVfN00SbPGXk9Iq7OGk5_JJLT6QnlTH7W19MQ5-1vclouVsbIXS1TH7iZUAuRplENu71ImX09rPCPZ4XQbjkD0Lvgw.Uttpe5ra5QLgLYIup_tq6zKF9KXnDs05XwWOmNQMoqY|


### Body (**raw**)

```json
{
    "customer_user_id": "90909090",
    "contractorAddress": "123 test St",
    "contractorName": "contractor",
    "contractorPhone": "1234567890",
    "customerEmail": "test@email.com",
    "customerName": "customer",
    "estimateName": "test estimate",
    "message": "test message",
    "projectAddress": "123 test project St",
    "status": "new-estimate",
    "subtotal": "50.00",
    "tax": "3.50",
    "taxRate": "7",
    "total": "53.50",
    "lineItems": [
        {
          "amount": "1",
          "description": "paint",
          "item": "item 1",
          "price": "10.00",
          "quantity": "10",
          "rateType": "test"
        },
        {
          "amount": "2",
          "description": "carpentry",
          "item": "itme 2",
          "price": "20.00",
          "quantity": "10",
          "rateType": "test 567"
        },
        {
          "amount": "4",
          "description": "hvac",
          "item": "item 3",
          "price": "20.00",
          "quantity": "5",
          "rateType": "test 321"
        }
    ]
}
```

### Response: 200
```json
{
    "message": "Estimate successfully created",
    "estimateData": {
        "id": 33333333,
        "contractor_user_id": 12345678,
        "customer_id": 12348765,
        "customer_user_id": "90909090",
        "contractorAddress": "123 test St",
        "contractorName": "contractor",
        "contractorPhone": "1234567890",
        "customerEmail": "test@email.com",
        "customerName": "customer",
        "estimateName": "test estimate",
        "message": "test message",
        "projectAddress": "123 test project St",
        "status": "new-estimate",
        "subtotal": "50.00",
        "tax": "3.50",
        "taxRate": "7",
        "total": "53.50",
        "createdAt": "2024-06-20T01:58:52.240Z",
        "updatedAt": "2024-06-20T01:58:52.240Z"
    },
    "lineItems": [
        {
            "id": 3756737,
            "estimate_id": 33333333,
            "amount": "1",
            "description": "paint",
            "item": "item 1",
            "price": "10.00",
            "quantity": "10",
            "rateType": "test",
            "createdAt": "2024-06-20T01:58:52.385Z",
            "updatedAt": "2024-06-20T01:58:52.385Z"
        },
        {
            "id": 24541998,
            "estimate_id": 33333333,
            "amount": "2",
            "description": "carpentry",
            "item": "itme 2",
            "price": "20.00",
            "quantity": "10",
            "rateType": "test 567",
            "createdAt": "2024-06-20T01:58:52.386Z",
            "updatedAt": "2024-06-20T01:58:52.386Z"
        },
        {
            "id": 75030254,
            "estimate_id": 33333333,
            "amount": "4",
            "description": "hvac",
            "item": "item 3",
            "price": "20.00",
            "quantity": "5",
            "rateType": "test 321",
            "createdAt": "2024-06-20T01:58:52.386Z",
            "updatedAt": "2024-06-20T01:58:52.386Z"
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
null
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Estimate
### Method: PATCH
>```
>http://localhost:3000/api/users/:user_id/customers/:customer_id/estimates/:estimate_id
>```
### Headers

|Content-Type|Value|
|---|---|
|Cookie|authjs.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwia2lkIjoiQkVBc21LZzRYUnZUUFNHQlMwbUxNelY3ZE9MelIzNEpmc3ZRQlJEWTVlZFJMYko0bmlhZVVaNHdjOWdfRDB4NndXVkM2ano0YkkyVWRmNzhhNnpuTkEifQ..wIfM9HB1TMyYOVFtlfjk7w.eIiHFOE-m6KBTcWXdICdusbcld8VlFyikNoBs8TLAMaWKRYrkgMD21pLlFd4OPOSc4lo4CvGoTbvmB7mm41zj8lAbZiQeWtaD56Ru1H3TLgalSomIqsFVSed6C77T0GP5oX0Me8aLsRmbdI-AgRG-nqZV3izMyiIAbP3qE6Hx1gLb2Pud2IYfPPj98FGtVfN00SbPGXk9Iq7OGk5_JJLT6QnlTH7W19MQ5-1vclouVsbIXS1TH7iZUAuRplENu71ImX09rPCPZ4XQbjkD0Lvgw.Uttpe5ra5QLgLYIup_tq6zKF9KXnDs05XwWOmNQMoqY|


### Body (**raw**)

```json
{
    "customer_user_id": "90909090",
    "contractorAddress": "123 test St",
    "contractorName": "contractor",
    "contractorPhone": "1234567890",
    "customerEmail": "test@email.com",
    "customerName": "customer",
    "estimateName": "test estimate",
    "message": "test message",
    "projectAddress": "123 test project St",
    "status": "new-estimate",
    "subtotal": "50.00",
    "tax": "3.50",
    "taxRate": "7",
    "total": "53.50",
    "lineItems": [
        {
          "amount": "1",
          "description": "paint",
          "item": "item 1",
          "price": "10.00",
          "quantity": "10",
          "rateType": "test"
        },
        {
          "amount": "2",
          "description": "carpentry",
          "item": "itme 2",
          "price": "20.00",
          "quantity": "10",
          "rateType": "test 567"
        },
        {
          "amount": "4",
          "description": "hvac",
          "item": "item 3",
          "price": "20.00",
          "quantity": "5",
          "rateType": "test 321"
        }
    ]
}
```

### Response: 500
```json
{
    "error": "server error"
}
```

### Response: 401
```json
{
    "error": "No session"
}
```

### Response: 200
```json
{
    "message": "Estimate successfully updated",
    "updatedEstimateData": {
        "contractorAddress": "123 test St(updated)",
        "contractorName": "contractor(updated)",
        "contractorPhone": "1234567890(updated)",
        "customerEmail": "test@email.com(updated)",
        "customerName": "customer(updated)",
        "estimateName": "test estimate(updated)",
        "message": "test message(updated)",
        "projectAddress": "123 test project St(updated)",
        "status": "new-estimate(updated)",
        "subtotal": "50.00",
        "tax": "3.50",
        "taxRate": "7",
        "total": "53.50",
        "updatedAt": "2024-06-20T02:55:38.304Z"
    },
    "lineItems": [
        {
            "id": 37238963,
            "estimate_id": 33333333,
            "amount": "1",
            "description": "paint(updated)",
            "item": "item 1(updated)",
            "price": "10.00",
            "quantity": "10",
            "rateType": "test",
            "updatedAt": "2024-06-20T02:55:39.331Z"
        },
        {
            "id": 9000739,
            "estimate_id": 33333333,
            "amount": "2",
            "description": "carpentry(updated)",
            "item": "itme 2(updated)",
            "price": "20.00",
            "quantity": "10",
            "rateType": "test 567",
            "updatedAt": "2024-06-20T02:55:39.331Z"
        },
        {
            "id": 62127254,
            "estimate_id": 33333333,
            "amount": "4",
            "description": "hvac(updated)",
            "item": "item 3(updated)",
            "price": "20.00",
            "quantity": "5",
            "rateType": "test 321",
            "updatedAt": "2024-06-20T02:55:39.331Z"
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Estimate
### Method: DELETE
>```
>http://localhost:3000/api/users/:user_id/customers/:customer_id/estimates/:estimate_id
>```
### Headers

|Content-Type|Value|
|---|---|
|Cookie|authjs.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwia2lkIjoiQkVBc21LZzRYUnZUUFNHQlMwbUxNelY3ZE9MelIzNEpmc3ZRQlJEWTVlZFJMYko0bmlhZVVaNHdjOWdfRDB4NndXVkM2ano0YkkyVWRmNzhhNnpuTkEifQ..wIfM9HB1TMyYOVFtlfjk7w.eIiHFOE-m6KBTcWXdICdusbcld8VlFyikNoBs8TLAMaWKRYrkgMD21pLlFd4OPOSc4lo4CvGoTbvmB7mm41zj8lAbZiQeWtaD56Ru1H3TLgalSomIqsFVSed6C77T0GP5oX0Me8aLsRmbdI-AgRG-nqZV3izMyiIAbP3qE6Hx1gLb2Pud2IYfPPj98FGtVfN00SbPGXk9Iq7OGk5_JJLT6QnlTH7W19MQ5-1vclouVsbIXS1TH7iZUAuRplENu71ImX09rPCPZ4XQbjkD0Lvgw.Uttpe5ra5QLgLYIup_tq6zKF9KXnDs05XwWOmNQMoqY|


### Response: 500
```json
{
    "error": "Server Error"
}
```

### Response: 401
```json
{
    "error": "No session"
}
```

### Response: 200
```json
{
    "message": "Estimate successfully deleted"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Change Orders 


## End-point: Create Change Order
### Method: POST
>```
>http://localhost:3000/api/users/:user_id/customers/:customer_id/estimates/:estimate_id/change-orders/:changeorder_id
>```
### Headers

|Content-Type|Value|
|---|---|
|Cookie|authjs.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwia2lkIjoiQkVBc21LZzRYUnZUUFNHQlMwbUxNelY3ZE9MelIzNEpmc3ZRQlJEWTVlZFJMYko0bmlhZVVaNHdjOWdfRDB4NndXVkM2ano0YkkyVWRmNzhhNnpuTkEifQ..wIfM9HB1TMyYOVFtlfjk7w.eIiHFOE-m6KBTcWXdICdusbcld8VlFyikNoBs8TLAMaWKRYrkgMD21pLlFd4OPOSc4lo4CvGoTbvmB7mm41zj8lAbZiQeWtaD56Ru1H3TLgalSomIqsFVSed6C77T0GP5oX0Me8aLsRmbdI-AgRG-nqZV3izMyiIAbP3qE6Hx1gLb2Pud2IYfPPj98FGtVfN00SbPGXk9Iq7OGk5_JJLT6QnlTH7W19MQ5-1vclouVsbIXS1TH7iZUAuRplENu71ImX09rPCPZ4XQbjkD0Lvgw.Uttpe5ra5QLgLYIup_tq6zKF9KXnDs05XwWOmNQMoqY|


### Body (**raw**)

```json
{
    "customer_user_id": "90909090",
    "changeOrderName": "change order test",
    "customerName": "testuser999",
    "description": "testing...",
    "estimateName": "test estimate",
    "projectAddress": "123 test project St"
}
```

### Response: 500
```json
{
    "error": "Server Error"
}
```

### Response: 401
```json
{
    "error": "No session"
}
```

### Response: 200
```json
{
    "message": "Change order successfully created",
    "changeOrder": {
        "id": 11111111,
        "contractor_user_id": 12345678,
        "customer_user_id": "90909090",
        "estimate_id": 22222222,
        "changeOrderName": "change order test",
        "customerName": "testuser999",
        "description": "testing...",
        "estimateName": "test estimate",
        "projectAddress": "123 test project St",
        "status": "Pending Approval",
        "createdAt": "2024-06-20T03:09:40.442Z",
        "updatedAt": "2024-06-20T03:09:40.442Z"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Change Order
### Method: PATCH
>```
>http://localhost:3000/api/users/:user_id/customers/:customer_id/estimates/:estimate_id/change-orders/:changeorder_id
>```
### Headers

|Content-Type|Value|
|---|---|
|Cookie|authjs.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwia2lkIjoiQkVBc21LZzRYUnZUUFNHQlMwbUxNelY3ZE9MelIzNEpmc3ZRQlJEWTVlZFJMYko0bmlhZVVaNHdjOWdfRDB4NndXVkM2ano0YkkyVWRmNzhhNnpuTkEifQ..wIfM9HB1TMyYOVFtlfjk7w.eIiHFOE-m6KBTcWXdICdusbcld8VlFyikNoBs8TLAMaWKRYrkgMD21pLlFd4OPOSc4lo4CvGoTbvmB7mm41zj8lAbZiQeWtaD56Ru1H3TLgalSomIqsFVSed6C77T0GP5oX0Me8aLsRmbdI-AgRG-nqZV3izMyiIAbP3qE6Hx1gLb2Pud2IYfPPj98FGtVfN00SbPGXk9Iq7OGk5_JJLT6QnlTH7W19MQ5-1vclouVsbIXS1TH7iZUAuRplENu71ImX09rPCPZ4XQbjkD0Lvgw.Uttpe5ra5QLgLYIup_tq6zKF9KXnDs05XwWOmNQMoqY|


### Body (**raw**)

```json
{
    "customer_user_id": "90909090",
    "changeOrderName": "change order test(updated)",
    "customerName": "testuser999(updated)",
    "description": "testing...(updated)",
    "estimateName": "test estimate(updated)",
    "projectAddress": "123 test project St(updated)"
}
```

### Response: 500
```json
{
    "error": "Server Error"
}
```

### Response: 401
```json
{
    "error": "No session"
}
```

### Response: 200
```json
{
    "message": "Change order successfully updated",
    "changeOrder": {
        "changeOrderName": "change order test(updated)",
        "description": "testing...(updated)",
        "updatedAt": "2024-06-20T03:14:19.046Z"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Change Order
### Method: DELETE
>```
>http://localhost:3000/api/users/:user_id/customers/:customer_id/estimates/:estimate_id/change-orders/:changeorder_id
>```
### Response: 500
```json
{
    "error": "Server Error"
}
```

### Response: 401
```json
{
    "error": "No session"
}
```

### Response: 200
```json
{
    "message": "Change order 11111111 successfully deleted"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Auth 


## End-point: Sign In
### Method: GET
>```
>http://localhost:3000/api/auth/signin
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Sign In
### Method: POST
>```
>http://localhost:3000//api/auth/signin/:provider
>```
### Headers

|Content-Type|Value|
|---|---|
|Cookie|authjs.csrf-token=a335b9af445c65fc6bbd27c73b45443fa315128b571b4e7fc9a9d4a0a3e78fdd%7C0d69f82766e251332e9929c4837f8501469e8fdebce699d9f342e9e3a501ab39|


### Body (**raw**)

```json
{
    "email": "postmanuser@email.com",
    "password": "pass"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Sign Out
### Method: GET
>```
>http://localhost:3000/api/auth/signout
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Sign Out
### Method: POST
>```
>http://localhost:3000/api/auth/signout
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Session
### Method: GET
>```
>http://localhost:3000/api/auth/session
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: CSFR
### Method: GET
>```
>http://localhost:3000/api/auth/csrf
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Providers
### Method: GET
>```
>http://localhost:3000/api/auth/providers
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Callback
### Method: GET
>```
>http://localhost:3000/api/auth/callback/:provider
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Callback
### Method: POST
>```
>http://localhost:3000/api/auth/callback/:provider
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Pages 

## 📁 Collection: Customer Pages 

## 📁 Collection: Admin Pages 


## End-point: Sign In
### Method: GET
>```
>http://localhost:3000/api/auth/signin
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Sign Out
### Method: GET
>```
>http://localhost:3000/api/auth/signout
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
