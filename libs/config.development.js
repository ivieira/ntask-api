import logger from './logger.js';

module.exports = {
  database: 'ntasks',
  username: '',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: 'ntask.sqlite',
    logging: (sql) => {
      logger.info(`${sql}`);
    },
    define: {
      underscored: true
    }
  },
  jwtSecret: 'Ntask$-AP1',
  jwtSession: {session: false}
};
