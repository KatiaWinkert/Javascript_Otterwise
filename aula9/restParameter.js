const functionRest = (a,b, ...rest) => {
    console.log(rest);

}

functionRest (1 , 2, 3, 4, 5);