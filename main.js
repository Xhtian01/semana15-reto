import axios from 'axios';
import './style.css';

const overlay = document.querySelector('.overlay');
const btnAceptar = document.getElementById('btn-aceptar');
const btnCancel = document.getElementById('btn-cancel');
const close = document.querySelector('.close');
const container = document.querySelector('.container');

async function readDog() {
  const { data } = await axios.get('http://localhost:3000/cats');
  console.log(data);

  printDog(data);
}

function printDog(data) {
  let cards = '';
  data.forEach((dog) => {
    cards += `
    <div class="container-dog">
          <div class="container-img">
            <img
              class="dog-img"
              src="${dog.img}"
              alt="imagen"
            />
          </div>
          <div class="container-info">
            <span class="dog-name">Nombre: ${dog.name}</span>
            <span class="dog-tel">Telefono: ${dog.telefono}</span>
            <span class="dog-country">Pais: ${dog.pais}</span>
            <span class="dog-description">Descripcion: ${dog.descripcion}</span>
          </div>
          <div class="container-edit">
            <button class="btn-edit">
              <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8"
                  fill="none"
                  stroke="#A1A1A1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />

                <polygon
                  fill="none"
                  points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8"
                  stroke="#A1A1A1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </button>

          </div>
          <button class="btn-delete">
            <svg
              fill="#A1A1A1"
              height="25px"
              width="25px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 47.095 47.095"
              xml:space="preserve"
            >
            
                <path
                  d="M45.363,36.234l-13.158-13.16l12.21-12.21c2.31-2.307,2.31-6.049,0-8.358c-2.308-2.308-6.05-2.307-8.356,0l-12.212,12.21
		L11.038,1.906c-2.309-2.308-6.051-2.308-8.358,0c-2.307,2.309-2.307,6.049,0,8.358l12.81,12.81L1.732,36.831
		c-2.309,2.31-2.309,6.05,0,8.359c2.308,2.307,6.049,2.307,8.356,0l13.759-13.758l13.16,13.16c2.308,2.308,6.049,2.308,8.356,0
		C47.673,42.282,47.672,38.54,45.363,36.234z"
                />
            
            </svg>
          </button>

        </div>
    `;

    /*dogImg[index].src = dog.img;
    dogName[index].textContent = `Nombre: ${dog.name}`;
    dogTel[index].textContent = `Telefono: ${dog.telefono}`;
    dogCountry[index].textContent = `País: ${dog.pais}`;
    dogDescription[index].textContent = `Descripción: ${dog.descripcion}`;*/
  });

  container.innerHTML = cards;

  deleteDog();
}

function deleteDog() {
  const btnDelete = document.querySelectorAll('.btn-delete');
  btnDelete.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const event = e.target.parentElement.parentElement;
      /* btn.style.display = 'none';*/
      overlay.style.visibility = 'visible';

      btnAceptar.addEventListener('click', () => {
        event.style.display = 'none';
        overlay.style.visibility = 'hidden';
      });

      btnCancel.addEventListener('click', () => {
        overlay.style.visibility = 'hidden';
      });

      overlay.addEventListener('click', () => {
        overlay.style.visibility = 'hidden';
      });

      close.addEventListener('click', () => {
        overlay.style.visibility = 'hidden';
      });
      console.log(event);
    });
  });

  /*  container.addEventListener('click', (e) => {
    if ((e.target.classList.value = 'btn-delete')) {
      console.log('asd');
    }
    console.log(e.target.classList.value);
  
  });*/
}

readDog();
