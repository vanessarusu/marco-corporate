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
    location: '302',
    mixes: '7658'
  }; // if(document.querySelector(`body.page-id-${pageIds.suites}`)) {
  //     const sgl = suitesGridLightbox();
  //     sgl.init();
  // }
  // if(document.querySelector(`body.page-id-${pageIds.home}`)) {
  //     const cs = customSlider();
  //     cs.init(2);
  // }

  if (document.querySelector("body.page-id-".concat(pageIds.mixes))) {
    var cs = Object(_custom_slider__WEBPACK_IMPORTED_MODULE_3__["default"])();
    cs.init();
  } // const fs = formStyling();
  // const cl = customLightbox();
  // const sp = splashPage();
  // fs.init();
  // cl.init();
  // sp.init();
  // document.querySelectorAll('.register-link').forEach(function(el) {
  //     el.addEventListener('click', function(e) {
  //         e.preventDefault();
  //         launchLightbox();
  //     });
  // });
  // document.querySelectorAll('.lightbox-dismiss').forEach(function(el) {
  //     el.addEventListener('click', function(e) {
  //         e.preventDefault();
  //         dismissLightbox();
  //     });
  // });


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
var customSlider = function customSlider() {
  function init() {
    jQuery(document).ready(function ($) {
      $('.custom-product-slick-slider .mixes-slider').slick({
        fade: true,
        arrows: true,
        cssEase: 'linear',
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'><span>View More</span></i></button>"
      });
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tLWxpZ2h0Ym94LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20tc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mb3JtLXN0eWxpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NwbGFzaC1wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zdWl0ZXMtZ3JpZC1saWdodGJveC5qcyJdLCJuYW1lcyI6WyJwYWdlSWRzIiwic3VpdGVzIiwiaG9tZSIsImxvY2F0aW9uIiwibWl4ZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjcyIsImN1c3RvbVNsaWRlciIsImluaXQiLCJsYXVuY2hMaWdodGJveCIsImxpZ2h0Ym94Rm9ybSIsImNsYXNzTGlzdCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5IiwiZGlzbWlzc0xpZ2h0Ym94IiwiZ3NhcCIsImZyb21UbyIsIm9wYWNpdHkiLCJkdXJhdGlvbiIsImZzIiwiY2xvc2VEcm9wZG93biIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJjdXN0b21MaWdodGJveCIsImFkZEV2ZW50TGlzdGVuZXJzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsInByZXZlbnREZWZhdWx0IiwialF1ZXJ5IiwicmVhZHkiLCIkIiwic2xpY2siLCJmYWRlIiwiYXJyb3dzIiwiY3NzRWFzZSIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImZvcm1TdHlsaW5nIiwiZHJvcGRvd24iLCJzZWxlY3ROb2RlcyIsImxlbmd0aCIsImkiLCJjdXJyZW50U2VsZWN0IiwibGlNYXJrdXAiLCJvcHRpb25zIiwiY3VycmVudFNlbGVjdGlvblRleHQiLCJzZWxlY3RlZEluZGV4IiwidGV4dCIsImNvbnRhaW5zIiwiaiIsImFkZEVtcHlDbGFzcyIsImNsYXNzTmFtZSIsIml0ZW0iLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJodG1sIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwib3BlbkRyb3Bkb3duIiwiZmluZFNlbGVjdCIsIm9yaWdpbmFsU2VsZWN0IiwidXBkYXRlT3JpZ2luYWxTZWxlY3QiLCJ1cGRhdGVMYWJlbCIsImNsaWNrZWRFbCIsImxhYmVsVGV4dE5vZGUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2hlY2tGb3JPdXRzaWRlQ2xpY2siLCJkZHMiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwic3BsYXNoUGFnZSIsInNob3VsZFBsYXkiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJoYXNCZWVuRGlzbWlzc2VkIiwiYm9keSIsImxpbmVEcmF3aW5nQ2xhc3MiLCJwYWdlQ29udGVudCIsIm15QW5pbWF0aW9uU1ZHIiwiYWRkTGlzdGVuZXJzIiwid2luZG93Iiwic2Nyb2xsTGlzdGVuZXIiLCJwYWdlWU9mZnNldCIsImRpc21pc3NTcGxhc2hQYWdlIiwiYW5pbWF0aW9uQ29uZmlnIiwiVml2dXMiLCJzdGFydCIsImFuaW1UaW1pbmdGdW5jdGlvbiIsIkVBU0VfT1VUIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwicG9zaXRpb24iLCJ2aWV3cG9ydEhlaWdodCIsImlubmVySGVpZ2h0IiwidG8iLCJ5Iiwib25Db21wbGV0ZSIsImluaXRQYWdlIiwicGxheVNwbGFzaFBhZ2UiLCJzZXRUaW1lb3V0IiwicGxheSIsInNldEl0ZW0iLCJpbm5lcldpZHRoIiwiZXZlbnQiLCJzY3JvbGxUbyIsInN1aXRlc0dyaWRMaWdodGJveCIsImdyaWRJdGVtcyIsImxpZ2h0Ym94QWN0aXZlIiwiYWxsTGlnaHRib3hQb3N0cyIsImFsbEZsb29ycGxhbnMiLCJnZXRBbGxQb3N0cyIsImNvbmZpZ3VyZUNsaWNrRXZlbnQiLCJpbmRleCIsImNsYXNzZXMiLCJBcnJheSIsImZyb20iLCJjbGFzc0lEIiwiZmlsdGVyIiwid29yZCIsImluY2x1ZGVzIiwicG9zdElEIiwic3BsaXQiLCJpZCIsIk51bWJlciIsImNyZWF0ZUxpZ2h0Ym94Iiwid3AiLCJhcGkiLCJsb2FkUHJvbWlzZSIsImRvbmUiLCJwb3N0IiwibW9kZWxzIiwiRmxvb3JwbGFucyIsImZldGNoIiwiZGF0YSIsInBlcl9wYWdlIiwiY29udGVudCIsImxpZ2h0Qm94SW1hZ2UiLCJhY2YiLCJmbG9vcnBsYW5fbGlnaHRib3hfaW1hZ2UiLCJwZGZEb3dubG9hZCIsImZsb29ycGxhbl9wZGZfZG93bmxvYWQiLCJtYXJrdXAiLCJrZXlib2FyZERpc21pc3NMaWdodGJveCIsImtleUNvZGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQyxhQUFX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QUMsQ0FBQ3VJLE9BQUYsSUFBYSxFQUFoQixFQUFvQjtBQUNoQnJJLHFCQUFlO0FBQ2xCO0FBQ0o7O0FBRUQsV0FBU1IsSUFBVCxHQUFnQjtBQUNaMkgsTUFBRSxDQUFDQyxHQUFILENBQU9DLFdBQVAsQ0FBbUJDLElBQW5CLENBQXlCLFVBQVNLLElBQVQsRUFBZTtBQUNwQzNCLGVBQVMsQ0FBQ25GLE9BQVYsQ0FBa0J3RixtQkFBbEI7QUFFSCxLQUhEO0FBSUg7O0FBRUQsU0FBTztBQUNIN0csUUFBSSxFQUFFQTtBQURILEdBQVA7QUFHSCxDQWhHRDs7QUFrR2V1RyxpRkFBZixFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2J1bmRsZS5qc1wiKTtcbiIsImltcG9ydCBmb3JtU3R5bGluZyBmcm9tICcuL2Zvcm0tc3R5bGluZyc7XG5pbXBvcnQgY3VzdG9tTGlnaHRib3ggZnJvbSBcIi4vY3VzdG9tLWxpZ2h0Ym94XCI7XG5cbmltcG9ydCBzdWl0ZXNHcmlkTGlnaHRib3ggZnJvbSAnLi9zdWl0ZXMtZ3JpZC1saWdodGJveCc7XG5pbXBvcnQgY3VzdG9tU2xpZGVyIGZyb20gJy4vY3VzdG9tLXNsaWRlcic7XG5cbmltcG9ydCBzcGxhc2hQYWdlIGZyb20gJy4vc3BsYXNoLXBhZ2UnO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgcGFnZUlkcyA9IHtcbiAgICAgICAgc3VpdGVzOiBcIjM0MlwiLFxuICAgICAgICBob21lOiAnMicsXG4gICAgICAgIGxvY2F0aW9uOiAnMzAyJyxcbiAgICAgICAgbWl4ZXM6ICc3NjU4J1xuICAgIH1cblxuXG4gICAgLy8gaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYm9keS5wYWdlLWlkLSR7cGFnZUlkcy5zdWl0ZXN9YCkpIHtcbiAgICAvLyAgICAgY29uc3Qgc2dsID0gc3VpdGVzR3JpZExpZ2h0Ym94KCk7XG4gICAgLy8gICAgIHNnbC5pbml0KCk7XG4gICAgLy8gfVxuXG4gICAgLy8gaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYm9keS5wYWdlLWlkLSR7cGFnZUlkcy5ob21lfWApKSB7XG4gICAgLy8gICAgIGNvbnN0IGNzID0gY3VzdG9tU2xpZGVyKCk7XG4gICAgLy8gICAgIGNzLmluaXQoMik7XG4gICAgLy8gfVxuXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYm9keS5wYWdlLWlkLSR7cGFnZUlkcy5taXhlc31gKSkge1xuICAgICAgICBjb25zdCBjcyA9IGN1c3RvbVNsaWRlcigpO1xuICAgICAgICBjcy5pbml0KCk7XG4gICAgfVxuXG4gICAgLy8gY29uc3QgZnMgPSBmb3JtU3R5bGluZygpO1xuICAgIC8vIGNvbnN0IGNsID0gY3VzdG9tTGlnaHRib3goKTtcbiAgICAvLyBjb25zdCBzcCA9IHNwbGFzaFBhZ2UoKTtcblxuICAgIC8vIGZzLmluaXQoKTtcbiAgICAvLyBjbC5pbml0KCk7XG4gICAgLy8gc3AuaW5pdCgpO1xuXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZ2lzdGVyLWxpbmsnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgLy8gICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIC8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICAgICAgbGF1bmNoTGlnaHRib3goKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfSk7XG5cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlnaHRib3gtZGlzbWlzcycpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAvLyAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgICAgICBkaXNtaXNzTGlnaHRib3goKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfSk7XG5cbiAgICBmdW5jdGlvbiBsYXVuY2hMaWdodGJveCgpIHtcbiAgICAgICAgdmFyIGxpZ2h0Ym94Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaWdodGJveEZvcm0nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgbGlnaHRib3hGb3JtLmNsYXNzTGlzdC5hZGQoJ2xpZ2h0Ym94LW9wZW4nKTtcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZihlLmtleSA9PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgICAgIGRpc21pc3NMaWdodGJveCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBnc2FwLmZyb21UbyhsaWdodGJveEZvcm0sIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogMC4xNVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNtaXNzTGlnaHRib3goKSB7XG4gICAgICAgIGZzLmNsb3NlRHJvcGRvd24oKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpZ2h0Ym94Rm9ybScpLmNsYXNzTGlzdC5yZW1vdmUoJ2xpZ2h0Ym94LW9wZW4nKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ1dlYnNpdGUgZGV2ZWxvcG1lbnQgYnkgdmFuZXNzYXJ1c3UuY29tJylcbn1cblxuKCkpO1xuIiwiY29uc3QgY3VzdG9tTGlnaHRib3ggPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZ2lzdGVyLWxpbmsnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbGF1bmNoTGlnaHRib3goKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpZ2h0Ym94LWRpc21pc3MnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZGlzbWlzc0xpZ2h0Ym94KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGF1bmNoTGlnaHRib3goKSB7XG4gICAgICAgIHZhciBsaWdodGJveEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlnaHRib3hGb3JtJyk7XG4gICAgICAgIFxuICAgICAgICBpZighbGlnaHRib3hGb3JtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb3BlbicpO1xuICAgICAgICBsaWdodGJveEZvcm0uY2xhc3NMaXN0LmFkZCgnbGlnaHRib3gtb3BlbicpO1xuICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmKGUua2V5ID09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgZGlzbWlzc0xpZ2h0Ym94KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGdzYXAuZnJvbVRvKGxpZ2h0Ym94Rm9ybSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjE1XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc21pc3NMaWdodGJveCgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpZ2h0Ym94Rm9ybScpLmNsYXNzTGlzdC5yZW1vdmUoJ2xpZ2h0Ym94LW9wZW4nKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBhZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGluaXRcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY3VzdG9tTGlnaHRib3g7IiwiY29uc3QgY3VzdG9tU2xpZGVyID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xuICAgICAgICAgICAgJCgnLmN1c3RvbS1wcm9kdWN0LXNsaWNrLXNsaWRlciAubWl4ZXMtc2xpZGVyJykuc2xpY2soe1xuICAgICAgICAgICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzpcIjxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nc2xpY2stcHJldiBwdWxsLWxlZnQnPjxpIGNsYXNzPSdmYSBmYS1hbmdsZS1sZWZ0JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9pPjwvYnV0dG9uPlwiLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzpcIjxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nc2xpY2stbmV4dCBwdWxsLXJpZ2h0Jz48aSBjbGFzcz0nZmEgZmEtYW5nbGUtcmlnaHQnIGFyaWEtaGlkZGVuPSd0cnVlJz48c3Bhbj5WaWV3IE1vcmU8L3NwYW4+PC9pPjwvYnV0dG9uPlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogaW5pdFxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjdXN0b21TbGlkZXI7IiwiY29uc3QgZm9ybVN0eWxpbmcgPSAoZnVuY3Rpb24gKCkge1xuXG4vLyAgICAgZnVuY3Rpb24gZHJvcGRvd24oKSB7XG4vLyAgICAgICAgIHZhciBzZWxlY3ROb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53cGZvcm1zLWZpZWxkLXNlbGVjdCBzZWxlY3QnKTtcbiAgICAgICAgXG4vLyAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzZWxlY3ROb2Rlcy5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgICAgLy8gcnVuIGZvciBlYWNoIHNlbGVjdCBub2RlXG4vLyAgICAgICAgICAgICB2YXIgY3VycmVudFNlbGVjdCA9IHNlbGVjdE5vZGVzW2ldO1xuLy8gICAgICAgICAgICAgdmFyIGxpTWFya3VwID0gJyc7XG4vLyAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHNlbGVjdE5vZGVzW2ldLm9wdGlvbnM7XG4vLyAgICAgICAgICAgICB2YXIgY3VycmVudFNlbGVjdGlvblRleHQgPSBjdXJyZW50U2VsZWN0Lm9wdGlvbnNbc2VsZWN0Tm9kZXNbaV0uc2VsZWN0ZWRJbmRleF0udGV4dDtcblxuLy8gICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IG9wdGlvbnMubGVuZ3RoOyBqKyspIHtcbi8vICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9ICc8bGkgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCI+PGEgaHJlZj1cIiNcImRhdGEtZGQ9XCInK2N1cnJlbnRTZWxlY3QuZ2V0QXR0cmlidXRlKFwiaWRcIikrJ1wiIGRhdGEtdmFsdWU9XCInK29wdGlvbnNbal0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKydcIj4nK29wdGlvbnNbal0uaW5uZXJIVE1MKyc8L2E+PC9saT4nO1xuLy8gICAgICAgICAgICAgICAgIGxpTWFya3VwICs9IGl0ZW07XG4vLyAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJjdXN0b20tZHJvcGRvd25cIj48cCBjbGFzcz1cInNlbGVjdGVkLW9wdGlvblwiPjxzcGFuIGNsYXNzPVwidGV4dFwiPicrY3VycmVudFNlbGVjdGlvblRleHQrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImFycm93XCI+PC9zcGFuPjwvcD48dWwgY2xhc3M9XCJkZC1jb250YWluZXJcIj4nK2xpTWFya3VwKyc8L3VsPjwvZGl2Pic7XG4vLyAgICAgICAgICAgICBzZWxlY3ROb2Rlc1tpXS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgaHRtbCk7IFxuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1kcm9wZG93biAuc2VsZWN0ZWQtb3B0aW9uJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuLy8gICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRHJvcGRvd24pO1xuLy8gICAgICAgICB9KVxuXG4vLyAgICAgICAgIC8vIGNsaWNrIG9uIGRyb3Bkb3duIGVsZW1lbnRcbi8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLWl0ZW0gYScpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbi8vICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgICAgICAgICAgICB2YXIgZmluZFNlbGVjdCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWRkJyk7XG4vLyAgICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIitmaW5kU2VsZWN0KTtcbi8vICAgICAgICAgICAgICAgICB1cGRhdGVPcmlnaW5hbFNlbGVjdCh0aGlzLCBvcmlnaW5hbFNlbGVjdCk7XG4vLyAgICAgICAgICAgICAgICAgdXBkYXRlTGFiZWwodGhpcywgb3JpZ2luYWxTZWxlY3QpO1xuLy8gICAgICAgICAgICAgICAgIGNsb3NlRHJvcGRvd24oKTtcbi8vICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgIH0pOyAgICAgICAgXG4vLyAgICAgfVxuXG4vLyAgICAgZnVuY3Rpb24gdXBkYXRlTGFiZWwoY2xpY2tlZEVsLCBvcmlnaW5hbFNlbGVjdCkge1xuLy8gICAgICAgICB2YXIgbGFiZWxUZXh0Tm9kZSA9IG9yaWdpbmFsU2VsZWN0Lm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQtb3B0aW9uIC50ZXh0Jyk7XG4vLyAgICAgICAgIGxhYmVsVGV4dE5vZGUuaW5uZXJIVE1MID0gY2xpY2tlZEVsLmlubmVySFRNTDtcbi8vICAgICB9XG5cbi8vICAgICBmdW5jdGlvbiB1cGRhdGVPcmlnaW5hbFNlbGVjdChjbGlja2VkRWwsIG9yaWdpbmFsU2VsZWN0KSB7XG4vLyAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBvcmlnaW5hbFNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgICAgICBpZihvcmlnaW5hbFNlbGVjdC5vcHRpb25zW2ldLmdldEF0dHJpYnV0ZSgndmFsdWUnKSA9PT0gY2xpY2tlZEVsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpKSB7XG4vLyAgICAgICAgICAgICAgICAgb3JpZ2luYWxTZWxlY3Qub3B0aW9uc1tpXS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgdHJ1ZSk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICBvcmlnaW5hbFNlbGVjdC5vcHRpb25zW2ldLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIGNsb3NlRHJvcGRvd24oKSB7XG4vLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsLmRkLWNvbnRhaW5lcicpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbi8vICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2RkLWNsb3NlZCcpO1xuLy8gICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZGQtb3BlbicpO1xuLy8gICAgICAgICB9KVxuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIG9wZW5Ecm9wZG93bigpIHtcbi8vICAgICAgICAgdGhpcy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZGQtb3BlbicpO1xuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4vLyAgICAgICAgIGRyb3Bkb3duKCk7XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgaW5pdDogaW5pdCxcbi8vICAgICAgICAgY2xvc2VEcm9wZG93bjogY2xvc2VEcm9wZG93blxuLy8gICAgIH1cbi8vIH0pO1xuXG5cblxuXG5cbmZ1bmN0aW9uIGRyb3Bkb3duKCkge1xuICAgIHZhciBzZWxlY3ROb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpO1xuXG4gICAgaWYoIXNlbGVjdE5vZGVzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzZWxlY3ROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBydW4gZm9yIGVhY2ggc2VsZWN0IG5vZGVcbiAgICAgICAgdmFyIGN1cnJlbnRTZWxlY3QgPSBzZWxlY3ROb2Rlc1tpXTtcbiAgICAgICAgdmFyIGxpTWFya3VwID0gJyc7XG4gICAgICAgIHZhciBvcHRpb25zID0gc2VsZWN0Tm9kZXNbaV0ub3B0aW9ucztcbiAgICAgICAgdmFyIGN1cnJlbnRTZWxlY3Rpb25UZXh0ID0gY3VycmVudFNlbGVjdC5vcHRpb25zW3NlbGVjdE5vZGVzW2ldLnNlbGVjdGVkSW5kZXhdLnRleHQ7XG5cbiAgICAgICAgaWYoY3VycmVudFNlbGVjdC5vcHRpb25zW3NlbGVjdE5vZGVzW2ldLnNlbGVjdGVkSW5kZXhdLmNsYXNzTGlzdC5jb250YWlucygnZW1wdHknKSkge1xuICAgICAgICAgICAgY3VycmVudFNlbGVjdGlvblRleHQgPSAnJztcbiAgICB9XG5cbiAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IG9wdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHZhciBhZGRFbXB5Q2xhc3MgPSBvcHRpb25zW2pdLmNsYXNzTmFtZSA9PT0gJ2VtcHR5JyA/ICdlbXB0eScgOiAnJztcbiAgICAgICAgICAgIHZhciBpdGVtID0gJzxsaSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gJyArYWRkRW1weUNsYXNzKyAnXCI+PGEgdGFiaW5kZXg9XCIwXCIgaHJlZj1cIiNcImRhdGEtZGQ9XCInK2N1cnJlbnRTZWxlY3QuZ2V0QXR0cmlidXRlKFwiaWRcIikrJ1wiIGRhdGEtdmFsdWU9XCInK29wdGlvbnNbal0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKydcIj4nK29wdGlvbnNbal0uaW5uZXJIVE1MKyc8L2E+PC9saT4nO1xuICAgICAgICAgICAgbGlNYXJrdXAgKz0gaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJjdXN0b20tZHJvcGRvd25cIj48cCBjbGFzcz1cInNlbGVjdGVkLW9wdGlvblwiPjxzcGFuIGNsYXNzPVwidGV4dFwiPicrY3VycmVudFNlbGVjdGlvblRleHQrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImFycm93XCI+PC9zcGFuPjwvcD48dWwgY2xhc3M9XCJkZC1jb250YWluZXJcIj4nK2xpTWFya3VwKyc8L3VsPjwvZGl2Pic7XG4gICAgICAgIHNlbGVjdE5vZGVzW2ldLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBodG1sKTsgXG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1kcm9wZG93biAuc2VsZWN0ZWQtb3B0aW9uJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Ecm9wZG93bik7XG4gICAgfSlcblxuICAgIC8vIGNsaWNrIG9uIGRyb3Bkb3duIGVsZW1lbnRcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24taXRlbSBhJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGZpbmRTZWxlY3QgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1kZCcpO1xuICAgICAgICAgICAgdmFyIG9yaWdpbmFsU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIitmaW5kU2VsZWN0KTtcbiAgICAgICAgICAgIHVwZGF0ZU9yaWdpbmFsU2VsZWN0KHRoaXMsIG9yaWdpbmFsU2VsZWN0KTtcbiAgICAgICAgICAgIHVwZGF0ZUxhYmVsKHRoaXMsIG9yaWdpbmFsU2VsZWN0KTtcbiAgICAgICAgICAgIGNsb3NlRHJvcGRvd24oKTtcbiAgICAgICAgfSlcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTGFiZWwoY2xpY2tlZEVsLCBvcmlnaW5hbFNlbGVjdCkgeyAgICAgICAgXG4gICAgdmFyIGxhYmVsVGV4dE5vZGUgPSBvcmlnaW5hbFNlbGVjdC5uZXh0RWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkLW9wdGlvbiAudGV4dCcpO1xuICAgIGxhYmVsVGV4dE5vZGUuaW5uZXJIVE1MID0gY2xpY2tlZEVsLmlubmVySFRNTDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlT3JpZ2luYWxTZWxlY3QoY2xpY2tlZEVsLCBvcmlnaW5hbFNlbGVjdCkge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBvcmlnaW5hbFNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKG9yaWdpbmFsU2VsZWN0Lm9wdGlvbnNbaV0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpID09PSBjbGlja2VkRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJykpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsU2VsZWN0Lm9wdGlvbnNbaV0uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb3JpZ2luYWxTZWxlY3Qub3B0aW9uc1tpXS5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsb3NlRHJvcGRvd24oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndWwuZGQtY29udGFpbmVyJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdkZC1jbG9zZWQnKTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZGQtb3BlbicpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrRm9yT3V0c2lkZUNsaWNrKTtcbiAgICAgICAgdmFyIGRkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tZHJvcGRvd24gLnNlbGVjdGVkLW9wdGlvbicpO1xuICAgICAgICBmb3IodmFyIGk9MDsgaSA8IGRkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGRzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VEcm9wZG93bik7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBvcGVuRHJvcGRvd24oKSB7XG4gICAgdGhpcy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZGQtb3BlbicpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tGb3JPdXRzaWRlQ2xpY2spO1xuICAgIHZhciBkZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLWRyb3Bkb3duIC5zZWxlY3RlZC1vcHRpb24nKTtcbiAgICAgICAgZm9yKHZhciBpPTA7IGkgPCBkZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRkc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRHJvcGRvd24pO1xuICAgICAgICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yT3V0c2lkZUNsaWNrKGUpIHtcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd1bC5kZC1jb250YWluZXIuZGQtb3BlbicpKSB7XG4gICAgICAgIGlmKCEoZS50YXJnZXQudGFnTmFtZSA9PSdBJyB8fCBlLnRhcmdldC50YWdOYW1lID09J1NQQU4nIHx8IGUudGFyZ2V0LnRhZ05hbWUgPT0nUCcpKSB7XG4gICAgICAgICAgICBjbG9zZURyb3Bkb3duKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnJldHVybiB7XG4gICAgaW5pdDogZHJvcGRvd24sXG4gICAgY2xvc2VEcm9wZG93bjogY2xvc2VEcm9wZG93blxufVxufSk7IFxuXG5leHBvcnQgZGVmYXVsdCBmb3JtU3R5bGluZzsiLCJjb25zdCBzcGxhc2hQYWdlID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIC8vIGxvZ2ljXG4gICAgdmFyIHNob3VsZFBsYXkgPSAhc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnaGFzVmlld2VkU3BsYXNoUGFnZScpOyAvLyBzZXQgdG8gY29va2llc1xuICAgIHZhciBoYXNCZWVuRGlzbWlzc2VkID0gZmFsc2U7XG4gICAgLy8gdmFyIHNob3VsZFBsYXkgPSB0cnVlO1xuXG4gICAgLy8gcXVlcmllc1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIHZhciBzcGxhc2hQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzcGxhc2hQYWdlXCIpO1xuICAgIHZhciBsaW5lRHJhd2luZ0NsYXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpbmVEcmF3aW5nJyk7XG4gICAgdmFyIHBhZ2VDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNmbC1tYWluLWNvbnRlbnQsIGhlYWRlclwiKTtcblxuICAgIC8vIHBsYWNlaG9sZGVyc1xuICAgIHZhciBteUFuaW1hdGlvblNWRztcblxuICAgIGZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcbiAgICAgICAgLy8gZGlzbWlzc1NwbGFzaExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNtaXNzU3BsYXNoUGFnZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbExpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+PSAxNTApIHtcbiAgICAgICAgICAgIGRpc21pc3NTcGxhc2hQYWdlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRpb25Db25maWcoKSB7XG4gICAgICAgIFxuICAgICAgICBpZihsaW5lRHJhd2luZ0NsYXNzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW4gaGVyZScpO1xuICAgICAgICAgICAgcmV0dXJuIG15QW5pbWF0aW9uU1ZHID0gbmV3IFZpdnVzKCdsaW5lRHJhd2luZycsIHtcbiAgICAgICAgICAgICAgICAvLyB0eXBlOiAnc2NlbmFyaW8nLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNDAsXG4gICAgICAgICAgICAgICAgc3RhcnQ6ICdtYW51YWwnLFxuICAgICAgICAgICAgICAgIGFuaW1UaW1pbmdGdW5jdGlvbjogVml2dXMuRUFTRV9PVVRcbiAgICAgICAgICAgIH0sIGRpc21pc3NTcGxhc2hQYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNtaXNzU3BsYXNoUGFnZSgpIHtcbiAgICAgICAgaWYoIWhhc0JlZW5EaXNtaXNzZWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbExpc3RlbmVyKTtcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICd2YXIoLS1ibGFjayknO1xuICAgICAgICAgICAgYm9keS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgICAgICB2YXIgdmlld3BvcnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgICAgIGdzYXAudG8oc3BsYXNoUGFnZSwge1xuICAgICAgICAgICAgICAgIHk6LSh2aWV3cG9ydEhlaWdodCArIDE1MCksXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEuMixcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiBpbml0UGFnZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGdzYXAuZnJvbVRvKHBhZ2VDb250ZW50LCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLjIsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gaGFzQmVlbkRpc21pc3NlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxheVNwbGFzaFBhZ2UoKSB7XG4gICAgICAgIC8vIHBsYXkgYW5pbWF0aW9uXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZihsaW5lRHJhd2luZ0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgbXlBbmltYXRpb25TVkcucGxheSgpO1xuICAgICAgICAgICAgICAgIC8vb3BhY2l0eSBvbiB0b3Agb2YgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgZ3NhcC50byhsaW5lRHJhd2luZ0NsYXNzLCB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLjQsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdoYXNWaWV3ZWRTcGxhc2hQYWdlJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFBhZ2UoKSB7XG4gICAgICAgIGJvZHkuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgIGJvZHkuc3R5bGUucG9zaXRpb24gPSAnaW5pdGlhbCc7XG4gICAgICAgIFxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc3BsYXNoUGFnZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcjZmZmJztcbiAgICAgICAgfSwgMTAwKTtcbiAgICB9IFxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgLy8gZm9yY2Ugc2Nyb2xsIHRvIHRvcCwgdGhlbiBsb2FkIHNwbGFzaCBwYWdlXG4gICAgICAgIGlmKHNob3VsZFBsYXkgJiYgd2luZG93LmlubmVyV2lkdGggPj0gNzY4KSB7XG4gICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BsYXNoUGFnZScpLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLDApO1xuICAgIFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZhZGUgaW4gYm9keVxuICAgICAgICAgICAgICAgICAgICBib2R5LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgbm90IGxvZ2dlZCBpbiBhbmQvb3IgIGVkaXRpbmdcbiAgICAgICAgICAgICAgICAgICAgaWYoIShib2R5LmNsYXNzTGlzdC5jb250YWlucygnbG9nZ2VkLWluJykgXG4gICAgICAgICAgICAgICAgICAgIHx8IGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdmbC1idWlsZGVyLWVkaXQnKVxuICAgICAgICAgICAgICAgICAgICApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkNvbmZpZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheVNwbGFzaFBhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW51YWwtZGlzbWlzcycpKSB7XG4gICAgICAgICAgICAgICAgaWYoIShib2R5LmNsYXNzTGlzdC5jb250YWlucygnbG9nZ2VkLWluJykgfHwgYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZsLWJ1aWxkZXItZWRpdCcpKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNtaXNzU3BsYXNoUGFnZSgpO1xuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpbml0UGFnZSgpO1xuICAgICAgICB9ICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBpbml0XG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNwbGFzaFBhZ2U7IiwiY29uc3Qgc3VpdGVzR3JpZExpZ2h0Ym94ID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBncmlkSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2VzZy1ncmlkLTMtMSBsaVwiKTtcbiAgICB2YXIgbGlnaHRib3hBY3RpdmUgPSBmYWxzZTtcbiAgICB2YXIgYWxsTGlnaHRib3hQb3N0cyA9IFtdO1xuICAgIHZhciBhbGxGbG9vcnBsYW5zID0gZ2V0QWxsUG9zdHMoKTtcblxuICAgIFxuXG4gICAgZnVuY3Rpb24gY29uZmlndXJlQ2xpY2tFdmVudChpdGVtLCBpbmRleCkge1xuICAgICAgICAvLyB2YXIgcG9zdElEID0gaXRlbS5nZXRBdHRyaWJ1dGUoXCJpZFwiKS5zcGxpdCgnLScpO1xuICAgICAgICBcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBBcnJheS5mcm9tKGl0ZW0uY2xhc3NMaXN0KTtcbiAgICAgICAgdmFyIGNsYXNzSUQgPSBBcnJheS5mcm9tKGNsYXNzZXMpLmZpbHRlcih3b3JkID0+IHdvcmQuaW5jbHVkZXMoXCJlZy1wb3N0LWlkLVwiKSk7XG4gICAgICAgIHZhciBwb3N0SUQgPSBjbGFzc0lEWzBdLnNwbGl0KCctJyk7XG4gICAgICAgIHBvc3RJRCA9IHBvc3RJRFtwb3N0SUQubGVuZ3RoLTFdO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGkgPCBhbGxGbG9vcnBsYW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGFsbEZsb29ycGxhbnNbaV0uaWQgPT09IE51bWJlcihwb3N0SUQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVMaWdodGJveChhbGxGbG9vcnBsYW5zW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfTtcblxuXG4gICAgZnVuY3Rpb24gZ2V0QWxsUG9zdHMoKSB7XG5cbiAgICAgICAgd3AuYXBpLmxvYWRQcm9taXNlLmRvbmUoIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICB2YXIgcG9zdCA9IG5ldyB3cC5hcGkubW9kZWxzLkZsb29ycGxhbnMoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHBvc3QuZmV0Y2goeyBkYXRhOiB7IHBlcl9wYWdlOiA0MCB9IH0pLmRvbmUoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFsbEZsb29ycGxhbnMgPSBkYXRhO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVMaWdodGJveChwb3N0KSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHBvc3QuaWQ7XG4gICAgICAgICAgICB2YXIgbGlnaHRCb3hJbWFnZSA9IHBvc3QuYWNmLmZsb29ycGxhbl9saWdodGJveF9pbWFnZSB8fCBudWxsO1xuICAgICAgICAgICAgdmFyIHBkZkRvd25sb2FkID0gcG9zdC5hY2YuZmxvb3JwbGFuX3BkZl9kb3dubG9hZCB8fCBudWxsO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgbWFya3VwID0gYDxkaXYgaWQ9XCJlc3NlbnRpYWxHcmlkQ3VzdG9tTGlnaHRib3hcIiBjbGFzcz1cImVzc2VudGlhbC1ncmlkLWN1c3RvbS1tb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzbWlzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj48c3Bhbj48L3NwYW4+PHNwYW4+PC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2xpZ2h0Qm94SW1hZ2V9XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImZsLWJ1dHRvbiByb3VuZGVkLWNvcm5lcnNcIiBocmVmPVwiJHtwZGZEb3dubG9hZH1cIiB0YXJnZXQ9XCJibGFua1wiPkRvd25sb2FkIFN1aXRlIFBERjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIG1hcmt1cCk7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzbWlzcyBidXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNtaXNzTGlnaHRib3gpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBrZXlib2FyZERpc21pc3NMaWdodGJveClcbiAgICAgICAgICAgIHJldHVybiBsaWdodGJveEFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzbWlzc0xpZ2h0Ym94KCkge1xuICAgICAgICBpZihsaWdodGJveEFjdGl2ZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNtaXNzIGJ1dHRvblwiKS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc21pc3NMaWdodGJveCk7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlc3NlbnRpYWxHcmlkQ3VzdG9tTGlnaHRib3hcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwga2V5Ym9hcmREaXNtaXNzTGlnaHRib3gpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaWdodGJveEFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGtleWJvYXJkRGlzbWlzc0xpZ2h0Ym94KGUpIHtcbiAgICAgICAgaWYoZS5rZXlDb2RlID09IDI3KSB7XG4gICAgICAgICAgICBkaXNtaXNzTGlnaHRib3goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHdwLmFwaS5sb2FkUHJvbWlzZS5kb25lKCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBncmlkSXRlbXMuZm9yRWFjaChjb25maWd1cmVDbGlja0V2ZW50KTtcblxuICAgICAgICB9ICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogaW5pdFxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdWl0ZXNHcmlkTGlnaHRib3g7Il0sInNvdXJjZVJvb3QiOiIifQ==