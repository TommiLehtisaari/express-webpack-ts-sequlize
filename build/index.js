/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar express = __webpack_require__(/*! express */ \"express\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/routes/index.ts\");\nvar app = express();\n// routes\nroutes_1.routes(app);\nvar PORT = process.env.PORT || 3000;\napp.listen(PORT, function () {\n    console.log('server started at http://localhost:' + PORT);\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/models/author.ts":
/*!******************************!*\
  !*** ./src/models/author.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar sequelize_1 = __webpack_require__(/*! sequelize */ \"sequelize\");\nexports[\"default\"] = (function (sequelize) {\n    return sequelize.define('author', {\n        id: {\n            type: sequelize_1.UUID,\n            primaryKey: true,\n            defaultValue: sequelize_1.Sequelize.literal('uuid_generate_v4()')\n        },\n        name: sequelize_1.STRING,\n        born: sequelize_1.INTEGER\n    });\n});\n\n\n//# sourceURL=webpack:///./src/models/author.ts?");

/***/ }),

/***/ "./src/models/book.ts":
/*!****************************!*\
  !*** ./src/models/book.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar sequelize_1 = __webpack_require__(/*! sequelize */ \"sequelize\");\nexports[\"default\"] = (function (sequelize) {\n    return sequelize.define('book', {\n        id: {\n            type: sequelize_1.UUID,\n            primaryKey: true,\n            defaultValue: sequelize_1.Sequelize.literal('uuid_generate_v4()')\n        },\n        title: sequelize_1.STRING,\n        published: sequelize_1.INTEGER,\n        pages: sequelize_1.INTEGER\n    });\n});\n\n\n//# sourceURL=webpack:///./src/models/book.ts?");

/***/ }),

/***/ "./src/models/genre.ts":
/*!*****************************!*\
  !*** ./src/models/genre.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar sequelize_1 = __webpack_require__(/*! sequelize */ \"sequelize\");\nexports[\"default\"] = (function (sequelize) {\n    return sequelize.define('genre', {\n        id: {\n            type: sequelize_1.UUID,\n            primaryKey: true,\n            defaultValue: sequelize_1.Sequelize.literal('uuid_generate_v4()')\n        },\n        name: sequelize_1.STRING\n    });\n});\n\n\n//# sourceURL=webpack:///./src/models/genre.ts?");

/***/ }),

/***/ "./src/routes/author.ts":
/*!******************************!*\
  !*** ./src/routes/author.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nvar express = __webpack_require__(/*! express */ \"express\");\nvar router = express.Router();\nvar store_1 = __webpack_require__(/*! ../store */ \"./src/store.ts\");\nrouter.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var _a, name, born, author, exception_1;\n    return __generator(this, function (_b) {\n        switch (_b.label) {\n            case 0:\n                _a = req.body, name = _a.name, born = _a.born;\n                author = {};\n                _b.label = 1;\n            case 1:\n                _b.trys.push([1, 3, 4, 5]);\n                return [4 /*yield*/, store_1[\"default\"].Author.create({ name: name, born: born })];\n            case 2:\n                author = _b.sent();\n                return [3 /*break*/, 5];\n            case 3:\n                exception_1 = _b.sent();\n                console.log(exception_1);\n                return [3 /*break*/, 5];\n            case 4:\n                res.send(author);\n                return [7 /*endfinally*/];\n            case 5: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.get('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var id, authors, statusCode;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                id = req.params.id;\n                return [4 /*yield*/, store_1[\"default\"].Author.findAll({ where: { id: id } })];\n            case 1:\n                authors = _a.sent();\n                statusCode = Array.isArray(authors) && authors.length === 0 ? 404 : 200;\n                res.status(statusCode).send(authors);\n                return [2 /*return*/];\n        }\n    });\n}); });\nrouter.get('/', function (_, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var authors, statusCode;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, store_1[\"default\"].Author.findAll()];\n            case 1:\n                authors = _a.sent();\n                statusCode = Array.isArray(authors) && authors.length === 0 ? 404 : 200;\n                res.status(statusCode).send(authors);\n                return [2 /*return*/];\n        }\n    });\n}); });\nrouter.put('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var id, authors;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                id = req.params.id;\n                return [4 /*yield*/, store_1[\"default\"].Author.findAll({ where: { id: id } })];\n            case 1:\n                authors = _a.sent();\n                if (authors.length === 0)\n                    return [2 /*return*/, res.status(404).send()];\n                store_1[\"default\"].Author.update({\n                    name: req.body.name || authors[0].name,\n                    born: req.body.born || authors[0].born\n                }, { where: { id: id } });\n                res.status(202).send();\n                return [2 /*return*/];\n        }\n    });\n}); });\nrouter[\"delete\"]('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var id, author, status;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                id = req.params.id;\n                return [4 /*yield*/, store_1[\"default\"].Author.destroy({ where: { id: id } })];\n            case 1:\n                author = _a.sent();\n                status = author === 1 ? 202 : 404;\n                res.status(status).send();\n                return [2 /*return*/];\n        }\n    });\n}); });\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack:///./src/routes/author.ts?");

/***/ }),

/***/ "./src/routes/genre.ts":
/*!*****************************!*\
  !*** ./src/routes/genre.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nvar express = __webpack_require__(/*! express */ \"express\");\nvar store_1 = __webpack_require__(/*! ../store */ \"./src/store.ts\");\nvar router = express.Router();\nrouter.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var name, genre;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                name = req.body.name;\n                if (!name)\n                    res.status(400).send({ message: 'name required' });\n                return [4 /*yield*/, store_1[\"default\"].Genre.create({ name: name })];\n            case 1:\n                genre = _a.sent();\n                res.send(genre);\n                return [2 /*return*/];\n        }\n    });\n}); });\nrouter.get('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var id, genre;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                id = req.params.id;\n                return [4 /*yield*/, store_1[\"default\"].Genre.findAll({ where: { id: id } })];\n            case 1:\n                genre = _a.sent();\n                res.send(genre);\n                return [2 /*return*/];\n        }\n    });\n}); });\nrouter.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var genres;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, store_1[\"default\"].Genre.findAll()];\n            case 1:\n                genres = _a.sent();\n                res.send(genres);\n                return [2 /*return*/];\n        }\n    });\n}); });\nrouter.put('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var id, genre;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                id = req.params.id;\n                return [4 /*yield*/, store_1[\"default\"].Genre.findAll({ where: { id: id } })];\n            case 1:\n                genre = _a.sent();\n                if (genre.length === 0)\n                    return [2 /*return*/, res.status(404).send()];\n                store_1[\"default\"].Genre.update({\n                    name: req.body.name || genre[0].name\n                }, { where: { id: id } });\n                res.status(202).send();\n                return [2 /*return*/];\n        }\n    });\n}); });\nrouter[\"delete\"]('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var id, genre, status;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                id = req.params.id;\n                return [4 /*yield*/, store_1[\"default\"].Genre.destroy({ where: { id: id } })];\n            case 1:\n                genre = _a.sent();\n                status = genre === 1 ? 202 : 404;\n                res.status(status).send();\n                return [2 /*return*/];\n        }\n    });\n}); });\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack:///./src/routes/genre.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar express = __webpack_require__(/*! express */ \"express\");\nvar author_1 = __webpack_require__(/*! ./author */ \"./src/routes/author.ts\");\nvar genre_1 = __webpack_require__(/*! ./genre */ \"./src/routes/genre.ts\");\nexports.routes = function (app) {\n    app.use(express.json());\n    app.use('/api/author', author_1[\"default\"]);\n    app.use('/api/genre', genre_1[\"default\"]);\n};\n\n\n//# sourceURL=webpack:///./src/routes/index.ts?");

/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar sequelize_1 = __webpack_require__(/*! sequelize */ \"sequelize\");\nvar config = __webpack_require__(/*! config */ \"config\");\nvar author_1 = __webpack_require__(/*! ./models/author */ \"./src/models/author.ts\");\nvar genre_1 = __webpack_require__(/*! ./models/genre */ \"./src/models/genre.ts\");\nvar book_1 = __webpack_require__(/*! ./models/book */ \"./src/models/book.ts\");\nvar sequelize = new sequelize_1.Sequelize(config.get('postgres.database'), config.get('postgres.user'), config.get('postgres.password'), {\n    host: config.get('postgres.host'),\n    dialect: 'postgres'\n});\n// Tables initialization\nvar Author = author_1[\"default\"](sequelize);\nvar Genre = genre_1[\"default\"](sequelize);\nvar Book = book_1[\"default\"](sequelize);\n// Author of the book\nAuthor.hasMany(Book);\nBook.belongsTo(Author);\n// connector table to books and genres\nvar bookGenre = sequelize.define('bookGenre', {});\nBook.belongsToMany(Genre, { through: bookGenre });\nsequelize.sync({ force: false }).then(function () {\n    console.log(\"Database & tables created!\");\n});\nexports[\"default\"] = {\n    Author: Author,\n    Genre: Genre,\n    Book: Book\n};\n\n\n//# sourceURL=webpack:///./src/store.ts?");

/***/ }),

/***/ "config":
/*!*************************!*\
  !*** external "config" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"config\");\n\n//# sourceURL=webpack:///external_%22config%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

/***/ })

/******/ });