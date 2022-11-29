const Notification = require('../models/notificationModel');
const Friend = require('../models/friendsModel');

exports.notificationCount = async (req, res, next) => {
  let notification = async () => {
    const notificationValue = await Notification.findAll({
      where: { [Op.and]: [{ IsRead: false }] },
      include: { model: Friend },
    });

    let notifications = notificationValue.map(
      (notification) => notification.dataValues
    );
    let friendsNotifications = notifications.map(
      (notification) => notification.friend.dataValues
    );

    let allNotifications = (notification, friendsNotification) => {
      let count = 0;
      for (let i = 0; i < notification.length; i++) {
        notification[i].IsRead == false &&
        friendsNotification[i].ReceptorId == req.userId
          ? count++
          : (count += 0);
      }
      return count;
    };
    return allNotifications(notifications, friendsNotifications);
    
  };
  return notification();
};
