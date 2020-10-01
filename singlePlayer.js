import {callSingleEndpoint} from "./callSingleEndpoint"

const jquery= require("jquery");

///Call Endpoint

function handleSubmitSingle(event){
    const PlayerAnswer = $("#playerAnswer").val();

    callSingleEndpoint(PlayerAnswer);

}

$(document).ready(function(){
    $("#SubmitBtn").click(handleSubmitSingle);
})


