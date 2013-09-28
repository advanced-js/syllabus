function assert(pass, msg){
  var type = pass ? "PASS" : "FAIL";
  jQuery("#results").append("<li class='" + type + "'><b>" + type + "</b> " + msg + "</li>");
}
function error(msg){
  jQuery("#results").append("<li class='ERROR'><b>ERROR</b> " + msg + "</li>");
}
function log(){
  var msg = "";
  for ( var i = 0; i < arguments.length; i++ ) {
    msg += " " + JSON.stringify(arguments[i]);
  }
  jQuery("#results").append("<li class='LOG'><b>LOG</b> " + msg + "</li>");
}
var deepEqual = _.isEqual;
