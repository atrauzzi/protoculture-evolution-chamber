import "protoculture-hapi";
import { symbols, ServiceProvider } from "protoculture";


export class StaticServerServiceProvider extends ServiceProvider {

    public async boot() {

        this.configureConnection(() => {

            return {
                host: "0.0.0.0",
                port: "2112",
            };
        });

        this.configureRoute({
            path: "/bundle/{bundle}",
            directory: `${__dirname}/../../../bundle`,
        });

        this.configureRoute({
            directory: `${__dirname}/public`,
        });
    }
}
