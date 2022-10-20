
  function calculate(num){
    document.getElementById("be").value+=num;
  }
  function clearscreen(){
    document.getElementById("be").value="";
  }
  function total(){
    var p=document.getElementById("be").value;
    var q=eval(p);
    document.getElementById("be").value=q;
  }
