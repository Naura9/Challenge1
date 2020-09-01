bmi = (bb, tb) => {
    const a = bb / Math.pow((tb / 100 ), 2);
    var s;
    if(a < 18,5){
        return s = "Kekurangan berat badan";
    }else if(a >= 18.5 && a <= 24.9){
        return s = "Normal (ideal)";
    }else if(a >= 25 && a <= 29.9){
        return s = "Kelebihan berat badan";
    }else{
        return s = "Kegemukan (obesitas)";
    }
}

console.log("Ukuran BMI : " + bmi(60,170));