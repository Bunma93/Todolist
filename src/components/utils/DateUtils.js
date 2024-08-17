//OUTPUT : Wed, APR 26
export const getFormattedDate = (dateTime) => {
    const dayObj = new Date(dateTime);
    const options = {
        weekday: 'short',
        // year: 'numeric',
        month: 'short',
        day: 'numeric',
      };

      let formattedDateStr = dayObj.toLocaleDateString("en-US", options);

      return formattedDateStr;
}