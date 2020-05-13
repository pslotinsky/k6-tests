import { Sex } from './common';
import { MedicalCaseStatus, MedicalCaseType } from './diagnosis';
import { AllergenParams } from './entry';
import { ReferralData } from './referral';

export const enum CodeWord {
    getAllehrs = 'getAllEhrsCodeWord',
}

export interface EhrResponse {
    ehr: EhrData;
}

export interface EhrListResponse {
    ehrs: EhrDataListItem[];
}

export interface EhrDataListItem {
    id: string;
    recordId: number;
    firstName: string;
    lastName: string;
    patronymic?: string;
    birthDate: string;
    sex?: Sex;
    phone?: string;
    email?: string;
}

export interface EhrData extends EhrDataListItem {
    snils?: string,
    inn?: string,
    creationTime: string,
    contactPersons?: ContactPersonData[],
}

export interface MedicalCaseData {
    id: string;
    status: MedicalCaseStatus;
    type: MedicalCaseType;
    icdId: string;
    clinicalDiagnosis: string;
}

export interface EhrFieldsData {
    [key: string]: any;
    medicalCases: MedicalCaseData[];
    referrals?: ReferralData[];
}

export interface EhrFieldsVersionData extends Partial<EhrFieldsData> {
    [key: string]: any;
    creationTime?: Date;
    entryId?: string;
    authorId?: string;
}

export interface EhrFieldsResponse {
    ehrFields: EhrFieldsData;
}

export interface EhrFieldsHistoryResponse {
    history: EhrFieldsVersionData[];
}

export interface ContactPersonData {
    firstName: string;
    lastName:	string;
    phone: string;
    patronymic?: string;
}

export interface IEhrSearchQuery {
    query?: string;
    limit?: number;
}

export interface CreateEhrForm {
    id: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    phone?: string;
    email?: string;
    patronymic?: string;
    sex?: Sex;
    snils?: string;
    inn?: string;
    contactPersons: ContactPersonForm[];
}

export interface ContactPersonForm {
    firstName: string;
    lastName: string;
    phone: string;
    patronymic?: string;
}

export interface EhrCommonFieldsHistory {
    medicalCases: MedicalCaseData[];
    allergy: AllergenParams[];
}
