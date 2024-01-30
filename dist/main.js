"use strict";
(self["webpackChunkrandom_word_webpage"] = self["webpackChunkrandom_word_webpage"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _word_generator_word_generator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./word-generator/word-generator.component */ 6178);


class AppComponent {
  constructor() {
    this.title = 'random-word-webpage';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 4,
    vars: 0,
    consts: [[2, "text-align", "center"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Welcome to the Issue Approach Generator! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-word-generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_word_generator_word_generator_component__WEBPACK_IMPORTED_MODULE_0__.WordGeneratorComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _word_generator_word_generator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./word-generator/word-generator.component */ 6178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _word_generator_word_generator_component__WEBPACK_IMPORTED_MODULE_2__.WordGeneratorComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 6178:
/*!************************************************************!*\
  !*** ./src/app/word-generator/word-generator.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordGeneratorComponent": () => (/* binding */ WordGeneratorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

function getRandomWord(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}
class WordGeneratorComponent {
  constructor() {
    this.word1 = '';
    this.word2 = '';
    this.word3 = '';
    this.subject1 = '';
    this.subject2 = '';
    this.imagePath1 = "";
    this.imagePath2 = "";
    this.imagePath3 = "";
    this.isButtonPressed = false;
    this.mathematics = ['College Algebra', 'Calculus 1', 'Differential Calculus', 'Integral Calculus', 'Linear Algebra', 'Finite Mathematics', 'Mathematical Proof', 'Multivariate Calculus', 'Differential Equations', 'Discrete Mathematics'];
    this.biology = ['Biology of Sex and Death', 'Organismal Biology', 'Ecology', 'Genetics', 'Microbiology', 'Cell and Molecular Biology', 'Human Anatomy', 'Human Physiology', 'Molecular Evolution', 'Population Dynamics', 'Immunology'];
    this.computerScience = ['Object Oriented programming', 'Data Structures and Algorithms', 'Computer Org', 'Systems and Networks', 'Objects and Design', 'Operating Systems', 'Languages and Computation', 'Embedded Systems', 'Creative Design'];
    this.me = ['Rigid Body dynamics', 'System Dynamics', 'Thermodynamics', 'Fluid Mechanics', 'Heat Transfer', 'Internal Combustion Engines', 'Hybrid Vehicle Powertrains', 'Mechanical Vibrations', 'Robotics'];
    this.problems = ['Climate Change', 'Poverty', 'Healthcare', 'Hunger', 'Education Levels', 'Human Rights', 'Gender Inequality', 'Terrorism', 'Corruption', 'Pollution', 'Disease', 'Internet Privacy'];
    this.subjects = {};
    this.subjects = {
      "mathematics": this.mathematics,
      "biology": this.biology,
      "computerScience": this.computerScience,
      "me": this.me
    };
  }
  generateRandomWords() {
    this.isButtonPressed = true;
    this.subject1 = this.getRandomSubjectKey();
    this.subject2 = this.getRandomSubjectKey(this.subject1);
    this.word1 = getRandomWord(this.subjects[this.subject1]);
    this.word2 = getRandomWord(this.subjects[this.subject2]);
    this.word3 = getRandomWord(this.problems);
    // Construct image paths with multiple formats
    this.imagePath1 = this.getImagePath(this.word1, this.subject1);
    this.imagePath2 = this.getImagePath(this.word2, this.subject2);
    this.imagePath3 = this.getImagePath(this.word3, 'problems');
  }
  getImagePath(word, subFolder = '') {
    const sanitizedWord = word.toLowerCase().replace(/\s+/g, '');
    const formats = ['jpeg', 'jpg', 'png', 'webp', 'gif'];
    let imagePath = '';
    formats.forEach(format => {
      const path = `assets/${subFolder}/${sanitizedWord}.${format}`;
      if (!imagePath && this.imageExists(path)) {
        imagePath = path;
      }
    });
    return imagePath;
  }
  imageExists(url) {
    const http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status !== 404;
  }
  getRandomSubjectKey(excludeKey = '') {
    let keys = Object.keys(this.subjects);
    if (excludeKey) {
      keys = keys.filter(key => key !== excludeKey);
    }
    return keys[Math.floor(Math.random() * keys.length)];
  }
  static #_ = this.ɵfac = function WordGeneratorComponent_Factory(t) {
    return new (t || WordGeneratorComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: WordGeneratorComponent,
    selectors: [["app-word-generator"]],
    decls: 24,
    vars: 8,
    consts: [[1, "slot-machine-container"], [1, "sentence"], [1, "reel1"], [1, "word"], [1, "reel2"], [1, "reel3"], ["alt", "Image 1", 1, "image1", 3, "src"], ["alt", "Image 2", 1, "image2", 3, "src"], ["alt", "Image 3", 1, "image3", 3, "src"], [3, "click"]],
    template: function WordGeneratorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4)(11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1)(14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " to solve ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5)(17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 6)(20, "img", 7)(21, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WordGeneratorComponent_Template_button_click_22_listener() {
          return ctx.generateRandomWords();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Generate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", !ctx.isButtonPressed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.word1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.word2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.word3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imagePath1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imagePath2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imagePath3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    },
    styles: [".slot-machine-container[_ngcontent-%COMP%] {\n    margin-top: 10%;\n    display: grid;\n    grid-template-columns: auto auto auto auto auto auto; \n    position:absolute;\n    gap: 10px;\n    top: 10%;\n    left: 20%;\n    width: 60%;\n    justify-content:center;\n  \n  \n  }\n\n  .slot-machine-container.hidden[_ngcontent-%COMP%]{\n    display: none;\n  }\n\n  .sentence[_ngcontent-%COMP%]{\n    font-size: 18px;\n    font-weight: bold;\n    margin: 5px 0;\n    width: auto;\n    text-align: center;\n  }\n  \n  .reel1[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: auto;\n    max-width: 100%;\n  }\n\n  .image1[_ngcontent-%COMP%]{\n    grid-row: 2;\n    grid-column: 2;\n    width: 100%;\n  }\n\n  .reel2[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: auto;\n    max-width: 100%;\n  }\n  .image2[_ngcontent-%COMP%]{\n    grid-row: 2;\n    grid-column: 4;\n    width: 100%;\n  }\n\n  .reel3[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: auto;\n    max-width: 100%;\n  }\n  .image3[_ngcontent-%COMP%]{\n    grid-row: 2;\n    grid-column: 6;\n    width: 100%;\n  }\n  \n  .word[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: bold;\n    padding: 10px;\n    margin: 5px 0;\n    border: 1px solid #000;\n    width: auto;\n    text-align: center;\n  }\n  \n  button[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    margin-right: 20px;\n    font-size: large;\n    border-radius: 10px;\n    padding: 15px 30px; \n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd29yZC1nZW5lcmF0b3Ivd29yZC1nZW5lcmF0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2Isb0RBQW9EO0lBQ3BELGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCOzs7RUFHeEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGVBQWU7RUFDakI7RUFDQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztFQUNiOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEIiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xvdC1tYWNoaW5lLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bzsgXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHRvcDogMTAlO1xuICAgIGxlZnQ6IDIwJTtcbiAgICB3aWR0aDogNjAlO1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIFxuICBcbiAgfVxuXG4gIC5zbG90LW1hY2hpbmUtY29udGFpbmVyLmhpZGRlbntcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnNlbnRlbmNle1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDVweCAwO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLnJlZWwxIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmltYWdlMXtcbiAgICBncmlkLXJvdzogMjtcbiAgICBncmlkLWNvbHVtbjogMjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5yZWVsMiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuICAuaW1hZ2Uye1xuICAgIGdyaWQtcm93OiAyO1xuICAgIGdyaWQtY29sdW1uOiA0O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnJlZWwzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG4gIC5pbWFnZTN7XG4gICAgZ3JpZC1yb3c6IDI7XG4gICAgZ3JpZC1jb2x1bW46IDY7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC53b3JkIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDVweCAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICBidXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7IFxufVxuXG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map