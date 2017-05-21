import * as Hapi from "hapi";
import { Route } from "protoculture-hapi";
import { Environment } from "../../Environment";


export class EnvironmentController {

    public constructor(protected environment: Environment) {

    }

    public async lookup(request: Hapi.Request, reply: Hapi.Base_Reply, route: Route) {

        reply({
            bundle: request.params.bundle,
        });
    }
}
