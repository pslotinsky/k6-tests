import { VersionedIdentity, Nullable } from './common';

export const enum EntryTypeStatus {
    Active = 'active',
    Draft = 'draft',
    Archived = 'archived',
}

export const enum EntryTypeType {
    Consultation = 'Консультация',
    Diagnostics = 'Диагностика',
    Manipulation = 'Манипуляция',
}

export const enum EntryTypeBlockStatus {
    Active = 'active',
    Draft = 'draft',
    Archived = 'archived',
}

export const enum EntryTypeFieldType {
    Text = 'text',
    String = 'string',
    Number = 'number',
    Select = 'select',
    TextList = 'textList',
    OptionalText = 'optionalText',
    Date = 'date',
    // Checkbox = 'checkbox',
    Toggle = 'toggle',
    Computed = 'computed',
    CheckboxList = 'checkboxList',
    CheckboxWithText = 'checkboxWithText',
    SelectionButtons = 'selectionButtons',
    Scale = 'scale',
    DrugAllergy = 'drugAllergy',
    Allergy = 'allergy',
    MedicalCases = 'medicalCases',
    Drug = 'drug',
    Pregnancy = 'pregnancy',
    Referrals = 'referrals',
    RenderedService = 'renderedService',
}

export const enum EntryTypeFieldName {
    Complains = 'complains',
    Pain = 'pain',
    MedicalHistory = 'medical history',
    Smoking = 'smoking',
    IsPregnant = 'isPregnant',
    MajorEvents = 'major events',
    SocialHistory = 'social history',
    FamilyBackground = 'family background',
    Conclusion = 'conclusion',
    AdditionalData = 'additionalData',
    Allergy = 'allergy',
    MedicalCases = 'medicalCases',
    DrugAllergy = 'drugAllergy',
    Drug = 'drug',
    NoseAndNasopharynx = 'nose and nasopharynx',
    OralCavity = 'oral cavity',
    RightEar = 'right ear',
    LeftEar = 'left ear',
    Larynx = 'larynx',
    LymphNodes = 'lymph nodes',
    AdditionalResearch = 'additional research',
    ObjectiveInspection = 'objective inspection',
    LastMenstrualPeriod = 'lastMenstrualPeriod',
    MenstrualFunction = 'menstrualFunction',
    LastPapTest = 'lastPapTest',
    AbnormalHistoryTest = 'abnormalHistoryTest',
    Pregnancy = 'pregnancy',
    GynecologistHistory = 'gynecologistHistory',
    SexualIntercourse = 'sexualIntercourse',
    Contraception = 'contraception',
    Height = 'height',
    Weigth = 'weight',
    BodyMassIndex = 'bodyMassIndex',
    BloodPressure = 'bloodPressure',
    Temperature = 'temperature',
    Pulse = 'pulse',
    RespiratoryRate = 'respiratoryRate',
    SO2 = 'SO2',
    GenitaliaExterna = 'genitaliaExterna',
    Vagina = 'vagina',
    Cervix = 'cervix',
    Uterus = 'uterus',
    Epoophoron = 'epoophoron',
    InguinalLymphNodes = 'inguinalLymphNodes',
    MammaryGland = 'mammaryGland',
    ApproachType = 'approachType',
    MenstrualIrregularities = 'menstrualIrregularities',
    DayOfMenstrualCycle = 'dayOfMenstrualCycle',
    UterusPosition = 'uterusPosition',
    UterusShape = 'uterusShape',
    UterusLongitudinalSize = 'uterusLongitudinalSize',
    UterusThickness = 'uterusThickness',
    UterusTransverseSize = 'uterusTransverseSize',
    MyometriumEchostructure = 'myometriumEchostructure',
    MesenchymalTumor = 'mesenchymalTumor',
    UterineCavity = 'uterineCavity',
    EndometrialEcho = 'endometrialEcho',
    MenstrualPhase = 'menstrualPhase',
    CervixLength = 'cervixLength',
    CervixThickness = 'cervixThickness',
    CervixWidth = 'cervixWidth',
    CervixStructure = 'cervixStructure',
    Endocervix = 'endocervix',
    RightOvaryPosition = 'rightOvaryPosition',
    RightOvaryLength = 'rightOvaryLength',
    RightOvaryThickness = 'rightOvaryThickness',
    RightOvaryWidth = 'rightOvaryWidth',
    RightOvaryVolume = 'rightOvaryVolume',
    RightOvaryEchostructure = 'rightOvaryEchostructure',
    RightOvaryFollicle = 'rightOvaryFollicle',
    RightOvaryTumor = 'rightOvaryTumor',
    RightOvaryOviduct = 'rightOvaryOviduct',
    LeftOvaryPosition = 'leftOvaryPosition',
    LeftOvaryLength = 'leftOvaryLength',
    LeftOvaryThickness = 'leftOvaryThickness',
    LeftOvaryWidth = 'leftOvaryWidth',
    LeftOvaryVolume = 'leftOvaryVolume',
    LeftOvaryEchostructure = 'leftOvaryEchostructure',
    LeftOvaryFollicle = 'leftOvaryFollicle',
    LeftOvaryTumor = 'leftOvaryTumor',
    LeftOvaryOviduct = 'leftOvaryOviduct',
    PouchOfDouglasDescription = 'pouchOfDouglasDescription',
    Referrals = 'referrals',
}

export type FieldName = EntryTypeFieldName | string;

export interface FieldDataParams {
    format?: FormatterData;
    options?: FieldDataOptionParams[];
    label?: string;
    mask?: string;
    onlyFemale?: boolean;
    inherent?: boolean;
}

export interface EntryTypeFieldData {
    name: string | EntryTypeFieldName;
    type: EntryTypeFieldType;
    global: boolean;
    data?: Nullable<object>;
    title?: string;
    placeholder?: string;
    width?: number;
    dictionary?: string;
    formula?: Nullable<string>;
}

export interface FieldDataForm extends FieldDataParams {
}

export interface FieldDataOptionParams {
    label: string;
    value: string;
}

export interface FieldDataOptionForm extends FieldDataOptionParams {
}

export interface FieldData {
    name: string;
    type: EntryTypeFieldType;
    global?: boolean;
    title?: string;
    data?: Nullable<FieldDataForm>;
    placeholder?: string;
    width?: number;
    dictionary?: string;
    formula?: Nullable<string>;
}

export interface FieldForm extends FieldData {
}

export interface FormatterData {
    precision?: number;
    date?: string;
    declensions?: string[];
}

export interface FormatterForm extends FormatterData {
}

export interface EntryTypeSectionData {
    title: string;
    blocks: EntryTypeBlockData[];
}

export interface EntryTypeSectionForm {
    title: EntryTypeSectionData['title'];
    blocks: VersionedIdentity[];
}

export interface EntryTypeData {
    id: string;
    type: EntryTypeType,
    version: number;
    title: string;
    status: EntryTypeStatus;
    creationTime: string;
    sections: EntryTypeSectionData[];
}

export interface EntryTypeServiceResponse {
    serviceIds: string[];
    count: number;
}

export interface EntryTypeForm {
    type: EntryTypeData['type'];
    title: EntryTypeData['title'];
    sections: EntryTypeSectionForm[];
    serviceIds?: string[];
}

export interface UpdateEntryTypeForm {
    title?: EntryTypeData['title'];
    type?: EntryTypeData['type'];
    sections?: EntryTypeSectionForm[];
    serviceIds?: string[];
}

export interface UpdateEntryTypeStatusForm {
    status: EntryTypeData['status'];
}

export interface UpdateEntryTypeBlockStatusForm {
    status: EntryTypeBlockData['status'];
}

export interface UpdateEntryTypeStatus {
    status: EntryTypeStatus;
}

export interface EntryTypeResponse {
    entryType: EntryTypeData;
}

export interface EntryTypeListResponse {
    entryTypes: EntryTypeData[];
}

export interface EntryTypeBlockListResponse {
    entryTypeBlocks: EntryTypeBlockData[];
}

export interface EntryTypeBlockResponse {
    entryTypeBlock: EntryTypeBlockData;
}

export interface EntryTypeBlockData {
    id: string;
    version: number;
    status: EntryTypeBlockStatus;
    title: string;
    name: string;
    fields: EntryTypeFieldData[];
}

export interface EntryTypeBlockForm {
    title: string;
    name: string;
    fields: FieldForm[];
}

export interface UpdateEntryTypeBlockForm {
    title?: string;
    fields?: FieldForm[];
}

export interface EntryTypeBlockListQuery {
    statuses?: EntryTypeBlockStatus[];
}
