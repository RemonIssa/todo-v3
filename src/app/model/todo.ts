export interface Todo {
    id: number;
    descrizione: string;
    completato: boolean;
}

export type Task = Omit<Todo, 'id' | 'completato'>