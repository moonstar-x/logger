class Logger {

  constructor( options = { } ) {
    // Set default options.
    const defaults = { colors: true, timestamps: true };
    for (let key in defaults) {
      if (!(key in options)) {
        options[key] = defaults[key];
      }
    }

    // Check if options are valid booleans.
    if (typeof(options.colors) != "boolean" || typeof(options.timestamps) != "boolean") {
      throw new Error("TypeError : Constructor options are not of type Bool!");
    }

    this.colored = options.colors;
    this.timestamps = options.timestamps;
  }

  info(msg) {
    this._logMessage(msg, "INFO");
  }

  warn(msg) {
    this._logMessage(msg, "WARN");
  }

  error(msg) {
    this._logMessage(msg, "ERROR");
  }

  debug(msg) {
    this._logMessage(msg, "DEBUG");
  }

  _color(fg, bg = null) {
    if (this.colored) {
      // Define color ANSI codes.
      const colors = {
        "BLACK": "\x1b[30m",
        "RED": "\x1b[31m",
        "GREEN": "\x1b[32m",
        "YELLOW": "\x1b[33m",
        "BLUE": "\x1b[34m",
        "MAGENTA": "\x1b[35m",
        "CYAN": "\x1b[36m",
        "WHITE": "\x1b[37m"
      }
  
      const backgrounds = {
        "BLACK": "\x1b[40m",
        "RED": "\x1b[41m",
        "GREEN": "\x1b[42m",
        "YELLOW": "\x1b[43m",
        "BLUE": "\x1b[44m",
        "MAGENTA": "\x1b[45m",
        "CYAN": "\x1b[46m",
        "WHITE": "\x1b[47m"
      }
  
      const reset = "\x1b[0m";
  
      if (!colors.hasOwnProperty(fg)) {
        throw new Error("Color is not defined!");
      }
  
      if (bg) {
        if (!backgrounds.hasOwnProperty(bg)) {
          throw new Error("Background is not defined!");
        }
        return `${colors[fg]}${backgrounds[bg]}%s${reset}`;
      } else {
        return `${colors[fg]}%s${reset}`;
      }

    } else {
      return "";
    }
  }

  _logMessage(msg, type) {
    // Define message types.
    const types = {
      "INFO" : "CYAN",
      "WARN" : "YELLOW",
      "ERROR" : "RED",
      "DEBUG" : "GREEN"
    }

    if (!types.hasOwnProperty(type)) {
      throw new Error("Unknown message type!");
    }

    // Print the message according to the set options in the class construction.
    switch ([this.colored, this.timestamps].join(' ')) {
      case "true true" :
        console.log(this._color(types[type]), `(${new Date().toLocaleTimeString()}) - [${type}] - ${msg}`);
        break;
      case "true false" :
        console.log(this._color(types[type]), `[${type}] - ${msg}`);
        break;
      case "false true" :
        console.log(`(${new Date().toLocaleTimeString()}) - [${type}] - ${msg}`);
        break;
      case "false false" :
        console.log(`[${type}] - ${msg}`);
        break;
      default :
        throw new Error("Unexpected Case");
    }
  }

}

module.exports = {
  Logger: Logger
}