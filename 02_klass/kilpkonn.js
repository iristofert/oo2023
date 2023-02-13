var Kilpkonn = /** @class */ (function () {
    function Kilpkonn(x, y) {
        this.x = x;
        this.y = y;
        this.suund = 'paremale';
    }
    Kilpkonn.prototype.toString = function () {
        return this.x + "," + this.y;
    };
    //koosta funktsioon edasi, mis liigutab kilpkonna x-teljel ühe ühiku võrra edasi
    Kilpkonn.prototype.edasi = function () {
        if (this.suund == 'paremale') {
            this.x = this.x + 1;
        }
        if (this.suund == 'alla') {
            this.y = this.y + 1;
        }
        if (this.suund == 'vasakule') {
            this.x = this.x - 1;
        }
        if (this.suund == 'yles') {
            this.y = this.y - 1;
        }
    };
    Kilpkonn.prototype.keeraParipaeva = function () {
        // õpeta kilpkonn pöörama
        if (this.suund == 'paremale') {
            this.suund = 'alla';
        }
        else if (this.suund == 'alla') {
            this.suund = 'vasakule';
        }
        else if (this.suund == 'vasakule') {
            this.suund = 'yles';
        }
        else if (this.suund == 'yles') {
            this.suund = 'paremale';
        }
    };
    Kilpkonn.prototype.liikumine = function (plaan) {
        for (var i = 0; i < plaan.length; i++) {
            if (plaan[i] == 'e') {
                this.edasi();
            }
            if (plaan[i] == 'k') {
                this.keeraParipaeva();
            }
        }
    };
    return Kilpkonn;
}());
//andke kilpkonnale käsklus plaani järgi liikumiseks 
//eeeeekekee
var k1 = new Kilpkonn(3, 5);
console.log(k1.toString());
k1.edasi();
k1.liikumine('eeeeekekee');
console.log(k1.toString());
var k2 = new Kilpkonn(11, 2);
k2.keeraParipaeva();
k2.edasi();
console.log('teine', k2.toString());
