# nodejs-express-skeleton
This project is a basic skeleton to be used when creating NodeJS & Express applications.

It uses a Rails-like architecture, providing some aspects like:
* Initialization code under the folder `initializers`
* Autoloading of models and controllers under the folders `models` and `controllers`
* Routes configuration in `routes.js` file.
* (Many more to come)

This skeleton allows to have a cleaner structure with the code placed in a known location and avoiding large files of application initialization.

## Initialization code
The initialization code is palced under the `/initializers/` folder. In this skeleton is included code to autoload all the models and controllers (see next section) and connect to the database (using, in this case, Mongoose as an ODM).

### How to create a new initialization module
To create a new initialization module you only have to create a javascript file under the `/initializers/` folder and them require the file in `/initializers/index.js`.

## Autoloading of models and controllers

### Models
Models are automatically loaded from `models` directory. All of them are automatically available in the `models` global variable.

If the model name is composed by various words (p.e. `my_model.js`) it would be automatically converted to a name that follows the Javascript convention. In this example case, the model would be available at the variable `models.myName`.

### Controllers
Controllers are automatically loaded from `controllers` directory and made available under the `controllers` variable.

The controller file name follows the Rails convention, for example `users_controller.js` in teh case of a controller to manage users. That controller would be available at the variable `controllers.users`.

In case that a controller's name is comoposed by various words (p.e. `my_users_controller.js`), it would be loaded as `controllers.myUsers`.

## Routes
Routes are created in the Express.js standard way, but they are placed in the `routes.js` file.

## License
This repository (and all the contents on it) is licensed under the MIT license.

## Contributors

* Óscar de Arriba (odarriba<at>gmail.com)
