// create cards for each team member and put the full HTML together
generateHTML = (myTeam) => {
    
    // created to hold the team cards
    let teamCards = [];
    
    for (var i = 0; i<myTeam.length; i++){
        if (myTeam[i].type === 'Manager') {
            let managerCard = generateManagerCard(myTeam[i]);
            teamCards.push(managerCard);
        } else if (myTeam[i].type === 'Engineer') {
            let engineerCard = generateEngineerCard(myTeam[i]);
            teamCards.push(engineerCard);
        } else if (myTeam[i].type === 'Intern'){
            let internCard = generateInternCard(myTeam[i])
            teamCards.push(internCard);
        }
        
    };

    const allTeamCards = teamCards.join('');
    
    const indexHTML = generateFullHTML(allTeamCards);
    return indexHTML;
};

// create full HTML with all employee cards
const generateFullHTML = (allTeamCards) => {
return `
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Team Profile Generator</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
</head>
<body>
    <header class="bg-success p-3">
        <h1 class="display-3 text-center text-white fw-bolder">My Team</h1>
        <div class="display-3 text-center text-white fw-bolder"><i class="fas fa-users"></i></div>
    </header>
  <div class="container">
    <div class="row">
        ${allTeamCards}
    </div>  
  </div>  
</body>
</html>
`
};

// create html manager card
const generateManagerCard = (manager) => {
    return `
    <div class="col-3 m-3">
    <div class="card">
      <div class="card-header bg-primary text-white">
        <h2>${manager.name}</h2>
        <h3><i class="fas fa-coffee"></i> ${manager.type}</h3>
      </div>
      <div class="card-body"></div>
        <p class="border m-2">ID: ${manager.id}</p>
        <p class="border m-2"><i class="fas fa-envelope-square"></i><a href="${manager.email}"> ${manager.email}<br></a></p>
        <p class="border m-2">Office: ${manager.officeNumber}</p>
    </div>
</div>
`
};

// create html engineer card
const generateEngineerCard = (engineer) => {
    return `
    <div class="col-3 m-3">
    <div class="card">
      <div class="card-header bg-danger text-white">
        <h2>${engineer.name}</h2>
        <h3><i class="fas fa-cogs"></i> ${engineer.type}</h3>
      </div>
      <div class="card-body"></div>
        <p class="border m-2">ID: ${engineer.id}</p>
        <p class="border m-2"><i class="fas fa-envelope-square"></i><a href="mailto:${engineer.email}"> ${engineer.email}<br></a></p>
        <p class="border m-2">GitHub: ${engineer.gitHub}</p>
    </div>
  </div>
`
};

// create html intern card
const generateInternCard = (intern) => {
    return `
    <div class="col-3 m-3">
    <div class="card">
      <div class="card-header bg-warning text-white">
        <h2>${intern.name}</h2>
        <h3><i class="fas fa-graduation-cap"></i> ${intern.type}</h3>
      </div>
      <div class="card-body"></div>
        <p class="border m-2">ID: ${intern.id}</p>
        <p class="border m-2"><i class="fas fa-envelope-square"></i><a href="${intern.email}"> ${intern.email}<br></a></p>
        <p class="border m-2">School: ${intern.school}</p>
    </div>  
  </div>
`
};

module.exports = generateHTML;