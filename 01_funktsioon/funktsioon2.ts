


//teine variant
function korrutustabel1 (ridu:number, veerge:number) :string {
	//koostage puhvri abil näide
	let puhver:string=""
	for(let rida:number=1; rida<=ridu; rida++) {
		let reapuhver="";
		for(let veerg:number=1;veerg <=veerge; veerg++) {
			let korrutis:number = rida*veerg;
			if(korrutis<10) {
			reapuhver+=" ";
			}
			reapuhver+=korrutis+" ";
		}
		puhver+=reapuhver+"\n";
	}
	return puhver;
}
console.log(korrutustabel1(5, 7));