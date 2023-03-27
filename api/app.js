require("module-alias/register");
const { PORT, BASE_PATH } = require("@config/config");
const port = PORT || 3000;
const basePath = BASE_PATH || "/";
const express = require("express");
const { json } = require("express");
const routes = require("./routes");
const cors = require("cors");
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();
const options = {
  swaggerDefinition: {
    info: {
      title: 'REST API',
      version: '1.0.0',
      description: 'Example docs',
    },
    basePath
  },
  apis: ['swagger.yaml'],
};

const specs = swaggerJSDoc(options);

app.use(json());
app.use(cors());
app.use(basePath, routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.listen(port, () =>
  console.log(`Server is up and running on PORT: ${port}`)
);