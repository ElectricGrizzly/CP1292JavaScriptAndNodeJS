"use strict";

const getMonthText = currentMonth => {
/**
 * Get the month string for a month number.
 * 
 * @param {number} currentMonth - The current month number value.
 */
	if (currentMonth === 0) { return "January"; }
	else if (currentMonth === 1) { return "February"; }
	else if (currentMonth === 2) { return "March"; }
	else if (currentMonth === 3) { return "April"; }
	else if (currentMonth === 4) { return "May"; }
	else if (currentMonth === 5) { return "June"; }
	else if (currentMonth === 6) { return "July"; }
	else if (currentMonth === 7) { return "August"; }
	else if (currentMonth === 8) { return "September"; }
	else if (currentMonth === 9) { return "October"; }
	else if (currentMonth === 10) { return "November"; }
	else if (currentMonth === 11) { return "December"; }
};

const getLastDayofMonth = currentMonth => {
/**
 * Get the last day of the given month integer.
 * 
 * @param {number} currentMonth - The current month as an integer (Jan == 1)
 * 
 * @returns {number} lastDayOfMonth - The last day of the given month.
 */
	const endOfMonth = new Date();
	endOfMonth.setMonth(currentMonth + 1);
	endOfMonth.setDate(0);
	return endOfMonth.getDate();
};

const displayCurrentDate = date => {	
/**
 * Display the current month and year in document from given date value.
 * 
 * @param {object} date - A Date object
 */
	$("#month_year").text(`${getMonthText(date.getMonth())} ${date.getFullYear()}`);
}

const getPreviousMonthDays = date => {
/**
 * Get the calendar days corresponding to days of the previous month as blank table cells.
 * 
 * @param {object} date - A Date object.
 * 
 * @returns {string} - Opening table row and blank table data cells.
 */
	date.setDate(1);
	let previousMonthDays = `<tr>`;
	for (let weekday = 0; weekday < date.getDay(); weekday++) {
		previousMonthDays += `<td></td>`;
	}
	return previousMonthDays;
}

const getMonthDays = date => {
/**
 * Get the calendar days in a month with weeks a table rows.
 * 
 * @param {object} date - A Date object.
 * 
 * @returns {string} - A string representing table rows and table cell data.
 */
	const previousDays = getPreviousMonthDays(date);
	const targetMonth = date.getMonth();
	let week = previousDays;
	let month = ``;
	while (date.getMonth() == targetMonth) {
		week += `<td>${date.getDate()}</td>`;
		if (date.getDay() % 7 === 6) {
			month += week + `</tr>`;
			week = `<tr>`;
		}
		date.setDate(date.getDate() + 1);
	}

	return month + week + getNextMonthDays(date);
}

const getNextMonthDays = date => {
/**
 * Get the calendar days corresponding to days of the next month as blank table cells.
 * 
 * @param {object} date - A Date object.
 * 
 * @returns {string} - Blank table data cells and closing table row.
 */
	let nextMonthDays = ``;
	if (date.getDate() <= getLastDayofMonth(date.getMonth())) {
		for (let weekday = date.getDay(); weekday < 7; weekday++) {
			nextMonthDays += `<td></td>`;
		}	
	}
	// return the blank cells and close table row
	return nextMonthDays + `</tr>`;
}

const displayCalendar = date => {
/**
 * Display the monthly calendar corresponding to the month of date
 * 
 * @param {object} date - A Date object.
 */
	const calendar = $("#calendar");
	const month = getMonthDays(date);
	calendar.append(month);
}

$(document).ready(function(){
/**
 * Run on document ready
 */
	const currentDate = new Date();
	displayCurrentDate(currentDate);
	displayCalendar(currentDate);
});