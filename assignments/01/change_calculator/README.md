# 12-2: Develop the Calendar Application
In this exercise, you’ll create an application that displays a calendar for the current month.
## Instructions
1. In the HTML file, note the span element within the h1 element that will display the month name and year. Note also the table element that contains one row. To build the calendar, you need to add rows to this table after the row that it already contains.
2. In the CSS file, note the style rule for the td elements of the table. The rules in this set will format the calendar as shown above.
3. In the JavaScript file, note the ready event handler and two functions. A getMonthText() function that accepts the number for a month and returns the month name in text. And the start of a getLastDayofMonth() function.
4. Write the code for the getLastDayofMonth() function. It should use the currentMonth parameter to calculate and return the last day of the current month.
5. In the ready event handler, write the code that gets and displays the name of the current month and the current year above the month table.
6. In the ready event handler, write the code that loops through the days of the month to create the rows for the calendar. Remember to deal with the blank dates that can occur at the beginning of the first week and the end of the last week of the month. Use a tr element for each new row and td elements within the rows for the days of the months. To display the rows, use the jQuery html() method of the calendar table.