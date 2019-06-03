import {Server} from './server';
import {SERVER_PORT} from './constants';
import {consoleError} from './helpers/utils';

const server = new Server(SERVER_PORT);
server.start().then(
    () => {
       console.log('Server started successfully!');
    },
    (err) => {
        consoleError(err);
    }
);

