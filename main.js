function isPrime(num){
    if (!(num > 1)) return false
    
    for (let i = 2; i <= Math.pow(num, 1/2); i++){
      if ((num / i) % 1 == 0)
        {
          return false
        }
    }
    return true
    
  }