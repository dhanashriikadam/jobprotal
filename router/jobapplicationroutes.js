import express from 'express'

const router=express.Router();
import {applyjob, getapplicationsoflogineduser,updateapplication,deleteapplication} from '../controller/jobapplicationcontroller.js';


router.post('/apply/:jobid/:userid',applyjob);
router.get('/apply/:userid',getapplicationsoflogineduser);
router.put('/updateapplication/:id',updateapplication);
router.delete('/deleteapplication/:id',deleteapplication);


export default router