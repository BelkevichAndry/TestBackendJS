
import {Request, Response} from "express";
import {Lessons} from "../models/lesson.model";

export class Lesson  {
   public async getData(){
       try {
          const lessons = await Lessons.findAll({raw:true})
        //   return lessons пока я возвращаю такой массив тебе надо вернуть уроки
          return [1,2,3]
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
