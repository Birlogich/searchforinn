export const loadState = () => {
  try {
    const savedAccessToken = localStorage.getItem("accessToken");
    const savedExpiredDate = localStorage.getItem("expire");
    const savedDate = new Date(savedExpiredDate);
    if (savedAccessToken === null) {
      return undefined;
    }

    console.log(savedAccessToken);
    console.log(savedDate);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
  } catch (error) {}
};
