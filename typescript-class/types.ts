interface User {
    id: number
    name: string
    email: string
    age: number
    isActive: boolean
}

type TUserActive = Omit<User, "age">

const user: TUserActive = {
    id: 1,
    name: "Mario",
    email: "asdasd",
    isActive: false
}

type UserLogin = Pick<User, "email" | "name">

const userLogin: UserLogin = {
    name: "Mario",
    email: "asdasd"
}

type PartialUser = Partial<User>
type RequiredUser = Required<User>

const partial: PartialUser = {
    name: "Mario",
    email: "asdasd"
}

const requiredUser: RequiredUser = {
    id: 1,
    name: "Mario",
    email: "asdasd",
    age: 12,
    isActive: false
}

function getFirst<T extends any[]>(arr: T): T extends [infer U, ...unknown[]] ? U : never {
    return arr[0];
}

const firstNumber = getFirst([1, 2, 3]); // firstNumber is inferred as number
const firstString = getFirst(['a', 'b', 'c']); // firstString is inferred as string
