#!/usr/bin/env ts-node
import { Bundle, ConsoleServiceProvider } from "protoculture";
import { HapiServiceProvider, InertServiceProvider } from "protoculture-hapi";
import { StaticServerServiceProvider } from "../App/StaticServer/ServiceProvider";
import { EnvironmentServiceProvider } from "../App/EnvironmentServer/ServiceProvider";


class Server extends Bundle {

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

const bundle = new Server();
bundle.run().catch(console.error);
