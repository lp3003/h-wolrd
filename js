<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="bootstrap-3.3.2-dist/css/bootstrap.css">
		<script type="text/javascript">
	      	function onShart1(){
	      		var years=+prompt("сколько вам лет?", 28);
	      	}
	      	function onShart2(){
	       		var isAdmin=confirm("вы-администратор?");
	    	}
	    	function onShart3(){
	      		var name=prompt("Как вас зовут?", "Baho");
	      	}
	      	function onShart4(){
		      	var year=+prompt("В каком году я родился?", 1900);
		      	if (year!=1989) alert("А вот и нет!");
		       	var cond=(year!=1989);
		      	if (cond){
		      		alert("NO!");
		      		alert("NO!NO!NO!NO!NO");}
	      	}
	      	function onShart6(){
		      	var year=prompt("В каком мемяце я родился?","месяц");
		      	if (year=="март"){
		      		alert("Умичка!!!")
		      	}else{
		      		alert("Вот тупица!!!!!")}
	      	}
	      	function onShart7(){
		      	var year=+prompt("День моего рождения?","")
		      	if (year<30){
		      		alert("это слишком рано");
		      	}else if(year>30){
		      		alert("это поздно");
		      	}else{
		      		alert("Да точно");}
	      	}      	
	      	function onShart8(){
	      		var access;
		      	var age=+prompt("сколько мне лет?","");
		      	if (age>28){
		      		access=true;
		      	}else{
		      		access=false;
		      	}
		      	alert(access);
	      	}
	      	function onShart5(){
		      	var age=prompt("возраст","");
		      	var message=(age<10)?"Здравствуй, малыш!":
		      		(age<18)?"Привет!":
		      		(age<100)?"Здравствуйте!":
		      		"Какой необычный возраст!";
		      	alert(message);
	      	}
	      	function onShart9(){
	      		var company=prompt("Какая компания создала javascript?","");
	      			(company=="Netscape")?
	      			alert("Да, верно"):
	      			alert("Неправильно");
	      	}
	      	function onShart10(){
		      	var company=prompt("Какая компания создала javascript?","");
		      	if (company=="Netscape"){
		      		alert("yes!");
		      	} else {
		      		alert("no");}
	      	}
	      	function onShart11(){
		      	var nameCompany=prompt("каково официальное название javascript?","");
		      	if (nameCompany=="EcmaScript"){
		      		alert("верно")
		      	}else{
		      		alert("Не знаете? 'EcmaScript'!")}
	      	}
	      	function onShart12(){
		      	var test=+prompt("test?","")
		      	if (test<0){
		      		alert("-1");
		      	}else if(test>0){
		      		alert("1");
		      	}else{
		      		alert("0");}
	      	}   
	      	function onShart13(){
	      		var password;
		      	var test2=prompt("Кто пришел?","");
				if(!test2){
		      		alert("Вход отменен!");
		      	}else if(test2!="Царь"){
		      		alert("Я вас не знаю!");
		      	}else{
		      		(test2=="Царь");
		      		password=prompt("Пароль","");
		      		if(!password){
		      			alert("Вход отменен!")
		      		}else if(password!="Тёмный Властелин"){
		      			alert("Самозванец!");
		      		}else{
		      			alert("Добро пожаловать! Мой Лорд!")
		      		}
		      		(password=="Тёмный Властелин");
		      		}
	      	}
	      	function onShart14(){
		      	var year2=+prompt("День моего рождения2?","")
		      	if (year2==30){
		      		alert("Да точно");
		      	}else if(year2<30){
		      		alert(" слишком рано");
		      	}else if(year2>=50){
		      		alert("слишком поздно");
		      	}else{
		      		alert("это поздно");	      		
		      	}
	      	}    
	      	function onShart15(){
		      	var hour=9
		      	if (hour<10||hour>18){
		      		alert("ofis do 10 ili posle 18 zakrit")
		      		}
	      	}
	      	function onShart16(){
	      		var hour=12,
	      		isWeekend=true;
	      		if (hour<10||hour>18||isWeekend){
	      			alert("ofis do 10 ili posle 18 ili v vihodnoy zakrit");
	      			}
	      		}
	      	function onShart17(){
	      		var x;
	      		true||(x=1);
	      		alert(x);
	      	}	   	
	      	function onShart18(){
	      		var x;
	      		false||(x=1);
	      		alert(x);
	      	}	
	      	function onShart19(){
	      		var undef;
	      		var zero=0;
	      		var emptyStr="";
	      		var msg="Привет!";
	      		var result=undef||zero||emptyStr||msg||0;
	      		alert(result);
	      	}	
	      	function onShart20(){
	      		var hour=12,
	      			minute=30;
	      		if (hour==12&&minute==30){
	      			alert("Время 12:30");
	      		}	
	      	}	
	      	function onShart21(){
	      		alert( String(null) === "null" );
	      	}	
	      	function onShart22(){
	      		alert(true+"test");
	      		alert("123"+undefined);
	      		alert(+"\n 123 \n \n");
				alert(+true);
				alert(+false);
				alert("\n0");
				alert("\n"==false);
				alert("1"==true);
	      	}	
			function onShart23(){

				alert(null>=0);
				alert(null>0);
				alert(null==0);
			}	
			function onShart24(){
				alert(undefined>0);
				alerr(undefined==0);
				alert(undefined<0);
			}	
			function onShart25(){
				var a=2+2
				switch (a){
					case 3:
						alert("malovato");
						break;
					case 4:
						alert("v tochky");
						break;
					case 5:
						alert("perebor");
						break;
					default:
						alert("ya takih znacheniy ne znau");
				}
			}
			function onShart26(){
				var a=2+2;
				switch (a){
					case 3:
						alert("malovato");
					case 4:
						alert("v tochky");
					case 5:
						alert("perebor");
					default:
						alert("ya takih znachniy ne znau");
				}						
			}
			function onShart27(){
				var a=1;
				var b=0;
				switch (a){
					case b+1:
						alert(1);
						break;
					default:
						alert("net")	
				}
			}
			function onShart28(){
				var test4=+prompt("2+2?");
				var a=2+2
				switch(test4){
					case 4:
						alert("verno!");
						break;
					case 3:
					case 5:
					 	alert("neverno");
					 	alert("nemnogo oshiblis");
					 	break;
					 default:
					 	alert("stranniy rezyltat");		
				}
			}
			function onShart29(){
				var arg=prompt("vvedite arg");
				switch(arg){
					case "0":
					case "1":
						alert("odin ili nol");
					case "2":
						alert("dva");
						break;
					case "3":
						alert("nikogda ne vipolnitsya");
					default:
						alert("neizvestnoe znachenie:"+arg)			
				}
			}
			function onShart30(){
				var browser=prompt("...","");
				if(browser=="IE"){
		  			alert("О, да у вас IE!");
		  		}else if(browser=="Firefox" || browser=="Safari" || browser=="Opera"){
		  			alert("Да, и эти браузеры мы поддерживаем");	      			
		  		}else{
		  			alert("Мы надеемся, что и в вашем браузере все ок!");
		  		}
		    }
		    function onShart31(){
			    var a = +prompt('a?', '');
				switch (a) {
					case 0:
						alert( 0 );
						break;
					case 1:
						alert( 1 );
						break;
					case 2:
					case 3:
						alert( '2,3' );
						break;
					}
			}		
			function onShart32(){
				var i=0;
				while(i<3){
					alert(i);
					i++;
				}
			}	
			function onShart33(){
				var i=3;
				while(i){
					alert(i);
					i--;
				}
			}	
		    function onShart34(){
		    	var i=0;
		    	do{
		    		alert(i);
		    		i++;
		    	}while(i<3);
		    }  	
		    function onShart35(){		
		    	var i;
		    	for(i=0; i<3; i++){
		    		alert(i);
		    	}
		    }
		    function onShart36(){
		    	var sum=0;
		    	while(true){
		    		var value=+prompt("vvedite chislo","");
		    		if(!value)break;
		    		sum+=value;
		    	}
		    	alert("summa"+sum);
		    }	
		    function onShart37(){
		    	for(var i=0; i<10; i++){
		    		if(i%2==0)continue;
		    		alert(i);
		    	}
		    }	
		    function onShart38(){
		    	outer: for(var i=0; i<3; i++){
		    		for(var j=0; j<3; j++){
		    			var input=prompt("znachenie v koordinatah "+i+","+j,"");
		    			if(!input)break outer;
		    		}
		    	}
		    	alert("gotovo!");
		    }	
		    function onShart39(){
		    	for(var i=2; i<=10; i++){
		    		if(i%2==0){
		    		alert(i);
		    		}
		    	}
		    }	
			function onShart40(){
		    	var i=0;
		    	while(i<4){
		    		alert("nomer"+i+"!");
		    		i++;
		    	}
		    }
		    function onShart41(){
			    var sum=100;
			    	while(true){
			    		var value=+prompt("еще раз","");
			    		if(value>=100)break;
			    		sum+=value;
			    	}
		    }	
		    function onShart42(){
		    	var num;
				do {
				  num = prompt("Введите число больше 100?", 0);
				} while (num <= 100 && num != null);
		    }	
		    function onShart43(){
		    	test5:
					for (var i = 2; i <= 10; i++) {
						for (var j = 2; j < i; j++) {
						if (i % j == 0) continue test5;
					}
					alert( i ); // простое
					}
		    }
		    function onShart44(){
		    	function showMessage(){
		    		alert("Privet vsem!");
		    	}
		    	showMessage();
		    }
		    function onShart45(){
		    	function showMessage(){
		    		var message="Hello, i'm Baho";
		    		alert(message);
		    	}
		    	showMessage();
		    }
		    function onShart46(){
		    	function count(){
		    		for(var i=0; i<3; i++){
		    			var j=i*2;
		    		}
		    		alert(i);
		    		alert(j);
		    	}    
		    	count();	
		    }	
		    function onShart47(){
		    	var userName=" Baho";
		    	function showMessage(){
		    		var message="Hello, i'm" +userName;
		    		alert(message);
		    	}
		    	showMessage();
		    }	
		    function onShart48(){
		    	var userName="Baho";
		    	function showMessage(){
		    		userName=" Bahovaddin";
		    		var message="Hello, i'm"+userName;
		    		alert(message);
		    	}
		    	showMessage();
		    	alert(userName);
		    }
		    function onShart49(){
		    	function showMessage(from, text){
		    		from="**"+from+"**";
		    		alert(from+":"+text);
		    	}
		    	showMessage("Baho","Hello!");
		    	showMessage("Baho","Bye!");
		    }
		    function onShart50(){
		    	function showMessage(from, text){
		    		from="**"+from+"**";
		    		alert(from+":"+text);
		    	}
		    	var from = "Baho";
		    	showMessage(from,"Hello");
		    	alert(from);
		    }				
			function onShart51(){
				function showMessage(from, text){
					if(text===undefined){
						text="текст не предан";
					}
					alert(from+":"+text);
				}
				showMessage("Baho","привет");
				showMessage("Baho");			
			}
			function onShart52(){
				function calcD(a, b, c){
					return b*b-4*a*c;
				}
				var test=calcD(-4,2,1);
				alert(test);
			}
			function onShart53(){
				function checkAge(age){
					if(age>18){
						return true;
					}else{
						return confirm("Родители разрешили?");
					}
				}
				var age=+prompt("Ваш возраст?");
				if(checkAge(age)){
					alert("доступ разрешен");
				}else{
					alert("В доступе отказано");
				}
			}
			function onShart54(){
				function showMovie(age){
					return;
				}
				alert("Фильм не для всех");
			}
			function onShart55(){
				function doNothing(){}
				alert(doNothing());
				function doNothing(){
					return;
				}
				alert(doNothing()===undefined);
			}
			function onShart56(){
				// var age=+prompt("","");
				function checkAge(age) {
					return (age < 18) ? true : confirm('Родители разрешили?');
				}
				function checkAge(age) {
	  				return (age > 18) || confirm('Родители разрешили?');
				}
			}
			function onShart57(){
				function pow(x, n){
					var result=x;
					for (var i=1; i<n; i++){
						result*=x;
					}
					return result;
				}
				var x=prompt("x?","");
				var n=prompt("n?","");
				if(n<=1){
					alert("Степень "+n+"не поддерживается, Введите целую степень, большую 1");
				}else{
					alert(pow(x, n));
				}
			}
			function onShart58(){
				function min(a, b,){
					return a<b;				
				}
				var test=min(2, 5);
				alert(test);			
			}
			function onShart59(){
				function min(a , b, c, d, e){	
					var m=a;//можно убрать var и использовать только "a" 
					if(b<m) m=b;
					if(c<m) m=c;
					if(d<m) m=d;
					if(e<m) m=e;
					return m;
				}
				var a=+prompt("a","");
				var b=+prompt("b","");
				var c=+prompt("c","");
				var d=+prompt("d","");
				var e=+prompt("e","");
				alert(min(a,b,c,d,e));
			}				  
	    	function onShart60(){
					// function chop(a, b){
					// for(;a<=b;a++){
					// console.log(a);
					// }
					// }
					// chop(5, 15);
					// }	
//----------------------------------------------------------------------
					// function chop(a, b){
					// for(;a<=b;a++){
					// console.log(a);
					// }
					// }
					// var yakum = +prompt("a","");
					// var duyum = +prompt("b","");
					// chop(yakum, duyum);
					// }
//---------------------------------------------------------------------
					// function chop(a, b){
					// var str="";
					// for(;a<=b;a++){
					// str+=a+",";
					// }
					// console.log(str);
					// }
					// var yakum = +prompt("a","");
					// var duyum = +prompt("b","");
					// chop(yakum, duyum);
					// }			
//---------------------------------------------------------------------
				function chop(a, b){
					var str="";
					for(;a<=b;a++){
						str+=a+",";
					}
					return str;
				}
				var yakum = +prompt("a","");
				var duyum = +prompt("b","");
				var natija=chop(yakum, duyum);
				alert(natija);
			}
			function onShart61(){
				// function test(a, b){
				// var str="";					
				// if(a>b){
				// var m=a;
				// a=b;
				// b=m;
				// }					
				// for(;a<=b;a++){
				// str+=a+",";
				// }
				// return str;
				// }
				// var one=+prompt("a","");
				// var two=+prompt("b","");
				// var result=test(one, two);
				// alert(result);
//-------------------------------------------------------------
				function test(a, b){
					var str="";
					if(a>b){
						for(;a>=b;a--){
							str+=a+",";
						}
					}else{
						for(;a<=b;a++){
							str+=a+",";
						}
					}
					return str;
				}
				var one=+prompt("a","");
				var two=+prompt("b","");
				var result=test(one, two);
				alert(result);
			}
			function onShart62(){
				function pow(x) {
				var n=0;
				for (var i = 1; i <= x; i++) {
					n+=i;
				}
				return n;
				}
				var x = +prompt("x?", '');
				alert(pow(x));
			}

			function onShart63(){
				function pow(n) {
					var z=0;
					var y=50;
					var result=0;
					if(n<z || n>y){
						return "ввод только от 0 до 50";
					}
					for (var i = n; i <= y; i++) {
						result+=i;					
					}
					return result;
				}
				var n = +prompt("n?", '');
				alert(pow(n));
			}
			function onShart64(){
				function pow(n) {
					var z=0;
					var y=50;
					var result=0;
					if(n<z || n>y){
						return "ввод только от 0 до 50";
					}
					for (; n<= y; n++) {
						result+=n;					
					}
					return result;
				}
				var n = +prompt("n?", '');
				alert(pow(n));
			}
			function onShart65(){
				function pow(n, x) {
					var result=0;
					for (; n <= x; n++) {
						result+=n;					
					}
					return result;
				}
				var n = +prompt("n?","");
				var x = +prompt("x?","")
				alert(pow(n, x));
			}
			function onShart66(){
				// function pow(n, x) {
				// 	var result=0;
				// 	for (; n <= x; n++){
				// 		if (n % 2 == 0) continue;	
				// 		result+=n;										
				// 	}
				// 	return result;
				// }
				// var n = +prompt("n?","");
				// var x = +prompt("x?","")
				// alert(pow(n, x));
//--------------------------------------------------------------------
				// function pow(n, x) {
				// 	var result=0;
				// 	for (; n <= x; n++){
				// 		if (n % 2){	
				// 			result+=n
				// 		}										
				// 	}
				// 	return result;
				// }
				// var n = +prompt("n?","");
				// var x = +prompt("x?","")
				// alert(pow(n, x));
//--------------------------------------------------------------------
				function pow(n, x) {
					var result=0;
					for (; n <= x; n++){
						if (n % 2 == 0){	
							result+=n
						}										
					}
					return result;
				}
				var n = +prompt("n?","");
				var x = +prompt("x?","")
				alert(pow(n, x));									
			}
			function onShart67(){
				function sayHi(){
					alert("Hello!");
				}
				alert(sayHi);
			}
			function onShart68(){
				// function sayHi(){
				// 	alert("Hello!");
				// }
				// var func=sayHi;
				// func();
				// sayHi=null;
				// sayHi();
//-------------------------------------------------------------------
				function sayHi(){// Function Declaration
					alert("Hello!");
				}
				var func=sayHi;
				func();
				alert(func);
			}	
			function onShart69(){//Function Expression
				var sayHi=function(person){
					alert("Hello, "+person);
				}
				sayHi("Baho");
			}
//----------------------------------------------------------------
					// // Function Declaration
					// function sum(a, b) {
					// return a + b;
					// }

					// // Function Expression
					// var sum = function(a, b) {
					// return a + b;
					// }
//-----------------------------------------------------------------	
			function onShart70(){
			//Function Declaration при use strict видны только внутри блока, в котором объявлены. Так как код в учебнике выполняется в режиме use strict, то будет ошибка.

				// var age=+prompt("сколько вам лет?", 20);
				// if(age>=18){
				// 	function sayHi(){
				// 		alert("Прошу вас!");
				// 	}	
				// 	}else{
				// 	function sayHi(){
				// 		alert("До 18 нельзя");
				// 		}	
				// 	}
				// 	sayHi
//-----------------------------------------------------------------------
				//А что, если использовать Function Expression?

				// var age=prompt("сколько вам лет?","");
				// var sayHi;
				// if(age>=18){
				// 	sayHi=function(){
				// 		alert("Прошу вас!");
				// 	}
				// }else{
				// 	sayHi=function(){
				// 		alert("До 18 нельзя!");
				// 	}
				// }
				// sayHi();
//----------------------------------------------------------------------
						//Или даже так:-
				var age=prompt("сколько вам лет?","");
				var sayHi=(age>=18)?
					function(){alert("Прошу Вас!");}:
					function(){alert("До 18 нельзя");};
				sayHi();
	//Оба этих варианта работают правильно, поскольку, в зависимости от условия, создаётся именно та функция, которая нужна.							
			}	
			function onShart71(){
				//Анонимные функции

				// function ask(question, yes, no){
				// 	if(confirm(question)) yes()
				// 	else no();
				// }
				// function showOk(){
				// 	alert("Вы согласились.");
				// }
				// function showCancel(){
				// 	alert("Вы отменили выполнение.");
				// }
				// ask("Вы согласны?", showOk, showCancel);
//----------------------------------------------------------------------------
				function ask(question, yes, no){
					if(confirm(question)) yes()
					else no();	
				}
				ask(
				"Вы согласны?", 
				function(){alert("Вы согласились.");}, 
				function(){alert("Вы отменили выполнение.");}
				);
			}	
			function onShart72(){
				   //new Function
				var sum = new Function("a,b", "return a+b;");
				var result=sum(1,2);
				alert(result);	
			}		
			function onShart73(){
				function pow(n) {
					var result=1;
					if(n<10);
					for (var i = 1; i <= n; i++) {
						result*=i;
					}
					return result;
					}
					var n = +prompt("n?", '');
					alert(pow(n));	
			}		
			function onShart74(){
				// function pow(n) {
				// 	var z=0;
				// 	var y=50;
				// 	var result=0;
				// 	if(n<z || n>y){
				// 		return "ввод только от 0 до 50";
				// 	}
				// 	for (var i = n; i <= y; i++) {
				// 		result+=i;					
				// 	}
				// 	return result;
				// }
				// var n = +prompt("n?", '');
				// alert(pow(n));
//---------------------------------------------------------
				// function pow(n){
				// 	var result=1;
				// 	var sum=0;
				// 	for (var i=1; i <= n; i++){
				// 		if(i==1) {
				// 			sum = sum + result;
				// 			continue;	
				// 		}
				// 		result=result*2;
				// 		sum = sum + result;
				// 	}
				// 	return sum;
				// }
				// var n = +prompt("n?", '');
				// alert(pow(n));
//-----------------------------------------------				
				function pow(n){					
					var result=1;
					var sum=1;
					for( var i=2; i<=n; i++){
						result*=2;
						sum+=result;
					}
					return sum;
				}
				var n = +prompt("n?", '');
				alert(pow(n));
			}	
			function onShart75(){
				function ok(r, p){					
					return r*=r*p;										
				}
				var r=+prompt("радиус?","");
				alert(ok(r, 3.14));
			}	









	</script>
	<title>js</title>
	</head>	   
	<body>
		<br>
		<br>
		<br>
		<div>
			<button class="btn btn-primary" onclick="onShart1()">Shart1</button>
			<button class="btn btn-success" onclick="onShart2()">Shart2</button>
			<button class="btn btn-info" onclick="onShart3()">Shart3</button>
			<button class="btn btn-warning" onclick="onShart4()">Shart4</button>
			<button class="btn btn-danger" onclick="onShart5()">Shart5</button>
			<button class="btn btn-default" onclick="onShart6()">Shart6</button>
			<button class="btn btn-primary" onclick="onShart7()">Shart7</button>
			<button class="btn btn-success" onclick="onShart8()">Shart8</button>
			<button class="btn btn-info" onclick="onShart9()">Shart9</button>
			<button class="btn btn-warning" onclick="onShart10()">Shart10</button>
			<button class="btn btn-danger" onclick="onShart11()">Shart11</button>
			<button class="btn btn-black" onclick="onShart12()">Shart12</button>
			<button class="btn btn-primary" onclick="onShart13()">Shart13</button>
		</div>
		<hr>
		<div>
			<button class="btn btn-default" onclick="onShart14()">Shart14</button>
			<button class="btn btn-primary" onclick="onShart15()">Shart15</button>
			<button class="btn btn-success" onclick="onShart16()">Shart16</button>
			<button class="btn btn-info" onclick="onShart17()">Shart17</button>
			<button class="btn btn-warning" onclick="onShart18()">Shart18</button>
			<button class="btn btn-danger" onclick="onShart19()">Shart19</button>
			<button class="btn btn-default" onclick="onShart20()">Shart20</button>
			<button class="btn btn-primary" onclick="onShart21()">Shart21</button>
			<button class="btn btn-success" onclick="onShart22()">Shart22</button>
			<button class="btn btn-info" onclick="onShart23()">Shart23</button>
			<button class="btn btn-warning" onclick="onShart24()">Shart24</button>
			<button class="btn btn-danger" onclick="onShart25()">Shart25</button>
		</div>
		<hr>
		<div>
			<button class="btn btn-black" onclick="onShart26()">Shart26</button>
			<button class="btn btn-warning" onclick="onShart27()">Shart27</button>
			<button class="btn btn-default" onclick="onShart28()">Shart28</button>
			<button class="btn btn-primary" onclick="onShart29()">Shart29</button>
			<button class="btn btn-success" onclick="onShart30()">Shart30</button>
			<button class="btn btn-info" onclick="onShart31()">Shart31</button>
			<button class="btn btn-warning" onclick="onShart32()">Shart32</button>
			<button class="btn btn-danger" onclick="onShart33()">Shart33</button>
			<button class="btn btn-default" onclick="onShart34()">Shart34</button>
			<button class="btn btn-primary" onclick="onShart35()">Shart35</button>
			<button class="btn btn-success" onclick="onShart36()">Shart36</button>
			<button class="btn btn-info" onclick="onShart37()">Shart37</button>
		</div>
		<hr>
		<div>
			<button class="btn btn-warning" onclick="onShart38()">Shart38</button>
			<button class="btn btn-danger" onclick="onShart39()">Shart39</button>
			<button class="btn btn-black" onclick="onShart40()">Shart40</button>
			<button class="btn btn-primary" onclick="onShart41()">ощибка1</button>
			<button class="btn btn-default" onclick="onShart42()">оригинал</button>
			<button class="btn btn-primary" onclick="onShart43()">Shart43</button>
			<button class="btn btn-success" onclick="onShart44()">Shart44</button>
			<button class="btn btn-info" onclick="onShart45()">Shart45</button>
			<button class="btn btn-warning" onclick="onShart46()">Shart46</button>
			<button class="btn btn-danger" onclick="onShart47()">Shart47</button>
			<button class="btn btn-black" onclick="onShart48()">Shart48</button>
			<button class="btn btn-primary" onclick="onShart49()">Shart49</button>
		</div>
		<hr>
		<div>
			<button class="btn btn-default" onclick="onShart50()">Shart51</button>
			<button class="btn btn-primary" onclick="onShart51()">Shart52</button>
			<button class="btn btn-success" onclick="onShart52()">Shart52</button>
			<button class="btn btn-info" onclick="onShart53()">Shart53</button>
			<button class="btn btn-warning" onclick="onShart54()">Shart54</button>
			<button class="btn btn-danger" onclick="onShart55()">Shart55</button>
			<button class="btn btn-black" onclick="onShart56()">Shart56</button>
			<button class="btn btn-primary" onclick="onShart57()">Shart57</button>
			<button class="btn btn-default" onclick="onShart58()">Shart58</button>
			<button class="btn btn-primary" onclick="onShart59()">Shart59</button>
			<button class="btn btn-success" onclick="onShart60()">Shart60</button>
			<button class="btn btn-info" onclick="onShart61()">Shart61</button>
		</div>
		<hr>
		<div>
			<button class="btn btn-warning" onclick="onShart62()">Shart62</button>
			<button class="btn btn-danger" onclick="onShart63()">Shart63</button>
			<button class="btn btn-black" onclick="onShart64()">Shart64</button>
			<button class="btn btn-primary" onclick="onShart65()">Shart65</button>
			<button class="btn btn-default" onclick="onShart66()">Shart66</button>
			<button class="btn btn-primary" onclick="onShart67()">Shart67</button>
			<button class="btn btn-success" onclick="onShart68()">Shart68</button>
			<button class="btn btn-info" onclick="onShart69()">Shart69</button>
			<button class="btn btn-warning" onclick="onShart70()">Shart70</button>
			<button class="btn btn-danger" onclick="onShart71()">Shart71</button>
			<button class="btn btn-black" onclick="onShart72()">Shart72</button>
			<button class="btn btn-primary" onclick="onShart73()">Shart73</button>
		</div>
		<hr>
		<div>			
			<button class="btn btn-default" onclick="onShart74()">Shart74</button>
			<button class="btn btn-primary" onclick="onShart75()">Shart75</button>
			<button class="btn btn-success" onclick="onShart76()">Shart76</button>
			<button class="btn btn-info" onclick="onShart77()">Shart77</button>
		</div>   
	</body>
</html>
