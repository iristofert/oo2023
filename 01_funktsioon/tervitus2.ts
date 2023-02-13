let eesnimi:string ="Mari";
console.log("tere," + eesnimi);

//for(let i:number=0; i<5; i++) {
	console.log("tere");
//}

//if(eesnimi =="Mari") {
	console.log("tule minu juurde!");
//}

//korrutustabel
for(let rida:number=1; rida<=10; rida++) {
	let puhver:string="";
	for(let veerg:number=1;veerg <=10; veerg++) {
		let korrutis:number=rida*veerg;
		if(korrutis<10) {
		puhver+=" ";
		}
		puhver+=rida*veerg+" ";
	}
	console.log(puhver);
}