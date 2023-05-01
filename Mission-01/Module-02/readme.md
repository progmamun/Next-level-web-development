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

- if return type is not, use `void`

6. Spread, Rest, Default Parameters and Destructuring

- allows default value set last parameters

```
function adds(num1: number, num2: number = 20): number {
  return num1 + num2;
}
```
