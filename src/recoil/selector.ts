import { selector, selectorFamily } from "recoil";
import { FetchQuery } from "../services/query";
import Params from "../typing/Params";
import Person from "../typing/Person";
import TableOfUser from '../typing/TableOfUsers'
import { currentUserIDState, textState, todoListFilterState, todoListState } from "./atom";

export const charCountState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
        const text = get(textState);

        return text.length;
    },
});

export const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({ get }) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch (filter) {
            case 'Show Completed':
                return list.filter((item) => item.completed);
            case 'Show Uncompleted':
                return list.filter((item) => !item.completed);
            default:
                return list;
        }
    },
});

export const todoListStatsState = selector({
    key: 'todoListStatsState',
    get: ({ get }) => {
        const todoList = get(todoListState);
        const totalNum = todoList.length;
        const totalCompletedNum = todoList.filter((item) => item.completed).length;
        const totalUncompletedNum = totalNum - totalCompletedNum;
        const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100;

        return {
            totalNum,
            totalCompletedNum,
            totalUncompletedNum,
            percentCompleted,
        };
    },
});

export const currentUserNameState = selector({
    key: 'CurrentUserName',
    get: ({ get }) => {
        const tableOfUsers: TableOfUser[] = new Array(10)
        return tableOfUsers[get(currentUserIDState)].name;
    },
});

export const currentUserNameQuery = selector({
    key: 'CurrentUserName',
    get: async ({ get }) => {
        const response: Person = await FetchQuery({
            userID: get(currentUserIDState),
        });
        return response.name;
    },
});
/*
export const userNameQuery = selector({
    key: 'UserName',
    get: ({ userID }: Params) => async (): Promise<Person> => {
        const response = await FetchQuery({ userID });
        console.log('response ::==', response)
        if (response.error) {
            throw response.error;
        }
        return response;
    }
});

export const currentUserInfoQuery = selector({
    key: 'CurrentUserInfoQuery',
    get: ({ get }) => get(userInfoQuery(get(currentUserIDState))),
});

export const friendsInfoQuery = selector({
    key: 'FriendsInfoQuery',
    get: ({ get }) => {
        const { friendList } = get(currentUserInfoQuery);
        console.log('friendList ::==', friendList)
        return friendList.map((friendID: number) => get(userInfoQuery(friendID)));
    },
});
*/