import { ReactServiceProvider } from "protoculture-react";
import { Bundle, WebServiceProvider } from "protoculture";
import { HomeServiceProvider } from "../App/Home/ServiceProvider";


class WebHome extends Bundle {

    public name = "home";

    protected get serviceProviders() {

        return [
            HomeServiceProvider,
            WebServiceProvider,
            ReactServiceProvider,
        ];
    }
}

const bundle = new WebHome();
bundle.run();
