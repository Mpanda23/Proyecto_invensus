

const wrapper = document.querySelector(".wrapper"),
    qrInput = wrapper.querySelector(".form input"),
    generateBtn = wrapper.querySelector(".form button"),
    qrImg = wrapper.querySelector(".qr-code img"),
    productosSinQRSelect = document.getElementById("productosSinQR");

let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if (!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";


    fetch('http://localhost:4000/productos/qr', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: qrValue }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);

        if (data.error) {
            console.error('Error en el servidor:', data.error);
            alert('Error en el servidor al generar el código QR');
            generateBtn.innerText = "Generate QR Code";
        } else if (data.alerta) {
            alert(data.alerta);
            generateBtn.innerText = "Generate QR Code";
        } else {
            if (data.qrCode) {
                qrImg.src = data.qrCode;
                qrImg.addEventListener("load", () => {
                    wrapper.classList.add("active");
                    generateBtn.innerText = "Generate QR Code";
                });
            } else {
                console.error('La URL del código QR es indefinida.');
                alert('Error al obtener la URL del código QR');
                generateBtn.innerText = "Generate QR Code";
            }
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al generar el código QR');
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
        generateBtn.innerText = "Generar";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const generarResultado = (qrValue) => {

    };

    const generadorBtn = document.getElementById("generarBtn");
    generadorBtn.addEventListener("click", () => {
        let qrValue = document.querySelector(".form input").value.trim();
        generarResultado(qrValue);
    });

    const codigosGeneradosBtn = document.getElementById("codigosGeneradosBtn");
    codigosGeneradosBtn.addEventListener("click", () => {
        window.location.href = 'qrgenerado.html';
    });


    const mostrarProductosSinQR = (productos) => {
        productosSinQRSelect.innerHTML = "";
        productos.forEach(producto => {
            const option = document.createElement("option");
            option.value = producto.idproducto;
            option.textContent = producto.prod_nombre;
            productosSinQRSelect.appendChild(option);
        });
    };


    const obtenerProductosSinQR = () => {

        fetch('http://localhost:4000/productos/sinqr')
            .then(response => response.json())
            .then(data => {
                const productosSinQR = data.filter(producto => producto.qr === null || producto.qr === undefined);
                mostrarProductosSinQR(productosSinQR);
            })
            .catch(error => {
                console.error('Error al obtener productos sin QR:', error);
                alert('Error al obtener productos sin QR');
            });
    };


    obtenerProductosSinQR();
});
