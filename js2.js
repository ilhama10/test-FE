const input = [8, 7, 7, 9, 5, 4, 2, 9];
let a = input.length;

function result(input)
{
    input.sort();
    if (a % 2 != 0)
        return input[parseInt(a / 2)];
 
    return (input[parseInt((a - 1) / 2)] + input[parseInt(a / 2)]) / 2.0;
}
    
    console.log(result(input));