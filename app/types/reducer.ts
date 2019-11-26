export interface Action<T = undefined> {
  type: string;
  payload?: T;
}

export type Reducer<T> = (handlers: Record<string, Handler<T>>) => (state: T, action: Action<any>) => T;

// Immer handler shouldn't return value
export type Handler<T> = (state: T, action: Action<any>) => void;
