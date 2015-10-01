function getTimeRim(info, t0,t1, t2, t3)
{
    var text= new Array();
switch (info) 
{
case 0:
    text = t0;
	break;	
case 1:
    text = t1;
	break;	
case 2:
    text = glue(t1, t1);
	break;	
case 3:
	var p1 = glue(t1, t1);
    text = glue(p1, t1);
    break;		
case 4:
    text = glue(t1, t2);
	break;
case 5:
    text = t2;
	break;	
case 6:
    text = glue(t2, t1);
	break;	
case 7:
	var p1 = glue(t2, t1);
    text = glue(p1, t1);;	
	break;	
case 8:
	var p1 = glue(t2, t1);
	var p2 = glue(p1, t1);
    text = glue(p2, t1);
	break;	
case 9:
    text = glue(t1, t3);
	break;
}
    return text;	
}

function glue (mas1, mas2)
{
	var mas_otv= new Array();
	for  (var i = 0; i < mas1.length; i++)
	{
        mas_otv[i] = mas1[i]+mas2[i]
	}
	return mas_otv;
}

var hours = process.argv[2];
var minutes = process.argv[3];

if ((hours<25) && (minutes<61) && (hours>-1) && (minutes>-1))
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
]   ,
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
  spase = 
	["                     ", 
	 "         _  _        ", 
	 "        (_)(_)       ", 
	 "        (_)(_)       ", 
	 "         _  _        ", 
	 "        (_)(_)       ", 
	 "        (_)(_)       ",
	 "                     "
	];
  undef = 	 
	["    ", 
	 "    ", 
	 "    ", 
	 "    ", 
	 "    ", 
	 "    ", 
	 "    ",
	 "    "
	];
	    
	
var text_time_rim =new Array();
var hours1, hours2, minutes1, minutes2;

    hours1 =(hours - (hours%10))/10;
    hours2 = hours%10;

    text_time_rim = getTimeRim(hours1, undef, time10, time50, time100);
    text_time_rim = glue(text_time_rim, getTimeRim(hours2, time0, time1, time5, time10));
    text_time_rim = glue(text_time_rim, spase);

    minutes1 =(minutes - (minutes%10))/10;
    minutes2 = minutes%10;

 var text_minut = new Array();
    text_minut = getTimeRim(minutes1, undef, time10, time50, time100);
    text_minut = glue(text_minut, getTimeRim(minutes2, undef, time1, time5, time10));
    if (text_minut[0].length == 8)
    {
        text_time_rim = glue(text_time_rim, time0);	
    }
    else 
    {
	text_time_rim = glue(text_time_rim, text_minut)
    }
	
for  (var i = 0; i < text_time_rim.length; i++)
	{
        console.log(text_time_rim[i]); 
	}
}
else
{
	console.log("Время указано не верно");
}
