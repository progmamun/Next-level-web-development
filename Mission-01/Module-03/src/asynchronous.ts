// Mocking 
// fetch data
interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await response.json();
}
const getTodoData = async (): Promise<void> => {
    const result = await getTodo();
    console.log(result);
}
getTodoData()

/// mock
const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = "Data is fetching.";
        if(data) {
            resolve(data)
        } else {
            reject("Fail to fetch data.")
        }
        
    })
}

const getPromiseData = async (): Promise<string> => {
    const data = await makePromise();
    return data
}

// boolean
const makePromiseBoolean = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = true;
        if(data) {
            resolve(data)
        } else {
            reject("Fail to fetch data.")
        }
        
    })
}
const getPromiseBoolean = async (): Promise<boolean> => {
    const data = await makePromiseBoolean();
    return data;
}

/// object
interface DataType {
    data: string;
}
const makePromiseObject = (): Promise<DataType> => {
    return new Promise<DataType>((resolve, reject) => {
        const data: DataType = {data: 'some thing in here.'};
        if(data) {
            resolve(data)
        } else {
            reject("Fail to fetch data.")
        }
        
    })
}

const getPromiseObject = async (): Promise<DataType> => {
    const data = await makePromiseObject();
    return data;
}