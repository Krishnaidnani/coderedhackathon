$(function(){
    $("#id3").on({
        keyup:function(){
            var places=[
                "MARKET ANALYSIS",
                "SHOPPING",
                "about us",
            ];
            var i=0;
            var j=0;
            var arr=[];
            
            var input=document.getElementById('id3').value.toLowerCase();
            var div=document.getElementById('id4');
            if(input.length>0){
                $("#id4").empty();
                while(i<places.length){
                    var words=places[i].toLowerCase();
                    if(words.includes(input)){
                        var p1=document.createElement('p');
                        p1.className = "place"; // Add a class to the dynamically created paragraph
                        p1.innerHTML=words;
                        div.appendChild(p1);
                    } 
                    i=i+1;
                }
                $("#id4").slideDown();
                
                $("#id4").on("click", ".place", function(event) {
                    var selectedPlace = event.target.innerText;
                    if (selectedPlace === "SHOPPING") {
                        window.location.href = "index.html"; 
                    } if (selectedPlace === "MARKET ANALYSIS") {
                        window.location.href = "C:\Users\jyoti\OneDrive\Desktop\new wool\daashboard\index.html";
                    }
                });
                
                $("#id3").blur(function(){
                    $("#id4").slideUp(1000);
                });
            } else {
                $("#id4").css({"display":"none"});
            }      
        }
    });
});

