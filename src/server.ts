import Express from "express";
import CORS from 'cors';

// create the server, call it app
const app = Express();
app.use(CORS());

const inputPort = process.env.PORT || 4001;

app.listen(inputPort);
type ParamType = { numPorts: string };
let curPort = 10000;
app.get("/:numPorts", (req: Express.Request<ParamType>, res) => {
  // check for Nan
  if (isNaN(Number.parseInt(req.params.numPorts))) {
    curPort = 10000;
  }
  const numPorts = Number.parseInt(req.params.numPorts);
  console.log(numPorts);
  curPort += numPorts;
  res.status(200).send(`${curPort}`);
});




