# EdgeConfigItem

The EdgeConfig.

## Example Usage

```typescript
import { EdgeConfigItem } from "@vercel/sdk/models/components/edgeconfigitem.js";

let value: EdgeConfigItem = {
  key: "<key>",
  value: "<value>",
  edgeConfigId: "<id>",
  createdAt: 1580.60,
  updatedAt: 6650.82,
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `key`                            | *string*                         | :heavy_check_mark:               | N/A                              |
| `value`                          | *components.EdgeConfigItemValue* | :heavy_check_mark:               | N/A                              |
| `description`                    | *string*                         | :heavy_minus_sign:               | N/A                              |
| `edgeConfigId`                   | *string*                         | :heavy_check_mark:               | N/A                              |
| `createdAt`                      | *number*                         | :heavy_check_mark:               | N/A                              |
| `updatedAt`                      | *number*                         | :heavy_check_mark:               | N/A                              |