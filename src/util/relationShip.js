const User = require("../models/userModel");
const Friends = require("../models/friendsModel");
const Posts = require("../models/postModel");
const Comment = require("../models/commentModel");
const Notification = require("../models/notificationModel");
const Event = require("../models/eventsModel");
const EventRequest = require("../models/eventRequestModel");

exports.RelationShip = () => {
  Posts.belongsTo(User, {
    constraint: true,
    onDelete: 'CASCADE',
    as: 'User',
  });
  User.hasMany(Posts, { foreignKey: 'UserId' });

  Comment.belongsTo(User, {
    constraint: true,
    onDelete: 'CASCADE',
    as: 'User',
  });
  User.hasMany(Comment, { foreignKey: 'UserId' });

  Event.belongsTo(User, {
    constraint: true,
    onDelete: 'CASCADE',
    as: 'User',
  });
  User.hasMany(Event, { foreignKey: 'UserId' });

  EventRequest.belongsTo(User, {
    constraint: true,
    onDelete: 'CASCADE',
    as: 'User',
  });
  User.hasMany(EventRequest, { foreignKey: 'UserId' });
  EventRequest.belongsTo(User, {
    constraint: true,
    onDelete: "CASCADE",
    as: "receptor",
  });
  User.hasMany(EventRequest, { foreignKey: 'ReceptorId' });

  Comment.belongsTo(Posts, { constraint: true, onDelete: 'CASCADE' });
  Posts.hasMany(Comment, { foreignKey: 'PostId' });

  Comment.belongsTo(Comment, { constraint: true, onDelete: 'CASCADE' });
  Comment.hasMany(Comment, { foreignKey: 'CommentId' });

  EventRequest.belongsTo(Event, { constraint: true, onDelete: 'CASCADE' });
  Event.hasMany(EventRequest, { foreignKey: 'EventId' });

  Notification.belongsTo(Friends, { constraint: true, onDelete: 'CASCADE' });
  Friends.hasOne(Notification, { foreignKey: 'FriendId' });
};
