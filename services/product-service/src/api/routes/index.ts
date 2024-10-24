
import express from "express";
import productRoute from "./product.route"
const router = express.Router();

const defaultRoutes = [
    {
        path: "/",
        route: productRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
