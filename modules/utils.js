var fs = require('fs');
var colors = require('colors');
var i18n = require("i18n");
var mesages = require('./locales/en.json');
var locale = i18n.getLocale();

i18n.configure({
  locales: ['en', 'pt'],
  cookie: 'uoli',
  directory: __dirname+'/locales'
});

module.exports = {

  /**
   *
   * Replaces a file contents by another one
   *
   * @param {string} file File to be changed
   * @param {string} replacement File to get the contents from
   * @param {function} cb Callback function
   */
  replaceContents: function(file, replacement, cb) {

    fs.readFile(replacement, (err, contents) => {
      if (err) return cb(err);
      fs.writeFile(file, contents, cb);
    });

  },

  getHostsFilePath: function() {
    switch (process.platform) {
      case 'win32':
        return process.env.windir + '\\System32\\drivers\\etc\\hosts';
      default:
        return '/etc/hosts';
    }
  },

  displayMsg: function(msgCode) {
    console.log( i18n.__(msgCode) );
  },
  displayConfirm: function(msgCode, blueText) {
    console.log('✅  ' + i18n.__(msgCode, (blueText).bold.blue));
  },
  displayError: function(msgCode, err) {
    err = err || '';
    if (err && err.code && mesages[err.code]) {
      err = i18n.__(err.code);
    } else if (typeof err === 'object') {
      err = JSON.stringify(err, null, 0);
    }
    console.log('❌  ' + ( i18n.__(msgCode) ) + '\n  ',  (err).bold.red );
  }

}
