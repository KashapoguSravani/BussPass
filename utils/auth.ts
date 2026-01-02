export const getStudent = () => JSON.parse(localStorage.getItem("student") || "{}");

export const getDriver = () => JSON.parse(localStorage.getItem("driver") || "{}");

export const logout = () => {
  localStorage.clear();
  window.location.href = "/";
};
