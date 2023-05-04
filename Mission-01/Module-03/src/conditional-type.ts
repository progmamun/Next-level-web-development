type a1 = null;
type a2 = undefined;
type a3 = number;

type a4 = a1 extends string ? string : null;
// nested conditional type 
type d = a1 extends null ? null : a2 extends number ? number : a3 extends null ? null : never;


type SuperCourse = "web development" | "apps development" | "game development";
type RemoveSuperCourse<T, K> = T extends K ? never : T;
type CurrentCourse = RemoveSuperCourse<SuperCourse, "game development">