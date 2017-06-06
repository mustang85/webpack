const appConfig = require('appConfig');

function print(prop: string) {
  console.log(prop);
};

print(appConfig.app.appOwner);
print(appConfig.app.leadDev.name);
