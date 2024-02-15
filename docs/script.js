window.onload = function() {
    setInterval(function(){
        var date = new Date();
        var displayDate = date.toLocaleDateString();
        var displayTime = date.toLocaleTimeString();

        document.getElementById('datetime').innerHTML = displayDate + " " + displayTime;
    }, 1000); // 1000 milliseconds = 1 second
}


/* My new function to check if the name field contain only alphabets */
function checkName(submitcheck) {
      var letters = /^[A-Za-z]+$/;
      if(submitcheck.value.match(letters))
      {
      alert('Your name is Valid');
      console.log('Your name is Valid');
      return true;
      }
      else
      {
      alert('Please input alphabet characters only');
      console.log("Please input alphabet characters only")
      return false;
      }
    }