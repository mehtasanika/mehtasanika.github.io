function addZero (number) {
	if(number < 10) {
		number= "0" + number;
	}


	return number;
}


function startTime() {
	var today = new Date();
  	var hour = today.getHours();
  	var minutes = addZero(today.getMinutes());
  	var seconds = addZero(today.getSeconds());

  document.getElementById('hour').innerHTML = hour;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;
 }

 setInterval(startTime, 1000)