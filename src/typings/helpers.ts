/* eslint-disable @typescript-eslint/ban-types */
export type DeepPartial<T> = T extends Function ? T : (
    T extends object
        ? { [P in keyof T]?: DeepPartial<T[P]>; }
        : T
);
