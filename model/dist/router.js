"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PostController_1 = __importDefault(require("./PostController"));
const router = (0, express_1.default)();
router.post('/posts', PostController_1.default.create);
router.get('/posts', PostController_1.default.getAll);
router.get('/posts/perekrestok', PostController_1.default.getPerekrestok);
router.get('/posts/landing', PostController_1.default.getLanding);
router.get('/posts/mebel', PostController_1.default.getMebel);
router.get('/posts/mebelbest', PostController_1.default.getMebelbest);
router.get('/posts/:id', PostController_1.default.getOne);
router.put('/posts', PostController_1.default.update);
router.delete('/posts/:id', PostController_1.default.delete);
exports.default = router;
//# sourceMappingURL=router.js.map