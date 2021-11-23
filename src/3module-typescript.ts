// 1. Работа с простыми типами

// Напишите тип функции, конкатенирующей две строки

// concat('Hello ', 'World') // -> Hello World;

function concatFn (value1: string, value2: string): string {
    return value1 + value2
}

// 2. Работа с интерфейсами

// Напишите интерфейс для описания следующих данных

const MyHometask:IMyHomework<string> = {

    howIDoIt: "I Do It Wel",

    simeArray: ["string one", "string two", 42],

    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],

}
interface IMyHomework<U> {
    howIDoIt: U,
    simeArray: Array<U | number>,
    withData: Array<IWithData<U>>
}

interface IWithData<T> {
    [N: string]: T | Array< T | number>
}

// 3. Типизация функций, используя Generic

// В уроке про Generics мы написали интерфейс массива MyArray

interface MyArray<T> {

    [N: number]: T;

// добавьте типизацию для метода reduce

    reduce(fn: (acc: T, value: T) => T, initialValue?: T): T;
}

let red : MyArray<number> = [1,2,3]

const initialValue = 0;

red.reduce((acc, value) => acc + value, initialValue)

// Справка о работе reduce
// reduce(fn: (accumulator, value) => 
// accumulator + value, initialValue: T); // -> 6


// 4. Работа с MappedTypes

interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}



// Стандартный generic Partial работает так же как Readonly, только для внешних ключей.

// Напишите такой MyPartial, чтобы создание подобного объекта стало возможным

const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win'
    }
}

type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}
