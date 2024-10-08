//OUTPUT : Wed, APR 26
export const getFormattedDate = (dateTime) => {
    const dayObj = new Date(dateTime);
    const options = {weekday: 'short',month: 'short',day: 'numeric',};

      let formattedDateStr = dayObj.toLocaleDateString("en-US", options);

      return formattedDateStr;
};

//Output : ['YYYY-MM-DD:now','YYYY-MM-DD:next-7-day']
export const getSevenDayRange = () => {
  const nowObj = new Date();
  let nowStr = nowObj.toISOString().slice(0, 10);

  const nextSevenDayObj = new Date(Date.now() + 7 * 24 * 60 *60 * 1000);
  let nextSevenDayStr = nextSevenDayObj.toISOString().slice(0, 10);
  
  return [nowStr, nextSevenDayStr];
}