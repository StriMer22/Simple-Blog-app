export const loginLaunch = (userCredentials) => ({
  type: "LOGIN_LAUNCH",
});

export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payLoad: user,
});

export const loginFail = () => ({
  type: "LOGIN_FAIL",
});

export const logout = () => ({
  type: "LOGOUT",
});

export const updateLaunch = (userCredentials) => ({
  type: "UPDATE_LAUNCH",
});

export const updateSuccess = (user) => ({
  type: "UPDATE_SUCCESS",
  payLoad: user,
});

export const updateFail = () => ({
  type: "UPDATE_FAIL",
});
