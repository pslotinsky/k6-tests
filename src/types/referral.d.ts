import { PlanData } from './plan';

export const enum ReferralStatus {
    Active = 'active',
    Cancelled = 'cancelled',
    Expired = 'expired',
    Executed = 'executed',
}

/**
 * parentEntryId and medicalCaseIds must be set or unset together
 * min length of medicalCaseIds: 1
 */
export interface ReferralFrom {
    id: string;
    serviceId: string;
    startDate: Date;
    duration: number;
    comment: string;
    parentEntryId?: string;
    medicalCaseIds?: string[];
    plans?: PlanData[];
}

export interface CreateReferralFrom {
    referrals: ReferralFrom[]
}

export interface UpdateReferralFrom {
    startDate?: Date;
    duration?: number;
    comment?: string;
    medicalCaseIds?: string[];
    plans?: PlanData[];
}

export interface UpdateReferralStatusForm {
    status: ReferralStatus;
}

export interface ReferralData {
    id: string;
    parentEntryId: string | null;
    executionEntryId: string | null;
    medicalCaseIds: string[];
    serviceId: string;
    startDate: Date;
    duration: number;
    comment: string;
    status: ReferralStatus;
    creationTime: Date;
    plans?: PlanData[];
}

export interface ReferralListResponse {
    referrals: ReferralData[];
}

export interface UpdateQuery {
    ids: string[];
    entryId?: string;
}
