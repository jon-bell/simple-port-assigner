import Express from "express";
import CORS from 'cors';

// create the server, call it app
const app = Express();
app.use(CORS());

const inputPort = process.env.PORT || 4001;

app.listen(inputPort);
type ParamType = { numPorts: string };
let curPort = 11000;
app.get("/:numPorts", (req: Express.Request<ParamType>, res) => {
  // check for Nan
  const numPorts = Number.parseInt(req.params.numPorts);
  if(isNaN(numPorts)) {
    res.status(400).send("Invalid number of ports");
    return;
  }
  console.log(numPorts);
  curPort += numPorts;
  res.status(200).send(`${curPort}`);
});




