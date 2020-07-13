$(document).ready(function () {
  $("form#questions").submit(function (event) {
    event.preventDefault();
    const color = $("#color").val();
    const animal = $("#animal").val();
    const age = $("#age").val();
    const music = $("#music").val();
    const sitcom = $("sitcom").val();

    let language;
    if (color === 'blue') {
      language = "Ruby";
    }

    let language;
    if (color === 'red') {
      language = "Java Script";
    }

    let language;
    if (color === 'purple') {
      language = "Python"
    }

    $("#language").text(language);
    $("#reveal").show();
  });
});