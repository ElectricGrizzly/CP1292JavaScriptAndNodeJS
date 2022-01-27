# 13-1: Use a Switch Statement to Validate a Date
In this exercise, you’ll improve the code that validates a date in the Account Profile application. When you’re done, the application will correctly validate dates like 11/31/2020 or 2/30/2021.
## Instructions
1. Enter values for all the values on the form. For the Date of Birth field, enter the invalid date 11/31/1980, and click Save. Note that the application accepts this date as valid.
2. Change the Date of Birth to 13/31/1980, and click Save. Note that this time the application doesn’t accept the date.
3. In the JavaScript file, note the isDate() function and the ready event handler with a handler for the click event of the Save button that contains the validation code.
4. In the isDate() function, remove the if statement that makes sure the value of the day constant isn’t greater than 31. Replace it with an else statement that contains a switch statement that evaluates the value of the month constant.
5. Code a case label for the value 2 that returns false if the value of the day constant is greater than 28 and returns true otherwise. Note that this doesn’t handle leap years, but that’s OK for this exercise.
6. Code case labels for the values 4, 6, and 9 that fall through to the case label for 11. The code for case label 11 should return false if the value of day is greater than 30 and true otherwise.
7. Code a default case that returns false if the value of day is greater than 31 and true otherwise.
8. Run the application and test it with the invalid dates from steps 2 and 3. The application should now correctly identify both of these dates as invalid.
