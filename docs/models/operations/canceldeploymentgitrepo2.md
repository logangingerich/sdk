# CancelDeploymentGitRepo2

## Example Usage

```typescript
import { CancelDeploymentGitRepo2 } from "@vercel/sdk/models/operations/canceldeployment.js";

let value: CancelDeploymentGitRepo2 = {
  org: "<value>",
  repo: "<value>",
  repoId: 8847.65,
  type: "github",
  repoOwnerId: 7019.78,
  path: "/private/var",
  defaultBranch: "<value>",
  name: "<value>",
  private: false,
  ownerType: "team",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `org`                                                                                                                            | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `repo`                                                                                                                           | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `repoId`                                                                                                                         | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `type`                                                                                                                           | [operations.CancelDeploymentGitRepoDeploymentsType](../../models/operations/canceldeploymentgitrepodeploymentstype.md)           | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `repoOwnerId`                                                                                                                    | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `path`                                                                                                                           | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `defaultBranch`                                                                                                                  | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `name`                                                                                                                           | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `private`                                                                                                                        | *boolean*                                                                                                                        | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `ownerType`                                                                                                                      | [operations.CancelDeploymentGitRepoDeploymentsOwnerType](../../models/operations/canceldeploymentgitrepodeploymentsownertype.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |