# GitSource1

## Example Usage

```typescript
import { GitSource1 } from "@vercel/sdk/models/operations/createdeployment.js";

let value: GitSource1 = {
  type: "github",
  repoId: 7118.70,
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                     | [operations.CreateDeploymentGitSourceDeploymentsResponseType](../../models/operations/createdeploymentgitsourcedeploymentsresponsetype.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `repoId`                                                                                                                                   | *operations.GitSourceRepoId*                                                                                                               | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `ref`                                                                                                                                      | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `sha`                                                                                                                                      | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `prId`                                                                                                                                     | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |