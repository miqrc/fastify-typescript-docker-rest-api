import * as MainService from './controllers/main.service';
import * as UserService from './controllers/user.service';
import * as md_auth from './middlewares/authenticate';

import logger from 'morgan';
import fastify from 'fastify';
import cors from 'cors';

export class Server {

    public app: any;

    // TODO
    private opts = {
        schema: {}
    };

    constructor(private port: number) {
        this.app = fastify();
        this.config();
        this.api();
    }

    start() {
        return new Promise( (resolve, reject) => {
            this.app.listen(this.port, '0.0.0.0', (err: any) => {
                if (err) { reject(err); return; }
                console.log(`server listening on ${this.port}`);
                resolve();
            });
        });
    }

    public api() {
        this.app.get('/', function (req: any, res: any) {
            res.send('API is working!');
        });

        this.app.post('/register', this.opts, UserService.registerUser);
        this.app.get('/public', MainService.getPublic);
        this.app.get('/private', {preHandler: [md_auth.ensureAuth]}, MainService.getPrivate);

    }

    public config() {

        const options: cors.CorsOptions = {
            allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
            credentials: true,
            methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
            // origin: API_URL,
            preflightContinue: false
        };

        this.app.use(cors(options));

        this.app.use(logger('dev'));
    }

}

