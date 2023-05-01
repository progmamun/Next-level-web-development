const users: {
  readonly company: "Programming hero";
  //  company: "Programming hero";  // object literal
  name: string;
  age: number;
  isMarried: true;
  wife?: string;
} = {
  company: "Programming hero",
  name: "Abul",
  age: 40,
  isMarried: true,
  wife: "abila",
};
// users.company = "Programming hero bangladesh"; cannot assign because of this object is readonly we cannot modify it.
