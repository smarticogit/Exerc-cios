function taximetro (min, km) {
    let minpadrao = 20;
    let valormin = 50;
    let valoradd = 30;
    let totalmin;
    let kmpadrao = 10;
    let valorkm = 70;
    let kmadd = 50;
    let totalkm;
    if(min > 20) {
        totalmin = ((min - minpadrao ) * valoradd) + (minpadrao * valormin);
    } else {
        totalmin = min * valormin;
    }
    if(km > 10) {
        totalkm = ((km - kmpadrao ) * kmadd) + (kmpadrao * valorkm);
    } else {
        totalkm = km * valorkm;
    }
    console.log(totalmin+totalkm);
};

taximetro(25, 11.5)

