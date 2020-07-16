$(document).ready(function () {
  $("form#questions").submit(function (event) {
    event.preventDefault();
    const color = $("#color").val();
    const animal = $("#animal").val ();
    const age = $("#music").val ();
    const music = $("#music").val ();
    const sitcom = $("sitcom").val();

    let program;
    if (animal === 'dog') {
      program = "Ruby";
    }
    else if (animal === 'cat' && color === 'red') {
      program = "Python";
    }
    else {
      program = "Java Script";
    }

    $("#program").text(program);
    $("#reveal").show();

  })
})

