//let askYear = 2022;
//let askMonth = 6;

let askYear = Number(prompt('Введите год'));
let askMonth = Number(prompt('Введите номер месяца'));


function calendar(year, month) {
    const wrapper = document.querySelector('#calendarWrapper');
    console.log(wrapper, 'ВРАППЕР')
    wrapper.innerHTML = '';
    const monthTitle = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

    const date = new Date(year, month - 1);
    console.log(date.getDay());
    const nameYear = date.getFullYear();
    const nameMonth = monthTitle[month - 1];
    const numberDays = 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
    const amountRow = numberDays + date.getDay();
    const carendayArray = new Array(Math.ceil(amountRow / 7)).fill([]).map((value, index, array) => {// value это подмассив
        const arraySmall = [];
        const arrayLength = array.length * 7 - numberDays;

        for (let i = 0; i < 7; i++) {
            const value = (i + 1) + ((index + 1) * 7) - date.getDay() - 6;
            const element = document.createElement('td');
            element.classList.add('td');
            if (i < date.getDay() - 1 && index == 0 || value > numberDays) {

                element.innerText = ''
            } else {
                element.innerText = value;
            }
            arraySmall.push(element);
        }
        console.log(value);
        return arraySmall;
    });

    const daysArray = ['Пн', 'Вт', 'Ср', 'Чт', 'Пц', 'Сб', 'Вс'].map((value) => {
        const element = document.createElement('th');
        element.classList.add('th');
        element.innerText = value;
        return element;
    });

    const resultArray = [daysArray, ...carendayArray];

    const headerWrapper = document.createElement('header')
    headerWrapper.classList.add('headerWrapper');

    const btnBackYear = document.createElement('button');
    btnBackYear.classList.add('button');
    btnBackYear.innerText = '<<';
    btnBackYear.onclick = function () {
        askYear = askYear - 1;
        calendar(askYear, askMonth);
    }


    const btnBackMounth = document.createElement('button');
    btnBackMounth.classList.add('button');
    btnBackMounth.innerText = '<';
    btnBackMounth.onclick = function () {
        askMonth = askMonth - 1;
        calendar(askYear, askMonth);
    }


    const btnNextMounth = document.createElement('button');
    btnNextMounth.classList.add('button');
    btnNextMounth.innerText = '>';
    btnNextMounth.onclick = function () {
        askMonth = askMonth + 1;
        calendar(askYear, askMonth);
    }

    const btnNextYear = document.createElement('button');
    btnNextYear.classList.add('button');
    btnNextYear.innerText = '>>';
    btnNextYear.onclick = function () {
        askYear = askYear + 1;
        calendar(askYear, askMonth);
    }


    const header = document.createElement('h1');
    header.classList.add('header');
    header.innerText = `${nameMonth} ${year} года`;

    headerWrapper.append(btnBackYear, btnBackMounth, header, btnNextMounth, btnNextYear);
    wrapper.append(headerWrapper);


    resultArray.forEach(element => {
        const box = document.createElement('tr');
        box.classList.add('box');
        box.append(...element);
        wrapper.append(box);
    });
}

calendar(askYear, askMonth);

