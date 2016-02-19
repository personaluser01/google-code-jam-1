"use strict"
var fs  = require("fs");
let output_string = '';
let input_array;
let case_number = 0;
let final_text = '';

fs.readFileSync('../../../../codejamcases/reverse-word-input.txt').toString().split('\n').forEach(line => {
    if (line !== "" && case_number !== 0) {
        output_string = ''
        input_array = line.split(" ");
        for (let i = input_array.length - 1; i >= 0; i--) {
          output_string += (input_array[i]) + ' ';
        };
        final_text+=`Case #${case_number} : ${output_string.trim()}\n`
    };
    case_number++;
});

fs.writeFile('reversewords-output.es6.out', final_text, error => {
    (error) ? console.log(error) : console.log('File Saved!')
});
