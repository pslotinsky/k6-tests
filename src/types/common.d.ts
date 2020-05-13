export type Sex = 'm' | 'f';

export type Optional<T> = T | undefined;
export type Nullable<T> = T | null;
export type Class<T> = { new (...arg: any[]): T } & Function;
export type Identifiable<T = any> = { id: T };
export type Collection<T> =  T[] | Set<T> | Map<any, T>

export const enum TechnicalStatus {
    active = 'active',
    deleted = 'deleted',
    archive = 'archive'
}

export const enum EventTechnicalStatus {
    active = 'active',
    deleted = 'deleted',
    special = 'special'
}

export type VersionedIdentity = {
    id: string;
    version: number;
}

export const enum SortingOrder {
    ASC = 'asc',
    DESC = 'desc',
}

export type DatesAsString<T extends Object> = { [key in keyof T]: T[key] extends Date ? string : T[key] };
export type StringArrayAsString<T extends Object> = { [key in keyof T]: T[key] extends string[] ? string : T[key] };
export type Identity<T> = T extends Identifiable ? T['id'] | ({ id: T['id'] } & Partial<T>) : Partial<T>;
export type DefaultIdentity<T> = T extends Identifiable ? T['id'] : Partial<T>;
export const enum JsType {
    Undefined =	"undefined",
    Object = "object",
    Boolean = "boolean",
    Number = "number",
    String = "string",
    Symbol = "symbol",
    Function = "function",
    BigInt = "bigint",
}

export interface BaseFindOption<T extends number | string> {
    id?: T;
    ids?: T[];
}
