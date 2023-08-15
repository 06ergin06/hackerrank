function staircase(n) {
    for (let i = 1; i <= n; i++){
        const space = " ".repeat(n - i)
        const stair = "#".repeat(i)
        console.log(space + stair)
    }
}
staircase(6)