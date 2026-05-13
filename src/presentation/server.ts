import express, { Router } from 'express';

export class Server {
    public readonly app = express();
    public serverListener?: any;

    private readonly port = process.env.PORT;
    private readonly public_path = process.env.PUBLIC_PATH;
    
    constructor( ){
        this.configure();
    };

    private configure(){

        //Middlewares
        this.app.use( express.json() );     //Transformar los req.body en JSON
        this.app.use( express.urlencoded({ extended: true }) );     //Lectura de formularios HTML

        //Public folder
        //this.app.use( express.static( this.public_path ));

    };

    public setRoutes(router: Router) {
        this.app.use(router);
    };

    async start() {
        this.serverListener = this.app.listen( this.port, () => {
            console.log(`Server running on port ${ this.port }`);
        });
    };
    
    public close() {
        this.serverListener.close();
    };


};