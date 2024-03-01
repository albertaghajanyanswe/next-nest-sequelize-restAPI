import { Path, PathValue } from "react-hook-form";

export type TypedPath<T, V, N extends Path<T>=Path<T>> = N extends any ? PathValue<T, N> extends V ? N : never : never
export type StringPath<T, N extends Path<T>=Path<T>> = TypedPath<T, string, N>

