#!/usr/bin/env ts-node
import { Suite, ConsoleServiceProvider } from "protoculture";
import { HapiServiceProvider, InertServiceProvider } from "protoculture-hapi";
import { StaticServerServiceProvider } from "../App/StaticServer/ServiceProvider";
import { EnvironmentServiceProvider } from "../App/EnvironmentServer/ServiceProvider";


class Server extends Suite {

    public name = "server";

    protected get serviceProviders() {

        return [
            ConsoleServiceProvider,
            InertServiceProvider,
            HapiServiceProvider,
            StaticServerServiceProvider,
            EnvironmentServiceProvider,
        ];
    }
}

const suite = new Server();
suite.run().catch(console.error);
