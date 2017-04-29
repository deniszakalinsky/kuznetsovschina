/**
 * Created by deniszakalinsky on 4/25/17.
 */
"use strict";
/* #1 */
var productName;
var productPrice;

/* #2 */
productName  = prompt('Как называется товар?', 'Телепорт бытовой VZHIH-101');
productPrice = prompt('Цена вопроса в космокредитах:', 10000);

document.writeln('В наличии имеется: "' + productName + '"');
document.writeln('Стоимость товара: ' + productPrice + ' Q');

/* #3 */
var cartQTY  = 2;
var loyalty  = 10;
var discount = cartQTY * productPrice * loyalty / 100;
var total    = productPrice * cartQTY - discount;

document.writeln('Цена покупки составит' + total +' Q');

/* #4 */

var businessAccount = 52334224;

productPrice = 6500;

var qty = Math.floor(businessAccount/productPrice);

businessAccount = businessAccount - productPrice*qty;

document.writeln('Мы можем закупить ' + qty + ' единиц товара, после закупки на счету останется ' + businessAccount + ' Q');