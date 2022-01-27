"use strict";

const isDate = text => {
/**
 * Check if a given date text is a valid date (leap years excluded).
 * 
 * @param {string} text - The date text in MM/DD/YYYY format.
 * 
 * @returns {boolean} - Whether given string is a valid date.
 */
	if( ! /^[01]?\d\/[0-3]\d\/\d{4}$/.test(text) ) { return false; }
	
	const index1 = text.indexOf( "/" );
	const index2 = text.indexOf( "/", index1 + 1 );
	const month = parseInt( text.substring( 0, index1 ) );
	const day = parseInt( text.substring( index1 + 1, index2 ) );
	
	if( month < 1 || month > 12 ) { return false; }
	else {
        switch(month) {
            case 2:
                if(day > 28) {return false;}
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                if (day > 30) {return false;}
                break;
            default:
                if(day > 31) {return false;}
        }
    }
	return true; 
};

$(document).ready( () => {
/**
 * Run on document ready.
 */
    $( "#save" ).click( () => {
        $("span").text("");   // clear any previous error messages
        let isValid = true;   // initialize isValid flag
        
        const email = $("#email").val();
        const phone = $("#phone").val();
        const zip = $("#zip").val();
        const dob = $("#dob").val();
        
        if ( email === "" || !email.match(/^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/) ) {
            isValid = false;
            $("#email").next().text("Please enter a valid email.");
        }
        if ( phone === "" || !phone.match(/^\d{3}-\d{3}-\d{4}$/) ) {
            isValid = false;
            $("#phone").next().text("Please enter a phone number in NNN-NNN-NNNN format.");
        }
        if ( zip === "" || !zip.match(/^\d{5}(-\d{4})?$/) ) {
            isValid = false;
            $("#zip").next().text("Please enter a valid zip code.");
        }
        if ( dob === "" || !isDate(dob) ) {
            isValid = false;
            $("#dob").next().text("Please enter a valid date in MM/DD/YYYY format.");
        }
        
        if (isValid) { 
            // code that saves profile info goes here
        }
        
        $("#email").focus(); 
    });
    
    // set focus on initial load
    $("#email").focus();
});