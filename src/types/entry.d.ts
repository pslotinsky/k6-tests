import { EntryTypeFieldName } from './entryType';
import { Nullable, Identifiable } from './common';

export const enum EntryStatus {
    Signed = 'signed',
    Draft = 'draft',
}

export interface EntryData extends EntryDataListItem {
    fields: EntryFieldData[];
}

export interface EntryDataListItem {
    id: string;
    serialNumber: number;
    ehrId: string;
    typeId: string;
    typeVersion: number;
    status: EntryStatus;
    creationTime: Date;
    updateTime: Date;
    authorId: string;
    organizationId: string;
}

export interface ReferralExecutionForm {
    ids: string[];
}

export interface ReferralExecutionQuery {
    ids: string[];
}

export interface FieldValueItem<T = any> extends Identifiable<string> {
    value: T;
}

export interface FieldValueItemData<T = any> extends FieldValueItem<T> {
    isDeleted?: true;
}

export type FieldValueData =  Nullable<string | Date | Number | Object | FieldValueItemData[]>;
export type FieldValueParams = Nullable<string | Date | Number | Object | FieldValueItem[]>;

export interface EntryFieldData {
    name: string | EntryTypeFieldName;
    value: FieldValueData;
}

export interface DeletedFieldData {
    name: EntryTypeFieldName;
    value: string | Date | Number | Object;
    isDeleted?: true;
}

export interface EntryResponse {
    entry: EntryData;
}

export interface EntryListResponse {
    entries: EntryDataListItem[];
}

export interface EntryVersionsResponse {
    versions: EntryDataListItem[];
}

export interface CreateEntryForm {
    id: string;
    ehrId: string;
    typeId: string;
    organizationId: string;
}

export interface EntryListQuery {
    ehrIds: string[];
}

export interface UpdateEntryFieldForm {
    value: FieldValueParams;
}

export interface UpdateListFieldForm<T extends { id: string, [key: string]: any } = { id: string, [key: string]: any }> {
    value: T[];
}

export interface UpdateEntryTypeIdForm {
    typeId: string;
}

export interface UpdateAllergyForm {
    allergens: AllergenParams[];
}

export interface UpdatePregnancyForm {
    pregnancy: PregnancyForm[];
}

export interface UpdateDrugAllergyForm {
    drugAllergy: AllergenParams[];
}

export interface ChangeEntryStatusForm {
    status: EntryStatus;
}

export interface AllergyValue {
    allergens: AllergenParams[];
}

export interface DrugAllergyValue {
    notSet?: boolean,
    allergens: AllergenParams[];
}

export interface AllergenParams {
    allergenId: string;
    reactionIds: Nullable<string[]>;
}

export interface PregnancyParams {
    id: string;
    year?: number;
    gestationalAge?: string;
    result?: string;
    status?: FieldStatus;
}

export interface PregnancyForm extends PregnancyParams {
}

export const enum AllergenStatus {
    deleted = 'deleted',
}

export const enum FieldStatus {
    Active = 'active',
    Deleted = 'deleted',
}

export interface DrugParams {
    id: string;
    activeSubstance: string;
    tradeName: string;
    form: string;
    dosage: string;
    frequencyIfReception: string;
    directions: string;
    startDate: string;
    endDate: string;
}
