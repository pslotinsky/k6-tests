export const enum MedicalCaseStatus {
    Open = 'open',
    Closed = 'closed',
}

export const enum MedicalCaseType {
    Acute = 'acute',
    Chronic = 'chronic',
    Preventative = 'preventative',
}

export interface UpdateDiagnosisParams {
    medicalCaseId: string;
    icdId?: string;
    clinicalDiagnosis?: string;
    type?: MedicalCaseType;
    status?: MedicalCaseStatus;
}

export interface UpdateDiagnosisForm {
    medicalCaseId: string;
    icdId?: string;
    clinicalDiagnosis?: string;
    status?: MedicalCaseStatus
    type?: MedicalCaseType;
}

export interface CreateDiagnosisForm {
    medicalCaseId: string;
    type: MedicalCaseType;
    icdId: string;
    clinicalDiagnosis: string;
}

export interface DiagnosisParams {
    medicalCaseId: string;
    type: MedicalCaseType;
    status: MedicalCaseStatus
    icdId: string;
    clinicalDiagnosis: string;
}

export interface DiagnosisResponseParams {
    id: string;
    type: MedicalCaseType;
    status: MedicalCaseStatus
    icdId: string;
    clinicalDiagnosis: string;
}
