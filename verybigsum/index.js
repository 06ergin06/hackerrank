function aVeryBigSum(ar) {
    let sum = BigInt(0);
    for (let i = 0;i < ar.length;i++){
        sum += BigInt(ar[i])
    }
    console.log(sum)
}
aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005])