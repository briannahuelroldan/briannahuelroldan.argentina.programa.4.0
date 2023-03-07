function obtenerDatos() {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => mostrarDatos(data.results[0]))
      .catch(error => console.log(error));
  }
  
function mostrarDatos(datos) {
    const nombre = `${datos.name.first} ${datos.name.last}`;
    const email = datos.email;
    const edad = datos.dob.age;
    const telefono = datos.phone;
    const ciudad = datos.location.city;
    const estado = datos.location.state;
    const pais = datos.location.country;
    const nacionalidad = datos.nat;
    const domicilio = datos.location.street.name;
    const altura = datos.location.street.number;


    document.getElementById('nombre').innerText = nombre;
    document.getElementById('email').innerText = email;
    document.getElementById('edad').innerText = edad;
    document.getElementById('telefono').innerText = telefono;
    document.getElementById('ciudad').innerText = ciudad;
    document.getElementById('estado').innerText = estado;
    document.getElementById('pais').innerText = pais;
    document.getElementById('nacionalidad').innerText = nacionalidad;
    document.getElementById('domicilio').innerText = domicilio;
    document.getElementById('altura').innerText = altura;
  }


    const showInfoButton = document.getElementById('info-btn');
    const infoContainer = document.getElementById('info-contenedor');
    
    showInfoButton.addEventListener('click', function() {
      const infoHTML = `
        <br/>
        <br/>
        <br/>
        <h1>Experiencias y habilidades</h1>
        <br/>
        <br/>
        <br/>
        <p>Programador Web</p>
        <p>E-Strategia Web SL - Alicante</p>
        <p>Marzo de 2017 - Octubre de 2019</p>
        <br/>
        <ul>
            <li>Lider de proyectos con un equipo de 5 trabajadores.</li>
            <li>Programación de más de 50 páginas web en Java.</li>
            <li>Gestión de la comunicación con diferentes departamentos.</li>
            <li>Mantenimiento de sistemas.</li>
        </ul>
        <br/>
        <br/>
        <br/>
      `;
      infoContainer.innerHTML = infoHTML;
    });
  



  obtenerDatos()



  