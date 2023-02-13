/*Tikud
väävel/pulk							masinkoodi käsk
1 tikk								masinkoodi makrokäsk
50 tops								programmeerimiskeele lihtsam käsk
500 pakk							programmeerimiskeele keerukam käsk
10000 suurem pakk					omaloodud alamprogramm (pythoni ulatus eelmises kursuses)
1000000 euroalus					klass/objekt (tüüp millega majandada; moodul)
100000000 konteiner					teenused/teeniustegrupid*/

class isikukood {
	static  kuud:string[] =["", "Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember" ];
	constructor(protected kood :string) {}
	synniaasta () :string{
		let algus='20';
		if(this.kood[0]<'5') {
			algus='19';
		}
		return algus+ this.kood.substring(1,3);
	}
	sugu () {
		return (parseInt(this.kood[0]) % 2 == 0) ? "N" : "M";
	}
	kuupaev () {
		return this.kood.substring(5,7) + "." + this.kood.substring(3,5) + "." + this.synniaasta();
	}
	kuu () {
		return isikukood.kuud[parseInt(this.kood.substring(3,5))];
	}
}

//lisage käsklus pp.kk.aaaa kujul kuupäeva väljastuseks
//käsklus kuu nimetuse tagastuseks

let iris:isikukood=new isikukood("60106130240");
console.log(iris.synniaasta());
console.log(iris.sugu());
console.log(iris.kuupaev());
console.log(iris.kuu());