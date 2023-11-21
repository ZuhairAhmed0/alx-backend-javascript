import express from 'express';
import routes from './routes/index';

const app = express();
const port = 1245;

routes(app);
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
export default app;
module.exports = app;
