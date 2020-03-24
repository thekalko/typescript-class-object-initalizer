# TypeScript Class Object Initalizer

## Make all properties in T optional
 
```
type Partial<T> = {
    [P in keyof T]?: T[P];
};
```
