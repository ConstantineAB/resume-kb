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
const Post_1 = __importDefault(require("./Post"));
class PostService {
    create(post) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdPost = yield Post_1.default.create(Object.assign({}, post));
            return createdPost;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield Post_1.default.find();
            return posts;
        });
    }
    getPerekrestok() {
        return __awaiter(this, void 0, void 0, function* () {
            const perekrestok = yield Post_1.default.find({ "index": "perekrestok" });
            return perekrestok;
        });
    }
    getLanding() {
        return __awaiter(this, void 0, void 0, function* () {
            const landing = yield Post_1.default.find({ "index": "landing" });
            return landing;
        });
    }
    getMebel() {
        return __awaiter(this, void 0, void 0, function* () {
            const mebel = yield Post_1.default.find({ "index": "mebel" });
            return mebel;
        });
    }
    getMebelbest() {
        return __awaiter(this, void 0, void 0, function* () {
            const mebelbest = yield Post_1.default.find({ "index": "mebelbest" });
            return mebelbest;
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw new Error('Не указан ID');
            }
            const post = yield Post_1.default.findById(id);
            return post;
        });
    }
    update(post) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!post._id) {
                throw new Error('не указан ID');
            }
            const updatedPost = yield Post_1.default.findByIdAndUpdate(post._id, post, { new: true });
            return updatedPost;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw new Error('не указан ID');
            }
            const post = yield Post_1.default.findByIdAndDelete(id);
            return post;
        });
    }
}
exports.default = new PostService();
//# sourceMappingURL=PostService.js.map