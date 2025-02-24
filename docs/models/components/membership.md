# Membership

The membership of the authenticated User in relation to the Team.

## Example Usage

```typescript
import { Membership } from "@vercel/sdk/models/components/teamlimited.js";

let value: Membership = {
  confirmed: false,
  confirmedAt: 6090.79,
  role: "MEMBER",
  createdAt: 7567.66,
  created: 789.96,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `uid`                                                                | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `entitlements`                                                       | [components.Entitlements](../../models/components/entitlements.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |
| `confirmed`                                                          | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `confirmedAt`                                                        | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `accessRequestedAt`                                                  | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `role`                                                               | [components.Role](../../models/components/role.md)                   | :heavy_check_mark:                                                   | N/A                                                                  |
| `teamId`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `createdAt`                                                          | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `created`                                                            | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `joinedFrom`                                                         | [components.JoinedFrom](../../models/components/joinedfrom.md)       | :heavy_minus_sign:                                                   | N/A                                                                  |