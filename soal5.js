class lingkaran {
    constructor(r){
        this.r = r
    }
    
    luas = () => {
        return 3.14 * (this.r * this.r)
    }
    keliling = () => {
        return 3.14 * (this.r * 2)
    }
}
//tabung
class tabung extends lingkaran{
    constructor(r,t){
        super(r)
        this.t = t
    }
    volume = () => {
        return (3.14 * (this.r * this.r)) * this.t
    }
    luasPermukaan = () => {
        return ((3.14 * (this.r * 2) * this.t) + (2 *(3.14 * (this.r * this.r))))
    }
    luasSelimut = () => {
        return (3.14 * (this.r * 2)) * this.t
    }
}

//print
let tabung1 = new tabung (7.5,50);
console.log("Gelas : ");
console.log("Volume : " + tabung1.volume());
console.log("Luas Permukaan : " + tabung1.luasPermukaan());
console.log("Luas Selimut : "+tabung1.luasSelimut());
console.log("-------");

//kerucut
class kerucut extends lingkaran{
    constructor(r,t,s){     //s adalah garis pelukis yg harus dicari menggunakan phytagoras
        super(r)            //setelah dihitung garis pelukisnya 22,3
        this.t = t
        this.s = s
    }
    volume = () => {
        return 3.14 * (this.r * this.r) * this.t / 3
    }

    luasPermukaan = () => {
        return (3.14 * (this.r * this.r)) + (3.14 * this.r * this.s)
    }
    luasSelimut = () => {
        return 3.14 * this.r * this.s
    }
}
//print
let kerucutt = new kerucut (10,40,22,3);
console.log("Traffic Cone : ");
console.log("Volume : "+ kerucutt.volume());
console.log("Luas Permukaan : " + kerucutt.luasPermukaan());
console.log("Luas Selimut : " + kerucutt.luasSelimut());
console.log("-------"); 

//bola
class bola extends lingkaran{
    constructor(r){
        super(r)
    }

    volume = () => {
        return 4/3 * 3.14 * this.r * this.r * this.r
    }
    luasPermukaan = () => {
        return 4 * 3.14 * (this.r * this.r)
    }
}
//print
let bolaa = new bola (15);
console.log("Bola : ");
console.log("Volume : "+ bolaa.volume());
console.log("Luas Permukaan : "+ bolaa.luasPermukaan());