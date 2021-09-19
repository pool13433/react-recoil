import Params from "../typing/Params"
import Person from "../typing/Person"

export const FetchQuery = async ({ delay, userID }: Params): Promise<Person> => {
    return new Promise<Person>((resolve) => {
        const person: Person = {
            name: "Name"
        }
        setTimeout(() => {
            resolve(person)
        }, 2000)
    });
}

