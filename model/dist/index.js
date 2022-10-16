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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = __importDefault(require("./router"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const PORT = 5000;
// const DB_URL = `mongodb+srv://webmaster:1234regd@cluster0.axaqlfn.mongodb.net/?retryWrites=true&w=majority`
const cors = require('cors');
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
app.use(express_1.default.static('static'));
app.use((0, express_fileupload_1.default)({}));
app.use('/api', router_1.default);
app.use(express_1.default.json());
function startApp() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(`mongodb+srv://webmaster:1234regd@cluster0.axaqlfn.mongodb.net/?retryWrites=true&w=majority`);
            app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
        }
        catch (e) {
            console.log(e);
        }
    });
}
startApp();
//# sourceMappingURL=index.js.map