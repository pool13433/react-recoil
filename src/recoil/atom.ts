import { atom } from "recoil";
import Todo from "../typing/Todo";

export const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});


export const todoListState = atom({
    key: 'todoListState',
    default: [] as Todo[],
});

export const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'Show All',
});

export const currentUserIDState = atom({
    key: 'CurrentUserID',
    default: 1,
});
