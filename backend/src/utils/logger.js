import path from 'path';
import winston from 'winston';

// Define custom log levels with colors
const customLevels = {
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        http: 3,
        debug: 4,
    },
    colors: {
        error: 'red',
        warn: 'yellow',
        info: 'green',
        http: 'magenta',
        debug: 'blue',
    },
};

// Add colors to Winston
winston.addColors(customLevels.colors);

// Create a Winston logger instance
const logger = winston.createLogger({
    levels: customLevels.levels,
    level: 'debug', // Set the default logging level
    format: winston.format.combine(
        winston.format.colorize(), // Apply colorization
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.printf(({ timestamp, level, message, stack }) => {
            return stack
                ? `${timestamp} [${level}]: ${message} \nStack: ${stack}` // Include stack trace for errors
                : `${timestamp} [${level}]: ${message}`;
        })
    ),
    transports: [
        // Log all errors to a single file
        new winston.transports.File({
            filename: path.join('logs', 'errors.log'),
            level: 'error',
        }),
    ],
    exceptionHandlers: [
        // Handle uncaught exceptions
        new winston.transports.File({
            filename: path.join('logs', 'exceptions.log'),
        }),
    ],
    rejectionHandlers: [
        // Handle unhandled promise rejections
        new winston.transports.File({
            filename: path.join('logs', 'rejections.log'),
        }),
    ],
});

// Export logger for use in other parts of the app
export default logger;
