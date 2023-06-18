import { setLoading, setError, setLoaded } from "../store/user/userActions";

export const client = async (endPoint, { body, ...customConfig }) => {
  const headers = {
    "Content-Type": "application/json;charset=utf-8",
  };

  const config = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(endPoint, config);

    if (!response.ok) throw new Error("failed to fetch");

    const data = await response.json();

    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getUserBalance = (accessToken) => (dispatch) => {
  dispatch(setLoading());

  client(`https://gateway.scan-interfax.ru/api/v1/account/balance`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((data) => {
      const { balance, searchRateBlockPeriod, searchTermCost } = data;
      localStorage.setItem("balance", balance);
      localStorage.setItem("searchRateBlockPeriod", searchRateBlockPeriod);
      localStorage.setItem("searchTermCost", searchTermCost);
      dispatch(setLoaded());
    })
    .catch((err) => dispatch(setError(err)));
};

export const getUserInfo = (accessToken) => (dispatch) => {
  dispatch(setLoading());

  client(`https://gateway.scan-interfax.ru/api/v1/account/info`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then(({ eventFiltersInfo }) => {
      const { companyLimit, usedCompanyCount } = eventFiltersInfo;
      localStorage.setItem("companyLimit", companyLimit);
      localStorage.setItem("usedCompanyCount", usedCompanyCount);
      dispatch(setLoaded());
    })
    .catch((err) => dispatch(setError(err)));
};
