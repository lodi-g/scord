# scord

A simple Discord selfbot written in Node.JS.

## Running scord

### The Docker way
* `docker run -d -e SCORD_TOKEN='token' -e SCORD_PREFIX='prefix' lodig/scord`
* How to retrieve your token [here](token.md).

### The manual way

#### Requirements
* Linux, macOS (probably works with others OS - not tested)
* Node.JS >= v7.5.0 (probably works with older versions - not tested)
* npm >= v5.0.0 (probably works with older versions - not tested)

#### Installing
* `git clone https://github.com/lodi-g/scord`
* `cd scord && npm install`

#### Configuring
* `cp config/config.example.json config/config.json`
* Edit the `config/config.json` with your [Discord token](token.md) and wanted prefix.

#### Starting
* `node app.js` => This will use the configuration file located in `config/config.json`. An example is available in the `config/config.example.json` file.
* `node app.js token prefix` => This won't use any configuration file and instead will load the token and prefix from command line.

## Writing your own modules
### Intro
* With *scord*, there is a small static core and everything else is a module (reload, help etc).
* To write your own modules you just need to add a file in the `modules/` folder.
* The file must be a valid JavaScript file.
* *scord* uses the `discord.js` module.
* You may `require('../app')`, that gives you an object with the commands manager (in the variable `manager`) and the bot's user (variable `user`).


### Adding a module file
* This file must export at least two things: a `cmd` (type `String`), and a `run` (type: `function`). The `cmd` field describes the command that will run the `run` function.
* You may as well export a `help` field (type: `String`) that will be used by the `help` command.
* You may as well export an `args` field (type: `Number`). It will be used to verify the number of arguments is perfectly valid. If you expect a variadic number of arguments, it won't be useful.


### The run function
* The `run` function is the function called when you will type `${prefix}${cmd}`.
* The `run` function accepts two parameters: a `msg` (an instance of the `Message` class from `discord.js`), representing the sent message, and an `args` (type: `Array`) representing the arguments.

### Accessing commands
* You may need to access current registered commands (as I did to write the `reload` and `help` modules).
* `require('../app').manager` is the only thing needed to access these. `app.js` exports an instance of the `CommandsManager` class. Its definition is *trivial* and can be read in the `commands.js` file.

### Accessing bot's user
* You may need to access the current bot's user (as I did to write the `game` module).
* `require('../app').user` is the only thing needed to access it. `app.js` exports an instance of the `ClientUser` class (a `discord.js` class). Though be aware that the export is valid only when the bot has logged in. Before that, `user` is `null`.
* I suggest taking a look at the `modules/game.js` to fully understand.

### Examples
* All current modules can be used as examples. They use all the feature described above and each file is less than 50 lines of code.

## Todo
* Core:
  * Logging with different levels of verbosity
* Modules:
  * Translate
  * Google Search
  * Quote
  * Game API?
  * Regional indicator comments

## Thanks for reading
* And also thanks to [LazyShpee](https://github.com/LazyShpee/) for helping me countless times.

## License
* WTFPL
