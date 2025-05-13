import { ExpressServer } from '@gambitsheets/common';
import dotenv from 'dotenv';


dotenv.config();


const server = new ExpressServer({
  port: parseInt(process.env.PORT || '3002'),
  serviceName: 'google-sheets-integration-service'
});


server.start();