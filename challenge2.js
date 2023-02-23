function strCount(str,letter){
   arrCount = str.split('').filter(c=> c==letter).length 

    return {str:str, arrCount:arrCount}
}