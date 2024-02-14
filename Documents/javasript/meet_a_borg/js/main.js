let robots = document.querySelector('.bots')

fetch("js/robots.json")  
    .then(response => response.json())  
    .then(data => {  
        console.log(data);  
        robots.innerHTML= "";
        data.robots.forEach(function(robot){
        robots.innerHTML += `<div>${robot.first_name + " " +  robot.last_name}</div><img src="${robot.portrait}" alt="robot" class="beau" data-userID="${robot.id-1}"><div>${robot.description}</div>`})
    })  
    .catch(error => {    
        console.error("Erreur lors de la récupération des données :", error);  
    });