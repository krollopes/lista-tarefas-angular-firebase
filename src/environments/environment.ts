// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCPpfg0gDugStNbcvmKhPxqE8sX69DfWdw',
    authDomain: 'angular-tasks-2d201.firebaseapp.com',
    databaseURL: 'https://angular-tasks-2d201.firebaseio.com',
    projectId: 'angular-tasks-2d201',
    storageBucket: 'angular-tasks-2d201.appspot.com',
    messagingSenderId: '518316292927'
  }
};
