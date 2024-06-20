# 📁 Collection: Change Orders

## End-point: Create Change Order

### Method: POST

> ```
> http://localhost:3000/api/users/:user_id/customers/:customer_id/estimates/:estimate_id/change-orders/:changeorder_id
> ```

### Headers

| Content-Type | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cookie       | authjs.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwia2lkIjoiQkVBc21LZzRYUnZUUFNHQlMwbUxNelY3ZE9MelIzNEpmc3ZRQlJEWTVlZFJMYko0bmlhZVVaNHdjOWdfRDB4NndXVkM2ano0YkkyVWRmNzhhNnpuTkEifQ..wIfM9HB1TMyYOVFtlfjk7w.eIiHFOE-m6KBTcWXdICdusbcld8VlFyikNoBs8TLAMaWKRYrkgMD21pLlFd4OPOSc4lo4CvGoTbvmB7mm41zj8lAbZiQeWtaD56Ru1H3TLgalSomIqsFVSed6C77T0GP5oX0Me8aLsRmbdI-AgRG-nqZV3izMyiIAbP3qE6Hx1gLb2Pud2IYfPPj98FGtVfN00SbPGXk9Iq7OGk5_JJLT6QnlTH7W19MQ5-1vclouVsbIXS1TH7iZUAuRplENu71ImX09rPCPZ4XQbjkD0Lvgw.Uttpe5ra5QLgLYIup_tq6zKF9KXnDs05XwWOmNQMoqY |

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

> ```
> http://localhost:3000/api/users/:user_id/customers/:customer_id/estimates/:estimate_id/change-orders/:changeorder_id
> ```

### Headers

| Content-Type | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cookie       | authjs.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwia2lkIjoiQkVBc21LZzRYUnZUUFNHQlMwbUxNelY3ZE9MelIzNEpmc3ZRQlJEWTVlZFJMYko0bmlhZVVaNHdjOWdfRDB4NndXVkM2ano0YkkyVWRmNzhhNnpuTkEifQ..wIfM9HB1TMyYOVFtlfjk7w.eIiHFOE-m6KBTcWXdICdusbcld8VlFyikNoBs8TLAMaWKRYrkgMD21pLlFd4OPOSc4lo4CvGoTbvmB7mm41zj8lAbZiQeWtaD56Ru1H3TLgalSomIqsFVSed6C77T0GP5oX0Me8aLsRmbdI-AgRG-nqZV3izMyiIAbP3qE6Hx1gLb2Pud2IYfPPj98FGtVfN00SbPGXk9Iq7OGk5_JJLT6QnlTH7W19MQ5-1vclouVsbIXS1TH7iZUAuRplENu71ImX09rPCPZ4XQbjkD0Lvgw.Uttpe5ra5QLgLYIup_tq6zKF9KXnDs05XwWOmNQMoqY |

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

> ```
> http://localhost:3000/api/users/:user_id/customers/:customer_id/estimates/:estimate_id/change-orders/:changeorder_id
> ```

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
