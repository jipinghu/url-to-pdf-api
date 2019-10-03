module.exports = {
  // http://pm2.keymetrics.io/docs/usage/application-declaration/
  apps: [{
    name: 'Url to PDF Service',
    script: 'src/index.js',
    args: '',
    instances: 2,
    autorestart: true,
    watch: false,
    max_memory_restart: '4G',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    },
  }],
};
