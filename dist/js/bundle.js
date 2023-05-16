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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-styling */ "./src/js/form-styling.js");
/* harmony import */ var _custom_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-lightbox */ "./src/js/custom-lightbox.js");
/* harmony import */ var _suites_grid_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./suites-grid-lightbox */ "./src/js/suites-grid-lightbox.js");
/* harmony import */ var _custom_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-slider */ "./src/js/custom-slider.js");
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./splash-page */ "./src/js/splash-page.js");






(function () {
  var pageIds = {
    suites: "342",
    home: '2',
    location: '302'
  };

  if (document.querySelector("body.page-id-".concat(pageIds.suites))) {
    var sgl = Object(_suites_grid_lightbox__WEBPACK_IMPORTED_MODULE_2__["default"])();
    sgl.init();
  }

  if (document.querySelector("body.page-id-".concat(pageIds.home))) {
    var cs = Object(_custom_slider__WEBPACK_IMPORTED_MODULE_3__["default"])();
    cs.init(2);
  }

  if (document.querySelector("body.page-id-".concat(pageIds.location))) {
    var _cs = Object(_custom_slider__WEBPACK_IMPORTED_MODULE_3__["default"])();

    _cs.init(6);
  }

  var fs = Object(_form_styling__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var cl = Object(_custom_lightbox__WEBPACK_IMPORTED_MODULE_1__["default"])(); // const sp = splashPage();

  fs.init();
  cl.init();
  sp.init();
  document.querySelectorAll('.register-link').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      launchLightbox();
    });
  });
  document.querySelectorAll('.lightbox-dismiss').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      dismissLightbox();
    });
  });

  function launchLightbox() {
    var lightboxForm = document.querySelector('#lightboxForm');
    document.querySelector('body').classList.add('modal-open');
    lightboxForm.classList.add('lightbox-open');
    document.addEventListener("keyup", function (e) {
      if (e.key == 'Escape') {
        dismissLightbox();
      }
    });
    gsap.fromTo(lightboxForm, {
      opacity: 0
    }, {
      opacity: 1,
      duration: 0.15
    });
  }

  function dismissLightbox() {
    fs.closeDropdown();
    document.querySelector('body').classList.remove('modal-open');
    document.querySelector('#lightboxForm').classList.remove('lightbox-open');
  }

  console.log('Website development by vanessarusu.com');
})();

/***/ }),

/***/ "./src/js/custom-lightbox.js":
/*!***********************************!*\
  !*** ./src/js/custom-lightbox.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var customLightbox = function customLightbox() {
  function addEventListeners() {
    document.querySelectorAll('.register-link').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        launchLightbox();
      });
    });
    document.querySelectorAll('.lightbox-dismiss').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        dismissLightbox();
      });
    });
  }

  function launchLightbox() {
    var lightboxForm = document.querySelector('#lightboxForm');

    if (!lightboxForm) {
      return;
    }

    document.querySelector('body').classList.add('modal-open');
    lightboxForm.classList.add('lightbox-open');
    document.addEventListener("keyup", function (e) {
      if (e.key == 'Escape') {
        dismissLightbox();
      }
    });
    gsap.fromTo(lightboxForm, {
      opacity: 0
    }, {
      opacity: 1,
      duration: 0.15
    });
  }

  function dismissLightbox() {
    document.querySelector('body').classList.remove('modal-open');
    document.querySelector('#lightboxForm').classList.remove('lightbox-open');
  }

  function init() {
    addEventListeners();
  }

  return {
    init: init
  };
};

/* harmony default export */ __webpack_exports__["default"] = (customLightbox);

/***/ }),

/***/ "./src/js/custom-slider.js":
/*!*********************************!*\
  !*** ./src/js/custom-slider.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// this has been moved to be the inline callback function within the plugin settings
var customSlider = function customSlider() {
  function init(sliderID) {
    if (document.querySelector(".fl-builder-edit")) {
      return;
    }

    var targetNode = document.querySelector('.n2-section-smartslider');
    var config = {
      attributes: true,
      childList: true,
      subtree: true
    };

    var callback = function callback(mutationList, observer) {
      var _iterator = _createForOfIteratorHelper(mutationList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var mutation = _step.value;

          if (mutation.type === 'childList') {
            if (document.querySelector("#n2-ss-".concat(sliderID))) {
              n2ss.ready(sliderID, function (slider, sliderElement) {
                setTimeout(function () {
                  document.querySelector('.nextend-arrow-previous').insertAdjacentHTML('afterend', '<div class="slider-pagination"><span class="current-index"></span><span class="bullet">&bull;</span><span class="slide-length"></span><div>');
                  document.querySelector(".slide-length").innerHTML = slider.slides.length;
                  document.querySelector(".current-index").innerHTML = '1';
                  sliderElement.addEventListener('mainAnimationStart', function (e, animation, currentSlideIndex, nextSlideIndex) {
                    setTimeout(function () {
                      var index = slider.currentSlide.index + 1;
                      document.querySelector(".current-index").innerHTML = index;
                    }, 500);
                  });
                }, 0);
              });
              observer.disconnect();
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };

    var observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  }

  return {
    init: init
  };
};

/* harmony default export */ __webpack_exports__["default"] = (customSlider);

/***/ }),

/***/ "./src/js/form-styling.js":
/*!********************************!*\
  !*** ./src/js/form-styling.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var formStyling = function formStyling() {
  //     function dropdown() {
  //         var selectNodes = document.querySelectorAll('.wpforms-field-select select');
  //         for(var i = 0; i < selectNodes.length; i++) {
  //             // run for each select node
  //             var currentSelect = selectNodes[i];
  //             var liMarkup = '';
  //             var options = selectNodes[i].options;
  //             var currentSelectionText = currentSelect.options[selectNodes[i].selectedIndex].text;
  //             for(var j = 0; j < options.length; j++) {
  //                 var item = '<li class="dropdown-item"><a href="#"data-dd="'+currentSelect.getAttribute("id")+'" data-value="'+options[j].getAttribute('value')+'">'+options[j].innerHTML+'</a></li>';
  //                 liMarkup += item;
  //             }
  //             var html = '<div class="custom-dropdown"><p class="selected-option"><span class="text">'+currentSelectionText+'</span><span class="arrow"></span></p><ul class="dd-container">'+liMarkup+'</ul></div>';
  //             selectNodes[i].insertAdjacentHTML('afterend', html); 
  //         }
  //         document.querySelectorAll('.custom-dropdown .selected-option').forEach(function(el) {
  //             el.addEventListener('click', openDropdown);
  //         })
  //         // click on dropdown element
  //         document.querySelectorAll('.dropdown-item a').forEach(function(el) {
  //             el.addEventListener('click', function(e) {
  //                 e.preventDefault();
  //                 var findSelect = this.getAttribute('data-dd');
  //                 var originalSelect = document.querySelector("#"+findSelect);
  //                 updateOriginalSelect(this, originalSelect);
  //                 updateLabel(this, originalSelect);
  //                 closeDropdown();
  //             })
  //         });        
  //     }
  //     function updateLabel(clickedEl, originalSelect) {
  //         var labelTextNode = originalSelect.nextElementSibling.querySelector('.selected-option .text');
  //         labelTextNode.innerHTML = clickedEl.innerHTML;
  //     }
  //     function updateOriginalSelect(clickedEl, originalSelect) {
  //         for(var i = 0; i < originalSelect.options.length; i++) {
  //             if(originalSelect.options[i].getAttribute('value') === clickedEl.getAttribute('data-value')) {
  //                 originalSelect.options[i].setAttribute('selected', true);
  //             }
  //             else {
  //                 originalSelect.options[i].removeAttribute('selected');
  //             }
  //         }
  //     }
  //     function closeDropdown() {
  //         document.querySelectorAll('ul.dd-container').forEach(function(el) {
  //             el.classList.add('dd-closed');
  //             el.classList.remove('dd-open');
  //         })
  //     }
  //     function openDropdown() {
  //         this.nextElementSibling.classList.add('dd-open');
  //     }
  //     function init() {
  //         dropdown();
  //     }
  //     return {
  //         init: init,
  //         closeDropdown: closeDropdown
  //     }
  // });
  function dropdown() {
    var selectNodes = document.querySelectorAll('select');

    if (!selectNodes.length) {
      return;
    }

    for (var i = 0; i < selectNodes.length; i++) {
      // run for each select node
      var currentSelect = selectNodes[i];
      var liMarkup = '';
      var options = selectNodes[i].options;
      var currentSelectionText = currentSelect.options[selectNodes[i].selectedIndex].text;

      if (currentSelect.options[selectNodes[i].selectedIndex].classList.contains('empty')) {
        currentSelectionText = '';
      }

      for (var j = 0; j < options.length; j++) {
        var addEmpyClass = options[j].className === 'empty' ? 'empty' : '';
        var item = '<li class="dropdown-item ' + addEmpyClass + '"><a tabindex="0" href="#"data-dd="' + currentSelect.getAttribute("id") + '" data-value="' + options[j].getAttribute('value') + '">' + options[j].innerHTML + '</a></li>';
        liMarkup += item;
      }

      var html = '<div class="custom-dropdown"><p class="selected-option"><span class="text">' + currentSelectionText + '</span><span class="arrow"></span></p><ul class="dd-container">' + liMarkup + '</ul></div>';
      selectNodes[i].insertAdjacentHTML('afterend', html);
    }

    document.querySelectorAll('.custom-dropdown .selected-option').forEach(function (el) {
      el.addEventListener('click', openDropdown);
    }); // click on dropdown element

    document.querySelectorAll('.dropdown-item a').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        var findSelect = this.getAttribute('data-dd');
        var originalSelect = document.querySelector("#" + findSelect);
        updateOriginalSelect(this, originalSelect);
        updateLabel(this, originalSelect);
        closeDropdown();
      });
    });
  }

  function updateLabel(clickedEl, originalSelect) {
    var labelTextNode = originalSelect.nextElementSibling.querySelector('.selected-option .text');
    labelTextNode.innerHTML = clickedEl.innerHTML;
  }

  function updateOriginalSelect(clickedEl, originalSelect) {
    for (var i = 0; i < originalSelect.options.length; i++) {
      if (originalSelect.options[i].getAttribute('value') === clickedEl.getAttribute('data-value')) {
        originalSelect.options[i].setAttribute('selected', true);
      } else {
        originalSelect.options[i].removeAttribute('selected');
      }
    }
  }

  function closeDropdown() {
    document.querySelectorAll('ul.dd-container').forEach(function (el) {
      el.classList.add('dd-closed');
      el.classList.remove('dd-open');
      document.removeEventListener('click', checkForOutsideClick);
      var dds = document.querySelectorAll('.custom-dropdown .selected-option');

      for (var i = 0; i < dds.length; i++) {
        dds[i].removeEventListener('click', closeDropdown);
      }
    });
  }

  function openDropdown() {
    this.nextElementSibling.classList.add('dd-open');
    document.addEventListener('click', checkForOutsideClick);
    var dds = document.querySelectorAll('.custom-dropdown .selected-option');

    for (var i = 0; i < dds.length; i++) {
      dds[i].addEventListener('click', closeDropdown);
    }
  }

  function checkForOutsideClick(e) {
    if (document.querySelectorAll('ul.dd-container.dd-open')) {
      if (!(e.target.tagName == 'A' || e.target.tagName == 'SPAN' || e.target.tagName == 'P')) {
        closeDropdown();
      }
    }
  }

  return {
    init: dropdown,
    closeDropdown: closeDropdown
  };
};

/* harmony default export */ __webpack_exports__["default"] = (formStyling);

/***/ }),

/***/ "./src/js/splash-page.js":
/*!*******************************!*\
  !*** ./src/js/splash-page.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var splashPage = function splashPage() {
  // logic
  var shouldPlay = !sessionStorage.getItem('hasViewedSplashPage'); // set to cookies

  var hasBeenDismissed = false; // var shouldPlay = true;
  // queries

  var body = document.querySelector('body');
  var splashPage = document.querySelector("#splashPage");
  var lineDrawingClass = document.querySelector('#lineDrawing');
  var pageContent = document.querySelectorAll("#fl-main-content, header"); // placeholders

  var myAnimationSVG;

  function addListeners() {
    // dismissSplashLink.addEventListener('click', dismissSplashPage);
    window.addEventListener("scroll", scrollListener);
  }

  function scrollListener() {
    if (window.pageYOffset >= 150) {
      dismissSplashPage();
    }
  }

  function animationConfig() {
    if (lineDrawingClass) {
      console.log('in here');
      return myAnimationSVG = new Vivus('lineDrawing', {
        // type: 'scenario',
        duration: 140,
        start: 'manual',
        animTimingFunction: Vivus.EASE_OUT
      }, dismissSplashPage);
    }
  }

  function dismissSplashPage() {
    if (!hasBeenDismissed) {
      window.removeEventListener("scroll", scrollListener);
      body.style.background = 'var(--black)';
      body.style.position = 'fixed';
      var viewportHeight = window.innerHeight;
      gsap.to(splashPage, {
        y: -(viewportHeight + 150),
        duration: 1.2,
        onComplete: initPage
      });
      gsap.fromTo(pageContent, {
        opacity: 0
      }, {
        duration: 1.2,
        opacity: 1
      });
    }

    return hasBeenDismissed = true;
  }

  function playSplashPage() {
    // play animation
    setTimeout(function () {
      if (lineDrawingClass) {
        myAnimationSVG.play(); //opacity on top of animation

        gsap.to(lineDrawingClass, {
          opacity: 1,
          duration: 1.4
        });
      }
    }, 500);
    sessionStorage.setItem('hasViewedSplashPage', true);
  }

  function initPage() {
    body.style.opacity = 1;
    body.style.position = 'initial';
    setTimeout(function () {
      splashPage.remove();
      body.style.background = '#fff';
    }, 100);
  }

  function init() {
    // force scroll to top, then load splash page
    if (shouldPlay && window.innerWidth >= 768) {
      // document.querySelector('#splashPage').style.opacity = '1';
      window.addEventListener('load', function (event) {
        window.scrollTo(0, 0);
        setTimeout(function () {
          // fade in body
          body.style.opacity = 1; // if not logged in and/or  editing

          if (!(body.classList.contains('logged-in') || body.classList.contains('fl-builder-edit'))) {
            addListeners();
            animationConfig();
            playSplashPage();
          }
        }, 200);
      });

      if (document.querySelector('.manual-dismiss')) {
        if (!(body.classList.contains('logged-in') || body.classList.contains('fl-builder-edit'))) {
          setTimeout(function () {
            dismissSplashPage();
          }, 2000);
        }
      }
    } else {
      initPage();
    }
  }

  return {
    init: init
  };
};

/* harmony default export */ __webpack_exports__["default"] = (splashPage);

/***/ }),

/***/ "./src/js/suites-grid-lightbox.js":
/*!****************************************!*\
  !*** ./src/js/suites-grid-lightbox.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var suitesGridLightbox = function suitesGridLightbox() {
  var gridItems = document.querySelectorAll("#esg-grid-3-1 li");
  var lightboxActive = false;
  var allLightboxPosts = [];
  var allFloorplans = getAllPosts();

  function configureClickEvent(item, index) {
    // var postID = item.getAttribute("id").split('-');
    var classes = Array.from(item.classList);
    var classID = Array.from(classes).filter(function (word) {
      return word.includes("eg-post-id-");
    });
    var postID = classID[0].split('-');
    postID = postID[postID.length - 1];
    setTimeout(function () {
      item.addEventListener("click", function () {
        for (var i = 0; i < allFloorplans.length; i++) {
          if (allFloorplans[i].id === Number(postID)) {
            createLightbox(allFloorplans[i]);
            return;
          }
        }
      });
    }, 500);
  }

  ;

  function getAllPosts() {
    wp.api.loadPromise.done(function () {
      var post = new wp.api.models.Floorplans();
      return post.fetch({
        data: {
          per_page: 40
        }
      }).done(function (data) {
        return allFloorplans = data;
      });
    });
  }

  function createLightbox(post) {
    var body = document.querySelector("body");
    var content = post.id;
    var lightBoxImage = post.acf.floorplan_lightbox_image || null;
    var pdfDownload = post.acf.floorplan_pdf_download || null;
    var markup = "<div id=\"essentialGridCustomLightbox\" class=\"essential-grid-custom-modal\">\n                            <div class=\"content-container\">\n                                <div class=\"dismiss\">\n                                    <button><span></span><span></span></button>\n                                </div>\n                                <div class=\"image-container\">\n                                    <img src=\"".concat(lightBoxImage, "\" />\n                                </div>\n                                <div class=\"button-container\">\n                                    <a class=\"fl-button rounded-corners\" href=\"").concat(pdfDownload, "\" target=\"blank\">Download Suite PDF</a>\n                                </div>\n                            </div>\n                        </div>");
    body.insertAdjacentHTML('beforeend', markup);
    body.classList.add('modal-open');
    document.querySelector(".dismiss button").addEventListener('click', dismissLightbox);
    window.addEventListener("keyup", keyboardDismissLightbox);
    return lightboxActive = true;
  }

  function dismissLightbox() {
    if (lightboxActive) {
      document.querySelector(".dismiss button").removeEventListener('click', dismissLightbox);
      var body = document.querySelector("body");
      document.querySelector("#essentialGridCustomLightbox").remove();
      body.classList.remove('modal-open');
      window.removeEventListener("keyup", keyboardDismissLightbox);
    }

    return lightboxActive = false;
  }

  function keyboardDismissLightbox(e) {
    if (e.keyCode == 27) {
      dismissLightbox();
    }
  }

  function init() {
    wp.api.loadPromise.done(function (data) {
      gridItems.forEach(configureClickEvent);
    });
  }

  return {
    init: init
  };
};

/* harmony default export */ __webpack_exports__["default"] = (suitesGridLightbox);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tLWxpZ2h0Ym94LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20tc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mb3JtLXN0eWxpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NwbGFzaC1wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zdWl0ZXMtZ3JpZC1saWdodGJveC5qcyJdLCJuYW1lcyI6WyJwYWdlSWRzIiwic3VpdGVzIiwiaG9tZSIsImxvY2F0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2dsIiwic3VpdGVzR3JpZExpZ2h0Ym94IiwiaW5pdCIsImNzIiwiY3VzdG9tU2xpZGVyIiwiZnMiLCJmb3JtU3R5bGluZyIsImNsIiwiY3VzdG9tTGlnaHRib3giLCJzcCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGF1bmNoTGlnaHRib3giLCJkaXNtaXNzTGlnaHRib3giLCJsaWdodGJveEZvcm0iLCJjbGFzc0xpc3QiLCJhZGQiLCJrZXkiLCJnc2FwIiwiZnJvbVRvIiwib3BhY2l0eSIsImR1cmF0aW9uIiwiY2xvc2VEcm9wZG93biIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVycyIsInNsaWRlcklEIiwidGFyZ2V0Tm9kZSIsImNvbmZpZyIsImF0dHJpYnV0ZXMiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiY2FsbGJhY2siLCJtdXRhdGlvbkxpc3QiLCJvYnNlcnZlciIsIm11dGF0aW9uIiwidHlwZSIsIm4yc3MiLCJyZWFkeSIsInNsaWRlciIsInNsaWRlckVsZW1lbnQiLCJzZXRUaW1lb3V0IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiaW5uZXJIVE1MIiwic2xpZGVzIiwibGVuZ3RoIiwiYW5pbWF0aW9uIiwiY3VycmVudFNsaWRlSW5kZXgiLCJuZXh0U2xpZGVJbmRleCIsImluZGV4IiwiY3VycmVudFNsaWRlIiwiZGlzY29ubmVjdCIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiZHJvcGRvd24iLCJzZWxlY3ROb2RlcyIsImkiLCJjdXJyZW50U2VsZWN0IiwibGlNYXJrdXAiLCJvcHRpb25zIiwiY3VycmVudFNlbGVjdGlvblRleHQiLCJzZWxlY3RlZEluZGV4IiwidGV4dCIsImNvbnRhaW5zIiwiaiIsImFkZEVtcHlDbGFzcyIsImNsYXNzTmFtZSIsIml0ZW0iLCJnZXRBdHRyaWJ1dGUiLCJodG1sIiwib3BlbkRyb3Bkb3duIiwiZmluZFNlbGVjdCIsIm9yaWdpbmFsU2VsZWN0IiwidXBkYXRlT3JpZ2luYWxTZWxlY3QiLCJ1cGRhdGVMYWJlbCIsImNsaWNrZWRFbCIsImxhYmVsVGV4dE5vZGUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2hlY2tGb3JPdXRzaWRlQ2xpY2siLCJkZHMiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwic3BsYXNoUGFnZSIsInNob3VsZFBsYXkiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJoYXNCZWVuRGlzbWlzc2VkIiwiYm9keSIsImxpbmVEcmF3aW5nQ2xhc3MiLCJwYWdlQ29udGVudCIsIm15QW5pbWF0aW9uU1ZHIiwiYWRkTGlzdGVuZXJzIiwid2luZG93Iiwic2Nyb2xsTGlzdGVuZXIiLCJwYWdlWU9mZnNldCIsImRpc21pc3NTcGxhc2hQYWdlIiwiYW5pbWF0aW9uQ29uZmlnIiwiVml2dXMiLCJzdGFydCIsImFuaW1UaW1pbmdGdW5jdGlvbiIsIkVBU0VfT1VUIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwicG9zaXRpb24iLCJ2aWV3cG9ydEhlaWdodCIsImlubmVySGVpZ2h0IiwidG8iLCJ5Iiwib25Db21wbGV0ZSIsImluaXRQYWdlIiwicGxheVNwbGFzaFBhZ2UiLCJwbGF5Iiwic2V0SXRlbSIsImlubmVyV2lkdGgiLCJldmVudCIsInNjcm9sbFRvIiwiZ3JpZEl0ZW1zIiwibGlnaHRib3hBY3RpdmUiLCJhbGxMaWdodGJveFBvc3RzIiwiYWxsRmxvb3JwbGFucyIsImdldEFsbFBvc3RzIiwiY29uZmlndXJlQ2xpY2tFdmVudCIsImNsYXNzZXMiLCJBcnJheSIsImZyb20iLCJjbGFzc0lEIiwiZmlsdGVyIiwid29yZCIsImluY2x1ZGVzIiwicG9zdElEIiwic3BsaXQiLCJpZCIsIk51bWJlciIsImNyZWF0ZUxpZ2h0Ym94Iiwid3AiLCJhcGkiLCJsb2FkUHJvbWlzZSIsImRvbmUiLCJwb3N0IiwibW9kZWxzIiwiRmxvb3JwbGFucyIsImZldGNoIiwiZGF0YSIsInBlcl9wYWdlIiwiY29udGVudCIsImxpZ2h0Qm94SW1hZ2UiLCJhY2YiLCJmbG9vcnBsYW5fbGlnaHRib3hfaW1hZ2UiLCJwZGZEb3dubG9hZCIsImZsb29ycGxhbl9wZGZfZG93bmxvYWQiLCJtYXJrdXAiLCJrZXlib2FyZERpc21pc3NMaWdodGJveCIsImtleUNvZGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJ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cEM7QUFDSDs7QUFDRCxXQUFPbEMsY0FBYyxHQUFHLEtBQXhCO0FBQ0g7O0FBRUQsV0FBU2tDLHVCQUFULENBQWlDakosQ0FBakMsRUFBb0M7QUFDaEMsUUFBR0EsQ0FBQyxDQUFDa0osT0FBRixJQUFhLEVBQWhCLEVBQW9CO0FBQ2hCL0kscUJBQWU7QUFDbEI7QUFDSjs7QUFFRCxXQUFTZixJQUFULEdBQWdCO0FBQ1o0SSxNQUFFLENBQUNDLEdBQUgsQ0FBT0MsV0FBUCxDQUFtQkMsSUFBbkIsQ0FBeUIsVUFBU0ssSUFBVCxFQUFlO0FBQ3BDMUIsZUFBUyxDQUFDakgsT0FBVixDQUFrQnNILG1CQUFsQjtBQUVILEtBSEQ7QUFJSDs7QUFFRCxTQUFPO0FBQ0gvSCxRQUFJLEVBQUVBO0FBREgsR0FBUDtBQUdILENBaEdEOztBQWtHZUQsaUZBQWYsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9idW5kbGUuanNcIik7XG4iLCJpbXBvcnQgZm9ybVN0eWxpbmcgZnJvbSAnLi9mb3JtLXN0eWxpbmcnO1xuaW1wb3J0IGN1c3RvbUxpZ2h0Ym94IGZyb20gXCIuL2N1c3RvbS1saWdodGJveFwiO1xuXG5pbXBvcnQgc3VpdGVzR3JpZExpZ2h0Ym94IGZyb20gJy4vc3VpdGVzLWdyaWQtbGlnaHRib3gnO1xuaW1wb3J0IGN1c3RvbVNsaWRlciBmcm9tICcuL2N1c3RvbS1zbGlkZXInO1xuXG5pbXBvcnQgc3BsYXNoUGFnZSBmcm9tICcuL3NwbGFzaC1wYWdlJztcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIHBhZ2VJZHMgPSB7XG4gICAgICAgIHN1aXRlczogXCIzNDJcIixcbiAgICAgICAgaG9tZTogJzInLFxuICAgICAgICBsb2NhdGlvbjogJzMwMidcbiAgICB9XG5cblxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGJvZHkucGFnZS1pZC0ke3BhZ2VJZHMuc3VpdGVzfWApKSB7XG4gICAgICAgIGNvbnN0IHNnbCA9IHN1aXRlc0dyaWRMaWdodGJveCgpO1xuICAgICAgICBzZ2wuaW5pdCgpO1xuICAgIH1cblxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGJvZHkucGFnZS1pZC0ke3BhZ2VJZHMuaG9tZX1gKSkge1xuICAgICAgICBjb25zdCBjcyA9IGN1c3RvbVNsaWRlcigpO1xuICAgICAgICBjcy5pbml0KDIpO1xuICAgIH1cblxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGJvZHkucGFnZS1pZC0ke3BhZ2VJZHMubG9jYXRpb259YCkpIHtcbiAgICAgICAgY29uc3QgY3MgPSBjdXN0b21TbGlkZXIoKTtcbiAgICAgICAgY3MuaW5pdCg2KTtcbiAgICB9XG5cbiAgICBjb25zdCBmcyA9IGZvcm1TdHlsaW5nKCk7XG4gICAgY29uc3QgY2wgPSBjdXN0b21MaWdodGJveCgpO1xuICAgIC8vIGNvbnN0IHNwID0gc3BsYXNoUGFnZSgpO1xuXG4gICAgZnMuaW5pdCgpO1xuICAgIGNsLmluaXQoKTtcbiAgICBzcC5pbml0KCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVnaXN0ZXItbGluaycpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsYXVuY2hMaWdodGJveCgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWdodGJveC1kaXNtaXNzJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRpc21pc3NMaWdodGJveCgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGxhdW5jaExpZ2h0Ym94KCkge1xuICAgICAgICB2YXIgbGlnaHRib3hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpZ2h0Ym94Rm9ybScpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb3BlbicpO1xuICAgICAgICBsaWdodGJveEZvcm0uY2xhc3NMaXN0LmFkZCgnbGlnaHRib3gtb3BlbicpO1xuICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmKGUua2V5ID09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgZGlzbWlzc0xpZ2h0Ym94KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGdzYXAuZnJvbVRvKGxpZ2h0Ym94Rm9ybSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjE1XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc21pc3NMaWdodGJveCgpIHtcbiAgICAgICAgZnMuY2xvc2VEcm9wZG93bigpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlnaHRib3hGb3JtJykuY2xhc3NMaXN0LnJlbW92ZSgnbGlnaHRib3gtb3BlbicpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnV2Vic2l0ZSBkZXZlbG9wbWVudCBieSB2YW5lc3NhcnVzdS5jb20nKVxufVxuXG4oKSk7XG4iLCJjb25zdCBjdXN0b21MaWdodGJveCA9IChmdW5jdGlvbigpIHtcblxuICAgIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVnaXN0ZXItbGluaycpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBsYXVuY2hMaWdodGJveCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlnaHRib3gtZGlzbWlzcycpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBkaXNtaXNzTGlnaHRib3goKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsYXVuY2hMaWdodGJveCgpIHtcbiAgICAgICAgdmFyIGxpZ2h0Ym94Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaWdodGJveEZvcm0nKTtcbiAgICAgICAgXG4gICAgICAgIGlmKCFsaWdodGJveEZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgIGxpZ2h0Ym94Rm9ybS5jbGFzc0xpc3QuYWRkKCdsaWdodGJveC1vcGVuJyk7XG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYoZS5rZXkgPT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgICAgICBkaXNtaXNzTGlnaHRib3goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZ3NhcC5mcm9tVG8obGlnaHRib3hGb3JtLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuMTVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzbWlzc0xpZ2h0Ym94KCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlnaHRib3hGb3JtJykuY2xhc3NMaXN0LnJlbW92ZSgnbGlnaHRib3gtb3BlbicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogaW5pdFxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjdXN0b21MaWdodGJveDsiLCIgICAgLy8gdGhpcyBoYXMgYmVlbiBtb3ZlZCB0byBiZSB0aGUgaW5saW5lIGNhbGxiYWNrIGZ1bmN0aW9uIHdpdGhpbiB0aGUgcGx1Z2luIHNldHRpbmdzXG5cbmNvbnN0IGN1c3RvbVNsaWRlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgXG4gICAgZnVuY3Rpb24gaW5pdChzbGlkZXJJRCkge1xuICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZsLWJ1aWxkZXItZWRpdFwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uMi1zZWN0aW9uLXNtYXJ0c2xpZGVyJyk7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH07XG5cbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbihtdXRhdGlvbkxpc3QsIG9ic2VydmVyKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkge1xuICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnY2hpbGRMaXN0Jykge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNuMi1zcy0ke3NsaWRlcklEfWApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuMnNzLnJlYWR5KHNsaWRlcklELCBmdW5jdGlvbihzbGlkZXIsIHNsaWRlckVsZW1lbnQpIHsgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHRlbmQtYXJyb3ctcHJldmlvdXMnKS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywnPGRpdiBjbGFzcz1cInNsaWRlci1wYWdpbmF0aW9uXCI+PHNwYW4gY2xhc3M9XCJjdXJyZW50LWluZGV4XCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwiYnVsbGV0XCI+JmJ1bGw7PC9zcGFuPjxzcGFuIGNsYXNzPVwic2xpZGUtbGVuZ3RoXCI+PC9zcGFuPjxkaXY+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZS1sZW5ndGhcIikuaW5uZXJIVE1MID0gc2xpZGVyLnNsaWRlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LWluZGV4XCIpLmlubmVySFRNTCA9ICcxJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21haW5BbmltYXRpb25TdGFydCcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGUsIGFuaW1hdGlvbiwgY3VycmVudFNsaWRlSW5kZXgsIG5leHRTbGlkZUluZGV4KSB7ICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHNsaWRlci5jdXJyZW50U2xpZGUuaW5kZXgrMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC1pbmRleFwiKS5pbm5lckhUTUwgPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogaW5pdFxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjdXN0b21TbGlkZXI7IiwiY29uc3QgZm9ybVN0eWxpbmcgPSAoZnVuY3Rpb24gKCkge1xuXG4vLyAgICAgZnVuY3Rpb24gZHJvcGRvd24oKSB7XG4vLyAgICAgICAgIHZhciBzZWxlY3ROb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53cGZvcm1zLWZpZWxkLXNlbGVjdCBzZWxlY3QnKTtcbiAgICAgICAgXG4vLyAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzZWxlY3ROb2Rlcy5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgICAgLy8gcnVuIGZvciBlYWNoIHNlbGVjdCBub2RlXG4vLyAgICAgICAgICAgICB2YXIgY3VycmVudFNlbGVjdCA9IHNlbGVjdE5vZGVzW2ldO1xuLy8gICAgICAgICAgICAgdmFyIGxpTWFya3VwID0gJyc7XG4vLyAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHNlbGVjdE5vZGVzW2ldLm9wdGlvbnM7XG4vLyAgICAgICAgICAgICB2YXIgY3VycmVudFNlbGVjdGlvblRleHQgPSBjdXJyZW50U2VsZWN0Lm9wdGlvbnNbc2VsZWN0Tm9kZXNbaV0uc2VsZWN0ZWRJbmRleF0udGV4dDtcblxuLy8gICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IG9wdGlvbnMubGVuZ3RoOyBqKyspIHtcbi8vICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9ICc8bGkgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCI+PGEgaHJlZj1cIiNcImRhdGEtZGQ9XCInK2N1cnJlbnRTZWxlY3QuZ2V0QXR0cmlidXRlKFwiaWRcIikrJ1wiIGRhdGEtdmFsdWU9XCInK29wdGlvbnNbal0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKydcIj4nK29wdGlvbnNbal0uaW5uZXJIVE1MKyc8L2E+PC9saT4nO1xuLy8gICAgICAgICAgICAgICAgIGxpTWFya3VwICs9IGl0ZW07XG4vLyAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJjdXN0b20tZHJvcGRvd25cIj48cCBjbGFzcz1cInNlbGVjdGVkLW9wdGlvblwiPjxzcGFuIGNsYXNzPVwidGV4dFwiPicrY3VycmVudFNlbGVjdGlvblRleHQrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImFycm93XCI+PC9zcGFuPjwvcD48dWwgY2xhc3M9XCJkZC1jb250YWluZXJcIj4nK2xpTWFya3VwKyc8L3VsPjwvZGl2Pic7XG4vLyAgICAgICAgICAgICBzZWxlY3ROb2Rlc1tpXS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgaHRtbCk7IFxuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1kcm9wZG93biAuc2VsZWN0ZWQtb3B0aW9uJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuLy8gICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRHJvcGRvd24pO1xuLy8gICAgICAgICB9KVxuXG4vLyAgICAgICAgIC8vIGNsaWNrIG9uIGRyb3Bkb3duIGVsZW1lbnRcbi8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLWl0ZW0gYScpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbi8vICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgICAgICAgICAgICB2YXIgZmluZFNlbGVjdCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWRkJyk7XG4vLyAgICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIitmaW5kU2VsZWN0KTtcbi8vICAgICAgICAgICAgICAgICB1cGRhdGVPcmlnaW5hbFNlbGVjdCh0aGlzLCBvcmlnaW5hbFNlbGVjdCk7XG4vLyAgICAgICAgICAgICAgICAgdXBkYXRlTGFiZWwodGhpcywgb3JpZ2luYWxTZWxlY3QpO1xuLy8gICAgICAgICAgICAgICAgIGNsb3NlRHJvcGRvd24oKTtcbi8vICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgIH0pOyAgICAgICAgXG4vLyAgICAgfVxuXG4vLyAgICAgZnVuY3Rpb24gdXBkYXRlTGFiZWwoY2xpY2tlZEVsLCBvcmlnaW5hbFNlbGVjdCkge1xuLy8gICAgICAgICB2YXIgbGFiZWxUZXh0Tm9kZSA9IG9yaWdpbmFsU2VsZWN0Lm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQtb3B0aW9uIC50ZXh0Jyk7XG4vLyAgICAgICAgIGxhYmVsVGV4dE5vZGUuaW5uZXJIVE1MID0gY2xpY2tlZEVsLmlubmVySFRNTDtcbi8vICAgICB9XG5cbi8vICAgICBmdW5jdGlvbiB1cGRhdGVPcmlnaW5hbFNlbGVjdChjbGlja2VkRWwsIG9yaWdpbmFsU2VsZWN0KSB7XG4vLyAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBvcmlnaW5hbFNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgICAgICBpZihvcmlnaW5hbFNlbGVjdC5vcHRpb25zW2ldLmdldEF0dHJpYnV0ZSgndmFsdWUnKSA9PT0gY2xpY2tlZEVsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpKSB7XG4vLyAgICAgICAgICAgICAgICAgb3JpZ2luYWxTZWxlY3Qub3B0aW9uc1tpXS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgdHJ1ZSk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICBvcmlnaW5hbFNlbGVjdC5vcHRpb25zW2ldLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIGNsb3NlRHJvcGRvd24oKSB7XG4vLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsLmRkLWNvbnRhaW5lcicpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbi8vICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2RkLWNsb3NlZCcpO1xuLy8gICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZGQtb3BlbicpO1xuLy8gICAgICAgICB9KVxuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIG9wZW5Ecm9wZG93bigpIHtcbi8vICAgICAgICAgdGhpcy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZGQtb3BlbicpO1xuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4vLyAgICAgICAgIGRyb3Bkb3duKCk7XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgaW5pdDogaW5pdCxcbi8vICAgICAgICAgY2xvc2VEcm9wZG93bjogY2xvc2VEcm9wZG93blxuLy8gICAgIH1cbi8vIH0pO1xuXG5cblxuXG5cbmZ1bmN0aW9uIGRyb3Bkb3duKCkge1xuICAgIHZhciBzZWxlY3ROb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpO1xuXG4gICAgaWYoIXNlbGVjdE5vZGVzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzZWxlY3ROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBydW4gZm9yIGVhY2ggc2VsZWN0IG5vZGVcbiAgICAgICAgdmFyIGN1cnJlbnRTZWxlY3QgPSBzZWxlY3ROb2Rlc1tpXTtcbiAgICAgICAgdmFyIGxpTWFya3VwID0gJyc7XG4gICAgICAgIHZhciBvcHRpb25zID0gc2VsZWN0Tm9kZXNbaV0ub3B0aW9ucztcbiAgICAgICAgdmFyIGN1cnJlbnRTZWxlY3Rpb25UZXh0ID0gY3VycmVudFNlbGVjdC5vcHRpb25zW3NlbGVjdE5vZGVzW2ldLnNlbGVjdGVkSW5kZXhdLnRleHQ7XG5cbiAgICAgICAgaWYoY3VycmVudFNlbGVjdC5vcHRpb25zW3NlbGVjdE5vZGVzW2ldLnNlbGVjdGVkSW5kZXhdLmNsYXNzTGlzdC5jb250YWlucygnZW1wdHknKSkge1xuICAgICAgICAgICAgY3VycmVudFNlbGVjdGlvblRleHQgPSAnJztcbiAgICB9XG5cbiAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IG9wdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHZhciBhZGRFbXB5Q2xhc3MgPSBvcHRpb25zW2pdLmNsYXNzTmFtZSA9PT0gJ2VtcHR5JyA/ICdlbXB0eScgOiAnJztcbiAgICAgICAgICAgIHZhciBpdGVtID0gJzxsaSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gJyArYWRkRW1weUNsYXNzKyAnXCI+PGEgdGFiaW5kZXg9XCIwXCIgaHJlZj1cIiNcImRhdGEtZGQ9XCInK2N1cnJlbnRTZWxlY3QuZ2V0QXR0cmlidXRlKFwiaWRcIikrJ1wiIGRhdGEtdmFsdWU9XCInK29wdGlvbnNbal0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKydcIj4nK29wdGlvbnNbal0uaW5uZXJIVE1MKyc8L2E+PC9saT4nO1xuICAgICAgICAgICAgbGlNYXJrdXAgKz0gaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJjdXN0b20tZHJvcGRvd25cIj48cCBjbGFzcz1cInNlbGVjdGVkLW9wdGlvblwiPjxzcGFuIGNsYXNzPVwidGV4dFwiPicrY3VycmVudFNlbGVjdGlvblRleHQrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImFycm93XCI+PC9zcGFuPjwvcD48dWwgY2xhc3M9XCJkZC1jb250YWluZXJcIj4nK2xpTWFya3VwKyc8L3VsPjwvZGl2Pic7XG4gICAgICAgIHNlbGVjdE5vZGVzW2ldLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBodG1sKTsgXG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1kcm9wZG93biAuc2VsZWN0ZWQtb3B0aW9uJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Ecm9wZG93bik7XG4gICAgfSlcblxuICAgIC8vIGNsaWNrIG9uIGRyb3Bkb3duIGVsZW1lbnRcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24taXRlbSBhJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGZpbmRTZWxlY3QgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1kZCcpO1xuICAgICAgICAgICAgdmFyIG9yaWdpbmFsU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIitmaW5kU2VsZWN0KTtcbiAgICAgICAgICAgIHVwZGF0ZU9yaWdpbmFsU2VsZWN0KHRoaXMsIG9yaWdpbmFsU2VsZWN0KTtcbiAgICAgICAgICAgIHVwZGF0ZUxhYmVsKHRoaXMsIG9yaWdpbmFsU2VsZWN0KTtcbiAgICAgICAgICAgIGNsb3NlRHJvcGRvd24oKTtcbiAgICAgICAgfSlcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTGFiZWwoY2xpY2tlZEVsLCBvcmlnaW5hbFNlbGVjdCkgeyAgICAgICAgXG4gICAgdmFyIGxhYmVsVGV4dE5vZGUgPSBvcmlnaW5hbFNlbGVjdC5uZXh0RWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkLW9wdGlvbiAudGV4dCcpO1xuICAgIGxhYmVsVGV4dE5vZGUuaW5uZXJIVE1MID0gY2xpY2tlZEVsLmlubmVySFRNTDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlT3JpZ2luYWxTZWxlY3QoY2xpY2tlZEVsLCBvcmlnaW5hbFNlbGVjdCkge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBvcmlnaW5hbFNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKG9yaWdpbmFsU2VsZWN0Lm9wdGlvbnNbaV0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpID09PSBjbGlja2VkRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJykpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsU2VsZWN0Lm9wdGlvbnNbaV0uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb3JpZ2luYWxTZWxlY3Qub3B0aW9uc1tpXS5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsb3NlRHJvcGRvd24oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndWwuZGQtY29udGFpbmVyJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdkZC1jbG9zZWQnKTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZGQtb3BlbicpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrRm9yT3V0c2lkZUNsaWNrKTtcbiAgICAgICAgdmFyIGRkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tZHJvcGRvd24gLnNlbGVjdGVkLW9wdGlvbicpO1xuICAgICAgICBmb3IodmFyIGk9MDsgaSA8IGRkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGRzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VEcm9wZG93bik7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBvcGVuRHJvcGRvd24oKSB7XG4gICAgdGhpcy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZGQtb3BlbicpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tGb3JPdXRzaWRlQ2xpY2spO1xuICAgIHZhciBkZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLWRyb3Bkb3duIC5zZWxlY3RlZC1vcHRpb24nKTtcbiAgICAgICAgZm9yKHZhciBpPTA7IGkgPCBkZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRkc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRHJvcGRvd24pO1xuICAgICAgICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yT3V0c2lkZUNsaWNrKGUpIHtcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd1bC5kZC1jb250YWluZXIuZGQtb3BlbicpKSB7XG4gICAgICAgIGlmKCEoZS50YXJnZXQudGFnTmFtZSA9PSdBJyB8fCBlLnRhcmdldC50YWdOYW1lID09J1NQQU4nIHx8IGUudGFyZ2V0LnRhZ05hbWUgPT0nUCcpKSB7XG4gICAgICAgICAgICBjbG9zZURyb3Bkb3duKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnJldHVybiB7XG4gICAgaW5pdDogZHJvcGRvd24sXG4gICAgY2xvc2VEcm9wZG93bjogY2xvc2VEcm9wZG93blxufVxufSk7IFxuXG5leHBvcnQgZGVmYXVsdCBmb3JtU3R5bGluZzsiLCJjb25zdCBzcGxhc2hQYWdlID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIC8vIGxvZ2ljXG4gICAgdmFyIHNob3VsZFBsYXkgPSAhc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnaGFzVmlld2VkU3BsYXNoUGFnZScpOyAvLyBzZXQgdG8gY29va2llc1xuICAgIHZhciBoYXNCZWVuRGlzbWlzc2VkID0gZmFsc2U7XG4gICAgLy8gdmFyIHNob3VsZFBsYXkgPSB0cnVlO1xuXG4gICAgLy8gcXVlcmllc1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIHZhciBzcGxhc2hQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzcGxhc2hQYWdlXCIpO1xuICAgIHZhciBsaW5lRHJhd2luZ0NsYXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpbmVEcmF3aW5nJyk7XG4gICAgdmFyIHBhZ2VDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNmbC1tYWluLWNvbnRlbnQsIGhlYWRlclwiKTtcblxuICAgIC8vIHBsYWNlaG9sZGVyc1xuICAgIHZhciBteUFuaW1hdGlvblNWRztcblxuICAgIGZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcbiAgICAgICAgLy8gZGlzbWlzc1NwbGFzaExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNtaXNzU3BsYXNoUGFnZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbExpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+PSAxNTApIHtcbiAgICAgICAgICAgIGRpc21pc3NTcGxhc2hQYWdlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRpb25Db25maWcoKSB7XG4gICAgICAgIFxuICAgICAgICBpZihsaW5lRHJhd2luZ0NsYXNzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW4gaGVyZScpO1xuICAgICAgICAgICAgcmV0dXJuIG15QW5pbWF0aW9uU1ZHID0gbmV3IFZpdnVzKCdsaW5lRHJhd2luZycsIHtcbiAgICAgICAgICAgICAgICAvLyB0eXBlOiAnc2NlbmFyaW8nLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNDAsXG4gICAgICAgICAgICAgICAgc3RhcnQ6ICdtYW51YWwnLFxuICAgICAgICAgICAgICAgIGFuaW1UaW1pbmdGdW5jdGlvbjogVml2dXMuRUFTRV9PVVRcbiAgICAgICAgICAgIH0sIGRpc21pc3NTcGxhc2hQYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNtaXNzU3BsYXNoUGFnZSgpIHtcbiAgICAgICAgaWYoIWhhc0JlZW5EaXNtaXNzZWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbExpc3RlbmVyKTtcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICd2YXIoLS1ibGFjayknO1xuICAgICAgICAgICAgYm9keS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgICAgICB2YXIgdmlld3BvcnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgICAgIGdzYXAudG8oc3BsYXNoUGFnZSwge1xuICAgICAgICAgICAgICAgIHk6LSh2aWV3cG9ydEhlaWdodCArIDE1MCksXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEuMixcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiBpbml0UGFnZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGdzYXAuZnJvbVRvKHBhZ2VDb250ZW50LCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLjIsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gaGFzQmVlbkRpc21pc3NlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxheVNwbGFzaFBhZ2UoKSB7XG4gICAgICAgIC8vIHBsYXkgYW5pbWF0aW9uXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZihsaW5lRHJhd2luZ0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgbXlBbmltYXRpb25TVkcucGxheSgpO1xuICAgICAgICAgICAgICAgIC8vb3BhY2l0eSBvbiB0b3Agb2YgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgZ3NhcC50byhsaW5lRHJhd2luZ0NsYXNzLCB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLjQsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdoYXNWaWV3ZWRTcGxhc2hQYWdlJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFBhZ2UoKSB7XG4gICAgICAgIGJvZHkuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgIGJvZHkuc3R5bGUucG9zaXRpb24gPSAnaW5pdGlhbCc7XG4gICAgICAgIFxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc3BsYXNoUGFnZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcjZmZmJztcbiAgICAgICAgfSwgMTAwKTtcbiAgICB9IFxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgLy8gZm9yY2Ugc2Nyb2xsIHRvIHRvcCwgdGhlbiBsb2FkIHNwbGFzaCBwYWdlXG4gICAgICAgIGlmKHNob3VsZFBsYXkgJiYgd2luZG93LmlubmVyV2lkdGggPj0gNzY4KSB7XG4gICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BsYXNoUGFnZScpLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLDApO1xuICAgIFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZhZGUgaW4gYm9keVxuICAgICAgICAgICAgICAgICAgICBib2R5LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgbm90IGxvZ2dlZCBpbiBhbmQvb3IgIGVkaXRpbmdcbiAgICAgICAgICAgICAgICAgICAgaWYoIShib2R5LmNsYXNzTGlzdC5jb250YWlucygnbG9nZ2VkLWluJykgXG4gICAgICAgICAgICAgICAgICAgIHx8IGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdmbC1idWlsZGVyLWVkaXQnKVxuICAgICAgICAgICAgICAgICAgICApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkNvbmZpZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheVNwbGFzaFBhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW51YWwtZGlzbWlzcycpKSB7XG4gICAgICAgICAgICAgICAgaWYoIShib2R5LmNsYXNzTGlzdC5jb250YWlucygnbG9nZ2VkLWluJykgfHwgYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZsLWJ1aWxkZXItZWRpdCcpKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNtaXNzU3BsYXNoUGFnZSgpO1xuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpbml0UGFnZSgpO1xuICAgICAgICB9ICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBpbml0XG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNwbGFzaFBhZ2U7IiwiY29uc3Qgc3VpdGVzR3JpZExpZ2h0Ym94ID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBncmlkSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2VzZy1ncmlkLTMtMSBsaVwiKTtcbiAgICB2YXIgbGlnaHRib3hBY3RpdmUgPSBmYWxzZTtcbiAgICB2YXIgYWxsTGlnaHRib3hQb3N0cyA9IFtdO1xuICAgIHZhciBhbGxGbG9vcnBsYW5zID0gZ2V0QWxsUG9zdHMoKTtcblxuICAgIFxuXG4gICAgZnVuY3Rpb24gY29uZmlndXJlQ2xpY2tFdmVudChpdGVtLCBpbmRleCkge1xuICAgICAgICAvLyB2YXIgcG9zdElEID0gaXRlbS5nZXRBdHRyaWJ1dGUoXCJpZFwiKS5zcGxpdCgnLScpO1xuICAgICAgICBcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBBcnJheS5mcm9tKGl0ZW0uY2xhc3NMaXN0KTtcbiAgICAgICAgdmFyIGNsYXNzSUQgPSBBcnJheS5mcm9tKGNsYXNzZXMpLmZpbHRlcih3b3JkID0+IHdvcmQuaW5jbHVkZXMoXCJlZy1wb3N0LWlkLVwiKSk7XG4gICAgICAgIHZhciBwb3N0SUQgPSBjbGFzc0lEWzBdLnNwbGl0KCctJyk7XG4gICAgICAgIHBvc3RJRCA9IHBvc3RJRFtwb3N0SUQubGVuZ3RoLTFdO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGkgPCBhbGxGbG9vcnBsYW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGFsbEZsb29ycGxhbnNbaV0uaWQgPT09IE51bWJlcihwb3N0SUQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVMaWdodGJveChhbGxGbG9vcnBsYW5zW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfTtcblxuXG4gICAgZnVuY3Rpb24gZ2V0QWxsUG9zdHMoKSB7XG5cbiAgICAgICAgd3AuYXBpLmxvYWRQcm9taXNlLmRvbmUoIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICB2YXIgcG9zdCA9IG5ldyB3cC5hcGkubW9kZWxzLkZsb29ycGxhbnMoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHBvc3QuZmV0Y2goeyBkYXRhOiB7IHBlcl9wYWdlOiA0MCB9IH0pLmRvbmUoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFsbEZsb29ycGxhbnMgPSBkYXRhO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVMaWdodGJveChwb3N0KSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHBvc3QuaWQ7XG4gICAgICAgICAgICB2YXIgbGlnaHRCb3hJbWFnZSA9IHBvc3QuYWNmLmZsb29ycGxhbl9saWdodGJveF9pbWFnZSB8fCBudWxsO1xuICAgICAgICAgICAgdmFyIHBkZkRvd25sb2FkID0gcG9zdC5hY2YuZmxvb3JwbGFuX3BkZl9kb3dubG9hZCB8fCBudWxsO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgbWFya3VwID0gYDxkaXYgaWQ9XCJlc3NlbnRpYWxHcmlkQ3VzdG9tTGlnaHRib3hcIiBjbGFzcz1cImVzc2VudGlhbC1ncmlkLWN1c3RvbS1tb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzbWlzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj48c3Bhbj48L3NwYW4+PHNwYW4+PC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2xpZ2h0Qm94SW1hZ2V9XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImZsLWJ1dHRvbiByb3VuZGVkLWNvcm5lcnNcIiBocmVmPVwiJHtwZGZEb3dubG9hZH1cIiB0YXJnZXQ9XCJibGFua1wiPkRvd25sb2FkIFN1aXRlIFBERjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIG1hcmt1cCk7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzbWlzcyBidXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNtaXNzTGlnaHRib3gpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBrZXlib2FyZERpc21pc3NMaWdodGJveClcbiAgICAgICAgICAgIHJldHVybiBsaWdodGJveEFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzbWlzc0xpZ2h0Ym94KCkge1xuICAgICAgICBpZihsaWdodGJveEFjdGl2ZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNtaXNzIGJ1dHRvblwiKS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc21pc3NMaWdodGJveCk7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlc3NlbnRpYWxHcmlkQ3VzdG9tTGlnaHRib3hcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwga2V5Ym9hcmREaXNtaXNzTGlnaHRib3gpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaWdodGJveEFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGtleWJvYXJkRGlzbWlzc0xpZ2h0Ym94KGUpIHtcbiAgICAgICAgaWYoZS5rZXlDb2RlID09IDI3KSB7XG4gICAgICAgICAgICBkaXNtaXNzTGlnaHRib3goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHdwLmFwaS5sb2FkUHJvbWlzZS5kb25lKCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBncmlkSXRlbXMuZm9yRWFjaChjb25maWd1cmVDbGlja0V2ZW50KTtcblxuICAgICAgICB9ICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogaW5pdFxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdWl0ZXNHcmlkTGlnaHRib3g7Il0sInNvdXJjZVJvb3QiOiIifQ==