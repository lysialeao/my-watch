export function getTime() {
    var date =new Date()
	var hour =date.getHours()
	var min =date.getMinutes()
	var sec =date.getSeconds()

    if(hour < 10){
        hour="0"+hour
    }
    if(min < 10){
        min="0"+min
    }
    if(sec < 10){
        sec="0"+sec
    }

    var hours = hour + ":" + min + ":" + sec
    return hours
  }