function printEquilateralPattern(rows) {
    for( var i=1; i <= rows; i++){
      console.log(" ".repeat(rows-i) + "* ".repeat(i))
    }
  }
  
  
  printEquilateralPattern(10);