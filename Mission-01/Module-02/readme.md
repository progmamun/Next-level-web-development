- nmv node installation
- `npm install -g typescript` (tsc --v)
- npm init -y
- npm i -D nodemon
- tsc init
- `npm i ts-node-dev`
- tsc (code compile)
- npm i ts-node-dev --save-dev
- npx ts-node-dev --resawn src/function.ts
  ----===

2. Primitive types in typescript

- string, number, boolean, null, undefined
- Explicit types refer to situations where the programmer manually specifies the type of a variable, function parameter, or function return value.

```
let myString: string = "Hello, world!";
```

- Implicit types, on the other hand, are inferred by TypeScript based on the value assigned to a variable, function parameter, or function return value.

```
let myString = "Hello, world!";
```

---

3. Array and tuples in typescript

- array reference type
- tuples that is special type of array.

---

4. Object, Literal Types and Optional types
5. Functions in typescript

- if function not return anything, use `void`

6. Spread, Rest, Default Parameters and Destructuring

- allows default value set last parameters

```typescript
function adds(num1: number, num2: number = 20): number {
  return num1 + num2;
}
```

7. Type alias and optional types
8. Union, Intersection and Enum Types
9. Null, Unknown and Never Types

- `npx ts-node-dev --respawn ./src/nullable-unknown-never.ts`
10. Ternary Operator, Nullish coalescing Operator
- Nullish coalescing use 2 question (??), only work `null and undefined`
