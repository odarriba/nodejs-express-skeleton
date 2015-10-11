# nodejs-express-skeleton
This project is a basic skeleton to be used when creating NodeJS & Express applications.

It uses a Rails-like architecture, providing some aspects like:
* Initialization code under the folder `/initializers`
* Per-environment configuration
* Autoloading of models and controllers under the folders `/models` and `/controllers`
* Routes configuration in `routes.js` file.
* Per-environment logging
* (Many more to come)

This skeleton allows to have a cleaner structure with the code placed in a known location and avoiding large files of application initialization.

## Initialization code
The initialization code is palced under the `/initializers/` folder. In this skeleton is included code to autoload all the models and controllers (see next section) and connect to the database (using, in this case, Mongoose as an ODM).

### How to create a new initialization module
To create a new initialization module you only have to create a javascript file under the `/initializers/` folder and them require the file in `/initializers/index.js`.

## Configuration
The configuration of the application is under the `/config/` folder, separated by environments.

A common configuration hash can be found in `/config/index.js`, and the specific ones in the file called as the environment variable (p.e `/config/development.js`).

In this files we can find configuration of the database connection, application general configuration, etc.

The configuration object is available globally stored in Express object:
``` var app = express();
var config = app.get('config');
```


## Autoloading of models and controllers

### Models
Models are automatically loaded from `/models` directory. All of them are automatically available in the `models` variable stored inside the Express instance object (you can get using: `var models = app.get('models')`).

If the model name is composed by various words (p.e. `my_model.js`) it would be automatically converted to a name that follows the Javascript convention. In this example case, the model would be available at the variable `models.myName`.

### Controllers
Controllers are automatically loaded from `/controllers` directory and made available under the `controllers` variable, stored inside the Express instance object (you can get using: `var controllers = app.get('controllers')`).

The controller file name follows the Rails convention, for example `users_controller.js` in teh case of a controller to manage users. That controller would be available at the variable `controllers.users`.

In case that a controller's name is composed by various words (p.e. `my_users_controller.js`), it would be loaded as `controllers.myUsers`.

## Routes
Routes are created in the Express.js standard way, but they are placed in the `routes.js` file.

## Logging
Logging is currently done using [morgan](https://github.com/expressjs/morgan) module, which allows to save all the console output to a file or just put it out in the console as always.

The default configuration is to show colored information about the petitions processed in the terminal and save explained information in a log file placed at `/log/{environment}.log`.

## License
This repository and all the contents on it are licensed under the MIT license.

## Changelog
  * 11/10/15 - Added per-environment configuration and login. Code improvements.
  * 26/09/15 - First release.

## Contributors

* Óscar de Arriba (odarriba<at>gmail.com)
