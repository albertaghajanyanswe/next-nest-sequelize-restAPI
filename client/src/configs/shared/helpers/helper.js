import moment from "moment";

const getMessage = (t, error, variant = "success") => {
  let message = '';
  if (variant === 'error') {
    message = t("unknownError")
  } else {
    message = t("operationSucceeded")
  }
  if (error && error.message) {
    message = error.message
  }
  if (error && error.error) {
    message = error.error
  }
  if (error && error?.response && error?.response?.data) {
    message = error?.response?.data?.message
  }
  if (error && error?.data && error?.data?.message) {
    message = error?.data?.message
  }
  return message;
};

const getMessageV1 = (error, variant = "success") => {
  const message =
    error && error.message
      ? error.message
      : error && error.error
      ? error.error
      : variant === "error"
      ? t("unknownError")
      : t("operationSucceeded");
  console.log("message = ", message);
  return message;
};

const deleteAllSpacesFromStr = (str) => str.replace(/\s/g, "");

const dateFormat = (date, format = "YYYY-MM-DDTHH:mm") =>
  moment(date).format(format);

function stringAvatar(name, w, h) {
  return {
    sx: {
      // bgcolor: stringToColor(name),
      width: w || 32,
      height: h || 32,
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export { getMessage, getMessageV1, deleteAllSpacesFromStr, dateFormat, stringAvatar, isJsonString };
