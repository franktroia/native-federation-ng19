import express from 'express';
import cors from 'cors';

const app = express();
const port = 4201;

app.use(cors({ origin: '*' }));

app.use('/', express.static(`${import.meta.dirname}/dist/apps/remote/browser`));

app.listen(port, () => {
  console.log(`Remote app server listening on http://localhost:${port}`);
});
