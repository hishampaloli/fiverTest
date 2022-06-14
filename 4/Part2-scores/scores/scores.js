"use strict";

const displayScores = (scores, scoresString) => {};

const score = [];
const scoresString = [];

let fName;

$(document).ready(() => {
  $("#add_button").click(() => {
    // get the add form ready for next entry
    fName = $("#first_name").val();
    const lName = $("#last_name").val();
    const scores = $("#score").val();
    let iNum = parseInt(scores);
    $("#first_name").focus();
    let checkInd = Number.isInteger(iNum);

    if (fName === "" || lName === "" || scores === "") {
      alert("Please enter Everything");
      textbox.focus();
    } else if (!checkInd) {
      alert("Please enter valid score");
      textbox.focus();
    } else {
      // add task to array
      scoresString.push([fName + ", " + lName + ": " + scores]);
      score.push(iNum);

      const average = score.reduce((a, b) => a + b, 0) / score.length;

      $("#first_name").val("");
      $("#last_name").val("");
      $("#score").val("");

      $("#scores").val(scoresString.join("\n"));
      $("#avr_score").text(average);
    }
  }); // end click()

  $("#clear_button").click(() => {
    $("#avr_score").text("");
    $("#scores").val("");
    score.splice(0, score.length);
    scoresString.splice(0, scoresString.length);

    $("#first_name").focus();
  }); // end click()

  $("#sort_button").click(() => {
    scoresString.sort();
    $("#scores").val(scoresString.join("\n"));
  }); // end click()

  $("#first_name").focus();
}); // end ready()
