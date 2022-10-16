"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PostService_1 = __importDefault(require("./PostService"));
class PostController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield PostService_1.default.create(req.body);
                res.json(post);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield PostService_1.default.getAll();
                return res.json(posts);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    getPerekrestok(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield PostService_1.default.getPerekrestok();
                return res.json(posts);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    getLanding(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield PostService_1.default.getLanding();
                return res.json(posts);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    getMebel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield PostService_1.default.getMebel();
                return res.json(posts);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    getMebelbest(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield PostService_1.default.getMebelbest();
                return res.json(posts);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id) {
                    res.status(400).json({ message: 'ID не указан' });
                }
                const post = yield PostService_1.default.getOne(req.params.id);
                return res.json(post);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedPost = yield PostService_1.default.update(req.body);
                return res.json(updatedPost);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield PostService_1.default.delete(req.params.id);
                return res.json(post);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
}
exports.default = new PostController();
//# sourceMappingURL=PostController.js.map