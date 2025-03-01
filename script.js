// получаем родительский эл-т блок div с классом .tests0
var list0 = document.querySelector('.tests0');
//навешиваем обработчик событий на блок div с классом .tests0
list0.addEventListener('click', choosing_an_answer0);

// получаем родительский эл-т блок div с классом .tests1
var list1 = document.querySelector('.tests1');
//навешиваем обработчик событий на блок div с классом .tests1
list1.addEventListener('click', choosing_an_answer1);

//------------------------

//скрипт для первого вопроса
//ф-ция для вывода верного или неверного ответа и деактивации переключателей
function choosing_an_answer0 (event) {
	// console.log(this); // блок с вариантами ответа
	console.log(event.target.tagName); // тег выбранного варианта ответа
    console.log(event.target.className); // класс выбранного варианта ответа
    //проверяем что выбранный тег имеет значение INPUT
    if(event.target.tagName == 'INPUT') {
        //проверяем что выбранный класс имеет значение mistake deactivation0
        if(event.target.className == 'mistake0 deactivation0') {
            //выбираем блок с классом .answer0
            var answer_3 = document.querySelector('.answer0');
            //вставляем текст в нужный блок
            answer_3.innerHTML = 'Неверно';
        } else {
            //выбираем блок с классом .answer0
            var answer_3 = document.querySelector('.answer0');
            //вставляем текст в нужный блок
            answer_3.innerHTML = 'Верно';
        }
        //делаем все переключатели неактивными
        //получаем все эл-ты с классом .deactivation0
        var answer = document.querySelectorAll('.deactivation0');
        //преобразуем node list в массив
        var arr_ans_1 = Array.from(answer);
        //с помощью цикла for перебираем переключатели и деактивируем их
        for(var i = 0; i <= arr_ans_1.length - 1; i++) {
            arr_ans_1[i].disabled = true;
        }
}
}

//------------------------

//скрипт для второго вопроса
//ф-ция для вывода верного или неверного ответа и деактивации переключателей
function choosing_an_answer1 (event) {
	// console.log(this); // блок с вариантами ответа
	console.log(event.target.tagName); // тег выбранного варианта ответа
    console.log(event.target.className); // класс выбранного варианта ответа
    //проверяем что выбранный тег имеет значение INPUT
    if(event.target.tagName == 'INPUT') {
        //проверяем что выбранный класс имеет значение mistake deactivation1
        if(event.target.className == 'mistake1 deactivation1') {
            //выбираем блок с классом .answer1
            var answer_3 = document.querySelector('.answer1');
            //вставляем текст в нужный блок
            answer_3.innerHTML = 'Неверно';
        } else {
            //выбираем блок с классом .answer1
            var answer_3 = document.querySelector('.answer1');
            //вставляем текст в нужный блок
            answer_3.innerHTML = 'Верно';
        }
        //делаем все переключатели неактивными
        //получаем все эл-ты с классом .deactivation1
        var answer = document.querySelectorAll('.deactivation1');
        //преобразуем node list в массив
        var arr_ans_1 = Array.from(answer);
        //с помощью цикла for перебираем переключатели и деактивируем их
        for(var i = 0; i <= arr_ans_1.length - 1; i++) {
            arr_ans_1[i].disabled = true;
        }
}
}
