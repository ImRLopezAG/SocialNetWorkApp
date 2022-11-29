const User = require('../models/user');
const Friends = require('../models/friendsModel');
const Posts = require('../models/postModel');
const Comment = require('../models/commentModel');
const Notification = require('../models/notificationModel');
const Event = require('../models/eventModel');
const EventRequest = require('../models/eventRequestModel');

exports.RelationShip = () => {
  Posts.belongsTo(User, {
    constraint: true,
    onDelete: 'CASCADE',
    as: 'author',
  });
  User.hasMany(Posts, { foreignKey: 'authorId' });

  Comment.belongsTo(User, {
    constraint: true,
    onDelete: 'CASCADE',
    as: 'author',
  });
  User.hasMany(Comment, { foreignKey: 'authorId' });

  Event.belongsTo(User, {
    constraint: true,
    onDelete: 'CASCADE',
    as: 'author',
  });
  User.hasMany(Event, { foreignKey: 'authorId' });

  EventRequest.belongsTo(User, {
    constraint: true,
    onDelete: 'CASCADE',
    as: 'author',
  });
  User.hasMany(EventRequest, { foreignKey: 'authorId' });
  EventRequest.belongsTo(User, {
    constraint: true,
    onDelete: 'CASCADE',
    as: 'receptor',
  });
  User.hasMany(EventRequest, { foreignKey: 'receptorId' });

  Comment.belongsTo(Posts, { constraint: true, onDelete: 'CASCADE' });
  Posts.hasMany(Comment, { foreignKey: 'postId' });

  Comment.belongsTo(Comment, { constraint: true, onDelete: 'CASCADE' });
  Comment.hasMany(Comment, { foreignKey: 'commentId' });

  EventRequest.belongsTo(Event, { constraint: true, onDelete: 'CASCADE' });
  Event.hasMany(EventRequest, { foreignKey: 'eventId' });

  Notification.belongsTo(Friends, { constraint: true, onDelete: 'CASCADE' });
  Friends.hasOne(Notification, { foreignKey: 'friendId' });
};
