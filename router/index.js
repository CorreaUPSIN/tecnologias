// Importar el módulo body-parser y el framework Express
const bodyParser = require("body-parser");
const express = require("express");

// Crear una instancia de Router
const router = express.Router();

// Declarar un array de objetos con algunos datos de ejemplo
let datos = [
    {
      matricula: "2019030292",
      nombre: "Gonzalez Quintana Bryan Uziel",
      sexo: "M",
      materias: ["Ingles", "Base de Datos", "Programacion web"]
    },
    {
      matricula: "2019030251",
      nombre: "Messi Leonel Andres",
      sexo: "M",
      materias: ["Ingles", "Base de Datos", "Programacion web"]
    },
    {
      matricula: "2019020289",
      nombre: "Dos Santos Ronaldo Cristiano",
      sexo: "M",
      materias: ["Ingles", "Base de Datos", "Programacion web"]
    },
    {
      matricula: "2019020007",
      nombre: "Dua Lipa",
      sexo: "F",
      materias: ["Ingles", "Base de Datos", "Programacion web"]
    }
  ];
  
// Ruta principal que muestra una página con los datos del array "datos"
router.get("/", (req, res) => {
    res.render("index.html", {
      titulo: "Pagina en Embedded JavaScript EJS",
      nombre: "Bryan Uziel Gonzalez Quintana",
      grupo: "8-3",
      listado: datos
    });
});

// Ruta que muestra una página con una tabla vacía que espera un parámetro llamado "numero" en la URL
router.get("/tabla", (req, res) => {
    const params = {
     numero: req.query.numero
    };
    res.render("tabla.html", params);
});

// Ruta que recibe el número enviado a través del formulario de la página "/tabla" y lo muestra en una tabla
router.post("/tabla", (req, res) => {
    const params = {
        numero: req.body.numero
    };
    res.render("tabla.html", params);
});

// Ruta que muestra una página de cotización que espera tres parámetros en la URL: "valor", "pinicial" y "plazo"
router.get("/cotizacion", (req, res) => {
    const params = {
        valor: req.query.valor,
        pinicial: req.query.pinicial,
        plazo: req.query.plazo
    };
    res.render("cotizacion.html", params);
});

// Ruta que recibe los valores enviados a través del formulario de la página "/cotizacion" y muestra los resultados de la cotización
router.post("/cotizacion", (req, res) => {
    const params = {
        valor: req.body.valor,
        pinicial: req.body.pinicial,
        plazo: req.body.plazo
    };
    res.render("cotizacion.html", params);
});

// Exportar el módulo Router para que pueda ser utilizado en otros archivos
module.exports = router;