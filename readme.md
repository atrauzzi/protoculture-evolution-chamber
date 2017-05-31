## About

Hey, welcome! This repository is where I toy around with my base structure for [protoculture](http://github.com/atrauzzi/protoculture) projects.

Remember, if you are or are interested in using protoculture, this is not the only kind of project structure possible!

## In Detail

This project features my preferred tech stack, build and deployment flows.

### Bundling
Bundling of browser apps is handled by webpack.  Builds are configured by convention to look for `Bundles` that start with _"Web"_.

### Apps
Apps are logical groups of related functionality.  Generally speaking, anything goes inside of an app subdirectory.  Either a plugin or your own code will offer a `ServiceProvider` that knows how to find and call into 
whatever code found within.
