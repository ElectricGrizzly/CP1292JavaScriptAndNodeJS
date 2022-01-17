"use strict";

const makeChange = cents => {
/**
 * Calculate change amount and displays results to user.
 * 
 * @param {number} cents - The amount of cents to make change from.
 */
    const change_ids = [`#quarters`, `#dimes`, `#nickels`, `#pennies`];
    const change_values = [25, 10, 5, 1];
    const change_amounts = toGroups(cents, change_values);
    change_ids.forEach((change_id, index) => {
        $(change_id).val(change_amounts[index]);
    });
    }
    
const toGroups = (starting_value, group_array) => {
/**
 * Determine the integer quotient for specific values from a starting value.
 * 
 * @param {number} starting_value - The starting value to split into groups.
 * @param {array} group_array - The group values to find.
 * 
 * @return {array} groups - The number for each group, in the same order as group_array.
 */
    let groups = [];
    let remainder = starting_value;
    group_array.forEach(value => {
        const group_amount = Math.floor(remainder / value);
        remainder -= group_amount * value;
        groups.push(group_amount);
    });
    return groups;
}

const calculateChange = () => {
/**
 * Check if user cents entry is valid and then calculate change amounts.
 * 
 */
    const cents_min = 0;
    const cents_max = 99;
    const cents = parseInt($("#cents").val());
    console.log(cents);
    if (cents > cents_min && cents <= cents_max) {
        makeChange(cents);
        $("#cents").focus();
    }
    else {
        alert(`Please enter a value from ${cents_min} to ${cents_max}`);
    }
}

$(document).ready( () => {
/**
 * Run on document ready.
 */
    $("#calculate").click(calculateChange); // end click() method
    
    // set focus on cents text box on initial load
    $("#cents").focus();
            
}); // end ready() method