# Assignment 1
## 12-1: Develop the Change Calculator
In this exercise, you’ll create an application that displays the minimum number of quarters, dimes, nickels, and pennies that make up the number of cents specified by the user.
### Instructions
1. In the JavaScript file, note the jQuery ready() event method, and the start of an event handler for the click event of the Calculate button. Also note that the ready event handler sets the focus on the cents text box.
2. In the event handler for the Calculate button, get the value entered by the user and make sure it’s an integer that’s between 0 and 99. If it isn’t, display an alert dialog box a validation message.
3. If the number entered by the user is valid, write code to calculate the number of coins needed for the cents entered by the user. Start with the quarters and work your way down to the pennies. Use the Math.floor() method to round your results to the next lower integer whenever needed. And use the number of cents remaining from the last calculation as the starting point for the next calculation.
4. Display the number for each coin in the corresponding text box. Be sure to display whole numbers. Finally, set the focus on the cents text box for the next calculation.
---
## 12-2: Develop the Calendar Application
In this exercise, you’ll create an application that displays a calendar for the current month.
### Instructions
1. In the HTML file, note the span element within the h1 element that will display the month name and year. Note also the table element that contains one row. To build the calendar, you need to add rows to this table after the row that it already contains.
2. In the CSS file, note the style rule for the td elements of the table. The rules in this set will format the calendar as shown above.
3. In the JavaScript file, note the ready event handler and two functions. A getMonthText() function that accepts the number for a month and returns the month name in text. And the start of a getLastDayofMonth() function.
4. Write the code for the getLastDayofMonth() function. It should use the currentMonth parameter to calculate and return the last day of the current month.
5. In the ready event handler, write the code that gets and displays the name of the current month and the current year above the month table.
6. In the ready event handler, write the code that loops through the days of the month to create the rows for the calendar. Remember to deal with the blank dates that can occur at the beginning of the first week and the end of the last week of the month. Use a tr element for each new row and td elements within the rows for the days of the months. To display the rows, use the jQuery html() method of the calendar table.
---
## 12-3: Develop a Password Generator
In this exercise, you’ll develop an application that generates strong passwords of the length entered by the user.
### Instructions
1. In the JavaScript file, note the getRandomNumber() function. Also, note that the ready event handler contains the handler for the click event of the Get Password button and the handler for the click event of the Clear button. The handler for the Get Password button clears the password text box and has a constant named chars that contains some characters. The handler for the Clear button resets the text boxes and moves the focus to the first text box.
2. In the handler for the Get Password button, get the value entered by the user and make sure it’s a number. If it isn’t, display an alert dialog box with this message: “Please enter a valid number”.
3. If the number entered by the user is valid, code a for loop that iterates that number of times. In each iteration of the loop, randomly select one of the characters from the chars constant and concatenate it to the password variable.
4. When the loop is finished, display the password in the password textbox.