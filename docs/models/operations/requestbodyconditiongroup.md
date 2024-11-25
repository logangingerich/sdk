# RequestBodyConditionGroup

## Example Usage

```typescript
import { RequestBodyConditionGroup } from "@vercel/sdk/models/operations/updatefirewallconfig.js";

let value: RequestBodyConditionGroup = {
  conditions: [
    {
      type: "scheme",
      op: "neq",
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `conditions`                                                                           | [operations.RequestBodyConditions](../../models/operations/requestbodyconditions.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |