function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<h2>Chris Milson</h2>\n<p>\n  <app-levenshtein [words]=\"typerWords\"></app-levenshtein>\n</p>\n\n<app-social></app-social>\n<app-wallpaper></app-wallpaper>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/levenshtein/levenshtein.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/levenshtein/levenshtein.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLevenshteinLevenshteinComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"levenshtein\">\n<!-- columns for each character in display -->\n  <div\n    class=\"col\"\n    *ngFor=\"let char of display; let i = index\"\n  >\n    <div class=\"char\">\n      {{ displayAbove[i] }}\n    </div>\n    <div class=\"char\">\n      {{ char }}\n    </div>\n    <div class=\"char\">\n      {{ displayBelow[i] }}\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/social/social.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social/social.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSocialSocialComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"icon-list\">\n  <a\n    *ngFor=\"let icon of icons\"\n    [title]=\"icon.title\"\n    [href]=\"icon.link\"\n  >\n    <fa-icon [icon]=\"icon.icon\"></fa-icon>\n  </a>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc21pbHNvbi9wcm9qZWN0cy9jaHJpc21pbHNvbi5naXRodWIuaW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiKiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.typerWords = ['Global Citizen', 'Mathematician', 'Front End Developer', 'Back End Developer', 'Maker', 'Japanese Speaker'];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _typer_typer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./typer/typer.component */
    "./src/app/typer/typer.component.ts");
    /* harmony import */


    var _wallpaper_wallpaper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./wallpaper/wallpaper.component */
    "./src/app/wallpaper/wallpaper.component.ts");
    /* harmony import */


    var _social_social_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./social/social.component */
    "./src/app/social/social.component.ts");
    /* harmony import */


    var _levenshtein_levenshtein_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./levenshtein/levenshtein.component */
    "./src/app/levenshtein/levenshtein.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _typer_typer_component__WEBPACK_IMPORTED_MODULE_6__["TyperComponent"], _wallpaper_wallpaper_component__WEBPACK_IMPORTED_MODULE_7__["WallpaperComponent"], _social_social_component__WEBPACK_IMPORTED_MODULE_8__["SocialComponent"], _levenshtein_levenshtein_component__WEBPACK_IMPORTED_MODULE_9__["LevenshteinComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/levenshtein/edit.ts":
  /*!*************************************!*\
    !*** ./src/app/levenshtein/edit.ts ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppLevenshteinEditTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return edit;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function edit(s1, s2) {
      var dp = new Array(s1.length + 1);
      var i;
      var j;

      for (i = 0; i < s1.length + 1; i++) {
        dp[i] = new Array(s2.length + 1);
        dp[i][0] = i;
      }

      for (j = 1; j < s2.length + 1; j++) {
        dp[0][j] = j;
      }

      for (i = 0; i < s1.length; i++) {
        for (j = 0; j < s2.length; j++) {
          if (s1[i] === s2[j]) {
            dp[i + 1][j + 1] = dp[i][j];
          } else {
            dp[i + 1][j + 1] = 1 + Math.min(dp[i][j], dp[i + 1][j], dp[i][j + 1]);
          }
        }
      }

      var moves = []; // now we travel back up the tree

      while (j > 0 && i > 0) {
        if (s1[i - 1] === s2[j - 1]) {
          moves.push("leave");
          i--;
          j--;
        } else if (dp[i][j] === dp[i][j - 1] + 1) {
          moves.push("add ".concat(s2[j - 1]));
          j--;
        } else if (dp[i][j] === dp[i - 1][j - 1] + 1) {
          moves.push("replace ".concat(s2[j - 1]));
          i--;
          j--;
        } else {
          moves.push("remove");
          i--;
        }
      }

      while (j-- > 0) {
        moves.push("add ".concat(s2[j]));
      }

      while (i-- > 0) {
        moves.push("remove");
      }

      return moves.reverse();
    }
    /***/

  },

  /***/
  "./src/app/levenshtein/levenshtein.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/levenshtein/levenshtein.component.ts ***!
    \******************************************************/

  /*! exports provided: LevenshteinComponent */

  /***/
  function srcAppLevenshteinLevenshteinComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LevenshteinComponent", function () {
      return LevenshteinComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./edit */
    "./src/app/levenshtein/edit.ts");

    var LevenshteinComponent =
    /*#__PURE__*/
    function () {
      function LevenshteinComponent() {
        _classCallCheck(this, LevenshteinComponent);

        this.words = ['horse', 'ros'];
        this.current = 0;
      }

      _createClass(LevenshteinComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.post();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearTimeout(this.timeout);
        }
      }, {
        key: "next",
        value: function next() {
          var _this = this;

          var next = (this.current + 1) % this.words.length;
          var moves = Object(_edit__WEBPACK_IMPORTED_MODULE_2__["default"])(this.words[this.current], this.words[next]).map(function (m) {
            return m.match(/^(\w+)( (.))?$/);
          });
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = moves[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var move = _step.value;

              switch (move[1]) {
                case 'add':
                  // make space in display
                  this.display.splice(this.displayAbove.length, 0, ' ');

                  if (Math.random() < 0.5) {
                    this.displayAbove.push(move[3]);
                    this.displayBelow.push(' ');
                  } else {
                    this.displayBelow.push(move[3]);
                    this.displayAbove.push(' ');
                  }

                  break;

                case 'replace':
                  if (Math.random() < 0.5) {
                    this.displayAbove.push(move[3]);
                    this.displayBelow.push(' ');
                  } else {
                    this.displayBelow.push(move[3]);
                    this.displayAbove.push(' ');
                  }

                  break;

                case 'remove':
                  if (Math.random() < 0.5) {
                    this.displayAbove.push('-');
                    this.displayBelow.push(' ');
                  } else {
                    this.displayBelow.push('-');
                    this.displayAbove.push(' ');
                  }

                  break;

                case 'leave':
                default:
                  this.displayAbove.push(' ');
                  this.displayBelow.push(' ');
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          this.current = next;
          this.timeout = setTimeout(function () {
            return _this.post();
          }, 500);
        }
      }, {
        key: "post",
        value: function post() {
          var _this2 = this;

          this.display = _toConsumableArray(this.words[this.current]);
          this.displayAbove = [];
          this.displayBelow = [];
          this.timeout = setTimeout(function () {
            return _this2.next();
          }, 3000);
        }
      }]);

      return LevenshteinComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LevenshteinComponent.prototype, "words", void 0);
    LevenshteinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-levenshtein',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./levenshtein.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/levenshtein/levenshtein.component.html")).default,
      styles: ["@import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');\n\n    .levenshtein {\n      display: flex;\n      justify-content: center;\n      font-family: 'Roboto Mono', monospace;\n    }\n\n    .col {\n      display: flex;\n      flex-direction: column;\n    }\n\n    .char {\n      width: 0.7rem;\n      height: 1rem;\n    }\n  "]
    })], LevenshteinComponent);
    /***/
  },

  /***/
  "./src/app/social/social.component.ts":
  /*!********************************************!*\
    !*** ./src/app/social/social.component.ts ***!
    \********************************************/

  /*! exports provided: SocialComponent */

  /***/
  function srcAppSocialSocialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialComponent", function () {
      return SocialComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

    var SocialComponent = function SocialComponent() {
      _classCallCheck(this, SocialComponent);

      this.icons = [{
        name: 'Github',
        title: 'Check out my Github',
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGithub"],
        link: 'https://github.com/chrismilson'
      }, {
        name: 'Linkedin',
        title: '...or my Linkedin',
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faLinkedin"],
        link: 'https://www.linkedin.com/in/chris-milson/'
      }, {
        name: 'CV',
        title: 'Have a look at my CV too',
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faIdBadge"],
        link: 'assets/CV.pdf'
      }];
    };

    SocialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-social',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./social.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/social/social.component.html")).default,
      styles: ["\n    .icon-list {\n      font-size: 1.5rem;\n      position: fixed;\n      top: 0;\n      right: 0;\n\n      display: flex;\n    }\n\n    a {\n      color: inherit;\n      margin: 0.5rem;\n    }\n  "]
    })], SocialComponent);
    /***/
  },

  /***/
  "./src/app/typer/typer.component.ts":
  /*!******************************************!*\
    !*** ./src/app/typer/typer.component.ts ***!
    \******************************************/

  /*! exports provided: TyperComponent */

  /***/
  function srcAppTyperTyperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TyperComponent", function () {
      return TyperComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TyperComponent =
    /*#__PURE__*/
    function () {
      function TyperComponent() {
        _classCallCheck(this, TyperComponent);

        this.words = ['This', 'rotates', 'through', 'different', 'words.'];
        this.speed = 0;
        this.word = 0;
        this.char = 0;
        this.dir = true;
        this.text = '';
        this.cursor = '|';
        this.nextChar = this.nextChar.bind(this);
        this.speed = 1 - Math.max(0, Math.min(0.99, this.speed / 100));
      }

      _createClass(TyperComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearInterval(this.timeout);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.animate();
        }
        /**
         * Increments the state of the typer with nextChar, and sets the same function
         * to run again with a timeout - with a delay specified by the nextFrame
         * method
         */

      }, {
        key: "animate",
        value: function animate() {
          var _this3 = this;

          var delay = this.nextChar();
          this.timeout = setTimeout(function () {
            return _this3.animate();
          }, this.speed * delay);
        }
        /**
         * Adds the next or removes the last character, and returns a number
         * coressponding to the amount of time that should be waited until the next
         * frame.
         *
         * @returns recommended delay time
         */

      }, {
        key: "nextChar",
        value: function nextChar() {
          var delay; // where in the process are we?

          if (this.dir) {
            // add the next character
            this.char++;

            if (this.char === this.words[this.word].length) {
              this.dir = false;
              delay = 700;
            } else {
              delay = 100 + Math.floor(Math.random() * 100);
            }
          } else {
            // remove the last character
            this.char--;

            if (this.char === 0) {
              this.dir = true;
              this.word = (this.word + 1) % this.words.length;
              delay = 300;
            } else if (this.char === this.words[this.word].length - 1) {
              delay = 250;
            } else {
              delay = 40;
            }
          }

          this.text = this.words[this.word].substring(0, this.char);
          return delay;
        }
      }]);

      return TyperComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TyperComponent.prototype, "words", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TyperComponent.prototype, "speed", void 0);
    TyperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-typer',
      template: '{{ text }}<span class="cursor">|</span>',
      styles: ["@keyframes flash {from {opacity: 1} to {opacity: 0}}", ".cursor { animation: flash 0.5s infinite alternate; }", ":host { user-select: none; }"]
    })], TyperComponent);
    /***/
  },

  /***/
  "./src/app/wallpaper/wallpaper.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/wallpaper/wallpaper.component.ts ***!
    \**************************************************/

  /*! exports provided: WallpaperComponent */

  /***/
  function srcAppWallpaperWallpaperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WallpaperComponent", function () {
      return WallpaperComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _wallpapers_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./wallpapers/ripple */
    "./src/app/wallpaper/wallpapers/ripple.ts");

    var WallpaperComponent =
    /*#__PURE__*/
    function () {
      function WallpaperComponent() {
        _classCallCheck(this, WallpaperComponent);
      }

      _createClass(WallpaperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ctx = this.canvas.nativeElement.getContext('2d');
          this.ctx.canvas.width = window.innerWidth;
          this.ctx.canvas.height = window.innerHeight;
          this.alg = new _wallpapers_ripple__WEBPACK_IMPORTED_MODULE_2__["default"](this.ctx);
          this.animate();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          window.cancelAnimationFrame(this.timeout);
        }
      }, {
        key: "onResize",
        value: function onResize() {
          this.ctx.canvas.width = window.innerWidth;
          this.ctx.canvas.height = window.innerHeight;
        }
      }, {
        key: "animate",
        value: function animate() {
          var _this4 = this;

          this.alg.render(this.ctx);
          this.timeout = window.requestAnimationFrame(function () {
            return _this4.animate();
          });
        }
      }]);

      return WallpaperComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', {
      static: true
    })], WallpaperComponent.prototype, "canvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])], WallpaperComponent.prototype, "onResize", null);
    WallpaperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wallpaper',
      template: '<canvas #canvas></canvas>',
      styles: ["canvas {\n      z-index: -1;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100vw;\n      height: 100vh;\n    }"]
    })], WallpaperComponent);
    /***/
  },

  /***/
  "./src/app/wallpaper/wallpapers/ripple.ts":
  /*!************************************************!*\
    !*** ./src/app/wallpaper/wallpapers/ripple.ts ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWallpaperWallpapersRippleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return Ripple;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Center =
    /*#__PURE__*/
    function () {
      function Center(width, height) {
        _classCallCheck(this, Center);

        this.color = Math.floor(Math.random() * 256);
        this.age = -Math.floor(Math.random() * 200);
        this.size = Math.random() + 0.5;
        this.x = Math.floor(Math.random() * width);
        this.y = Math.floor(Math.random() * height);
      }

      _createClass(Center, [{
        key: "draw",
        value: function draw(ctx) {
          if (this.age < 0) {
            this.age++;
            return false;
          }

          ctx.beginPath(); // by taking the square root, the area will increase uniformly

          ctx.ellipse(this.x, this.y, Math.sqrt(this.age) * 10 * this.size, Math.sqrt(this.age) * 10 * this.size, 0, 0, Math.PI * 2);
          ctx.strokeStyle = "hsla(\n      ".concat(this.color, ",\n      100%,\n      40%,\n      ").concat(1 - this.age / 200, "\n    )");
          ctx.stroke();
          return this.age++ > 200;
        }
      }]);

      return Center;
    }();

    var Ripple =
    /*#__PURE__*/
    function () {
      function Ripple(ctx) {
        _classCallCheck(this, Ripple);

        var size = Math.floor(ctx.canvas.width * ctx.canvas.height / 50000);
        this.centers = new Array(size);

        for (var i = 0; i < size; i++) {
          this.centers[i] = new Center(ctx.canvas.width, ctx.canvas.height);
        }
      }

      _createClass(Ripple, [{
        key: "render",
        value: function render(ctx) {
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

          for (var i = 0; i < this.centers.length; i++) {
            if (this.centers[i].draw(ctx)) {
              this.centers[i] = new Center(ctx.canvas.width, ctx.canvas.height);
            }
          }
        }
      }]);

      return Ripple;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/chrismilson/projects/chrismilson.github.io/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map