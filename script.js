setInterval(function(){
    $("#currentDay").text(moment().format("dddd, MMMM, Do, YYYY, h:mm:ss a"))
  }, 1000);
  
  
  $(".saveBtn").on("click", function(){
    var text = $(this).siblings(".inputText").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour,text);
    console.log(hour,text)})
  $("#hour9 .inputText").val(localStorage.getItem("hour9"))
  $("#hour10 .inputText").val(localStorage.getItem("hour10"))
  $("#hour11 .inputText").val(localStorage.getItem("hour11"))
  $("#hour12 .inputText").val(localStorage.getItem("hour12"))
  $("#hour13 .inputText").val(localStorage.getItem("hour13"))
  $("#hour14 .inputText").val(localStorage.getItem("hour14"))
  $("#hour15 .inputText").val(localStorage.getItem("hour15"))
  $("#hour16 .inputText").val(localStorage.getItem("hour16"))
  $("#hour17 .inputText").val(localStorage.getItem("hour17"))
  
  function timeTracker() {
  
    var time = moment().hour();
  
    
    $(".rowTime").each(function () {
        var rowTime = parseInt($(this).attr("id").split("hour")[1]);
  
        
        if (rowTime < time) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (rowTime === time) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
  
        }
    })
  }timeTracker();
    