import { Server } from './presentation';
import { createServer } from 'http';
import { envs } from './infrastructure';


(async() =>{
    main();
})();

function main(){
    const server = new Server();

    const httpServer = createServer( server.app ) ;

    httpServer.listen( envs.PORT, () => {
        console.log(`Server running on port ${ envs.PORT }`);
    });
};