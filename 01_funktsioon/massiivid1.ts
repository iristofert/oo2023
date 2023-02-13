let eesnimed:string[]=["Juku", "Kati"];
eesnimed.push("Madis");
eesnimed.push("Mari");
console.log (eesnimed[0], eesnimed.length, eesnimed[eesnimed.length-1]);
for(let i:number=0; i<eesnimed.length; i++) {
	console.log(eesnimed[i]);
}

for(let eesnimi of eesnimed) {
	console.log(eesnimi);
}

console.log("Sigmond".length, eesnimed[0].length)

//kuva iga eesnime tähtede arv
for(let i:number=0; i <eesnimed.length; i++) {
	console.log(eesnimed[i].length);
}
//teine variant
for(let eesnimi of eesnimed) {
	console.log(eesnimi.length);
}

function nimepikkus(eesnimi: string) : number{
	return eesnimi.length;
}

console.log(nimepikkus("Malle"));
console.log(eesnimed.map(nimepikkus));

console.log(eesnimed.map(function(eesnimi) {return eesnimi.length;}))


console.log(eesnimed.map(eesnimi => eesnimi.length));

console.log(eesnimed.map(eesnimi => eesnimi[0]));
console.log(eesnimed.join("-"));