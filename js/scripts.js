function onoff(){
  let lght =  document.getElementById("light");
  
  if(lght.src.match("img/on.png")){
    document.getElementById("light").src="img/off.png"
    document.getElementById("button").innerHTML = "ანთება"
  }else{
    document.getElementById("light").src="img/on.png"
    document.getElementById("button").innerHTML = "ჩაქრობა"
  }
  
}


