import "protoculture-hapi";
import { symbols, ServiceProvider } from "protoculture";
import { EnvironmentController } from "./EnvironmentController";


export const environmentServerSymbols = {
    Controller: Symbol("Controller")
};

export class EnvironmentServiceProvider extends ServiceProvider {

    public async boot() {

        this.configureConnection(() => {

            return {
                host: "0.0.0.0",
                port: "2112",
            };
        });

        this.configureRoute({
            path: "/{bundle}.env.json",
            actionObject: EnvironmentController,
            actionMethod: "lookup",
        });

        this.bindConstructorParameter(symbols.Environment, EnvironmentController, 0);
    }
}
