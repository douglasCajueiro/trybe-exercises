let score = 110;

if (score < 0 || score > 100) {
    console.log("You typed an invalid score, please try again!");

} else {

    if (score >= 90) {
        score = "A";

    } else
    if (score >= 80) {
        score = "B";

    } else
    if (score >= 70) {
        score = "C";

    } else
    if (score >= 60) {
        score = "D";

    } else
    if (score >= 50) {
        score = "E";

    } else {
        score = "F";
    }
    console.log("Your score is: " + score);
}