export const initUser = [
  {
    id: 1,
    name: "User 1",
    complete: false,
  },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((user) => {
        if (user.id === action.id) {
          return { ...user, name: action.name, complete: !user.complete };
        } else {
          return user;
        }
      });
    default:
      return state;
  }
};
