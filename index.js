

const rootDiv = document.querySelector('.root');

let catalogOpen = false;
let aboutTheProductOpen = false;

//Create first page
registrationForm = () =>{

        
        let title = document.createElement('h1');
        let form = document.createElement('form');

        rootDiv.appendChild(title);
        rootDiv.appendChild(form);

        title.innerText = 'Registration Form';

        let nameInput = document.createElement('input');
        let lastNameInput = document.createElement('input');
        let registrationButton  =  document.createElement('button');

        nameInput.className = 'firstName';
        lastNameInput.className = 'lastName';
        registrationButton.innerText = 'Registration';

        form.appendChild(nameInput);
        form.appendChild(lastNameInput);
        form.appendChild(registrationButton);


        registrationButton.onclick = (e) =>{

            e.preventDefault();

            rootDiv.innerHTML = '';
            
            navMenu();
            furnitureСatalog();
        }

        registrationOpen = true;
        catalogOpen = false; 
        navMenuOpen = false;
        aboutTheProductOpen = false;
    
}
registrationForm();


//Create navigation menu
navMenu = () => {
        const nav = document.createElement('div');
        const catalogButton = document.createElement('a');
        const exitButton = document.createElement('a');
        
    
        catalogButton.onclick = () => {
            furnitureСatalog();
        }

        exitButton.onclick = () => {
            rootDiv.innerHTML = '';
            registrationForm();
        }
        

        catalogButton.innerText = 'Catalog';
        exitButton.innerText = 'Exit';


        rootDiv.appendChild(nav);
        nav.appendChild(catalogButton);
        nav.appendChild(exitButton);
    
    
}


    //Create catalog page
    furnitureСatalog = () => {
        
        if(!catalogOpen){

            const secondPage = document.createElement('div');

                        //hero

            let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
            var request = new XMLHttpRequest();
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
            request.onload = function() {
                var productCatalog = request.response;
                console.log(productCatalog);
                
                populateHeader(productCatalog);
                showHeroes(productCatalog);
              }

            function populateHeader(jsonObj) {
                var myH1 = document.createElement('h1');
                myH1.textContent = jsonObj['squadName'];
                secondPage.appendChild(myH1);
                
                var myPara = document.createElement('p');
                myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
                secondPage.appendChild(myPara);
            }

            function showHeroes(jsonObj) {
                var heroes = jsonObj['members'];
                    
                for (var i = 0; i < heroes.length; i++) {
                  var myArticle = document.createElement('article');
                  var myH2 = document.createElement('h2');
                  var myPara1 = document.createElement('p');
                  var myPara2 = document.createElement('p');
                  var myPara3 = document.createElement('p');
                  var myList = document.createElement('ul');
              
                  myH2.textContent = heroes[i].name;
                  myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
                  myPara2.textContent = 'Age: ' + heroes[i].age;
                  myPara3.textContent = 'Superpowers:';
                      
                  var superPowers = heroes[i].powers;
                  for (var j = 0; j < superPowers.length; j++) {
                    var listItem = document.createElement('li');
                    listItem.textContent = superPowers[j];
                    myList.appendChild(listItem);
                  }
              
                  myArticle.appendChild(myH2);
                  myArticle.appendChild(myPara1);
                  myArticle.appendChild(myPara2);
                  myArticle.appendChild(myPara3);
                  myArticle.appendChild(myList);
              
                  secondPage.appendChild(myArticle);
                }
              }

              //hero

            secondPage.className = 'second page';
            secondPage.innerHTML = 'вторая страница'; 

            rootDiv.appendChild(secondPage);
            catalogOpen = true;
        }
        catalogOpen = true; 
        aboutTheProductOpen = false;
    }




