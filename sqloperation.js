import {connect} from './connect.js';
export const add=async(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const phonenumber=req.body.phonenumber;
    const location=req.body.location;
    await connect.query(`INSERT INTO Login(Name,Email,Password,PhoneNumber,Location) values(?,?,?,?,?)`,[name,email,password,phonenumber,location]);
    const [id,feilds]=await connect.query(`select * from login where Name=?`,[name]);
    console.log(id[0].id);
        await connect.query(`INSERT INTO incentives(id,Name,Phone_Number,coins,weight) values(?,?,?,?,?)`,[id[0].id,name,phonenumber,0,0]);
}
export const getdata=async(req,res)=>{
    const [id1,feilds1]=await connect.query(`select * from login`);
    const [id,feilds]=await connect.query(`select * from incentives`);
    return [id,id1];
}