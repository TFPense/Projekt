const jquery= require("jquery");
//
$ = window.$ = window.jquery = jquery;


function callSingleEndpoint(Answer){
    event.preventDefault();

    var x = document.getElementById("singlePlayerResult");

    const apiUrl =
    "https://mighty-depths-83263.herokuapp.com/ssp?" +
    "&playerDecision=" +
    Answer;

    $.get({
        url: apiUrl,
        success: function (data, status) {
          console.log("Data: " + data + "\nStatus: " + status);
          var obj = JSON.parse(data);
          
          x.innerHTML = "  The Winner is:   " + "   " + obj.winner;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          alert(textStatus, errorThrown);
        },
      });
}

export {callSingleEndpoint};