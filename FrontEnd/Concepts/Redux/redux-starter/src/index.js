import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

store.dispatch(bugAdded("Bug1"));
store.dispatch(bugAdded("Bug2"));
store.dispatch(bugAdded("Bug3"));
store.dispatch(bugResolved(1));

console.log(store.getState());
