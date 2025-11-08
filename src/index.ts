import express from "express"
import { PrismaClient } from "../prisma/generated/prisma/index.js";

const app = express();
const prismaclient = new PrismaClient();


app.get("/", async (req, res) => {

    const users = await prismaclient.user.findMany();
    res.json({
        "message": "get endpoint",
        "users": users
    })
})

app.post("/", async (req, res) => {

    const user = await prismaclient.user.create({
        data: {
            name: Math.random().toString()
        }
    })

    res.json({
        "message": "post endpoint",
        "user created ": user
    })

})

app.listen(3000, () => console.log("app running on port :3000"))