

function clickMeButton(){
    var count=0;
    document.getElementById("clickMe").addEventListener("click",()=>{
        console.log("THe curent count is",++count);
    })
}
clickMeButton();