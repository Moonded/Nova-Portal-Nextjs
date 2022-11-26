"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
var client_1 = require("@prisma/client");
exports.prisma = global.prisma ||
    new client_1.PrismaClient({
        log: [
            {
                emit: 'event',
                level: 'query',
            },
            {
                emit: 'stdout',
                level: 'error',
            },
            {
                emit: 'stdout',
                level: 'info',
            },
            {
                emit: 'stdout',
                level: 'warn',
            },
        ],
    });
exports.prisma.$on('query', function (e) {
    // console.log('Query: ' + e);
    // console.log('Params: ' + e.params);
    // console.log('Duration: ' + e.duration + 'ms');
});
if (process.env.NODE_ENV !== 'production')
    global.prisma = exports.prisma;
