/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { projectsAddProjectDomain } from "../funcs/projectsAddProjectDomain.js";
import { projectsCreateProject } from "../funcs/projectsCreateProject.js";
import { projectsCreateProjectEnv } from "../funcs/projectsCreateProjectEnv.js";
import { projectsDeleteProject } from "../funcs/projectsDeleteProject.js";
import { projectsEditProjectEnv } from "../funcs/projectsEditProjectEnv.js";
import { projectsFilterProjectEnvs } from "../funcs/projectsFilterProjectEnvs.js";
import { projectsGetProjectDomain } from "../funcs/projectsGetProjectDomain.js";
import { projectsGetProjectEnv } from "../funcs/projectsGetProjectEnv.js";
import { projectsGetProjects } from "../funcs/projectsGetProjects.js";
import { projectsListPromoteAliases } from "../funcs/projectsListPromoteAliases.js";
import { projectsRemoveProjectDomain } from "../funcs/projectsRemoveProjectDomain.js";
import { projectsRemoveProjectEnv } from "../funcs/projectsRemoveProjectEnv.js";
import { projectsRequestPromote } from "../funcs/projectsRequestPromote.js";
import { projectsUpdateProject } from "../funcs/projectsUpdateProject.js";
import { projectsUpdateProjectDataCache } from "../funcs/projectsUpdateProjectDataCache.js";
import { projectsUpdateProjectDomain } from "../funcs/projectsUpdateProjectDomain.js";
import { projectsUpdateProjectProtectionBypass } from "../funcs/projectsUpdateProjectProtectionBypass.js";
import { projectsVerifyProjectDomain } from "../funcs/projectsVerifyProjectDomain.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import {
  AddProjectDomainRequest,
  AddProjectDomainResponseBody,
} from "../models/operations/addprojectdomain.js";
import {
  CreateProjectRequest,
  CreateProjectResponseBody,
} from "../models/operations/createproject.js";
import {
  CreateProjectEnvRequest,
  CreateProjectEnvResponseBody,
} from "../models/operations/createprojectenv.js";
import { DeleteProjectRequest } from "../models/operations/deleteproject.js";
import {
  EditProjectEnvRequest,
  EditProjectEnvResponseBody,
} from "../models/operations/editprojectenv.js";
import {
  FilterProjectEnvsRequest,
  FilterProjectEnvsResponseBody,
} from "../models/operations/filterprojectenvs.js";
import {
  GetProjectDomainRequest,
  GetProjectDomainResponseBody,
} from "../models/operations/getprojectdomain.js";
import {
  GetProjectEnvRequest,
  GetProjectEnvResponseBody,
} from "../models/operations/getprojectenv.js";
import {
  GetProjectsRequest,
  GetProjectsResponseBody,
} from "../models/operations/getprojects.js";
import {
  ListPromoteAliasesRequest,
  ListPromoteAliasesResponseBody,
} from "../models/operations/listpromotealiases.js";
import {
  RemoveProjectDomainRequest,
  RemoveProjectDomainResponseBody,
} from "../models/operations/removeprojectdomain.js";
import {
  RemoveProjectEnvRequest,
  RemoveProjectEnvResponseBody,
} from "../models/operations/removeprojectenv.js";
import { RequestPromoteRequest } from "../models/operations/requestpromote.js";
import {
  UpdateProjectRequest,
  UpdateProjectResponseBody,
} from "../models/operations/updateproject.js";
import {
  UpdateProjectDataCacheRequest,
  UpdateProjectDataCacheResponseBody,
} from "../models/operations/updateprojectdatacache.js";
import {
  UpdateProjectDomainRequest,
  UpdateProjectDomainResponseBody,
} from "../models/operations/updateprojectdomain.js";
import {
  UpdateProjectProtectionBypassRequest,
  UpdateProjectProtectionBypassResponseBody,
} from "../models/operations/updateprojectprotectionbypass.js";
import {
  VerifyProjectDomainRequest,
  VerifyProjectDomainResponseBody,
} from "../models/operations/verifyprojectdomain.js";
import { unwrapAsync } from "../types/fp.js";

export class Projects extends ClientSDK {
  /**
   * Update the data cache feature
   *
   * @remarks
   * Update the data cache feature on a project.
   */
  async updateProjectDataCache(
    request: UpdateProjectDataCacheRequest,
    options?: RequestOptions,
  ): Promise<UpdateProjectDataCacheResponseBody> {
    return unwrapAsync(projectsUpdateProjectDataCache(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a list of projects
   *
   * @remarks
   * Allows to retrieve the list of projects of the authenticated user or team. The list will be paginated and the provided query parameters allow filtering the returned projects.
   */
  async getProjects(
    request: GetProjectsRequest,
    options?: RequestOptions,
  ): Promise<GetProjectsResponseBody> {
    return unwrapAsync(projectsGetProjects(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a new project
   *
   * @remarks
   * Allows to create a new project with the provided configuration. It only requires the project `name` but more configuration can be provided to override the defaults.
   */
  async createProject(
    request: CreateProjectRequest,
    options?: RequestOptions,
  ): Promise<CreateProjectResponseBody> {
    return unwrapAsync(projectsCreateProject(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an existing project
   *
   * @remarks
   * Update the fields of a project using either its `name` or `id`.
   */
  async updateProject(
    request: UpdateProjectRequest,
    options?: RequestOptions,
  ): Promise<UpdateProjectResponseBody> {
    return unwrapAsync(projectsUpdateProject(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a Project
   *
   * @remarks
   * Delete a specific project by passing either the project `id` or `name` in the URL.
   */
  async deleteProject(
    request: DeleteProjectRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(projectsDeleteProject(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a project domain
   *
   * @remarks
   * Get project domain by project id/name and domain name.
   */
  async getProjectDomain(
    request: GetProjectDomainRequest,
    options?: RequestOptions,
  ): Promise<GetProjectDomainResponseBody> {
    return unwrapAsync(projectsGetProjectDomain(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a project domain
   *
   * @remarks
   * Update a project domain's configuration, including the name, git branch and redirect of the domain.
   */
  async updateProjectDomain(
    request: UpdateProjectDomainRequest,
    options?: RequestOptions,
  ): Promise<UpdateProjectDomainResponseBody> {
    return unwrapAsync(projectsUpdateProjectDomain(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove a domain from a project
   *
   * @remarks
   * Remove a domain from a project by passing the domain name and by specifying the project by either passing the project `id` or `name` in the URL.
   */
  async removeProjectDomain(
    request: RemoveProjectDomainRequest,
    options?: RequestOptions,
  ): Promise<RemoveProjectDomainResponseBody> {
    return unwrapAsync(projectsRemoveProjectDomain(
      this,
      request,
      options,
    ));
  }

  /**
   * Add a domain to a project
   *
   * @remarks
   * Add a domain to the project by passing its domain name and by specifying the project by either passing the project `id` or `name` in the URL. If the domain is not yet verified to be used on this project, the request will return `verified = false`, and the domain will need to be verified according to the `verification` challenge via `POST /projects/:idOrName/domains/:domain/verify`. If the domain already exists on the project, the request will fail with a `400` status code.
   */
  async addProjectDomain(
    request: AddProjectDomainRequest,
    options?: RequestOptions,
  ): Promise<AddProjectDomainResponseBody> {
    return unwrapAsync(projectsAddProjectDomain(
      this,
      request,
      options,
    ));
  }

  /**
   * Verify project domain
   *
   * @remarks
   * Attempts to verify a project domain with `verified = false` by checking the correctness of the project domain's `verification` challenge.
   */
  async verifyProjectDomain(
    request: VerifyProjectDomainRequest,
    options?: RequestOptions,
  ): Promise<VerifyProjectDomainResponseBody> {
    return unwrapAsync(projectsVerifyProjectDomain(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve the environment variables of a project by id or name
   *
   * @remarks
   * Retrieve the environment variables for a given project by passing either the project `id` or `name` in the URL.
   */
  async filterProjectEnvs(
    request: FilterProjectEnvsRequest,
    options?: RequestOptions,
  ): Promise<FilterProjectEnvsResponseBody> {
    return unwrapAsync(projectsFilterProjectEnvs(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve the decrypted value of an environment variable of a project by id
   *
   * @remarks
   * Retrieve the environment variable for a given project.
   */
  async getProjectEnv(
    request: GetProjectEnvRequest,
    options?: RequestOptions,
  ): Promise<GetProjectEnvResponseBody> {
    return unwrapAsync(projectsGetProjectEnv(
      this,
      request,
      options,
    ));
  }

  /**
   * Create one or more environment variables
   *
   * @remarks
   * Create one ore more environment variables for a project by passing its `key`, `value`, `type` and `target` and by specifying the project by either passing the project `id` or `name` in the URL.
   */
  async createProjectEnv(
    request: CreateProjectEnvRequest,
    options?: RequestOptions,
  ): Promise<CreateProjectEnvResponseBody> {
    return unwrapAsync(projectsCreateProjectEnv(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove an environment variable
   *
   * @remarks
   * Delete a specific environment variable for a given project by passing the environment variable identifier and either passing the project `id` or `name` in the URL.
   */
  async removeProjectEnv(
    request: RemoveProjectEnvRequest,
    options?: RequestOptions,
  ): Promise<RemoveProjectEnvResponseBody> {
    return unwrapAsync(projectsRemoveProjectEnv(
      this,
      request,
      options,
    ));
  }

  /**
   * Edit an environment variable
   *
   * @remarks
   * Edit a specific environment variable for a given project by passing the environment variable identifier and either passing the project `id` or `name` in the URL.
   */
  async editProjectEnv(
    request: EditProjectEnvRequest,
    options?: RequestOptions,
  ): Promise<EditProjectEnvResponseBody> {
    return unwrapAsync(projectsEditProjectEnv(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Protection Bypass for Automation
   *
   * @remarks
   * Update the deployment protection automation bypass for a project
   */
  async updateProjectProtectionBypass(
    request: UpdateProjectProtectionBypassRequest,
    options?: RequestOptions,
  ): Promise<UpdateProjectProtectionBypassResponseBody> {
    return unwrapAsync(projectsUpdateProjectProtectionBypass(
      this,
      request,
      options,
    ));
  }

  /**
   * Points all production domains for a project to the given deploy
   *
   * @remarks
   * Allows users to promote a deployment to production. Note: This does NOT rebuild the deployment. If you need that, then call create-deployments endpoint.
   */
  async requestPromote(
    request: RequestPromoteRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(projectsRequestPromote(
      this,
      request,
      options,
    ));
  }

  /**
   * Gets a list of aliases with status for the current promote
   *
   * @remarks
   * Get a list of aliases related to the last promote request with their mapping status
   */
  async listPromoteAliases(
    request: ListPromoteAliasesRequest,
    options?: RequestOptions,
  ): Promise<ListPromoteAliasesResponseBody> {
    return unwrapAsync(projectsListPromoteAliases(
      this,
      request,
      options,
    ));
  }
}
