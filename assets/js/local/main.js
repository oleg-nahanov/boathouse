'use strict';

var onwSlider = (function () {
    return function (selector, config) {
        var main = document.querySelector(selector),
            wrap = main.querySelector('.onw-slider-wrap'),
            slides = wrap.querySelectorAll('.onw-slider-item'),
            control = 0;

var _mainElement = document.querySelector(selector), // основный элемент блока
_sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
_sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
_sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
_sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
_sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
_wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
_itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
_positionLeftItem = 0, // позиция левого активного элемента
_transform = 0, // значение транфсофрмации .slider_wrapper
_step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
_items = []; // массив элементов

// наполнение массива _items
_sliderItems.forEach(function (item, index) {
_items.push({ item: item, position: index, transform: 0 });
});

var position = {
getMin: 0,
getMax: _items.length - 1,
}
    }
}());



domready(function() {

    

});