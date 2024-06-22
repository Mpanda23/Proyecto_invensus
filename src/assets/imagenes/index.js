
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const qr = require('qrcode');
const { createCanvas } = require('canvas');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'invensus_storage'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conexión a la base de datos exitosa');
});

app.get('/generarQR', (req, res) => {
  const id = req.query.id;

  db.query('SELECT qr FROM productos WHERE id = ?', [id], (err, result) => {
    if (err) throw err;

    const blobData = result[0].qr;

    const canvas = createCanvas(300, 300);
    const ctx = canvas.getContext('2d');

    const image = new Image();
    image.src = Buffer.from(blobData, 'base64');
    ctx.drawImage(image, 0, 0, 300, 300);

    qr.toCanvas(canvas, { errorCorrectionLevel: 'H' }, (err) => {
      if (err) throw err;

      const qrImage = canvas.toBuffer('image/png');
      res.writeHead(200, { 'Content-Type': 'image/png' });
      res.end(qrImage);
    });
  });
});

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const PUERTO = 4000;

const conexion = mysql.createConnection({
  host: 'localhost',
  database: 'invensus_storage',
  user: 'root',
  password: ''
});

conexion.connect(error => {
  if (error) throw error;
  console.log('Conexión exitosa a la base de datos');
});

const handleSQLError = (error, res) => {
  console.error(error.message);
  return res.status(500).json({ error: 'Error en la base de datos' });
};

app.get('/productos', (req, res) => {
  const query = 'SELECT * FROM productos;';
  conexion.query(query, (error, resultado) => {
    if (error) {
      return handleSQLError(error, res);
    }

    console.log('Productos obtenidos:', resultado);

    if (resultado.length > 0) {
      res.json(resultado);
    } else {
      res.json('No hay registros');
    }
  });
});

app.post('/productos/agregar', (req, res) => {
  const producto = {
    prod_nombre: req.body.prod_nombre,
    prod_descripcion: req.body.prod_descripcion,
    prod_valor: req.body.prod_valor,
    prod_vencimiento: req.body.prod_vencimiento,
    prod_alerta: req.body.prod_alerta,
    idcategoria: req.body.idcategoria,
    idproveedores: req.body.idproveedores
  };

  const query = 'INSERT INTO productos SET ?';
  conexion.query(query, producto, (error) => {
    if (error) {
      return handleSQLError(error, res);
    }

    console.log('Producto insertado:', producto);

    res.json('Se insertó correctamente el producto');
  });
});

app.get('/productos/qr', (req, res) => {
  const query = 'SELECT idproducto, prod_nombre, qr FROM productos WHERE qr IS NOT NULL AND qr != \'\';';

  conexion.query(query, (error, resultados) => {
    if (error) {
      return handleSQLError(error, res);
    }

    resultados.forEach(resultado => {
      if (resultado.qr instanceof Buffer) {
        resultado.qr = resultado.qr.toString('base64');
      }
    });

    console.log('Lista de productos con QR:', resultados);

    res.json(resultados);
  });
});

app.get('/productos/sinqr', (req, res) => {
  const query = 'SELECT idproducto, prod_nombre, qr FROM productos WHERE qr IS NULL OR qr = \'\';';

  conexion.query(query, (error, resultados) => {
    if (error) {
      return handleSQLError(error, res);
    }

    resultados.forEach(resultado => {
      if (resultado.qr instanceof Buffer) {
        resultado.qr = resultado.qr.toString('base64');
      }
    });

    console.log('Lista de productos sin QR:', resultados);

    res.json(resultados);
  });
});

app.post('/productos/qr', (req, res) => {
  let id = req.body.id;

  if (!id) {
    return res.status(400).json({ error: 'ID no proporcionado' });
  }

  const idField = isNaN(id) ? 'prod_nombre' : 'idproducto';

  const query = `SELECT * FROM productos WHERE ${idField}=?;`;

  conexion.query(query, [id], (error, resultado) => {
    if (error) {
      return handleSQLError(error, res);
    }

    console.log('Resultado de la consulta para QR:', resultado);

    if (resultado.length > 0) {
      const producto = resultado[0];

      if (producto.qr !== null) {
        return res.json({ alerta: 'Este producto ya tiene un código QR', qrCode: producto.qr });
      }

      const urlProducto = `https://localhost:3000/productos/${producto.idproducto}`;

      qr.toDataURL(urlProducto, async (err, qrCode) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Error al generar el código QR' });
        }

        const updateQuery = `UPDATE productos SET qr=? WHERE ${idField}=?;`;

        conexion.query(updateQuery, [qrCode, id], (updateError) => {
          if (updateError) {
            return handleSQLError(updateError, res);
          }

          console.log('Código QR generado y actualizado:', qrCode);

          res.json({ qrCode, urlProducto });
        });
      });
    } else {
      res.status(404).json({ alerta: 'No hay registros para el ID o NOMBRE proporcionado' });
    }
  });
});

app.listen(PUERTO, () => {
  console.log(`Servidor corriendo en el puerto ${PUERTO}`);
});

app.get('/', (req, res) => {
  res.send('¡Bienvenido a la aplicación!');
});

app.use(express.static('public'));
