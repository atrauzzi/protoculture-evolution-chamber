import "protoculture-react";
import { ServiceProvider } from "protoculture";
import { Home } from "./Component/Home";


export class HomeServiceProvider extends ServiceProvider {

    public async boot() {

        this.bindReactApp({
            component: Home,
            id: "home",
        });
    }
}
