import express, {Request, Response, Router, urlencoded} from 'express'
import {Sequelize} from "sequelize";
import {Lesson} from "./class/lessons";

const router: Router = express.Router();
const lessonGet = new Lesson()
export const sequelize = new Sequelize('testmyclass', 'postgres', '89126530', {
    dialect: "postgres",
    host: "localhost", define: {
        timestamps: false
    }
})
const app: express.Application = express();
const port: number = 3500;

app.use(express.json())

router.get('/', lessonGet.getData);
// router.post('/', lessonGet.createDate);
// app.get('/', (req: Request, res: Response) => {
//     res.send('[TEST]');
//     console.log(req.body);
// });
sequelize.sync({
    alter : true,
    logging : console.log
}).then(function () {
    console.log('Nice! Database looks fine')

}).catch(function (err) {
    console.log(err, "Something went wrong with the Database Update!")
});
// (async () => {
//     // Пересоздаем таблицу в БД
//     await sequelize.sync({ force: true })
//     // дальнейший код
// })()

async function startApp() {
    try {
        // Подключение к БД
        app.listen(port, () => console.log(`Server http://localhost:${port}`));
    } catch (e) {
        console.log(e);
    }
}

startApp();