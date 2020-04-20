
/* busqueda de personajes */
function FuncionPersonajes(){
var temp = document.querySelector('ul');
temp.style.color = "white";
fetch('https://swapi.py4e.com/api/people') 
.then(function(response) {   
  return response.json(); 
})
.then(function(FPersonajes) {
  let Personajes = FPersonajes.results; 

  for(p of Personajes) {
    
    let listItem = document.createElement('li'); 
    listItem.innerHTML = '<p>' + p.name + '</p>'; 
    temp.appendChild(listItem);
       
  }

});
}
/* busqueda de planetas*/
function FuncionPlanetas(){
var temp = document.querySelector('ul');
temp.style.color = "white";
fetch('https://swapi.py4e.com/api/planets') 
.then(function(response) {   
  return response.json(); 
})
.then(function (FPlanetas) {
  let Planetas = FPlanetas.results; 

  for(p of Planetas) {
    
    let listItem = document.createElement('li'); 
    listItem.innerHTML = '<p>' + p.name + '</p>'; 
    temp.appendChild(listItem);  
  }

});
} 

/* busqueda de peliculas*/
function FuncionPeliculas(){
  var temp = document.querySelector('ul');
  temp.style.color = "white";
  fetch('https://swapi.py4e.com/api/films') 
  .then(function(response) {   
    return response.json(); 
  })
  .then(function (FPeliculas) {
    let Peliculas = FPeliculas.results; 
  
    for(p of Peliculas) {
      
      let listItem = document.createElement('li'); 
      listItem.innerHTML = '<p>' + p.title + '</p>'; 
      temp.appendChild(listItem);  
    }
  
  });
  } 
  
/* busqueda de peliculas*/
function FuncionNaves(){
  var temp = document.querySelector('ul');
  temp.style.color = "white";
  fetch('https://swapi.py4e.com/api/starships') 
  .then(function(response) {   
    return response.json(); 
  })
  .then(function (FNaves) {
    let Naves = FNaves.results; 
  
    for(p of Naves) {
      
      let listItem = document.createElement('li'); 
      listItem.innerHTML = '<p>' + p.name + '</p>'; 
      temp.appendChild(listItem);  
    }
    });
  } 
function FuncionLimpiar(elementID){
  document.getElementById(elementID).innerText = ""; 
}