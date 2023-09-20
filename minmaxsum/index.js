function miniMaxSum(arr) {
    arr.sort(function (a,b){return a-b});
    const minSum = arr[0] + arr[1] + arr[2] + arr[3]
    const maxSum = arr[1] + arr[2] + arr[3] + arr[4]
    console.log(minSum,maxSum)
}
miniMaxSum([1,2,3,4,5]) 