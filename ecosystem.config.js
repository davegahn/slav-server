module.exports = {
  apps : [{
    name: 'slavsalon-server',
    script: 'index.js',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
     'NODE_ENV'         : 'production',
     'APP_URL'          : 'http://www.xn--80aaf8admgsd3i.xn--p1acf',
     'CLIENT_URL'       : 'http://www.xn--80aaf8admgsd3i.xn--p1acf',
     'APP_PORT'         : 3050,
     'MONGO_URI'        : 'mongodb://aleks:asd159@127.0.0.1:27017/slavsalon',
     'CYPHER_SECRET'    : 'slavs',
     'SECRET_JWT_TOKEN' : 'slavsalon'
    }
  }]
};
