const printDiamondShape = (rows) => {
    for( var i=1; i <= rows ; i++){
    console.log( " ".repeat(rows-i) + "* ".repeat(i) );
    }
    for( var j=rows-1; j > 0 ; j--){
        console.log( " ".repeat(rows-j) + "* ".repeat(j) );
    }
};

printDiamondShape(10);