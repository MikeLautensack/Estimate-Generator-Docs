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

# 📁 Collection: Estimates

## End-point: Create Estimate

### Method: POST

> ```
> http://localhost:3000/api/users/:user_id/customers/:customer_id/estimates/:estimate_id
> ```

### Headers

| Content-Type | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cookie       | authjs.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwia2lkIjoiQkVBc21LZzRYUnZUUFNHQlMwbUxNelY3ZE9MelIzNEpmc3ZRQlJEWTVlZFJMYko0bmlhZVVaNHdjOWdfRDB4NndXVkM2ano0YkkyVWRmNzhhNnpuTkEifQ..wIfM9HB1TMyYOVFtlfjk7w.eIiHFOE-m6KBTcWXdICdusbcld8VlFyikNoBs8TLAMaWKRYrkgMD21pLlFd4OPOSc4lo4CvGoTbvmB7mm41zj8lAbZiQeWtaD56Ru1H3TLgalSomIqsFVSed6C77T0GP5oX0Me8aLsRmbdI-AgRG-nqZV3izMyiIAbP3qE6Hx1gLb2Pud2IYfPPj98FGtVfN00SbPGXk9Iq7OGk5_JJLT6QnlTH7W19MQ5-1vclouVsbIXS1TH7iZUAuRplENu71ImX09rPCPZ4XQbjkD0Lvgw.Uttpe5ra5QLgLYIup_tq6zKF9KXnDs05XwWOmNQMoqY |

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

> ```
> http://localhost:3000/api/users/:user_id/customers/:customer_id/estimates/:estimate_id
> ```

### Headers

| Content-Type | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cookie       | authjs.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwia2lkIjoiQkVBc21LZzRYUnZUUFNHQlMwbUxNelY3ZE9MelIzNEpmc3ZRQlJEWTVlZFJMYko0bmlhZVVaNHdjOWdfRDB4NndXVkM2ano0YkkyVWRmNzhhNnpuTkEifQ..wIfM9HB1TMyYOVFtlfjk7w.eIiHFOE-m6KBTcWXdICdusbcld8VlFyikNoBs8TLAMaWKRYrkgMD21pLlFd4OPOSc4lo4CvGoTbvmB7mm41zj8lAbZiQeWtaD56Ru1H3TLgalSomIqsFVSed6C77T0GP5oX0Me8aLsRmbdI-AgRG-nqZV3izMyiIAbP3qE6Hx1gLb2Pud2IYfPPj98FGtVfN00SbPGXk9Iq7OGk5_JJLT6QnlTH7W19MQ5-1vclouVsbIXS1TH7iZUAuRplENu71ImX09rPCPZ4XQbjkD0Lvgw.Uttpe5ra5QLgLYIup_tq6zKF9KXnDs05XwWOmNQMoqY |

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

> ```
> http://localhost:3000/api/users/:user_id/customers/:customer_id/estimates/:estimate_id
> ```

### Headers

| Content-Type | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cookie       | authjs.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwia2lkIjoiQkVBc21LZzRYUnZUUFNHQlMwbUxNelY3ZE9MelIzNEpmc3ZRQlJEWTVlZFJMYko0bmlhZVVaNHdjOWdfRDB4NndXVkM2ano0YkkyVWRmNzhhNnpuTkEifQ..wIfM9HB1TMyYOVFtlfjk7w.eIiHFOE-m6KBTcWXdICdusbcld8VlFyikNoBs8TLAMaWKRYrkgMD21pLlFd4OPOSc4lo4CvGoTbvmB7mm41zj8lAbZiQeWtaD56Ru1H3TLgalSomIqsFVSed6C77T0GP5oX0Me8aLsRmbdI-AgRG-nqZV3izMyiIAbP3qE6Hx1gLb2Pud2IYfPPj98FGtVfN00SbPGXk9Iq7OGk5_JJLT6QnlTH7W19MQ5-1vclouVsbIXS1TH7iZUAuRplENu71ImX09rPCPZ4XQbjkD0Lvgw.Uttpe5ra5QLgLYIup_tq6zKF9KXnDs05XwWOmNQMoqY |

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
