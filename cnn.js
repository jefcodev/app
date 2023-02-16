const pgPromise = require('pg-promise')
const config={
    host:'ec2-52-21-136-176.compute-1.amazonaws.com',
    port:'5432',
    database:'d31cp9hbm0rpoc',
    user:'cxkdkweqeaxwfx',
    password:'1c9afe6d62bfddb631eb5e97d829b90a21fa28b605e26419c8f7547938f72808',
    ssl: {
        rejectUnauthorized: false
      }
    }
    
const pgp = pgPromise({})
const db_postgres = pgp(config)
exports.db_postgres=db_postgres