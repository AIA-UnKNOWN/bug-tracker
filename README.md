# Bug Tracker

This **Bug Tracker** app is built for developers who want a simple and fast bug tracking system in their daily work. It also enables them to team up with their developers friends to create amazing projects and track issues with it easily.

![Bug Tracker]()


## Setup

If you are a developer and want to contribute and maintain the app, just follow this steps in order for you to make this app running in your own local machine.


##### Requirements:

Please install the following if you don't have it yet.

* NodeJS
* PHP
* Laravel
* MySQL (MySQL Database Management or PhpMyAdmin)

##### Installation:

After installing the requirements above, follow the steps below:

* Clone the repository from my github using HTTPS or SSH:
  * HTTPS
    > git clone https://github.com/AIA-UnKNOWN/bug-tracker.git
  * SSH
    > git clone git@github.com:AIA-UnKNOWN/bug-tracker.git
* Go into the directory of the app by typing:
  > cd bug-tracker
* Install the dependencies of laravel using this command and wait for the installation:
  > composer update
* After the installation is done, we need to setup the database so that we can now use it properly.
  * Create a ***.env*** file if it doesn't exist yet in the root directory.
  * Copy all the contents from ***.env.sample*** file and paste it into the ***.env*** file.
  * After that, we need to change our configuration for our database but before that, we need to create a database first.
  * Go to your favorite database management client such us MySQL Workbench or PhpMyAdmin or just mysql terminal and create a database there with any name you want.
  * Then add your database credentials here like this:
    > DB_CONNECTION=mysql
    > DB_HOST=127.0.0.1
    > DB_PORT=3306
    > DB_DATABASE=your_database_name
    > DB_USERNAME=database_username
    > DB_PASSWORD=database_password
* After setting up our database, we need to migrate it by using this command:
  > php artisan migrate
* You can now run the server using this command:
  > php artisan serve
* And access it:
  > http://127.0.0.1:8000
* After accessing it you may see an error page where it says you need to generate application key, if so run this command or just press "Generate app Key" button:
  > php artisan key:generate
* After accessing it again you should see a blank page, this is because we don't have scripts yet for our app, so in order for this to work close the server temporarily or open another terminal tab because we will need to install ReactJS and dependencies using this command and wait for it:
  > npm install
* After installing the dependencies, we need to run laravel mix in order for us to compile the React code and populate the page with our actual app by using this command:
  > npm run watch
* After compiling the app, you can now start the server again and now you'll see the actual app by accessing the url below:
  > http://127.0.0.1:8000

And that's it you can now use and enjoy the app. Happy Coding!.