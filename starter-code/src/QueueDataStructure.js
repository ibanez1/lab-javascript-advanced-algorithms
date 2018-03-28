function QueueDataStructure () {

  this.queueControl = [];
  this.MAX_SIZE = 0
}

QueueDataStructure.prototype.isEmpty  = function (){
  if (this.queueControl.length == 0) {
    return true;
  }
  else {
    return false
  }

};

QueueDataStructure.prototype.canEnqueue = function(){

  if (this.MAX_SIZE < 1) {
    return true
  }
  else{
    return false
  }
}



QueueDataStructure.prototype.enqueue = function (element) {
 
   if (this.canEnqueue()) {
     this.queueControl.push(element);
     return this.queueControl.reverse();
   } else {
     return "Queue Overflow";
   }
 };


 QueueDataStructure.prototype.dequeue = function (){

     if (this.queueControl.length !== 0){   
          return this.queueControl.pop()
         }
     else {
       return "Queue Underflow"
     }    
}

