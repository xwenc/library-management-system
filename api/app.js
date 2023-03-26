require("module-alias/register");
const port = process.env.PORT || 3000;
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
  },
  apis: ['swagger.yaml'],
};

const specs = swaggerJSDoc(options);

app.use(json());
app.use(cors());
app.use("/", routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.listen(port, () =>
  console.log(`Server is up and running on PORT: ${port}`)
);