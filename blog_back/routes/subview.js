import express from "express";
import moment from "moment-timezone";
import bcrypt from "bcrypt";
import { sql_con } from '../back-lib/db.js'

const subviewRouter = express.Router();



subviewRouter.post('/', async (req, res, next) => {
    console.log('여기는 들어와??');
    let status = true;
    console.log(req.body);
    console.log(req.body.subDomainName);
    const subDomainName = req.body.subDomainName
    res.json({ status, subDomainName })
})



export { subviewRouter }