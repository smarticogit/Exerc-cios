const input = "cAPS"

function processData(input) {
    let upper = input.toUpperCase();
    let segunda = input.slice(1).toUpperCase();
    if(input === upper) {
       console.log(input.toLowerCase());
    } else if (input[0] === input[0].toLowerCase() && input.slice(1) === segunda) {
        let newinput = input.slice(1, input.length);
                console.log(`${input[0].toUpperCase()}${newinput.toLowerCase()}`);
    } else {
        console.log(input);
    }
} 
processData (input)
