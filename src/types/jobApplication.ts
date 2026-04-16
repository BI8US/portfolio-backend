import type { IdParams, SortDirection } from './common';

export interface CreateApplicationDto {
    link?: string;
    contact?: string;
    status: string;
    company: string;
    role: string;
    schedule?: string;
    description?: string;
    notes?: string;
}

export type UpdateApplicationDto = Partial<CreateApplicationDto>;

export interface JobApplicationListItem {
    id: number;
    status: string;
    company: string;
    role: string;
    createdAt: string;
    updatedAt: string;
}

export type ApplicationParams = IdParams;

export type JobApplicationSortField =
    | 'createdAt'
    | 'updatedAt'
    | 'company'
    | 'status'
    | 'role';

export interface JobApplicationListQuery {
    sortBy?: JobApplicationSortField;
    sortDirection?: SortDirection;
}
