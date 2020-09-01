const barang = [
    {nama: "Beras", harga: 10000, jumlah: 5},
    {nama: "Gula", harga: 14000, jumlah: 5},
    {nama: "Telur", harga: 20000, jumlah: 2},
    {nama: "Minyak Goreng", harga: 9000, jumlah: 10},
]

total = () =>{
    let jumlah = barang.reduce(function(value, element){
        return value + element.harga * element.jumlah;
    },0);
    return (
        new Int1.NumberFormat('de-De', {
            style: 'currency', currency: 'IDR'
        }).format(jumlah)
    );
}

barang.map(
    (bar, index) => {
        console.log(bar.nama +"\t"+bar.harga +"\t"+ bar.jumlah);
    }
)
console.log("Total Harga Bu Astuti: "+total());