/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UploadArtifactRequest = {
  /**
   * The artifact size in bytes
   */
  contentLength: number;
  /**
   * The time taken to generate the uploaded artifact in milliseconds.
   */
  xArtifactDuration?: number | undefined;
  /**
   * The continuous integration or delivery environment where this artifact was generated.
   */
  xArtifactClientCi?: string | undefined;
  /**
   * 1 if the client is an interactive shell. Otherwise 0
   */
  xArtifactClientInteractive?: number | undefined;
  /**
   * The base64 encoded tag for this artifact. The value is sent back to clients when the artifact is downloaded as the header `x-artifact-tag`
   */
  xArtifactTag?: string | undefined;
  /**
   * The artifact hash
   */
  hash: string;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
  requestBody?:
    | ReadableStream<Uint8Array>
    | Blob
    | ArrayBuffer
    | Uint8Array
    | undefined;
};

/**
 * File successfully uploaded
 */
export type UploadArtifactResponseBody = {
  /**
   * Array of URLs where the artifact was updated
   */
  urls: Array<string>;
};

/** @internal */
export const UploadArtifactRequest$inboundSchema: z.ZodType<
  UploadArtifactRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "Content-Length": z.number(),
  "x-artifact-duration": z.number().optional(),
  "x-artifact-client-ci": z.string().optional(),
  "x-artifact-client-interactive": z.number().int().optional(),
  "x-artifact-tag": z.string().optional(),
  hash: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
  RequestBody: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]).optional(),
}).transform((v) => {
  return remap$(v, {
    "Content-Length": "contentLength",
    "x-artifact-duration": "xArtifactDuration",
    "x-artifact-client-ci": "xArtifactClientCi",
    "x-artifact-client-interactive": "xArtifactClientInteractive",
    "x-artifact-tag": "xArtifactTag",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UploadArtifactRequest$Outbound = {
  "Content-Length": number;
  "x-artifact-duration"?: number | undefined;
  "x-artifact-client-ci"?: string | undefined;
  "x-artifact-client-interactive"?: number | undefined;
  "x-artifact-tag"?: string | undefined;
  hash: string;
  teamId?: string | undefined;
  slug?: string | undefined;
  RequestBody?:
    | ReadableStream<Uint8Array>
    | Blob
    | ArrayBuffer
    | Uint8Array
    | undefined;
};

/** @internal */
export const UploadArtifactRequest$outboundSchema: z.ZodType<
  UploadArtifactRequest$Outbound,
  z.ZodTypeDef,
  UploadArtifactRequest
> = z.object({
  contentLength: z.number(),
  xArtifactDuration: z.number().optional(),
  xArtifactClientCi: z.string().optional(),
  xArtifactClientInteractive: z.number().int().optional(),
  xArtifactTag: z.string().optional(),
  hash: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
  requestBody: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]).optional(),
}).transform((v) => {
  return remap$(v, {
    contentLength: "Content-Length",
    xArtifactDuration: "x-artifact-duration",
    xArtifactClientCi: "x-artifact-client-ci",
    xArtifactClientInteractive: "x-artifact-client-interactive",
    xArtifactTag: "x-artifact-tag",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadArtifactRequest$ {
  /** @deprecated use `UploadArtifactRequest$inboundSchema` instead. */
  export const inboundSchema = UploadArtifactRequest$inboundSchema;
  /** @deprecated use `UploadArtifactRequest$outboundSchema` instead. */
  export const outboundSchema = UploadArtifactRequest$outboundSchema;
  /** @deprecated use `UploadArtifactRequest$Outbound` instead. */
  export type Outbound = UploadArtifactRequest$Outbound;
}

export function uploadArtifactRequestToJSON(
  uploadArtifactRequest: UploadArtifactRequest,
): string {
  return JSON.stringify(
    UploadArtifactRequest$outboundSchema.parse(uploadArtifactRequest),
  );
}

export function uploadArtifactRequestFromJSON(
  jsonString: string,
): SafeParseResult<UploadArtifactRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UploadArtifactRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UploadArtifactRequest' from JSON`,
  );
}

/** @internal */
export const UploadArtifactResponseBody$inboundSchema: z.ZodType<
  UploadArtifactResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  urls: z.array(z.string()),
});

/** @internal */
export type UploadArtifactResponseBody$Outbound = {
  urls: Array<string>;
};

/** @internal */
export const UploadArtifactResponseBody$outboundSchema: z.ZodType<
  UploadArtifactResponseBody$Outbound,
  z.ZodTypeDef,
  UploadArtifactResponseBody
> = z.object({
  urls: z.array(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadArtifactResponseBody$ {
  /** @deprecated use `UploadArtifactResponseBody$inboundSchema` instead. */
  export const inboundSchema = UploadArtifactResponseBody$inboundSchema;
  /** @deprecated use `UploadArtifactResponseBody$outboundSchema` instead. */
  export const outboundSchema = UploadArtifactResponseBody$outboundSchema;
  /** @deprecated use `UploadArtifactResponseBody$Outbound` instead. */
  export type Outbound = UploadArtifactResponseBody$Outbound;
}

export function uploadArtifactResponseBodyToJSON(
  uploadArtifactResponseBody: UploadArtifactResponseBody,
): string {
  return JSON.stringify(
    UploadArtifactResponseBody$outboundSchema.parse(uploadArtifactResponseBody),
  );
}

export function uploadArtifactResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<UploadArtifactResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UploadArtifactResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UploadArtifactResponseBody' from JSON`,
  );
}
