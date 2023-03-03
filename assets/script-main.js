function responsive() {
    var x = document.getElementById("mynavbar");
    var cont = document.getElementsByClassName("dropdown-content");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
      for(i=0;i<cont.length;i++)
      cont[i].style.display = '';
    }
  }

// functii pentru navbar - meniuri
// algoritizam tot ce inseamna actiunea unui meniu din navbar prin javascript pentru omiterea dublu clickurilor

function show(index){
    var cont = document.getElementsByClassName("dropdown-content");
    if(cont[index].style.display == '')
        k = 0;
    else
        k = 1;
    for(i=0;i<cont.length;i++)
    cont[i].style.display = '';
    setTimeout(function(){var cont = document.getElementsByClassName("dropdown-content");
    if(k == 0)
    cont[index].style.display = 'block';
} , 50)
}

function hide(){
    var cont = document.getElementsByClassName("dropdown-content");
    for(i=0;i<cont.length;i++)
    cont[i].style.display = 'none';
}

// trick pentru disparitia meniurilor navbarului atunci cand apasam click in afara lui

$('html').click(function() {
  var cont = document.getElementsByClassName("dropdown-content");
  for(i=0;i<cont.length;i++)
    cont[i].style.display = '';
  var top = document.getElementById("mynavbar");
  top.className = "navbar";
});

$('#mynavbar').click(function(event){
    event.stopPropagation();
});


