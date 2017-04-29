/* task 1.2 */

/* #1 */
"use strict";


function isInteger(num) {
  return (num ^ 0) === num;
}


var qtyWarehouse = 11; /**/
var qtyOrder 	 = prompt('Сколько товаров вам надо?',0);

qtyOrder = parseInt(qtyOrder);

if ((qtyOrder > 0) && (isInteger(qtyOrder))) {

	if (qtyOrder > qtyWarehouse) { 
		document.writeln("На складе нет такого количества товаров <br />");
	}

	if (qtyOrder < qtyWarehouse) {
		document.writeln("Заказ оформлен <br />")
	}

	if (qtyOrder == qtyWarehouse) { 
		document.writeln("Вы забираете весь товар c нашего склада! <br />")
	}

} else alert('Что за поебень ты вводишь?!');