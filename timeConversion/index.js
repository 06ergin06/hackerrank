function timeConversion(s){
    const hours = s[0] + s[1]
    const minutes = s[3] + s[4]
    const second = s[6] + s[7]
    const period = s[8] + s[9]
    const ahours = parseInt(hours,0)
     if (period === "AM"){
        if (ahours !== 12){
            console.log(hours + ":" + minutes + ":" + second)
        }
        else {
            const mhours = "00"
            console.log(mhours + ":" + minutes + ":" + second)
        }
    }

    else if (period === "PM"){
        if (ahours !== 12){
            const mhours = ahours + 12
            console.log(mhours + ":" + minutes + ":" + second)
        }
        else{
            const mhours = "12"
            console.log(mhours + ":" + minutes + ":" + second)
        }

    }
     else{
         return("invalid")
     }

}

timeConversion("12:45:54PM")