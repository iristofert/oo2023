class Kilpkonn {
	protected suund:string= 'paremale';
	constructor (protected x:number, protected y:number) {}
	toString():string {
		return this.x+","+this.y;
	}
	//koosta funktsioon edasi, mis liigutab kilpkonna x-teljel ühe ühiku võrra edasi
	edasi ():void{
		if(this.suund=='paremale') {this.x=this.x+1;}
		if(this.suund=='alla') {this.y=this.y+1;}
		if(this.suund=='vasakule') {this.x=this.x-1;}
		if(this.suund=='yles') {this.y=this.y-1;}
	}
	keeraParipaeva () {
	// õpeta kilpkonn pöörama
		if(this.suund=='paremale') {this.suund='alla';}
		else if(this.suund=='alla') {this. suund='vasakule';}
		else if (this.suund=='vasakule') {this.suund='yles';}
		else if (this.suund=='yles') {this.suund='paremale'}
	}
	liikumine (plaan:string) :void{
		for(let i=0; i<plaan.length; i++) {
		if (plaan[i]=='e') {this.edasi();}
		if (plaan[i]=='k') {this.keeraParipaeva();}
		}
	}
}
//andke kilpkonnale käsklus plaani järgi liikumiseks 
//eeeeekekee
let k1:Kilpkonn=new Kilpkonn(3,5);
console.log(k1.toString());
k1.edasi();
k1.liikumine('eeeeekekee')
console.log(k1.toString());
let k2:Kilpkonn=new Kilpkonn(11,2);
k2.keeraParipaeva();
k2.edasi();
console.log('teine', k2.toString());