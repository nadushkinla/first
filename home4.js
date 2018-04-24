//1.Создать функцию double(), которая будет принимать в качестве аргумента число и удваивать его
function double (n){
	return 2*n;
}
console.log('double(2)='+double(2));

//2.Создать функцию bye(), которая через prompt() будет спрашивать имя пользователя и прощаться с ним
function bye(){
	var name = prompt('имя пользователя','вася');
  console.log("До свидания, "+name);
}
bye();

//3.Создать функцию exponent() таким образом, чтобы можно было вызвать её до создания 
console.log('exponent(3,3)='+exponent(3,3));
function exponent(number,pow) {	
    var result = 1;
    for(var i = 0; i < pow; i++){
   		 result = result * number;
    }
    return result;  
}

//4 Доработать наш пример из лекции с функцией result()

//сума
function sum(x,y){
	return x+y;
};
//разница
function sub(x,y){
	return x-y;
};
//умножения
function mult(x,y){
	return x*y;
};
//деления
function dividing(x,y){
	return x/y;
};
// деления по модулю
function mod(x,y){
	return x%y;
};
//возведения первого числа в степень второго.
function pow(x,y){
	return Math.pow(x,y);
};

function result(x,y, foo){
	return foo(x,y);
};
console.log('result(2,2,sum)='+result(2,2,sum));
console.log('result(2,2,sub)='+result(2,2,sub));
console.log('result(3,3,mult)='+result(3,3,mult));
console.log('result(3,2,dividing)='+result(3,2,dividing));
console.log('result(3,2,mod)='+result(3,2,mod));
console.log('result(3,2,pow)='+result(3,2,pow));
