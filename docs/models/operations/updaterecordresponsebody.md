# UpdateRecordResponseBody

## Example Usage

```typescript
import { UpdateRecordResponseBody } from "@vercel/sdk/models/operations/updaterecord.js";

let value: UpdateRecordResponseBody = {
  creator: "<value>",
  domain: "outrageous-mortise.com",
  id: "<id>",
  name: "<value>",
  recordType: "NS",
  type: "record",
  value: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `createdAt`                                                                      | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `creator`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `domain`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `name`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `recordType`                                                                     | [operations.RecordType](../../models/operations/recordtype.md)                   | :heavy_check_mark:                                                               | N/A                                                                              |
| `ttl`                                                                            | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `type`                                                                           | [operations.UpdateRecordDnsType](../../models/operations/updaterecorddnstype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `value`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `comment`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |