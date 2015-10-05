function getTimeRim(numberTimes, digitArabicSmall,digitArabicMedium, digitArabicLarge, digitalArabicBig){
//    Функция ставит соответсвие число и его римское представление
//    numberTimes - Число для преобразование
//    digitArabicSmall- римская цифра самая наименьшая для замены
//    digitArabicMedium - римская цифра средняя для замены
//    digitArabicLarge- римская цифра выше среднего для замены
//    digit_Arabic_big- римская арабское число для замены
//    temporary_variable_for_gluing_  - временные переменные для склейки
    var text = [];
    switch (numberTimes)
    {
        case 0:
            text = digitArabicSmall;
            break;
        case 1:
            text = digitArabicMedium;
            break;
        case 2:
            text = glue(digitArabicMedium, digitArabicMedium);
            break;
        case 3:
            var temporaryVariableForGluing1 = glue(digitArabicMedium, digitArabicMedium);
            text = glue(temporaryVariableForGluing1, digitArabicMedium);
            break;
        case 4:
            text = glue(digitArabicMedium, digitArabicLarge);
            break;
        case 5:
            text = digitArabicLarge;
            break;
        case 6:
            text = glue(digitArabicLarge, digitArabicMedium);
            break;
        case 7:
            var temporaryVariableForGluing1 = glue(digitArabicLarge, digitArabicMedium);
            text = glue(temporaryVariableForGluing1, digitArabicMedium);
            break;
        case 8:
            var temporaryVariableForGluing1 = glue(digitArabicLarge, digitArabicMedium);
            var temporaryVariableForGluing2 = glue(temporaryVariableForGluing1, digitArabicMedium);
            text = glue(temporaryVariableForGluing2, digitArabicMedium);
            break;
        case 9:
            text = glue(digitArabicMedium, digitalArabicBig);
            break;
    }
    return text;
}

function glue (digitRim1, digitRim2){
    // функция glue- склеивает два массива (тоесть получает слитное изображение из двух римских числе) "построчно"
    //digitRim* - число для склейки
    // digitRim - конечное склеиное число
    var digitRim = [];
    for  (var i = 0; i < digitRim1.length; i++) {
        digitRim[i] = digitRim1[i] + digitRim2[i];
    }
    return digitRim;
}

function isCorrectTime (hourse, minutes){
//    Проверка времени на корректность
    if (hourse < 24 && minutes < 60 && hourse > -1 && minutes > -1) {
        return true;
    }else {
        return false;
    }
}

function getTimeArabic (time){
//     переводит время часы или минуты. Куском из числа в римскую систему
    var timeUnits, timeDozens, textTimeAnswer;
    timeDozens =(time - (time%10))/10;
    timeUnits = time%10;
    textTimeAnswer = getTimeRim(timeDozens, emptiness, time10, time50, time100);
    textTimeAnswer = glue(textTimeAnswer, getTimeRim(timeUnits, emptiness, time1, time5, time10));
    if (textTimeAnswer[0].length == 8) {
        textTimeAnswer = time0;
    }
    return textTimeAnswer;
}

var hours = process.argv[2];
var minutes = process.argv[3];

if (isCorrectTime (hours, minutes)) {
    var time0 =
            [" _           _ ",
                "(_) _       (_)",
                "(_)(_)_     (_)",
                "(_)  (_)_   (_)",
                "(_)    (_)_ (_)",
                "(_)      (_)(_)",
                "(_)         (_)",
                "(_)         (_)"
            ],
        time1 =
            ["   _  _  _  ",
                "  (_)(_)(_) ",
                "     (_)    ",
                "     (_)    ",
                "     (_)    ",
                "     (_)    ",
                "   _ (_) _  ",
                "  (_)(_)(_) "
            ],
        time5 =
            [" _           _ ",
                "(_)         (_)",
                "(_)         (_)",
                "(_)_       _(_)",
                "  (_)     (_)  ",
                "   (_)   (_)   ",
                "    (_)_(_)    ",
                "      (_)      ",
            ],
        time10 =
            [" _           _ ",
                "(_)_       _(_)",
                "  (_)_   _(_)  ",
                "    (_)_(_)    ",
                "     _(_)_     ",
                "   _(_) (_)_   ",
                " _(_)     (_)_ ",
                "(_)         (_)"
            ],
        time50 =
            ["   _             ",
                "  (_)            ",
                "  (_)            ",
                "  (_)            ",
                "  (_)            ",
                "  (_)            ",
                "  (_) _  _  _  _ ",
                "  (_)(_)(_)(_)(_)"
            ],
        time100 =
            ["      _  _  _    ",
                "   _ (_)(_)(_) _ ",
                "  (_)         (_)",
                "  (_)            ",
                "  (_)            ",
                "  (_)          _ ",
                "  (_) _  _  _ (_)",
                "     (_)(_)(_)   "
            ],
        delimiter =
            ["                     ",
                "         _  _        ",
                "        (_)(_)       ",
                "        (_)(_)       ",
                "         _  _        ",
                "        (_)(_)       ",
                "        (_)(_)       ",
                "                     "
            ];
    emptiness =
        ["    ",
            "    ",
            "    ",
            "    ",
            "    ",
            "    ",
            "    ",
            "    "
        ];

    var textTimeRim =[];
    textTimeRim = getTimearabic(hours);
    textTimeRim = glue(textTimeRim, delimiter);
    textTimeRim = glue(textTimeRim, getTimearabic(minutes));
    for  (var i = 0; i < textTimeRim.length; i++)
    {
        console.log(textTimeRim[i]);
    }
} else {
    console.log("Время указано не верно");
}
