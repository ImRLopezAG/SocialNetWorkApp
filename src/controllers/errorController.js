exports.Get404 = (req, res, next) => {
  res.render('404', {
    pageTitle: 'Page Not Found',
    isLoggedIn: req.session.isLoggedIn,
  });
};
