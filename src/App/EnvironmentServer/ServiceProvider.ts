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

        // ToDo: Make this nicer?  Is there maybe a way we can hide the controller symbols?
        // ToDo: 'cause then all you need is the controller type and optional constructor params in the config!
        this.makeInjectable(EnvironmentController);
        this.bindConstructor(environmentServerSymbols.Controller, EnvironmentController);

        this.configureRoute({
            path: "/{bundle}.env.json",
            actionSymbol: environmentServerSymbols.Controller,
            actionMethod: "lookup",
        });

        this.bindConstructorParameter(symbols.Environment, EnvironmentController, 0);
    }
}
