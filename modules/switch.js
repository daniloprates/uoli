var fs = require('fs');
var rimraf = require('rimraf');
var utils = require('./utils');

var TCLPATH = process.env.TCLPATH;
var HOSTSPATH = process.env.HOSTSPATH;

module.exports = function(project, opt) {

  /**
   *
   * Unlinks the current `templates` directory
   * Links the `templates-{project}` directory to `templates`
   *
   */
  if (!opt || opt === 'tc') {

    if (!TCLPATH) {
      return utils.displayError('TCLPathNotFound');
    }

    var linkFrom = TCLPATH + '/templates-' + project;
    var linkTo = TCLPATH + '/templates';

    rimraf(TCLPATH + '/templates', function() {
      fs.symlink(linkFrom, linkTo, 'dir', function(err) {
        if (err) {
          return utils.displayError('TCLError', err);
        }
        utils.displayConfirm('TCLSwitchOk', project);
      });
    })

  }

  /**
   *
   * Replaces the `hosts` file by the `{project}.hosts` contents
   *
   */
  if (!opt || opt === 'hosts') {

    if (!HOSTSPATH) {
      utils.displayError('HOSTSPathNotFound');
    }

    var hostsFile = utils.getHostsFilePath();

    var hostsOrigin = HOSTSPATH + '/' + project + '.hosts';

    utils.replaceContents(hostsFile, hostsOrigin, function(err) {
      if (err) {
        return utils.displayError('HOSTSError', err);
      }
      utils.displayConfirm('HOSTSSwitchOk', project);
    });

  }

}
