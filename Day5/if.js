const matchscore = 200;
if (matchscore > 200) {
    console.log("Team Won")
}
else if (matchscore == 200) {
    console.log("Match is Draw");
}
else if (matchscore >= 200) {
    console.log("Your team match is draw or you win ");
}
else {
    console.log("Team Loss");

}


/// ===///
const youtube = "fifa";
if (youtube === "study") {
    console.log("User watched Most of the videos related fifa");
}
else {
    console.log("Otherwise Watched Study Lecture");
}


///  !== ///
const name = "Muhammad Shahzaib"
if (name !== "Muhammad Ali") {
    console.log("You r Not MUhammad Shahzaib ")
}
else {
    console.log("You are Muhammad Shahzaib")
}

// >  <  //
const cssscore = 80;
if (cssscore > 90) {
    console.log("You are a Good Developer")
}
else if (cssscore < 65) {
    console.log("Your are  average Developer")

}
else {
    console.log("You are not a Developer")
}


// &&  //
const party = "winter"
let vote = 80;
if (party == "winter" && vote == 70) {
    console.log("Party Not Confirm yet")
}
else if (party == "summer" && vote == 80) {
    console.log("party Cancel")
}
else {
    console.log("party confirm")
}


/// || ///


const welcomeparty = "winter"
let colleaguevote = 80;
if (welcomeparty == "winter" || colleaguevote == 70) {
    console.log("Welcome Party Confirm for New Students ")
}
else {
    console.log("party Not confirm yet.")
}