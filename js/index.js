/* --------OBJETOS-------- */

const productos = [
    {
      id: 0,
      nombre: "Jabon liquido",
      precio: 1000,
      img: "'../img/muestra.jpg'",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat itaque, ducimus est neque expedita non saepe, eum repudiandae aperiam vero. Sunt enim quos, harum sint excepturi odio reprehenderit in.",
      mensaje: "https://api.whatsapp.com/send?phone=5493424763337&text=Estoy%20interesado%20en%20el%20jabon%20liquido"
    },
    {
      id: 1,
      nombre: "Jabon liquido",
      precio: 1000,
      img: "'../img/muestra.jpg'",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat itaque, ducimus est neque expedita non saepe, eum repudiandae aperiam vero. Sunt enim quos, harum sint excepturi odio reprehenderit in.",
      mensaje: "https://api.whatsapp.com/send?phone=5493424763337&text=Estoy%20interesado%20en%20el%20jabon%20liquido"
    },
    {
      id: 2,
      nombre: "Jabon liquido",
      precio: 1000,
      img: "'../img/muestra.jpg'",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat itaque, ducimus est neque expedita non saepe, eum repudiandae aperiam vero. Sunt enim quos, harum sint excepturi odio reprehenderit in.",
      mensaje: "https://api.whatsapp.com/send?phone=5493424763337&text=Estoy%20interesado%20en%20el%20jabon%20liquido"
    },
    {
      id: 3,
      nombre: "Jabon liquido",
      precio: 1000,
      img: "'../img/muestra.jpg'",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat itaque, ducimus est neque expedita non saepe, eum repudiandae aperiam vero. Sunt enim quos, harum sint excepturi odio reprehenderit in.",
      mensaje: "https://api.whatsapp.com/send?phone=5493424763337&text=Estoy%20interesado%20en%20el%20jabon%20liquido"
    },
    {
      id: 4,
      nombre: "Jabon liquido",
      precio: 1000,
      img: "'../img/muestra.jpg'",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat itaque, ducimus est neque expedita non saepe, eum repudiandae aperiam vero. Sunt enim quos, harum sint excepturi odio reprehenderit in.",
      mensaje: "https://api.whatsapp.com/send?phone=5493424763337&text=Estoy%20interesado%20en%20el%20jabon%20liquido"
    },
];


function renderizarProductos(){
let lista = document.getElementById('lista');
for (const producto of productos){ 
lista.innerHTML += ` 
<li class="list-group-item li--producto">
<div class="card">
  <div class="img--contenedor">
    <img src=${producto.img} class="img-fluid">
  </div>
  <div class="info--contenedor">
    <h3>${producto.nombre}</h3>
    <p><strong> $ ${producto.precio} </strong></p>
    <p>${producto.descripcion}</p>
<form>
    <a href="${producto.mensaje}" target="_blank" >
        <input type="button" value="Comprar" class='btn btn--producto'>
    </a>
</form>
  </div>
</div>
</li>
`;

}
 }

  renderizarProductos();
