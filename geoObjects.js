// Очікуємо завантаження API і готовності DOM.
ymaps.ready(init);

function init () {
    var myPlacemark, myMap = new ymaps.Map('cityMap', {
        // визначаємо початкові координати карти (м. Львів)
        center: [49.84, 24.02],
        // визначаємо початковий масштаб
        zoom: 13,
        // тип карти - "Схема".
        type: 'yandex#map',
        // додамо елементи управління картою
        controls: ['zoomControl', 'geolocationControl', 'searchControl', 'typeSelector',  'fullscreenControl', 'trafficControl']
    }, {
        // провайдер геокодування
        searchControlProvider: 'yandex#search'
    });

    function checkState () {
        var shownObjects,
            byObjectTypes = new ymaps.GeoQueryResult();

        // Оберемо об'єкти по типу (objectType).
        if ($('#university').prop('checked')) {
            byObjectTypes = myObjects.search('properties.objectType = "university"');
        }
        if ($('#airport').prop('checked')) {
            byObjectTypes = myObjects.search('properties.objectType = "airport"').add(byObjectTypes);
        }
        if ($('#railStations').prop('checked')) {
            byObjectTypes = myObjects.search('properties.objectType = "rail"').add(byObjectTypes);
        }
        if ($('#busStations').prop('checked')) {
            byObjectTypes = myObjects.search('properties.objectType = "busStation"').add(byObjectTypes);
        }
        if ($('#theaters').prop('checked')) {
            byObjectTypes = myObjects.search('properties.objectType = "theater"').add(byObjectTypes);
        }
        if ($('#museums').prop('checked')) {
            byObjectTypes = myObjects.search('properties.objectType = "museum"').add(byObjectTypes);
        }
        if ($('#artGalleries').prop('checked')) {
            byObjectTypes = myObjects.search('properties.objectType = "artGallery"').add(byObjectTypes);
        }
        if ($('#restaurants').prop('checked')) {
            byObjectTypes = myObjects.search('properties.objectType = "restaurant"').add(byObjectTypes);
        }
        if ($('#cafe').prop('checked')) {
            byObjectTypes = myObjects.search('properties.objectType = "cafe"').add(byObjectTypes);
        }
        if ($('#pizzeria').prop('checked')) {
            byObjectTypes = myObjects.search('properties.objectType = "pizzeria"').add(byObjectTypes);
        }
        if ($('#diningRoom').prop('checked')) {
            byObjectTypes = myObjects.search('properties.objectType = "diningRoom"').add(byObjectTypes);
        }
        if ($('#colleges').prop('checked')) {
            byObjectTypes = myObjects.search('properties.objectType = "college"').add(byObjectTypes)
        }
        if ($('#parkingLots').prop('checked')) {
            byObjectTypes = myObjects.search('properties.objectType = "parkingLot"').add(byObjectTypes)
        }
        if ($('#autoparking').prop('checked')) {
            byObjectTypes = myObjects.search('properties.objectType = "autoparking"').add(byObjectTypes)
        }

        //Додамо на карту обрані об'єкти
        shownObjects = byObjectTypes.addToMap(myMap);
        // Об'єкти, які ми не обрали, забираємо з карти.
        myObjects.remove(shownObjects).removeFromMap(myMap);
    }
    // Прослуховуємо кнопки
    $('#university').click(checkState);
    $('#railStations').click(checkState);
    $('#busStations').click(checkState);
    $('#airport').click(checkState);
    $('#theaters').click(checkState);
    $('#museums').click(checkState);
    $('#artGalleries').click(checkState);
    $('#restaurants').click(checkState);
    $('#cafe').click(checkState);
    $('#pizzeria').click(checkState);
    $('#diningRoom').click(checkState);
    $('#colleges').click(checkState);
    $('#parkingLots').click(checkState);
    $('#autoparking').click(checkState);

    // Створимо об'єкти з їхнього JSON-опису та добавимо їх на карту.
    window.myObjects = ymaps.geoQuery({
        type: "FeatureCollection",
        features: [
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.839753, 23.994334]
                },
                properties: {
                    objectType: 'rail',
                    balloonContent: '<b>Головний Залізничний вокзал м. Львова</b>'  + '<br/>' +
                    '<i>Адреса: </i>пл. Двірцева, 1, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (322) 26-20-68',
                    hintContent: "Залізнична станція"
                },
                options: {
                    preset: 'islands#blueDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.83668, 23.996813]
                },
                properties: {
                    objectType: 'rail',
                    balloonContent: '<b>Приміський залізничний вокзал</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Городоцька, 112, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (322) 26-20-68',
                    hintContent: "Залізнична станція"
                },
                options: {
                    preset: 'islands#blueDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.851377, 24.033815]
                },
                properties: {
                    objectType: 'rail',
                    balloonContent: '<b>Станція Підзамче</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Огіркова, 1, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 226-62-20',
                    hintContent: "Залізнична станція"
                },
                options: {
                    preset: 'islands#blueDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.820397, 23.934955]
                },
                properties: {
                    objectType: 'rail',
                    balloonContent: '<b>Станція Скнилів</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Авіаційна, 2, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 226-21-24',
                    hintContent: "Залізнична станція"
                },
                options: {
                    preset: 'islands#blueDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.820752, 23.935126]
                },
                properties: {
                    objectType: 'airport',
                    balloonContent: '<b>Міжнародний аеропорт Львів ім. Данила Галицького</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Любінська, 168, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 229-81-12' + '<br/>' +
                        '<i>Веб-сайт: </i><a href="http://lwo.aero" target="_blank">lwo.aero</a>',
                   hintContent: "Аеропорт"
                },
                options: {
                    preset: 'islands#lightBlueDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.820752, 23.995825]
                },
                properties: {
                    objectType: 'busStation',
                    balloonContent: '<b>Автостанція № 8</b>'  + '<br/>' +
                    '<i>Адреса: </i>пл. Двірцева, 1, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 238-83-08' + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://vokzal.org.ua" target="_blank">vokzal.org.ua</a>',
                    hintContent: "Автостанція"
                },
                options: {
                    preset: 'islands#darkGreenDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.823396, 23.980077]
                },
                properties: {
                    objectType: 'busStation',
                    balloonContent: '<b>Автостанція № 3</b>'  + '<br/>' +
                    '<i>Адреса: </i> вул. Симона Петлюри, 11, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 292-23-32',
                    hintContent: "Автостанція"
                },
                options: {
                    preset: 'islands#darkGreenDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.820752, 23.995825]
                },
                properties: {
                    objectType: 'busStation',
                    balloonContent: '<b>Автостанція № 5</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Луганська, 2, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 270-27-85' + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://vokzal.org.ua" target="_blank">vokzal.org.ua</a>',
                    hintContent: "Автостанція"
                },
                options: {
                    preset: 'islands#darkGreenDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.864253, 24.051296]
                },
                properties: {
                    objectType: 'busStation',
                    balloonContent: '<b>Автовокзал "Північний", АС-2</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Хмельницького, 225, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+38 (032) 252-04-89' + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://www.bus.com.ua" target="_blank">bus.com.ua</a>',
                    hintContent: "Автостанція"
                },
                options: {
                    preset: 'islands#darkGreenDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.844, 24.026188]
                },
                properties: {
                    objectType: 'theater',
                    balloonContent: '<b>Львівський національний академічний театр опери та балету імені Соломії Крушельницької</b>'  + '<br/>' +
                    '<i>Адреса: </i>просп. Свободи, 28, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 242-17-90' + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://opera.lviv.ua" target="_blank">opera.lviv.ua</a>',
                    hintContent: "Театр"
                },
                options: {
                    preset: 'islands#violetDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.844203, 24.027562]
                },
                properties: {
                    objectType: 'theater',
                    balloonContent: '<b>Національний академічний український драматичний театр імені М. Заньковецької</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Лесі Українки, 1, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 235-47-51' + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://zankovetska.com.ua" target="_blank">zankovetska.com.ua</a>',
                    hintContent: "Театр"
                },
                options: {
                    preset: 'islands#violetDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.844424, 24.030958]
                },
                properties: {
                    objectType: 'theater',
                    balloonContent: '<b>Львівський академічний обласний театр ляльок</b>'  + '<br/>' +
                    '<i>Адреса: </i>пл. Данила Галицького, 1, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 235-58-32' + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://lvivtelesyk.com.ua" target="_blank">lvivtelesyk.com.ua</a>',
                    hintContent: "Театр"
                },
                options: {
                    preset: 'islands#violetDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.842002, 24.025469]
                },
                properties: {
                    objectType: 'theater',
                    balloonContent: '<b>Львівський академічний театр імені Леся Курбаса</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Леся Курбаса, 3, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 255-38-45' + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://kurbas.lviv.ua" target="_blank">kurbas.lviv.ua</a>',
                    hintContent: "Театр"
                },
                options: {
                    preset: 'islands#violetDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.842007, 24.016244]
                },
                properties: {
                    objectType: 'theater',
                    balloonContent: '<b>Львівський український драматичний театр імені Лесі Українки</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Городоцька, 36, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (322) 33-31-88' + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://ldt-ukrainky.lviv.ua" target="_blank">ldt-ukrainky.lviv.ua</a>',
                    hintContent: "Театр"
                },
                options: {
                    preset: 'islands#violetDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.842211, 24.032817]
                },
                properties: {
                    objectType: 'museum',
                    balloonContent: '<b>Львівський історичний музей</b>'  + '<br/>' +
                    '<i>Адреса: </i>пл. Ринок, 6, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 297-53-67' + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://www.lhm.lviv.ua" target="_blank">www.lhm.lviv.ua</a>',
                    hintContent: "Музей"
                },
                options: {
                    preset: 'islands#redDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.845731, 24.061761]
                },
                properties: {
                    objectType: 'museum',
                    balloonContent: '<b>Музей народної архітектури та побуту у Львові</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Чернеча Гора, 1, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 271-21-05' + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://lvivskansen.org" target="_blank">lvivskansen.org</a>',
                    hintContent: "Музей"
                },
                options: {
                    preset: 'islands#redDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.842513, 24.029107]
                },
                properties: {
                    objectType: 'museum',
                    balloonContent: '<b>Державний природознавчий музей Національної академії наук України</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Театральна, 18, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 235-69-17' + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://www.smnh.org" target="_blank">www.smnh.org</a>',
                    hintContent: "Музей"
                },
                options: {
                    preset: 'islands#redDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.841241, 24.035225]
                },
                properties: {
                    objectType: 'museum',
                    balloonContent: '<b>Відділ львівського історичного музею старовинної зброї Арсенал</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Підвальна, 5, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 235-86-61' + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://www.lhm.lviv.ua" target="_blank">www.lhm.lviv.ua</a>',
                    hintContent: "Музей"
                },
                options: {
                    preset: 'islands#redDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.837023, 24.025568]
                },
                properties: {
                    objectType: 'artGallery',
                    balloonContent: '<b>Львівська національна галерея мистецтв імені Б.Г. Возницького</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Стефаника, 3, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 261-46-47' + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://new.astrawest.com.ua" target="_blank">new.astrawest.com.ua</a>',
                    hintContent: "Виставковий центр"
                },
                options: {
                    preset: 'islands#darkOrangeDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.843146, 24.034156]
                },
                properties: {
                    objectType: 'artGallery',
                    balloonContent: '<b>Дзиґа</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Вірменська, 35, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 244-47-79' + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://dzyga.com.ua" target="_blank">dzyga.com.ua</a>',
                    hintContent: "Виставковий центр"
                },
                options: {
                    preset: 'islands#darkOrangeDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.842565, 24.030949]
                },
                properties: {
                    objectType: 'artGallery',
                    balloonContent: '<b>Галерея Арт-11</b>'  + '<br/>' +
                    '<i>Адреса: </i>пл. Ринок, 37, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 235-53-67' + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://www.art-11.lviv.ua" target="_blank">www.art-11.lviv.ua</a>',
                    hintContent: "Виставковий центр"
                },
                options: {
                    preset: 'islands#darkOrangeDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.839126, 24.035944]
                },
                properties: {
                    objectType: 'restaurant',
                    balloonContent: '<b>Ресторан Кумпель</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Володимира Винниченка, 6, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 242-17-80' + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://www.kumpelgroup.com" target="_blank">www.kumpelgroup.com</a>',
                    hintContent: "Ресторан"
                },
                options: {
                    preset: 'islands#blackDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.821321, 24.000083]
                },
                properties: {
                    objectType: 'restaurant',
                    balloonContent: '<b>Ресторан Андерсен</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Академіка Рудницького, 39, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 237-38-79' + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://www.andersen.lviv.ua" target="_blank">www.andersen.lviv.ua</a>',
                    hintContent: "Ресторан"
                },
                options: {
                    preset: 'islands#blackDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.837836, 23.970385]
                },
                properties: {
                    objectType: 'restaurant',
                    balloonContent: '<b>Ресторан Bosphor</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Гніздовського, 1, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 243-72-02' + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://bosphor.lviv.ua" target="_blank">bosphor.lviv.ua</a>',
                    hintContent: "Ресторан"
                },
                options: {
                    preset: 'islands#blackDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.843001, 24.031695]
                },
                properties: {
                    objectType: 'restaurant',
                    balloonContent: '<b>Гасова Лямпа</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Вірменська, 20, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (50) 371-09-08' + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://gasovalampa.lviv.ua" target="_blank">gasovalampa.lviv.ua</a>',
                    hintContent: "Ресторан"
                },
                options: {
                    preset: 'islands#blackDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.84425, 24.028155]
                },
                properties: {
                    objectType: 'cafe',
                    balloonContent: '<b>Кафе Млинець</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Театральна, 23, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 254-61-93',
                    hintContent: "Кафе"
                },
                options: {
                    preset: 'islands#nightDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.840387, 24.031066]
                },
                properties: {
                    objectType: 'cafe',
                    balloonContent: '<b>Львівська Цукерня</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Староєврейська, 3, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 235-69-49',
                    hintContent: "Кафе"
                },
                options: {
                    preset: 'islands#nightDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.841763, 24.033204]
                },
                properties: {
                    objectType: 'cafe',
                    balloonContent: '<b>Львівська копальня кави</b>'  + '<br/>' +
                    '<i>Адреса: </i>пл. Ринок, 10, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (67) 670-61-06',
                    hintContent: "Кафе"
                },
                options: {
                    preset: 'islands#nightDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.841763, 24.033204]
                },
                properties: {
                    objectType: 'cafe',
                    balloonContent: '<b>Кафе Тірамісу</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Пекарська, 1ц, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 275-27-44' + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://www.cafetiramisu.com.ua" target="_blank">www.cafetiramisu.com.ua</a>',
                    hintContent: "Кафе"
                },
                options: {
                    preset: 'islands#nightDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.840172, 24.03103]
                },
                properties: {
                    objectType: 'pizzeria',
                    balloonContent: '<b>Піцерія Баллачао</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Староєврейська, 4, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 235-70-62',
                    hintContent: "Піцерія"
                },
                options: {
                    preset: 'islands#yellowDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.838667, 24.030706]
                },
                properties: {
                    objectType: 'pizzeria',
                    balloonContent: '<b>Піцерія Фелічіта</b>'  + '<br/>' +
                    '<i>Адреса: </i>пл. Міцкевича, 1, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (67) 361-28-28',
                    hintContent: "Піцерія"
                },
                options: {
                    preset: 'islands#yellowDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.836482, 24.002454]
                },
                properties: {
                    objectType: 'pizzeria',
                    balloonContent: '<b>Піца Челентано</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Городоцька, 141, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (673) 80-03-13',
                    hintContent: "Піцерія"
                },
                options: {
                    preset: 'islands#yellowDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.804132, 23.986662]
                },
                properties: {
                    objectType: 'diningRoom',
                    balloonContent: '<b>Наука</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Наукова, 53, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 263-11-69',
                    hintContent: "Їдальня"
                },
                options: {
                    preset: 'islands#darkBlueDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.861738, 23.995978]
                },
                properties: {
                    objectType: 'diningRoom',
                    balloonContent: '<b>Їдальня</b>'  + '<br/>' +
                    '<i>Адреса: </i> вул. Винниця, 30, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (432) 43-97-02',
                    hintContent: "Їдальня"
                },
                options: {
                    preset: 'islands#darkBlueDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.843925, 23.979323]
                },
                properties: {
                    objectType: 'diningRoom',
                    balloonContent: '<b>Школярик</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Сяйво, 16, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 245-88-76',
                    hintContent: "Їдальня"
                },
                options: {
                    preset: 'islands#darkBlueDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.835326, 24.014474]

                },
                properties: {
                    objectType: 'university',
                    balloonContent: '<b>Національний університет "Львівська політехніка"</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Степана Бандери, 12, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://lp.edu.ua" target="_blank">lp.edu.ua</a>',
                    hintContent: "ВНЗ"
                },
                options: {
                    preset: 'islands#darkGreenCircleDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.840299, 24.022181]
                },
                properties: {
                    objectType: 'university',
                    balloonContent: '<b>Львівський національний університет імені Івана Франка</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Університетська, 1, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 239-41-11' + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://lnu.edu.ua" target="_blank">lnu.edu.ua</a>',
                    hintContent: "ВНЗ"
                },
                options: {
                    preset: 'islands#darkGreenCircleDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.843274, 24.019217]
                },
                properties: {
                    objectType: 'university',
                    balloonContent: '<b>Львівський державний університет внутрішніх справ</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Городоцька, 26, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 258-63-25' + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://www.lvduvs.edu.ua" target="_blank">www.lvduvs.edu.ua</a>',
                    hintContent: "ВНЗ"
                },
                options: {
                    preset: 'islands#darkGreenCircleDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.832276, 23.994792]
                },
                properties: {
                    objectType: 'university',
                    balloonContent: '<b>Львівський медичний інститут</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Поліщука, 76, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 239-37-05' + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://www.medinstytut.lviv.ua" target="_blank">www.medinstytut.lviv.ua</a>',
                    hintContent: "ВНЗ"
                },
                options: {
                    preset: 'islands#darkGreenCircleDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.835925, 24.048529]
                },
                properties: {
                    objectType: 'university',
                    balloonContent: '<b>Львівський Національний Медичний Університет iм. Данила Галицького</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Пекарська, 69, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 272-26-60' + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://www.meduniv.lviv.ua" target="_blank">www.meduniv.lviv.ua</a>',
                    hintContent: "ВНЗ"
                },
                options: {
                    preset: 'islands#darkGreenCircleDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.836755, 24.032719]
                },
                properties: {
                    objectType: 'university',
                    balloonContent: '<b>Львівська національна музична академія ім. М.В. Лисенка</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Остапа Нижанківського, 5, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 235-79-92' + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://www.conservatory.lviv.ua" target="_blank">www.conservatory.lviv.ua</a>',
                    hintContent: "ВНЗ"
                },
                options: {
                    preset: 'islands#darkGreenCircleDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.823036, 24.037489]
                },
                properties: {
                    objectType: 'university',
                    balloonContent: '<b>Український католицький університет</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Іларіона Свєнціцького, 17, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 240-99-40' + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://ucu.edu.ua" target="_blank">ucu.edu.ua</a>',
                    hintContent: "ВНЗ"
                },
                options: {
                    preset: 'islands#darkGreenCircleDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.838225, 24.028946]
                },
                properties: {
                    objectType: 'college',
                    balloonContent: '<b>Львівський державний коледж легкої промисловості</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Миколи Вороного, 6, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 235-80-66',
                    hintContent: "Коледж"
                },
                options: {
                    preset: 'islands#pinkCircleDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.84383, 24.016028]
                },
                properties: {
                    objectType: 'college',
                    balloonContent: '<b>Медичний коледж</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Миколайчука, 9, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 252-03-05'  + '<br/>' +
                    '<i>Веб-сайт: </i><a href="http://medcolpo.lviv.ua/" target="_blank">medcolpo.lviv.ua</a>',
                    hintContent: "Коледж"
                },
                options: {
                    preset: 'islands#pinkCircleDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.840758, 24.022011]
                },
                properties: {
                    objectType: 'college',
                    balloonContent: '<b>Правничий коледж</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Університетська, 1, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (322) 39-45-55',
                    hintContent: "Коледж"
                },
                options: {
                    preset: 'islands#pinkCircleDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.866087, 24.05488]
                },
                properties: {
                    objectType: 'parkingLot',
                    balloonContent: '<b>Автопарковка</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Богдана Хмельницького, 192, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+38 (032) 294-89-68'  + '<br/>' +
                    '<p id="radius"><i>Вартість за годину: </i><b>10 &#8372</b>' + '<br/>' +
                    '<i>Додатково: </i>Перша година <b>10 &#8372/год</b>, далі - <b>14 &#8372/год</b> (з 20:00 до 8:00 - <b>10 &#8372/год</b>)' + '<br/>' +
                    '<i>Вільних місць: </i><span id="free">13 (62%)</span>' + '<br/>' +
                    '<i>Всього місць: </i> 21' + '</p>' +
                    '<button type="button" class="btn btn-info btn-md" data-toggle="modal" data-target="#newModal"><span class="glyphicon glyphicon-shopping-cart"></span> Забронювати</button>',
                    hintContent: "Автопарковка"
                },
                options: {
                    preset: 'islands#orangeDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.808708, 24.017169]
                },
                properties: {
                    objectType: 'parkingLot',
                    balloonContent: '<b>Автопарковка</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Володимира Великого, 2, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+38 (032) 298-31-05'  + '<br/>' +
                    '<p id="radius"><i>Вартість за годину: </i><b>12 &#8372</b>' + '<br/>' +
                    '<i>Додатково: </i>Перша година <b>12 &#8372/год</b>, далі - <b>15 &#8372/год</b> (з 20:00 до 8:00 - <b>12 &#8372/год</b>)' + '<br/>' +
                    '<i>Вільних місць: </i><span id="free">55 (55%)</span>' + '<br/>' +
                    '<i>Всього місць: </i> 100' + '</p>' +
                    '<button type="button" class="btn btn-info btn-md" data-toggle="modal" data-target="#newModal"><span class="glyphicon glyphicon-shopping-cart"></span> Забронювати</button>',
                    hintContent: "Автопарковка"
                },
                options: {
                    preset: 'islands#orangeDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.809493, 23.98138]
                },
                properties: {
                    objectType: 'parkingLot',
                    balloonContent: '<b>Автопарковка</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Щирецька, 6, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+38 (032) 298-31-05'  + '<br/>' +
                    '<p id="radius"><i>Вартість за годину: </i><b>11 &#8372</b>' + '<br/>' +
                    '<i>Вільних місць: </i><span id="free">37 (100%)</span>' + '<br/>' +
                    '<i>Всього місць: </i> 37' + '</p>' +
                    '<button type="button" class="btn btn-info btn-md" data-toggle="modal" data-target="#newModal"><span class="glyphicon glyphicon-shopping-cart"></span> Забронювати</button>',
                    hintContent: "Автопарковка"
                },
                options: {
                    preset: 'islands#orangeDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.842362, 24.009443]
                },
                properties: {
                    objectType: 'parkingLot',
                    balloonContent: '<b>Автопарковка</b>'  + '<br/>' +
                    '<i>Адреса: </i>площа Князя Святослава, 5, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+38 (032) 298-31-05'  + '<br/>' +
                    '<p id="radius"><i>Вартість за годину: </i><b>15 &#8372</b>' + '<br/>' +
                    '<i>Додатково: </i>Перша година <b>15 &#8372/год</b>, далі - <b>17 &#8372/год</b> (з 20:00 до 8:00 - <b>12 &#8372/год</b>)' + '<br/>' +
                    '<i>Вільних місць: </i><span id="busy">0 (0%)</span>' + '<br/>' +
                    '<i>Всього місць: </i> 35' + '</p>',
                    hintContent: "Автопарковка"
                },
                options: {
                    preset: 'islands#orangeDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.808708, 24.017169]
                },
                properties: {
                    objectType: 'parkingLot',
                    balloonContent: '<b>Автопарковка</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Липова Алея, 21, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+38 (032) 298-31-05'  + '<br/>' +
                    '<p id="radius"><i>Вартість за годину: </i><b><span id="free"> Безкоштовно</span> </b>' + '<br/>' +
                    '<i>Всього місць: </i> 43' + '</p>',
                    hintContent: "Автопарковка"
                },
                options: {
                    preset: 'islands#orangeDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.840282, 24.04534]
                },
                properties: {
                    objectType: 'parkingLot',
                    balloonContent: '<b>Автопарковка</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Личаківська, 30, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+38 (032) 260-11-05'  + '<br/>' +
                    '<p id="radius"><i>Вартість за годину: </i><b><span id="free"> Безкоштовно</span> </b>' + '<br/>' +
                    '<i>Всього місць: </i> 12' + '</p>',
                    hintContent: "Автопарковка"
                },
                options: {
                    preset: 'islands#orangeDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.853404, 24.003254]
                },
                properties: {
                    objectType: 'parkingLot',
                    balloonContent: '<b>Автопарковка</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Єрошенка, 22, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+38 (032) 271-01-55'  + '<br/>' +
                    '<p id="radius"><i>Вартість за годину: </i><b><span id="free"> Безкоштовно</span> </b>' + '<br/>' +
                    '<i>Всього місць: </i> 12' + '</p>',
                    hintContent: "Автопарковка"
                },
                options: {
                    preset: 'islands#orangeDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.808708, 24.017169]
                },
                properties: {
                    objectType: 'parkingLot',
                    balloonContent: '<b>Автопарковка</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Академіка Єфремова, 59, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+38 (032) 298-31-05'  + '<br/>' +
                    '<p id="radius"><i>Вартість за годину: </i><b>10 &#8372</b>' + '<br/>' +
                    '<i>Додатково: </i>Перша година <b>10 &#8372/год</b>, далі - <b>12 &#8372/год</b> (з 20:00 до 8:00 - <b>10 &#8372/год</b>)' + '<br/>' +
                    '<i>Вільних місць: </i><span id="free">5 (50%)</span>' + '<br/>' +
                    '<i>Всього місць: </i> 10' + '</p>' +
                    '<button type="button" class="btn btn-info btn-md" data-toggle="modal" data-target="#newModal"><span class="glyphicon glyphicon-shopping-cart"></span> Забронювати</button>',
                    hintContent: "Автопарковка"
                },
                options: {
                    preset: 'islands#orangeDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.833693, 24.028658]
                },
                properties: {
                    objectType: 'parkingLot',
                    balloonContent: '<b>Автопарковка</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Драгоманова, 32, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+38 (032) 214-99-10'  + '<br/>' +
                    '<p id="radius"><i>Вартість за годину: </i><b>10 &#8372</b>' + '<br/>' +
                    '<i>Додатково: </i>Перша година <b>10 &#8372/год</b>, далі - <b>12 &#8372/год</b> (з 20:00 до 8:00 - <b>10 &#8372/год</b>)' + '<br/>' +
                    '<i>Вільних місць: </i><span id="free">20 (25%)</span>' + '<br/>' +
                    '<i>Всього місць: </i> 80' + '</p>' +
                    '<button type="button" class="btn btn-info btn-md" data-toggle="modal" data-target="#newModal"><span class="glyphicon glyphicon-shopping-cart"></span> Забронювати</button>',
                    hintContent: "Автопарковка"
                },
                options: {
                    preset: 'islands#orangeDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.827755, 23.972334]
                },
                properties: {
                    objectType: 'autoparking',
                    balloonContent: '<b>Автостоянка</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Головатого, 11, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+38 (032) 262-72-43'  + '<br/>' +
                    '<p id="radius"><i>Вартість за годину: </i><b>10 &#8372</b>' + '<br/>' +
                    '<i>Вільних місць: </i><span id="free">70 (46%)</span>' + '<br/>' +
                    '<i>Всього місць: </i> 150' + '</p>' +
                    '<button type="button" class="btn btn-info btn-md" data-toggle="modal" data-target="#newModal"><span class="glyphicon glyphicon-shopping-cart"></span> Забронювати</button>',
                    hintContent: "Автостоянка"
                },
                options: {
                    preset: 'islands#oliveDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.85208, 24.036905]
                },
                properties: {
                    objectType: 'autoparking',
                    balloonContent: '<b>Автостоянка</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Караїмська, 12, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+38 (032) 190-10-53'  + '<br/>' +
                    '<p id="radius"><i>Вартість за годину: </i><b>8 &#8372</b>' + '<br/>' +
                    '<i>Додатково: </i>Перша година <b>8 &#8372/год</b>, далі - <b>10 &#8372/год</b> (з 20:00 до 8:00 - <b>8 &#8372/год</b>)' + '<br/>' +
                    '<i>Вільних місць: </i><span id="free">110 (55%)</span>' + '<br/>' +
                    '<i>Всього місць: </i> 200' + '</p>' +
                    '<button type="button" class="btn btn-info btn-md" data-toggle="modal" data-target="#newModal"><span class="glyphicon glyphicon-shopping-cart"></span> Забронювати</button>',
                    hintContent: "Автостоянка"
                },
                options: {
                    preset: 'islands#oliveDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.827104, 24.005158]
                },
                properties: {
                    objectType: 'autoparking',
                    balloonContent: '<b>Автостоянка</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Генерала Чупринки, 85, Львів, Львівська область, 79000' + '<br/>' +
                    '<p id="radius"><i>Вартість за годину: </i><b><span id="free"> Безкоштовно</span> </b>' + '<br/>' +
                    '<i>Всього місць: </i> 21' + '</p>',
                    hintContent: "Автостоянка"
                },
                options: {
                    preset: 'islands#oliveDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.833984, 23.991809]
                },
                properties: {
                    objectType: 'autoparking',
                    balloonContent: '<b>Автостоянка</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Городоцька, 185, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+38 (032) 190-93-17'  + '<br/>' +
                    '<p id="radius"><i>Вартість за годину: </i><b>8 &#8372</b>' + '<br/>' +
                    '<i>Додатково: </i>Перша година <b>8 &#8372/год</b>, далі - <b>10 &#8372/год</b> (з 20:00 до 8:00 - <b>8 &#8372/год</b>)' + '<br/>' +
                    '<i>Вільних місць: </i><span id="free">20 (50%)</span>' + '<br/>' +
                    '<i>Всього місць: </i> 40' + '</p>' +
                    '<button type="button" class="btn btn-info btn-md" data-toggle="modal" data-target="#newModal"><span class="glyphicon glyphicon-shopping-cart"></span> Забронювати</button>',
                    hintContent: "Автостоянка"
                },
                options: {
                    preset: 'islands#oliveDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.829632, 24.044127]
                },
                properties: {
                    objectType: 'autoparking',
                    balloonContent: '<b>Автостоянка</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Зелена, 64, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+38 (032) 220-10-43'  + '<br/>' +
                    '<p id="radius"><i>Вартість за годину: </i><b>5 &#8372</b>' + '<br/>' +
                    '<i>Додатково: </i>Перша година <b>5 &#8372/год</b>, далі - <b>7 &#8372/год</b> (з 20:00 до 8:00 - <b>5 &#8372/год</b>)' + '<br/>' +
                    '<i>Вільних місць: </i><span id="busy">0 (0%)</span>' + '<br/>' +
                    '<i>Всього місць: </i> 40' + '</p>',
                    hintContent: "Автостоянка"
                },
                options: {
                    preset: 'islands#oliveDotIcon'
                }},
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [49.839689, 24.029718]
                },
                properties: {
                    objectType: 'autoparking',
                    balloonContent: '<b>Автостоянка</b>'  + '<br/>' +
                    '<i>Адреса: </i>вул. Ярошенка, 15, Львів, Львівська область, 79000' + '<br/>' +
                    '<i>Телефон: </i>+380 (32) 233-71-57'  + '<br/>' +
                    '<p id="radius"><i>Вартість за годину: </i><b>12 &#8372</b>' + '<br/>' +
                    '<i>Додатково: </i>Перша година <b>12 &#8372/год</b>, далі - <b>15 &#8372/год</b> (з 20:00 до 8:00 - <b>10 &#8372/год</b>)' + '<br/>' +
                    '<i>Вільних місць: </i><span id="free">3 (25%)</span>' + '<br/>' +
                    '<i>Всього місць: </i> 12' + '</p>' +
                    '<button type="button" class="btn btn-info btn-md" data-toggle="modal" data-target="#newModal"><span class="glyphicon glyphicon-shopping-cart"></span> Забронювати</button>',
                    hintContent: "Автостоянка"
                },
                options: {
                    preset: 'islands#oliveDotIcon'
                }}
            ]
    }).addToMap(myMap);

    //При натисканні правою кнопкою миші - показати мітку з адресою
    myMap.events.add('contextmenu', function (e) {
        var coords = e.get('coords');
        // Якщо мітку вже було створено – переміщуємо її
        if (myPlacemark) {
            myPlacemark.geometry.setCoordinates(coords);
        }
        // Якщо ні – створюємо нову мітку.
        else {
            myPlacemark = createPlacemark(coords);
            myMap.geoObjects.add(myPlacemark);
            // Прослуховуємо подію завершення переміщення мітки.
            myPlacemark.events.add('dragend', function () {
                getAddress(myPlacemark.geometry.getCoordinates());
            });
        }
        getAddress(coords);
    });
    // Створення мітки
    function createPlacemark(coords) {
        return new ymaps.Placemark(coords, {
            iconContent: 'Пошук...'
        }, {
            preset: 'islands#lightBlueStretchyIcon',
            draggable: true
        });
    }
    // Визначаємо адресу по координатах (зворотнє геокодування)
    function getAddress(coords) {
        myPlacemark.properties.set('iconContent', 'Пошук...');
        ymaps.geocode(coords).then(function (res) {
            var firstGeoObject = res.geoObjects.get(0);

            myPlacemark.properties
                .set({
                    iconContent: firstGeoObject.properties.get('name'),
                    balloonContent: firstGeoObject.properties.get('text')
                });
        });
    }
    //При натисканні мишкою - закрити мітку
    myMap.events.add('click', function (e) {
        myMap.balloon.close();
    });
}

