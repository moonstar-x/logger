class Logger {

  /**
   * Creates an instance of Logger.
   * 
   * @param {*} [options={}] 
   * Options object parameter is optional. Its properties are:
   * <Bool> colors: Defines whether messages should be colored or not.
   * <Bool> timestamps: Defines whether timestamps should be logged or not.
   * 
   * @memberof Logger
   */
  constructor(options = {}) {
    // Set default options.
    const defaults = {
      colors: true,
      timestamps: true
    };
    for (let key in defaults) {
      if (!(key in options)) {
        options[key] = defaults[key];
      }
    }

    // Check if options are valid booleans.
    if (typeof (options.colors) != "boolean" || typeof (options.timestamps) != "boolean") {
      throw new Error("TypeError : Constructor options are not of type Bool!");
    }

    this.colored = options.colors;
    this.timestamps = options.timestamps;
  }

  /**
   * Log INFO messages to console.
   * Prints to stdout.
   *
   * @memberof Logger
   * @param {...*} messages The stringable messages to log in console.
   * @returns {void}
   */
  info(/**/) {
    const args = Array.prototype.slice.call(arguments).join(' ');
    this._logstdout(args, "INFO");
  }

  /**
   * Log WARN messages to console.
   * Prints to stderr.
   *
   * @memberof Logger
   * @param {...*} messages The stringable messages to log in console.
   * @returns {void}
   */
  warn(/**/) {
    const args = Array.prototype.slice.call(arguments).join(' ');
    this._logstderr(args, "WARN");
  }

  /**
   * Log ERROR messages to console.
   * Prints to stderr.
   *
   * @memberof Logger
   * @param {...*} messages The stringable messages to log in console.
   * @returns {void}
   */
  error(/**/) {
    const args = Array.prototype.slice.call(arguments).join(' ');
    this._logstderr(args, "ERROR");
  }

  /**
   * Log DEBUG messages to console.
   * Prints to stdout.
   *
   * @memberof Logger
   * @param {...*} messages The stringable messages to log in console.
   * @returns {void}
   */
  debug(/**/) {
    const args = Array.prototype.slice.call(arguments).join(' ');
    this._logstdout(args, "DEBUG");
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

  // Log to stdout.
  _logstdout(msg, type) {
    // Define message types.
    const types = {
      "INFO": "CYAN",
      "DEBUG": "GREEN"
    }

    if (!types.hasOwnProperty(type)) {
      throw new Error("Unknown message type!");
    }

    // Print the message according to the set options in the class construction.
    switch ([this.colored, this.timestamps].join(' ')) {
      case "true true":
        console.log(this._color(types[type]), `(${new Date().toLocaleTimeString()}) - [${type}] - ${msg}`);
        break;
      case "true false":
        console.log(this._color(types[type]), `[${type}] - ${msg}`);
        break;
      case "false true":
        console.log(`(${new Date().toLocaleTimeString()}) - [${type}] - ${msg}`);
        break;
      case "false false":
        console.log(`[${type}] - ${msg}`);
        break;
      default:
        throw new Error("Unexpected Case");
    }
  }

  // Log to stderr.
  _logstderr(msg, type) {
    // Define message types.
    const types = {
      "WARN": "YELLOW",
      "ERROR": "RED"
    }

    if (!types.hasOwnProperty(type)) {
      throw new Error("Unknown message type!");
    }

    // Print the message according to the set options in the class construction.
    switch ([this.colored, this.timestamps].join(' ')) {
      case "true true":
        if (type == "ERROR") {
          console.error(this._color(types[type]), `(${new Date().toLocaleTimeString()}) - [${type}] - ${msg}`);
        } else {
          console.warn(this._color(types[type]), `(${new Date().toLocaleTimeString()}) - [${type}] - ${msg}`);
        }
        break;
      case "true false":
        if (type == "ERROR") {
          console.error(this._color(types[type]), `[${type}] - ${msg}`);
        } else {
          console.warn(this._color(types[type]), `[${type}] - ${msg}`);
        }
        break;
      case "false true":
        if (type == "ERROR") {
          console.error(`(${new Date().toLocaleTimeString()}) - [${type}] - ${msg}`);
        } else {
          console.warn(`(${new Date().toLocaleTimeString()}) - [${type}] - ${msg}`);
        }
        break;
      case "false false":
        if (type == "ERROR") {
          console.error(`[${type}] - ${msg}`);
        } else {
          console.warn(`[${type}] - ${msg}`);
        }
        break;
      default:
        throw new Error("Unexpected Case");
    }
  }

}

module.exports = {
  Logger: Logger
}