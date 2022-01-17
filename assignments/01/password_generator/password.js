"use strict";

const getRandomNumber = max => {
/**
 * Gets a random number from 1 to max.
 * 
 * @param {number} max - The maximum bound of random numbers.
 * 
 * @returns {number} - A random integer.
 */
	let random = null;
	if (!isNaN(max)) {
		random = Math.random();             // value >= 0.0 and < 1.0
		random = Math.floor(random * max);  // value is an integer between 0 and max - 1
		random = random + 1;                // value is an integer between 1 and max
	}
	return random;
};

const makePassword = (length, characters) => {
/**
 * Make a password of the given length from the possible character included in characters.
 * 
 * @param {number} length - The desired password length.
 * @param {string} characters - A string of possible password characters.
 * 
 * @returns {string} - The created password.
 */
    let password = ``;
    for (let characterNumber = 0; characterNumber <= length; characterNumber++) {
        password += characters[getRandomNumber(characters.length) - 1];
    }
    return password;
}

const generatePassword = () => {
/**
 * Generate a password of specified length and using given characters.
 * 
 * @returns {string} - A password of desired length composed of given characters.
 */
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
    const passwordLength = $("#num").val();
    $("#password").val( "" ); // clear previous entry
    if (Number.isInteger(password)){
        alert(`Please enter a valid number!`);
        $("#num").val( "" );
    }
    else {
        const password = makePassword(passwordLength, chars);
        $("#password").val(password);
    } 
}

const clearEntries = () => {
/**
 * Clear the current user entries.
 */
    $("#num").val( "" );
    $("#password").val( "" );
    $("#num").focus();
}

$(document).ready( () => {
/**
 * Run on document ready.
 */
    $("#generate").click(generatePassword); // end click()
    
    $("#clear").click(clearEntries); // end click()
    
    // set focus on initial load
    $("#num").focus();
}); // end ready()