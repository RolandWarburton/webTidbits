
//START DOC LOAD
$( document ).ready(function() {
  if (typeof jQuery == 'undefined') {alert("jQuery IS NOT loaded")}
  else {
    console.log('jquery loaded');
  }

  document.documentElement.setAttribute("data-browser", navigator.userAgent);


}); //CLOSE
