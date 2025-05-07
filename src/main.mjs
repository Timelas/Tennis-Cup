// import "/src/email.mjs"; //код для отправки на почту

//подключение библиотеки 
// import collect from 'collect.js';

// подключаем стили
import  "/src/styles/main.scss";
import  "/pages/rating.scss";

import "/src/styles/base/_header.scss";
import "/src/styles//base/_footer.scss";
// import './src/scss/abstract/_variables.scss';
// подключаем иконочный шрифт
import "/src/assets/iconfonts/iconsfont.css";
// подключаем   стили form input
// import "/src/styles/base/form/input.scss";
// import "/src/styles/base/form/check.scss";
// import "/src/styles/base/form/radio.scss";
// import "/src/styles/base/form/select.scss";
// import "/src/styles/base/form/quantity.scss";


// подключаем   стили SWIPER
// import "./styles/base/swiper.scss";

// импортируем mjs файлы
 
// динамический адаптив ----------------
import { dynamicAdapt } from "./js.mjs/dynamic_adapt.mjs";

// меню-бургер-------------------
import { navMenus } from "./js.mjs/burger.mjs";

//подключаем споллер
import { spollers } from "./js.mjs/spoller.mjs";

//подключаем добавление класса activ при наведении
// import  { hoverActiv }  from "./src/index.js/activ.js";

//подключаем script.js
// import { hoverClick } from "./js.mjs/script.mjs";

//------------------------ форма
//подключаем js для формы input
// import { forms } from "./js.mjs/forms.mjs";

// подключаем mjs для отправки формы на почту
// import { emailToo } from "./js.mjs/forms/emailToo.mjs";


//------------------------ конец формы

//подключаем js для headerScroll
// import { headerScroll } from "./js.mjs/headerScroll.mjs";

//подключаем js для фильтра по категориям
// import { setupFilters } from "./js.mjs/filterCategory";

//подключаем js для SWIPER
// import { initSliders } from "./js.mjs/swiper";

//подключаем js для навигации по странице
// import { setupSmoothScroll } from "./js.mjs/scroll.mjs";

//подключаем mjs анимации при скролле
// import { scrollAnim } from "./js.mjs/scroll-anim.mjs";

//подключаем mjs больш/меньше (quontity)
// import { quantity } from "./js.mjs/forms/quantity.mjs";

//подключаем mjs кнопку ПОКАЗАТЬ БОЛЬШЕ (loockMore)
// import { loockMore } from "./js.mjs/loockMore.mjs";

//подключаем mjs код рэндомной галлереи при перезагрузке (rendomGalery)
// import { rendomGalery } from "./js.mjs/rendomGalery.mjs";

//подключаем mjs  ПОКАЗАТЬ случайный блок, рэндомной смены ОДНОГО блока при перезагрузке (lookMoree)
// import { showСustom } from "./js.mjs/showСustom.mjs";


// --------------------------

// импортируем все файлы из папки 10 в папку src с помощью функции .glob (для более наглядного вывода файлов прописываем { eager: true })
// const modules = import.meta.glob('./src/10/*.js', { eager: true, import: 'name' })
// console.log(modules)

// ------------------------------------ COMPONENTS
// // импорт 	components (указываем костанту template для импорта) 
// import { blosc11 } from './components.jsx';
// //добавляем отдельные компоненты:
// document.querySelector('#app11').appendChild(blosc11);




// import {template} from './src/12.jsx'

// ----------------------
// задаем сокращенные пути
// import '@/12.css'
// import imageUrl from '@/img/javascript.svg'

// document.querySelector('#image').src = imageUrl

// ---------------------------

// выводим подключенные js файлы

// динамический адаптив ----------------------
dynamicAdapt();

// меню-бургер-------------------
navMenus();

// подключение споллера-------------------
spollers();

//подключаем добавление класса activ при наведении
// hoverActiv();

//подключаем script.js
// hoverClick();

//------------------------ форма
//подключаем js для формы input
// forms();

//подключаем mjs для отправки формы на почту
// emailToo ();
//------------------------ конец  формы

//подключаем js для headerScroll
// headerScroll();

//подключаем js для фильтра по категориям
// document.addEventListener("DOMContentLoaded", () => {
//   setupFilters(); // вызываем функцию после загрузки DOM
// });

//  подключаем js для  SWIPER
// initSliders();

//  подключаем js для  навигации по странице
// setupSmoothScroll();

//вывод jsx файлов компонентов
// template();

//подключаем mjs анимации при скролле
// scrollAnim();

//подключаем mjs больш/меньше (quontity)
// quantity();

// подключаем mjs кнопку ПОКАЗАТЬ БОЛЬШЕ (loockMore)
// loockMore();

//подключаем mjs код рэндомной галереи при перезагрузке (RandomImageLong)
// rendomGalery();

//подключаем mjs  ПОКАЗАТЬ случайный блок, рэндомной смены ОДНОГО блока при перезагрузке (showСustom)
// showСustom();
