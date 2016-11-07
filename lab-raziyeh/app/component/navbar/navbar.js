'use strict';

module.exports = {
  template: require('./navbar.html'),
  controller: ['$log','$location', NavbarController],
  controllerAs: 'navbarCtrl',
};

function NavbarController($log, $location){
  $log.debug('navbar component');

  this.btnTitle = 'Sign in';
  if ($location.url() === '/home') {
    this.btnTitle = 'Log out';
    this.showLogout = true;
  }

  this.signin = function() {
    $location.url('/login');
  };

  let googleAuthBase = 'https://accounts.google.com/o/oauth2/v2/auth';
  let googleAuthResponseType = 'response_type=code';
  let googleAuthClientID = `client_id=${__GOOGLE_CLIENT_ID__}`;
  let googleAuthScope = 'scope=profile%20email%20openid';
  let googleAuthRedirectURI = 'redirect_uri=http://localhost:3000/oauth/signout-api';
  let googleAuthAccessType = 'access_type=offline';

  this.googleAuthURL = `${googleAuthBase}?${googleAuthResponseType}&${googleAuthClientID}&${googleAuthScope}&${googleAuthRedirectURI}&${googleAuthAccessType}`;
}
