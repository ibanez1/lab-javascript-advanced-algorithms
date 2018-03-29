var theStack = new StackDataStructure();

$ (document).ready(function(){

startStack ()
$(".value-push").on("click", function(){
  var valor = $(".stack-column input").val();
  addElement(valor);
});



$(".pop").on("click",function(){
  deleteElement();
});
});


function addElement (element) {
if (theStack.push(element) != "Stack Overflow") {
  $ (".stack > .is-empty:last")
  .addClass ("full")
  .removeClass ("is-empty")
  .html (element);
  $ (".stack-column > .notification").html("");

}else {
  $(".stack > .is-empty:last")
  .addClass ("full")
  .removeClass ("is-empty")
  .html (element);

  $(".stack-column > .notification").html ("Full Stack");
} 
}

function deleteElement () {
  if (theStack.pop () != "Stack Underflow") {
    $(".stack > .full:first")
    .addClass ("is-empty")
    .removeClass ("full")
    .html ("");
    $ (".stack-column > .notification").html ("");
  }
  else {
    $(".stack > .full:first")
    .addClass ("is-empty")
    .removeClass ("full")
    .html("");
    $(".stack-column > .notification").html("Empty Stack");
  }
}

function startStack () {

  var check = theStack.MAX_SIZE;
  for (var i  = 0; i < check; i++) {
    $ (".stack").append("<div class="is-empty"> </div>");
    }
}

 

