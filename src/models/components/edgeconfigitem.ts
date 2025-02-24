/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  EdgeConfigItemValue,
  EdgeConfigItemValue$inboundSchema,
  EdgeConfigItemValue$Outbound,
  EdgeConfigItemValue$outboundSchema,
} from "./edgeconfigitemvalue.js";

/**
 * The EdgeConfig.
 */
export type EdgeConfigItem = {
  key: string;
  value: EdgeConfigItemValue | null;
  description?: string | undefined;
  edgeConfigId: string;
  createdAt: number;
  updatedAt: number;
};

/** @internal */
export const EdgeConfigItem$inboundSchema: z.ZodType<
  EdgeConfigItem,
  z.ZodTypeDef,
  unknown
> = z.object({
  key: z.string(),
  value: z.nullable(EdgeConfigItemValue$inboundSchema),
  description: z.string().optional(),
  edgeConfigId: z.string(),
  createdAt: z.number(),
  updatedAt: z.number(),
});

/** @internal */
export type EdgeConfigItem$Outbound = {
  key: string;
  value: EdgeConfigItemValue$Outbound | null;
  description?: string | undefined;
  edgeConfigId: string;
  createdAt: number;
  updatedAt: number;
};

/** @internal */
export const EdgeConfigItem$outboundSchema: z.ZodType<
  EdgeConfigItem$Outbound,
  z.ZodTypeDef,
  EdgeConfigItem
> = z.object({
  key: z.string(),
  value: z.nullable(EdgeConfigItemValue$outboundSchema),
  description: z.string().optional(),
  edgeConfigId: z.string(),
  createdAt: z.number(),
  updatedAt: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EdgeConfigItem$ {
  /** @deprecated use `EdgeConfigItem$inboundSchema` instead. */
  export const inboundSchema = EdgeConfigItem$inboundSchema;
  /** @deprecated use `EdgeConfigItem$outboundSchema` instead. */
  export const outboundSchema = EdgeConfigItem$outboundSchema;
  /** @deprecated use `EdgeConfigItem$Outbound` instead. */
  export type Outbound = EdgeConfigItem$Outbound;
}

export function edgeConfigItemToJSON(edgeConfigItem: EdgeConfigItem): string {
  return JSON.stringify(EdgeConfigItem$outboundSchema.parse(edgeConfigItem));
}

export function edgeConfigItemFromJSON(
  jsonString: string,
): SafeParseResult<EdgeConfigItem, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EdgeConfigItem$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EdgeConfigItem' from JSON`,
  );
}
