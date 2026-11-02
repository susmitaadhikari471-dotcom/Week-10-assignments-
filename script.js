// --- Part 1: Time-based Greeting ---
// 3. Use prompt() to ask for the user's name[span_3](start_span)[span_3](end_span)
let userName = prompt("susmita adhikari:");

// 4. Use new Date().getHours() to get the current hour[span_4](start_span)[span_4](end_span)
let currentHour = new Date().getHours(); 

// 5. Write an if-else structure to print a personalized greeting to the console[span_5](start_span)[span_5](end_span)
if (currentHour < 12) {
    console.log("Good morning, " + userName + "!");
} else if (currentHour < 18) {
    console.log("Good afternoon, " + userName + "!");
} else {
    console.log("Good evening, " + userName + "!");
}

// --- Part 2: Age and Days Lived Verification ---
// 6. Use prompt() again to ask for the user's birth year[span_6](start_span)[span_6](end_span)
let birthYear = prompt("2026:");

// 7. Calculate the user's age using a variable (e.g., let age = 2026 - birthYear;)[span_7](start_span)[span_7](end_span)
let age = 2026 - birthYear;

// 8. Calculate the approximate number of days the user has lived[span_8](start_span)[span_8](end_span)
let daysLived = age * 365;
console.log("You have lived for approximately " + daysLived + " days!");

// 9. Write another if-else structure to print to the console[span_9](start_span)[span_9](end_span)
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
