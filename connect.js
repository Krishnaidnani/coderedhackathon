import {createPool} from 'mysql2';
export const connect=createPool({
    host:'localhost',
    user:'root',
    password:'12345',
    database:'recycle'
}).promise();