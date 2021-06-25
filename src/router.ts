import { Router } from "express";

import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";

import { ListUserSenderComplementsController } from "./controllers/ListUserSendComplementsController";
import { ListUserReceiveComplementsController } from "./controllers/ListUserReceiveComplementsController";

import { ListTagController } from "./controllers/ListTagController";
import { ListUserController } from "./controllers/ListUserController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

const listUserSendComplementController = new ListUserSenderComplementsController();
const listUserReceiveComplementController = new ListUserReceiveComplementsController();

const listTagController = new ListTagController();
const listUserController = new ListUserController();

router.post("/users", 
    createUserController.handle
);
router.post("/tags", 
    ensureAuthenticated, 
    ensureAdmin, 
    createTagController.handle
);
router.post("/login", 
    authenticateUserController.handle
);
router.post("/compliments", 
    ensureAuthenticated,
    createComplimentController.handle
);

router.get("/users/complements/send", 
    ensureAuthenticated, 
    listUserSendComplementController.handle
);
router.get("/users/complements/receive", 
    ensureAuthenticated, 
    listUserReceiveComplementController.handle
);
router.get("/tags", 
    ensureAuthenticated, 
    listTagController.handle
);
router.get("/users",
    ensureAuthenticated,
    listUserController.handle
);

export { router }