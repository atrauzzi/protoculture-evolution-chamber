import { ReactServiceProvider } from "protoculture-react";
import { Suite, WebServiceProvider } from "protoculture";
import { HomeServiceProvider } from "../App/Home/ServiceProvider";


class WebHome extends Suite {

    public name = "home";

    protected get serviceProviders() {

        return [
            HomeServiceProvider,
            WebServiceProvider,
            ReactServiceProvider,
        ];
    }
}

const suite = new WebHome();
suite.run();
