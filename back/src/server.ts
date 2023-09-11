import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './graphql/schema';
import { fetchDeliveries, fetchDelivery, fetchItems, fetchItem } from './graphql/resolver';
const cors = require( `cors` );

function createServer() {
  const corsOpt = {
    origin(origin: any, callback: any) {
      callback(null, true);
    },
    credentials: true
  };

  const server = express();
  server.use(cors(corsOpt));
  server.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      rootValue: {
        deliveries: fetchDeliveries,
        delivery: fetchDelivery,
        items: fetchItems,
        item: fetchItem,
      },
      graphiql: true,
    })
  );

  return server;
}

export { createServer };
