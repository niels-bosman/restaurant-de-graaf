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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.reservation__alert-close').on('click', function () {
  $('.reservation__alert').addClass('reservation__alert--dismissed');
});
$('.profiel__remove-account-button').on('click', function () {
  var id = $(this).attr('data-id');

  if (id) {
    $('.profiel__remove-modal[data-id="' + id + '"]').addClass('profiel__remove-modal--active');
    $('.profiel__remove-modal-background[data-id="' + id + '"]').addClass('profiel__remove-modal-background--active');
  } else {
    $('.profiel__remove-modal').addClass('profiel__remove-modal--active');
    $('.profiel__remove-modal-background').addClass('profiel__remove-modal-background--active');
  }

  $('body').addClass('body--noscroll ');
});
$('.profiel__remove-modal-disable').on('click', function () {
  $('.profiel__remove-modal').removeClass('profiel__remove-modal--active');
  $('.profiel__remove-modal-background').removeClass('profiel__remove-modal-background--active');
  $('body').removeClass('body--noscroll');
}); // ----------------------------------------------------------------------------------------------------

$('.profiel__block-account-button').on('click', function () {
  var id = $(this).attr('data-id');

  if (id) {
    $('.profiel__block-modal[data-id="' + id + '"]').addClass('profiel__block-modal--active');
    $('.profiel__block-modal-background[data-id="' + id + '"]').addClass('profiel__block-modal-background--active');
  } else {
    $('.profiel__block-modal').addClass('profiel__block-modal--active');
    $('.profiel__block-modal-background').addClass('profiel__block-modal-background--active');
  }

  $('body').addClass('body--noscroll ');
});
$('.profiel__block-modal-disable').on('click', function () {
  $('.profiel__block-modal').removeClass('profiel__block-modal--active');
  $('.profiel__block-modal-background').removeClass('profiel__block-modal-background--active');
  $('body').removeClass('body--noscroll');
});
$('.hamburger').on('click', function () {
  $(this).toggleClass('hamburger--active');
});
$('.toggleStars').on('click', function () {
  var value = $(this).attr('data-value');
  var string;
  $('#stars').val(value * 2);

  if (value * 2 === 1) {
    $('#star1').removeClass('far fa-star');
    $('#star1').addClass('fas fa-star-half-alt'); // Haal hogere weg

    $('#star2').removeClass('fas far fa-star-half-alt fa-star');
    $('#star2').addClass('far fa-star');
    $('#star3').removeClass('fas far fa-star-half-alt fa-star');
    $('#star3').addClass('far fa-star');
    $('#star4').removeClass('fas far fa-star-half-alt fa-star');
    $('#star4').addClass('far fa-star');
    $('#star5').removeClass('fas far fa-star-half-alt fa-star');
    $('#star5').addClass('far fa-star');
  } else if (value * 2 === 2) {
    $('#star1').removeClass('fas far fa-star-half-alt fa-star');
    $('#star1').addClass('fas fa-star'); // Haal hogere weg

    $('#star2').removeClass('fas far fa-star-half-alt fa-star');
    $('#star2').addClass('far fa-star');
    $('#star3').removeClass('fas far fa-star-half-alt fa-star');
    $('#star3').addClass('far fa-star');
    $('#star4').removeClass('fas far fa-star-half-alt fa-star');
    $('#star4').addClass('far fa-star');
    $('#star5').removeClass('fas far fa-star-half-alt fa-star');
    $('#star5').addClass('far fa-star');
  } else if (value * 2 === 3) {
    $('#star2').removeClass('far fa-star');
    $('#star2').addClass('fas fa-star-half-alt'); // Haal hogere weg

    $('#star3').removeClass('fas far fa-star-half-alt fa-star');
    $('#star3').addClass('far fa-star');
    $('#star4').removeClass('fas far fa-star-half-alt fa-star');
    $('#star4').addClass('far fa-star');
    $('#star5').removeClass('fas far fa-star-half-alt fa-star');
    $('#star5').addClass('far fa-star'); // Voeg lagere toe

    $('#star1').removeClass('fas far fa-star-half-alt fa-star');
    $('#star1').addClass('fas fa-star');
  } else if (value * 2 === 4) {
    $('#star2').removeClass('fas far fa-star-half-alt fa-star');
    $('#star2').addClass('fas fa-star'); // Haal hogere weg

    $('#star3').removeClass('fas far fa-star-half-alt fa-star');
    $('#star3').addClass('far fa-star');
    $('#star4').removeClass('fas far fa-star-half-alt fa-star');
    $('#star4').addClass('far fa-star');
    $('#star5').removeClass('fas far fa-star-half-alt fa-star');
    $('#star5').addClass('far fa-star'); // Voeg lagere toe

    $('#star1').removeClass('fas far fa-star-half-alt fa-star');
    $('#star1').addClass('fas fa-star');
  } else if (value * 2 === 5) {
    $('#star3').removeClass('far fa-star');
    $('#star3').addClass('fas fa-star-half-alt'); // Haal hogere weg

    $('#star4').removeClass('fas far fa-star-half-alt fa-star');
    $('#star4').addClass('far fa-star');
    $('#star5').removeClass('fas far fa-star-half-alt fa-star');
    $('#star5').addClass('far fa-star'); // Voeg lagere toe

    $('#star1').removeClass('fas far fa-star-half-alt fa-star');
    $('#star2').removeClass('fas far fa-star-half-alt fa-star');
    $('#star1').addClass('fas fa-star');
    $('#star2').addClass('fas fa-star');
  } else if (value * 2 === 6) {
    $('#star3').removeClass('fas far fa-star-half-alt fa-star');
    $('#star3').addClass('fas fa-star'); // Haal hogere weg

    $('#star4').removeClass('fas far fa-star-half-alt fa-star');
    $('#star4').addClass('far fa-star');
    $('#star5').removeClass('fas far fa-star-half-alt fa-star');
    $('#star5').addClass('far fa-star'); // Voeg lagere toe

    $('#star1').removeClass('fas far fa-star-half-alt fa-star');
    $('#star2').removeClass('fas far fa-star-half-alt fa-star');
    $('#star1').addClass('fas fa-star');
    $('#star2').addClass('fas fa-star');
  } else if (value * 2 === 7) {
    $('#star4').removeClass('fas far fa-star-half-alt fa-star');
    $('#star4').addClass('fas fa-star-half-alt'); // Haal hogere weg

    $('#star5').removeClass('fas far fa-star-half-alt fa-star');
    $('#star5').addClass('far fa-star'); // Voeg lagere toe

    $('#star1').removeClass('fas far fa-star-half-alt fa-star');
    $('#star2').removeClass('fas far fa-star-half-alt fa-star');
    $('#star3').removeClass('fas far fa-star-half-alt fa-star');
    $('#star1').addClass('fas fa-star');
    $('#star2').addClass('fas fa-star');
    $('#star3').addClass('fas fa-star');
  } else if (value * 2 === 8) {
    $('#star4').removeClass('fas far fa-star-half-alt fa-star');
    $('#star4').addClass('fas fa-star'); // Haal hogere weg

    $('#star5').removeClass('fas far fa-star-half-alt fa-star');
    $('#star5').addClass('far fa-star'); // Voeg lagere toe

    $('#star1').removeClass('fas far fa-star-half-alt fa-star');
    $('#star2').removeClass('fas far fa-star-half-alt fa-star');
    $('#star3').removeClass('fas far fa-star-half-alt fa-star');
    $('#star1').addClass('fas fa-star');
    $('#star2').addClass('fas fa-star');
    $('#star3').addClass('fas fa-star');
  } else if (value * 2 === 9) {
    $('#star5').removeClass('fas far fa-star-half-alt fa-star');
    $('#star5').addClass('fas fa-star-half-alt'); // Voeg lagere toe

    $('#star1').removeClass('fas far fa-star-half-alt fa-star');
    $('#star2').removeClass('fas far fa-star-half-alt fa-star');
    $('#star3').removeClass('fas far fa-star-half-alt fa-star');
    $('#star4').removeClass('fas far fa-star-half-alt fa-star');
    $('#star1').addClass('fas fa-star');
    $('#star2').addClass('fas fa-star');
    $('#star3').addClass('fas fa-star');
    $('#star4').addClass('fas fa-star');
  } else if (value * 2 === 10) {
    $('#star5').removeClass('fas far fa-star-half-alt fa-star');
    $('#star5').addClass('fas fa-star'); // Voeg lagere toe

    $('#star1').removeClass('fas far fa-star-half-alt fa-star');
    $('#star2').removeClass('fas far fa-star-half-alt fa-star');
    $('#star3').removeClass('fas far fa-star-half-alt fa-star');
    $('#star4').removeClass('fas far fa-star-half-alt fa-star');
    $('#star1').addClass('fas fa-star');
    $('#star2').addClass('fas fa-star');
    $('#star3').addClass('fas fa-star');
    $('#star4').addClass('fas fa-star');
  }

  $('.stars').html(string);
});

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\EXAMENPROJECT_AO3B\restaurant-de-graaf\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\EXAMENPROJECT_AO3B\restaurant-de-graaf\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });