# RateLimit1

## Example Usage

```typescript
import { RateLimit1 } from "@vercel/sdk/models/operations/putfirewallconfig.js";

let value: RateLimit1 = {
  algo: "fixed_window",
  window: 7053.07,
  limit: 3656.76,
  keys: [
    "<value>",
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `algo`                                             | [operations.Algo](../../models/operations/algo.md) | :heavy_check_mark:                                 | N/A                                                |
| `window`                                           | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `limit`                                            | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `keys`                                             | *string*[]                                         | :heavy_check_mark:                                 | N/A                                                |
| `action`                                           | *operations.RateLimitAction*                       | :heavy_minus_sign:                                 | N/A                                                |