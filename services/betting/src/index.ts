import { ExpressServer } from '@gambitsheets/common';
import dotenv from 'dotenv';


dotenv.config();


const server = new ExpressServer({
  port: parseInt(process.env.PORT || '3003'),
  serviceName: 'betting-service'
});


server.start();