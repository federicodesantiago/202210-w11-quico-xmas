export interface Repository<T> {
    load: () => Promise<T[]>;
    create: (payload: Partial<T>) => Promise<T>;
    update: (payload: Partial<T>) => Promise<T>;
    delete: (id: string) => Promise<string>;
}

export interface SyncRepository<T> {
    load: () => T[];
    create: (payload: Partial<T>) => T | null;
    update: (payload: Partial<T>) => T | null;
    delete: (id: string) => string | null;
}

export interface SyncRepositoryWithErrors<T> {
    load: () => T[];
    create: (payload: Partial<T>) => T;
    update: (payload: Partial<T>) => T;
    delete: (id: string) => string;
}
