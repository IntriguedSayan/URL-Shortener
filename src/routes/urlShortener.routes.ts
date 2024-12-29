import {Router} from "express";

const urlRouter = Router();


urlRouter.get("/", (req, res) => {
    res.status(200).json({message:"Welcome to URL Shortener"});
});

export {urlRouter};