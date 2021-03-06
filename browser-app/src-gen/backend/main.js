// @ts-check
const { BackendApplicationConfigProvider } = require('@theia/core/lib/node/backend-application-config-provider');
BackendApplicationConfigProvider.set({});

const serverPath = require('path').resolve(__dirname, 'server');
const address = require('@theia/core/lib/node/cluster/main').default(serverPath);
address.then(function (address) {
    if (process && process.send) {
        process.send(address.port.toString());
    }
});
module.exports = address;
