function birthdayCakeCandles(candles) {
    const maxAge = Math.max(...candles);
    let count = 0;
    for (let i = 0;i < candles.length; i++){
        if (candles[i] === maxAge){
            count ++;
        }
    }
    console.log(count)
}
birthdayCakeCandles([3,2,3,1])