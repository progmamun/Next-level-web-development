type CrushType = {
  name: string;
  age: number;
  profession: string;
  address: string;
  phone?: number;
};

const crush1: CrushType = {
  name: "JavaScript",
  age: 35,
  profession: "Web World",
  address: "Internet",
};

type CrushIsMarry = boolean;
const crushStatus: CrushIsMarry = true;

type CourseName = string;
const webCourse: CourseName = "Next level web development";
////////
type OperationType = (x: number, y: number) => number;

const calculation = (
  number1: number,
  number2: number,
  operation: OperationType
) => {
  return operation(number1, number2);
};

calculation(10, 30, (x, y) => x + y);
calculation(10, 30, (x, y) => x * y);
calculation(10, 30, (x, y) => x - y);
