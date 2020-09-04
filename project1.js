let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

for (let i = 0; i < 2; i++){
	let a = prompt("введите обязательный расходов в этом месяце" , ''),
			b = prompt("восколька обайдеться?",'');

	if ( (typeof(a))=== 'string' && (typeof(a)) !=null && (typeof(b)) !=null && a != '' && b !='' && a.length <50) {
		console.log("done");
		appData.expenses[a]=b;
	} else {
	}
	};

appData.moneyPerDay = appData.budget /30;

alert("ежедневный бюджет:" + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
	console.log("минимальный уревен достатки");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("средний уревен достатки");
} else if (appData.moneyPerDay > 2000) {
	console.log("высокий уревен достатки");
} else {
	console.log("произашло ошибка")
}




    
