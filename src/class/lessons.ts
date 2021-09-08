
import {Request, Response} from "express";
import {Lessons} from "../models/lesson.model";
import {Model} from "sequelize";

export class Lesson  {
   public async getData(req: Request, res: Response){
       try {
           Lessons.findAll({raw:true}).then(users=>{
               console.log(users);
           }).catch(err=>console.log(err));
       } catch (error){
           console.log(error);
       }
   }

   public async createDate(req: Request, res: Response){
       const {id, date, title, status} = req.body
       try {
           const newLessons = await Lessons.create(
               {
                   id,
                   date,
                   title,
                   status,
               },
               {
                   fields: ["id", "date", "title", "status"],
               }
           )

           return res.json(newLessons)

       } catch (err){
           // res.json(err);
           console.log('1')
       }
   }

}
