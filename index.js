

const rootDiv = document.querySelector('.root');
const nav = document.createElement('div');
const bodyPage = document.createElement('div');

let catalogOpen = false;
let aboutTheProductOpen = false;

const arrjson = [
      {
        name: 'Кресло "Инжир" Matroluxe',
        price: 1887,
        height: 150,
        width: 30,
        image: 'https://mebelnuy.com.ua/image/cache/catalog/goods/image/09/094d4bf3-5eb1-11e7-80d0-d8d385808fae_0-800x800.jpg',
        id: 1
      },
      {
        name: 'Кресло-груша "ФЭТБОЙ" Matroluxe',
        price: 1887,
        height: 150,
        width: 30,
        image: 'https://mebelnuy.com.ua/image/cache/catalog/goods/image/0f/0f4c3220-5eb1-11e7-80d0-d8d385808fae_0-645x645.jpg',
        id: 2
      },
      {
        name: 'Кресло "Яблоко" Matroluxe',
        price: 1887,
        height: 150,
        width: 30,
        image: 'https://mebelnuy.com.ua/image/cache/catalog/goods/image/09/094d4bf0-5eb1-11e7-80d0-d8d385808fae_0-645x645.jpg',
        id: 3
      }
]

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

        
        const catalogButton = document.createElement('a');
        const exitButton = document.createElement('a');
        
    
        catalogButton.onclick = () => {
            
            furnitureСatalog();
            
        }

        exitButton.onclick = () => {
            rootDiv.innerHTML = '';
            nav.innerHTML = '';
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
          bodyPage.innerHTML = '';
            
            

            arrjson.forEach((item) => {

              let armchair = document.createElement('div');
              let armchairvName = document.createElement('h2');
              let armchairImage = document.createElement('img');
              let armchairPrice = document.createElement('h4');

              armchairImage.onclick = () => {
                aboutTheProduct(item)
              };
              
              armchairvName.innerText = item.name;
              armchairPrice.innerText = item.price;
              armchairImage.src = item.image;

              armchair.appendChild(armchairvName);
              armchair.appendChild(armchairImage);
              armchair.appendChild(armchairPrice);
              bodyPage.appendChild(armchair);

            })
            
            rootDiv.appendChild(bodyPage);
            
            catalogOpen = true;
        }
        catalogOpen = true; 
        aboutTheProductOpen = false;
    }


aboutTheProduct = (prod) => {


  bodyPage.innerHTML = '';

  let armchairvName = document.createElement('h2');
  let armchairImage = document.createElement('img');
  let armchairPrice = document.createElement('h4');
  let armchairWidth = document.createElement('h4');
  let armchairHeight = document.createElement('h4');


  armchairvName.innerText = prod.name;
  armchairPrice.innerText = prod.price;
  armchairImage.src = prod.image;
  armchairWidth.innerText = prod.width;
  armchairHeight.innerText = prod.height;


  bodyPage.appendChild(armchairvName);
  bodyPage.appendChild(armchairImage);
  bodyPage.appendChild(armchairPrice);
  bodyPage.appendChild(armchairWidth);
  bodyPage.appendChild(armchairHeight);

  rootDiv.appendChild(bodyPage);  

  catalogOpen = false; 
}
