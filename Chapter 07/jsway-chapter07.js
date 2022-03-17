/*
!Musketeers

TODO: Write a program that:

    Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
    Shows each array element using a for loop.
    Adds the "D'Artagnan" value to the array.
    Shows each array element using the forEach() method.
    Remove poor Aramis.
    Shows each array element using a for-of loop.
*/

function theMusketeers() {
    let musketeers = ['Athos', 'Porthos', 'Aramis'];

    for (let i = 0; i < musketeers.length; i++) {
        console.log(musketeers[i]);
    }

    musketeers.push("D'Artagnan");

    musketeers.forEach(musketeer => console.log(musketeer));

    musketeers = musketeers.filter(musketeer => !(musketeer === 'Aramis'));

    for (let musketeer in musketeers) {
        console.log(musketeers[musketeer]);
    }
}

// theMusketeers();

/*

TODO: Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

*/
function sumOfValues() {
    const values = [3, 11, 7, 2, 9, 10];
    
    console.log(values.reduce((total, current) => total + current));

}

// sumOfValues();

/*

TODO: Write a program that creates the following array, then calculates and shows the array's maximum value.

*/
function arrayMaximum() {
    const values = [3, 11, 7, 2, 9, 10];

    console.log(Math.max(...values));
}

// arrayMaximum();

/*

TODO: Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

*/
function listOfWords() {
    let input = [];
    do {
        if (input[input.length - 1] === "") {
            input.push(prompt(
                "Please enter a word. (type 'stop' to list the words you chose)"
            ));
        }
        input.push(prompt(
            "Please enter another word. (type 'stop' to list the words you chose)"
        ));
    } while (input[input.length - 1].toLowerCase() != 'stop')

    input.filter(elem => elem.toLowerCase() != 'stop').forEach(elem => console.log(elem));


}

listOfWords();