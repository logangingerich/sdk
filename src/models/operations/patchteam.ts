/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Roles2 = {
  accessGroupId: string;
};

export const Roles1 = {
  Owner: "OWNER",
  Member: "MEMBER",
  Developer: "DEVELOPER",
  Billing: "BILLING",
  Viewer: "VIEWER",
  Contributor: "CONTRIBUTOR",
} as const;
export type Roles1 = ClosedEnum<typeof Roles1>;

export type Roles = Roles2 | Roles1;

export type Saml = {
  /**
   * Require that members of the team use SAML Single Sign-On.
   */
  enforced?: boolean | undefined;
  /**
   * Directory groups to role or access group mappings.
   */
  roles?: { [k: string]: Roles2 | Roles1 } | undefined;
};

/**
 * Whether or not remote caching is enabled for the team
 */
export type RemoteCaching = {
  /**
   * Enable or disable remote caching for the team.
   */
  enabled?: boolean | undefined;
};

export type PatchTeamRequestBody = {
  /**
   * The hash value of an uploaded image.
   */
  avatar?: string | undefined;
  /**
   * A short text that describes the team.
   */
  description?: string | undefined;
  emailDomain?: string | null | undefined;
  /**
   * The name of the team.
   */
  name?: string | undefined;
  /**
   * Suffix that will be used for all preview deployments.
   */
  previewDeploymentSuffix?: string | null | undefined;
  /**
   * Create a new invite code and replace the current one.
   */
  regenerateInviteCode?: boolean | undefined;
  saml?: Saml | undefined;
  /**
   * A new slug for the team.
   */
  slug?: string | undefined;
  /**
   * Enable preview toolbar: one of on, off or default.
   */
  enablePreviewFeedback?: string | undefined;
  /**
   * Enable production toolbar: one of on, off or default.
   */
  enableProductionFeedback?: string | undefined;
  /**
   * Sensitive environment variable policy: one of on, off or default.
   */
  sensitiveEnvironmentVariablePolicy?: string | undefined;
  /**
   * Whether or not remote caching is enabled for the team
   */
  remoteCaching?: RemoteCaching | undefined;
  /**
   * Display or hide IP addresses in Monitoring queries.
   */
  hideIpAddresses?: boolean | undefined;
  /**
   * Display or hide IP addresses in Log Drains.
   */
  hideIpAddressesInLogDrains?: boolean | undefined;
};

export type PatchTeamRequest = {
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId: string;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
  requestBody?: PatchTeamRequestBody | undefined;
};

/** @internal */
export const Roles2$inboundSchema: z.ZodType<Roles2, z.ZodTypeDef, unknown> = z
  .object({
    accessGroupId: z.string(),
  });

/** @internal */
export type Roles2$Outbound = {
  accessGroupId: string;
};

/** @internal */
export const Roles2$outboundSchema: z.ZodType<
  Roles2$Outbound,
  z.ZodTypeDef,
  Roles2
> = z.object({
  accessGroupId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Roles2$ {
  /** @deprecated use `Roles2$inboundSchema` instead. */
  export const inboundSchema = Roles2$inboundSchema;
  /** @deprecated use `Roles2$outboundSchema` instead. */
  export const outboundSchema = Roles2$outboundSchema;
  /** @deprecated use `Roles2$Outbound` instead. */
  export type Outbound = Roles2$Outbound;
}

export function roles2ToJSON(roles2: Roles2): string {
  return JSON.stringify(Roles2$outboundSchema.parse(roles2));
}

export function roles2FromJSON(
  jsonString: string,
): SafeParseResult<Roles2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Roles2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Roles2' from JSON`,
  );
}

/** @internal */
export const Roles1$inboundSchema: z.ZodNativeEnum<typeof Roles1> = z
  .nativeEnum(Roles1);

/** @internal */
export const Roles1$outboundSchema: z.ZodNativeEnum<typeof Roles1> =
  Roles1$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Roles1$ {
  /** @deprecated use `Roles1$inboundSchema` instead. */
  export const inboundSchema = Roles1$inboundSchema;
  /** @deprecated use `Roles1$outboundSchema` instead. */
  export const outboundSchema = Roles1$outboundSchema;
}

/** @internal */
export const Roles$inboundSchema: z.ZodType<Roles, z.ZodTypeDef, unknown> = z
  .union([z.lazy(() => Roles2$inboundSchema), Roles1$inboundSchema]);

/** @internal */
export type Roles$Outbound = Roles2$Outbound | string;

/** @internal */
export const Roles$outboundSchema: z.ZodType<
  Roles$Outbound,
  z.ZodTypeDef,
  Roles
> = z.union([z.lazy(() => Roles2$outboundSchema), Roles1$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Roles$ {
  /** @deprecated use `Roles$inboundSchema` instead. */
  export const inboundSchema = Roles$inboundSchema;
  /** @deprecated use `Roles$outboundSchema` instead. */
  export const outboundSchema = Roles$outboundSchema;
  /** @deprecated use `Roles$Outbound` instead. */
  export type Outbound = Roles$Outbound;
}

export function rolesToJSON(roles: Roles): string {
  return JSON.stringify(Roles$outboundSchema.parse(roles));
}

export function rolesFromJSON(
  jsonString: string,
): SafeParseResult<Roles, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Roles$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Roles' from JSON`,
  );
}

/** @internal */
export const Saml$inboundSchema: z.ZodType<Saml, z.ZodTypeDef, unknown> = z
  .object({
    enforced: z.boolean().optional(),
    roles: z.record(
      z.union([z.lazy(() => Roles2$inboundSchema), Roles1$inboundSchema]),
    ).optional(),
  });

/** @internal */
export type Saml$Outbound = {
  enforced?: boolean | undefined;
  roles?: { [k: string]: Roles2$Outbound | string } | undefined;
};

/** @internal */
export const Saml$outboundSchema: z.ZodType<Saml$Outbound, z.ZodTypeDef, Saml> =
  z.object({
    enforced: z.boolean().optional(),
    roles: z.record(
      z.union([z.lazy(() => Roles2$outboundSchema), Roles1$outboundSchema]),
    ).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Saml$ {
  /** @deprecated use `Saml$inboundSchema` instead. */
  export const inboundSchema = Saml$inboundSchema;
  /** @deprecated use `Saml$outboundSchema` instead. */
  export const outboundSchema = Saml$outboundSchema;
  /** @deprecated use `Saml$Outbound` instead. */
  export type Outbound = Saml$Outbound;
}

export function samlToJSON(saml: Saml): string {
  return JSON.stringify(Saml$outboundSchema.parse(saml));
}

export function samlFromJSON(
  jsonString: string,
): SafeParseResult<Saml, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Saml$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Saml' from JSON`,
  );
}

/** @internal */
export const RemoteCaching$inboundSchema: z.ZodType<
  RemoteCaching,
  z.ZodTypeDef,
  unknown
> = z.object({
  enabled: z.boolean().optional(),
});

/** @internal */
export type RemoteCaching$Outbound = {
  enabled?: boolean | undefined;
};

/** @internal */
export const RemoteCaching$outboundSchema: z.ZodType<
  RemoteCaching$Outbound,
  z.ZodTypeDef,
  RemoteCaching
> = z.object({
  enabled: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RemoteCaching$ {
  /** @deprecated use `RemoteCaching$inboundSchema` instead. */
  export const inboundSchema = RemoteCaching$inboundSchema;
  /** @deprecated use `RemoteCaching$outboundSchema` instead. */
  export const outboundSchema = RemoteCaching$outboundSchema;
  /** @deprecated use `RemoteCaching$Outbound` instead. */
  export type Outbound = RemoteCaching$Outbound;
}

export function remoteCachingToJSON(remoteCaching: RemoteCaching): string {
  return JSON.stringify(RemoteCaching$outboundSchema.parse(remoteCaching));
}

export function remoteCachingFromJSON(
  jsonString: string,
): SafeParseResult<RemoteCaching, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RemoteCaching$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RemoteCaching' from JSON`,
  );
}

/** @internal */
export const PatchTeamRequestBody$inboundSchema: z.ZodType<
  PatchTeamRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  avatar: z.string().optional(),
  description: z.string().optional(),
  emailDomain: z.nullable(z.string()).optional(),
  name: z.string().optional(),
  previewDeploymentSuffix: z.nullable(z.string()).optional(),
  regenerateInviteCode: z.boolean().optional(),
  saml: z.lazy(() => Saml$inboundSchema).optional(),
  slug: z.string().optional(),
  enablePreviewFeedback: z.string().optional(),
  enableProductionFeedback: z.string().optional(),
  sensitiveEnvironmentVariablePolicy: z.string().optional(),
  remoteCaching: z.lazy(() => RemoteCaching$inboundSchema).optional(),
  hideIpAddresses: z.boolean().optional(),
  hideIpAddressesInLogDrains: z.boolean().optional(),
});

/** @internal */
export type PatchTeamRequestBody$Outbound = {
  avatar?: string | undefined;
  description?: string | undefined;
  emailDomain?: string | null | undefined;
  name?: string | undefined;
  previewDeploymentSuffix?: string | null | undefined;
  regenerateInviteCode?: boolean | undefined;
  saml?: Saml$Outbound | undefined;
  slug?: string | undefined;
  enablePreviewFeedback?: string | undefined;
  enableProductionFeedback?: string | undefined;
  sensitiveEnvironmentVariablePolicy?: string | undefined;
  remoteCaching?: RemoteCaching$Outbound | undefined;
  hideIpAddresses?: boolean | undefined;
  hideIpAddressesInLogDrains?: boolean | undefined;
};

/** @internal */
export const PatchTeamRequestBody$outboundSchema: z.ZodType<
  PatchTeamRequestBody$Outbound,
  z.ZodTypeDef,
  PatchTeamRequestBody
> = z.object({
  avatar: z.string().optional(),
  description: z.string().optional(),
  emailDomain: z.nullable(z.string()).optional(),
  name: z.string().optional(),
  previewDeploymentSuffix: z.nullable(z.string()).optional(),
  regenerateInviteCode: z.boolean().optional(),
  saml: z.lazy(() => Saml$outboundSchema).optional(),
  slug: z.string().optional(),
  enablePreviewFeedback: z.string().optional(),
  enableProductionFeedback: z.string().optional(),
  sensitiveEnvironmentVariablePolicy: z.string().optional(),
  remoteCaching: z.lazy(() => RemoteCaching$outboundSchema).optional(),
  hideIpAddresses: z.boolean().optional(),
  hideIpAddressesInLogDrains: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchTeamRequestBody$ {
  /** @deprecated use `PatchTeamRequestBody$inboundSchema` instead. */
  export const inboundSchema = PatchTeamRequestBody$inboundSchema;
  /** @deprecated use `PatchTeamRequestBody$outboundSchema` instead. */
  export const outboundSchema = PatchTeamRequestBody$outboundSchema;
  /** @deprecated use `PatchTeamRequestBody$Outbound` instead. */
  export type Outbound = PatchTeamRequestBody$Outbound;
}

export function patchTeamRequestBodyToJSON(
  patchTeamRequestBody: PatchTeamRequestBody,
): string {
  return JSON.stringify(
    PatchTeamRequestBody$outboundSchema.parse(patchTeamRequestBody),
  );
}

export function patchTeamRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PatchTeamRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchTeamRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchTeamRequestBody' from JSON`,
  );
}

/** @internal */
export const PatchTeamRequest$inboundSchema: z.ZodType<
  PatchTeamRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  teamId: z.string(),
  slug: z.string().optional(),
  RequestBody: z.lazy(() => PatchTeamRequestBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PatchTeamRequest$Outbound = {
  teamId: string;
  slug?: string | undefined;
  RequestBody?: PatchTeamRequestBody$Outbound | undefined;
};

/** @internal */
export const PatchTeamRequest$outboundSchema: z.ZodType<
  PatchTeamRequest$Outbound,
  z.ZodTypeDef,
  PatchTeamRequest
> = z.object({
  teamId: z.string(),
  slug: z.string().optional(),
  requestBody: z.lazy(() => PatchTeamRequestBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchTeamRequest$ {
  /** @deprecated use `PatchTeamRequest$inboundSchema` instead. */
  export const inboundSchema = PatchTeamRequest$inboundSchema;
  /** @deprecated use `PatchTeamRequest$outboundSchema` instead. */
  export const outboundSchema = PatchTeamRequest$outboundSchema;
  /** @deprecated use `PatchTeamRequest$Outbound` instead. */
  export type Outbound = PatchTeamRequest$Outbound;
}

export function patchTeamRequestToJSON(
  patchTeamRequest: PatchTeamRequest,
): string {
  return JSON.stringify(
    PatchTeamRequest$outboundSchema.parse(patchTeamRequest),
  );
}

export function patchTeamRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchTeamRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchTeamRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchTeamRequest' from JSON`,
  );
}
