function strCount(str,letter){

    if (str.length === 0) {
        return [];
      }
   arrCount = str.split('').filter(c=> c==letter).length

    return {str:str, arrCount:arrCount}
}