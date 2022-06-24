export const dateParser = (date) => {
  let options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  let timeStamp = Date.parse(date);
  let dateObj = new Date(timeStamp).toLocaleDateString("fr-FR", options);

  return dateObj.toString();
};
