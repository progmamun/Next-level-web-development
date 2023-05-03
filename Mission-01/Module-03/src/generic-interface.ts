interface CrushCourse1<T> {
    name: string;
    course: T;
}
interface CrushCourse2<T, R> {
    name: string;
    course: T;
    rating: R;
}
const crushCourse2: CrushCourse2<boolean, number> = {
    name: "Next Level Development",
    course: true,
    rating: 10
}

interface CrushCourse3<T, R = null> {
    name: string;
    course: T;
    about?: R;
}
const crushCourse: CrushCourse3<boolean> = {
    name: "Next Level Development",
    course: true,
}
///// object
interface CrushCourse<T, U = null> {
    name: string;
    stack: T;
    details: U;
}
const crushCourses: CrushCourse<Array<string>, {rating: number, about: string}> = {
    name: "Professional T3 Stack",
    stack: ["next.js", "Prisma", "GraphQl", "aws"],
    details: {
        rating: 8,
        about: "Awesome course"
    }
}
console.log(crushCourses);