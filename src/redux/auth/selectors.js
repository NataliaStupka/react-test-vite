export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

//виконується в момент коли почин рефреш
//в App
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
