# 📁 Collection: Customers

## End-point: Create Customer

### Method: POST

> ```
> http://localhost:3000/api/users/:user_id/customers/:customer_id
> ```

### Headers

| Content-Type | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cookie       | authjs.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwia2lkIjoiQkVBc21LZzRYUnZUUFNHQlMwbUxNelY3ZE9MelIzNEpmc3ZRQlJEWTVlZFJMYko0bmlhZVVaNHdjOWdfRDB4NndXVkM2ano0YkkyVWRmNzhhNnpuTkEifQ..wIfM9HB1TMyYOVFtlfjk7w.eIiHFOE-m6KBTcWXdICdusbcld8VlFyikNoBs8TLAMaWKRYrkgMD21pLlFd4OPOSc4lo4CvGoTbvmB7mm41zj8lAbZiQeWtaD56Ru1H3TLgalSomIqsFVSed6C77T0GP5oX0Me8aLsRmbdI-AgRG-nqZV3izMyiIAbP3qE6Hx1gLb2Pud2IYfPPj98FGtVfN00SbPGXk9Iq7OGk5_JJLT6QnlTH7W19MQ5-1vclouVsbIXS1TH7iZUAuRplENu71ImX09rPCPZ4XQbjkD0Lvgw.Uttpe5ra5QLgLYIup_tq6zKF9KXnDs05XwWOmNQMoqY |

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

> ```
> http://localhost:3000/api/users/:user_id/customers/:customer_id
> ```

### Headers

| Content-Type | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cookie       | authjs.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwia2lkIjoiQkVBc21LZzRYUnZUUFNHQlMwbUxNelY3ZE9MelIzNEpmc3ZRQlJEWTVlZFJMYko0bmlhZVVaNHdjOWdfRDB4NndXVkM2ano0YkkyVWRmNzhhNnpuTkEifQ..wIfM9HB1TMyYOVFtlfjk7w.eIiHFOE-m6KBTcWXdICdusbcld8VlFyikNoBs8TLAMaWKRYrkgMD21pLlFd4OPOSc4lo4CvGoTbvmB7mm41zj8lAbZiQeWtaD56Ru1H3TLgalSomIqsFVSed6C77T0GP5oX0Me8aLsRmbdI-AgRG-nqZV3izMyiIAbP3qE6Hx1gLb2Pud2IYfPPj98FGtVfN00SbPGXk9Iq7OGk5_JJLT6QnlTH7W19MQ5-1vclouVsbIXS1TH7iZUAuRplENu71ImX09rPCPZ4XQbjkD0Lvgw.Uttpe5ra5QLgLYIup_tq6zKF9KXnDs05XwWOmNQMoqY |

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

> ```
> http://localhost:3000/api/users/:user_id/customers/:customer_id
> ```

### Headers

| Content-Type | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cookie       | authjs.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwia2lkIjoiQkVBc21LZzRYUnZUUFNHQlMwbUxNelY3ZE9MelIzNEpmc3ZRQlJEWTVlZFJMYko0bmlhZVVaNHdjOWdfRDB4NndXVkM2ano0YkkyVWRmNzhhNnpuTkEifQ..wIfM9HB1TMyYOVFtlfjk7w.eIiHFOE-m6KBTcWXdICdusbcld8VlFyikNoBs8TLAMaWKRYrkgMD21pLlFd4OPOSc4lo4CvGoTbvmB7mm41zj8lAbZiQeWtaD56Ru1H3TLgalSomIqsFVSed6C77T0GP5oX0Me8aLsRmbdI-AgRG-nqZV3izMyiIAbP3qE6Hx1gLb2Pud2IYfPPj98FGtVfN00SbPGXk9Iq7OGk5_JJLT6QnlTH7W19MQ5-1vclouVsbIXS1TH7iZUAuRplENu71ImX09rPCPZ4XQbjkD0Lvgw.Uttpe5ra5QLgLYIup_tq6zKF9KXnDs05XwWOmNQMoqY |

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
