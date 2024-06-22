document.addEventListener("DOMContentLoaded", () => {
  const codigosLista = document.getElementById("codigos-lista");

  fetch('http://localhost:4000/productos/qr', {
    mode: 'cors'
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      data.forEach(producto => {
        const codigoDiv = document.createElement("div");


        const qrUrl = typeof producto.qr === 'string' ? atob(producto.qr) : `data:image/png;base64,${producto.qr}`;

        codigoDiv.innerHTML = `<p>ID: ${producto.idproducto}</p>
                               <p>Nombre: ${producto.prod_nombre}</p>
                               <img src="${qrUrl}" alt="Código QR">`;

        codigosLista.appendChild(codigoDiv);
      });
    })
    .catch(error => console.error('Error:', error));

  const volverBtn = document.getElementById("volverBtn");
  volverBtn.addEventListener("click", () => {
    window.location.href = 'qr.html';
  });
});
