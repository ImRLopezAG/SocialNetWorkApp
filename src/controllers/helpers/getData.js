const moment = require('moment');

exports.FindUser = (userId, users) => {
  const user = users.find((user) => user.id === userId);
  return user.user;
};

exports.GetDate = (date) => {
  date.toString().slice(0, -5);
  const time = moment(date, format('DD/MM/YYYY HH:mm'))
    .startOf('second')
    .fromNow();
  return time.charAt(0).toUpperCase() + time.slice(1);
};

exports.GetEventDate = (date) => {
  const time = moment(date).format('LLLL');

  if (Date.parse(date) < Date.parse(moment().toDate())) {
    return false;
  } else {
    return time.charAt(0).toUpperCase() + time.slice(1);
  }
};


