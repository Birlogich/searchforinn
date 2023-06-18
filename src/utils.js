import { decode } from "html-entities";

export const accessToken = localStorage.getItem("accessToken");
export const expireDate = localStorage.getItem("expire");

//Специально захордкодил под готовые, иначе постоянно лень было вводить

export const regexPhone = new RegExp("sf_student10");
export const regexPassword = new RegExp("KHKfTXb");
export const regexInn = new RegExp(/^(\d){1,10}$/g);

export const handleMatch = (str, regExp, e, initialState, setInitialState) => {
  const trueValue = { ...initialState, [e.target.name]: true };
  const falseValue = { ...initialState, [e.target.name]: false };
  if (str.length > 1) {
    if (regExp.test(str)) {
      setInitialState(trueValue);
    } else {
      setInitialState(falseValue);
    }
  } else {
    setInitialState(falseValue);
  }
};

export const transformData = (data) => {
  const getDataFromServer = new Date(data);
  const ISOdate = getDataFromServer.toLocaleDateString();
  return ISOdate;
};

const removeAllTags = (content) => {
  return content.replace(/<.*?>/g, "");
};

export const parseXML = (xmlData) => {
  const xml = decode(xmlData);
  return removeAllTags(xml).slice(0, 200) + "...";
};

export const getImgFromXML = (xmlData) => {
  const image = xmlData.match(/src="([^"]*)"/);
  return image ? image[1] : null;
};
