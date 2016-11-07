// Module responsable for the server initialization.

module.exports = app => {
  app.db.sync().done(() => {
    app.listen(app.get('port'), () => {
      console.log(`Server listenning at port ${app.get('port')}`);
    });
  });
};
