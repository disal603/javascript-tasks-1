function getTimeRim(number_times, digit_Arabic_small,digit_Arabic_medium, digit_Arabic_large, digital_Arabic_big)
{
//    Функция ставит соответсвие число и его римское представление
//    number_times - Число для преобразование
//    digit_Arabic_small- римская цифра самая наименьшая для замены
//    digit_Arabic_medium - римская цифра средняя для замены
//    digit_Arabic_large- римская цифра выше среднего для замены
//    digit_Arabic_big- римская арабское число для замены
//    temporary_variable_for_gluing_  - временные переменные для склейки
    var text= [];
    switch (number_times)
        {
        case 0:
            text = digit_Arabic_small;
            break;
        case 1:
            text = digit_Arabic_medium;
            break;
        case 2:
            text = glue(digit_Arabic_medium, digit_Arabic_medium);
	        break;
        case 3:
	        var temporary_variable_for_gluing_1 = glue(digit_Arabic_medium, digit_Arabic_medium);
            text = glue(temporary_variable_for_gluing_1, digit_Arabic_medium);
            break;
        case 4:
            text = glue(digit_Arabic_medium, digit_Arabic_large);
	        break;
        case 5:
            text = digit_Arabic_large;
	        break;
        case 6:
            text = glue(digit_Arabic_large, digit_Arabic_medium);
	        break;
        case 7:
	        var temporary_variable_for_gluing_1 = glue(digit_Arabic_large, digit_Arabic_medium);
            text = glue(temporary_variable_for_gluing_1, digit_Arabic_medium);;
	        break;
        case 8:
	        var temporary_variable_for_gluing_1 = glue(digit_Arabic_large, digit_Arabic_medium);
	        var temporary_variable_for_gluing_2 = glue(temporary_variable_for_gluing_1, digit_Arabic_medium);
            text = glue(temporary_variable_for_gluing_2, digit_Arabic_medium);
	        break;
        case 9:
            text = glue(digit_Arabic_medium, digital_Arabic_big);
	        break;
        }
    return text;
}

function glue (digit_Rim_1, digit_Rim_2)
{
    // функция glue- склеивает два массива (тоесть получает слитное изображение из двух римских числе) "построчно"
    //digit_Rim_* - число для склейки
    // digit_Rim - конечное склеиное число
    var digit_Rim= [];
    for  (var i = 0; i < digit_Rim_1.length; i++)
    {
        digit_Rim[i] = digit_Rim_1[i]+digit_Rim_2[i];
    }
    return digit_Rim;
}

function isCorrectTime (hourse, minutes)
{
//    Проверка времени на корректность
    if ((hourse<25) && (minutes<61) && (hourse>-1) && (minutes>-1))
    {return true}
    else
    {return false}
}

function get_Time_arabic (time)
{
//     переводит время часы или минуты. Куском из числа в римскую систему
    var time_units, time_dozens, text_time_otvet,text_time_otvet2;
    time_dozens =(time - (time%10))/10;
    time_units = time%10;
    text_time_otvet = getTimeRim(time_dozens, emptiness, time10, time50, time100);
	  text_time_otvet = glue(text_time_otvet, getTimeRim(time_units, emptiness, time1, time5, time10));
    if (text_time_otvet[0].length == 8)
    {
        text_time_otvet = time0;
    }
    return text_time_otvet;
}

var hours = process.argv[2];
var minutes = process.argv[3];

if (isCorrectTime (hours, minutes))
{
var time0 =
    [" _           _ ",
    "(_) _       (_)",
    "(_)(_)_     (_)",
    "(_)  (_)_   (_)",
    "(_)    (_)_ (_)",
    "(_)      (_)(_)",
    "(_)         (_)",
    "(_)         (_)"
    ]
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

    var text_time_rim =[];
    text_time_rim = get_Time_arabic(hours);
    text_time_rim = glue(text_time_rim, delimiter);
    text_time_rim = glue(text_time_rim, get_Time_arabic(minutes));
    for  (var i = 0; i < text_time_rim.length; i++)
    {
        console.log(text_time_rim[i]);
    }
}
else
{
    console.log("Время указано не верно");
}
