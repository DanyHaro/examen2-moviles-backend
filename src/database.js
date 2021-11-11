import { Pool } from 'pg'


export const pool = new Pool({
    connectionString: process.env.d59unspri9rdam    ,
    ssl: {
        rejectUnauthorized: false
    },
    host: 'ec2-35-169-204-98.compute-1.amazonaws.com',
    user: 'phagjxrfwzgpwu',
    password: '9ece60adc2b45f3244ff1f21bf1fe3359f94f2056c78a02411d03d538fb86834',
    database: 'd7r1oa1cfs7s8r',
    port: 5432,
    
});
