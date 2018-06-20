$(document).ready(function(){
    $('#translate').click(translate);
});
 
function translate(){
        var APIkey = "trnsl.1.1.20170914T035029Z.00acc37c362b438f.6e0271e3e41919be72cb17de52a320ac4aaf029d";
        var language = $('#language').val();
        var translateText = $("#en-text").val().replace(" ","+");
        $.getJSON("https://translate.yandex.net/api/v1.5/tr.json/translate?key="
		+APIkey+"&lang=en-"+language
		+"&text="+ translateText +"&callback=?", 
		function(data){
                $('#output').empty();
                $('#output').html(data.text[0]);
        });
}