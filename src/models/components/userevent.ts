/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Array of events generated by the User.
 */
export type UserEvent = {};

/** @internal */
export const UserEvent$inboundSchema: z.ZodType<
  UserEvent,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type UserEvent$Outbound = {};

/** @internal */
export const UserEvent$outboundSchema: z.ZodType<
  UserEvent$Outbound,
  z.ZodTypeDef,
  UserEvent
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserEvent$ {
  /** @deprecated use `UserEvent$inboundSchema` instead. */
  export const inboundSchema = UserEvent$inboundSchema;
  /** @deprecated use `UserEvent$outboundSchema` instead. */
  export const outboundSchema = UserEvent$outboundSchema;
  /** @deprecated use `UserEvent$Outbound` instead. */
  export type Outbound = UserEvent$Outbound;
}

export function userEventToJSON(userEvent: UserEvent): string {
  return JSON.stringify(UserEvent$outboundSchema.parse(userEvent));
}

export function userEventFromJSON(
  jsonString: string,
): SafeParseResult<UserEvent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UserEvent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UserEvent' from JSON`,
  );
}
