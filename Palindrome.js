
 //palindrome

 let pal = "noon"

 let result = pal.split('').reverse().join('')
 //let final = console.log(result)

 if(pal===result){
    console.log(result + " - the given word is a palindrom")
 }
 else{
    console.log(result + " -  the given word is not a palindrom")
 }

 //using loop

 let PAL = "radar"
 let Reverse = ''

 for(let i=PAL.length-1; i>=0; i--){
Reverse = Reverse+ PAL[i]
 }

 if(PAL === Reverse){
    console.log("palindrom")
 }else{
    console.log("not palindrom")
 }