module.exports = {
  database: 'ntasks',
  username: '',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: 'ntask.sqlite',
    define: {
      underscored: true
    }
  },
  jwtSecret: 'Ntask$-AP1',
  jwtSession: {session: false}
};