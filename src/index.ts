import express, {Request, Response, Router, urlencoded} from 'express'
import {Sequelize} from "sequelize";
import {Lesson} from "./class/lessons";

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

app.get('/',  async (req: Request, res: Response) => {
    const lessonData = await lessonGet.getData()
    res.send(lessonData)
});
sequelize.sync({
    alter : true,
}).then(function () {
    console.log('Nice! Database looks fine')

}).catch(function (err) {
    console.log(err, "Something went wrong with the Database Update!")
});

async function startApp() {
    try {
        // Подключение к БД
        app.listen(port, () => console.log(`Server http://localhost:${port}`));
        console.log("port")
    } catch (e) {
        console.log(e);
    }
}

startApp();