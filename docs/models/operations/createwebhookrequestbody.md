# CreateWebhookRequestBody

## Example Usage

```typescript
import { CreateWebhookRequestBody } from "@vercel/sdk/models/operations/createwebhook.js";

let value: CreateWebhookRequestBody = {
  url: "https://rosy-validity.net/",
  events: [
    "edge-config.items.updated",
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `url`                                                    | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `events`                                                 | [operations.Events](../../models/operations/events.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `projectIds`                                             | *string*[]                                               | :heavy_minus_sign:                                       | N/A                                                      |