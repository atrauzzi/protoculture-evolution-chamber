import * as React from "React";
import { Menu } from "./Menu";


export class Home extends React.Component<void, void> {

    public render() {

        return <div>

            <h1>Protoculture</h1>

            <p>This site is powered entirely by <a href="http://github.com/atrauzzi/protoculture">protoculture</a>!</p>

            <p>
                Both the front and the back end make use of the full protoculture framework for bootstrap and dependency injection.
                Additionally, any front-end functionality is configured and built by-convention using webpack!
            </p>

            <Menu />

            <div>
                <h2>Choose a section on the left for more information.</h2>
            </div>

        </div>;
    }
}
