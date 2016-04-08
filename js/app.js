
window.odinApp = {
  application: angular.module('odinApp', ['ionic', 'odinApp.lib', 'odinApp.controllers', 'odinApp.services']),
  controllers: angular.module('odinApp.controllers', []),
  services: angular.module('odinApp.services', []),
  lib: angular.module('odinApp.lib', [])
};
