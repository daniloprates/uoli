var fs = require('fs-extra');
var utils = require('./utils');

var TCLPATH = process.env.TCLPATH;
var HOSTSPATH = process.env.HOSTSPATH;

var utils = require('./utils');

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

    var fromDir = TCLPATH + '/templates';
    var toDir = TCLPATH + '/templates-' + project;

    fs.copy(fromDir, toDir, function(err) {
      if (err) {
        return utils.displayError('TCLError', err);
      }
      utils.displayConfirm('TCLCreateOk', project);
    });

  }

  /**
   *
   * Replaces the `hosts` file by the `{project}.hosts` contents
   *
   */
  if (!opt || opt === 'hosts') {

    if (!HOSTSPATH) {
      return utils.displayError('HOSTSPathNotFound');
    }

    var hostsFile = utils.getHostsFilePath();
    var hostsDestiny = HOSTSPATH + '/' + project + '.hosts';

    utils.replaceContents(hostsDestiny, hostsFile, function(err) {
      if (err) {
        return utils.displayError('HOSTSError', err);
      }
      utils.displayConfirm('HOSTSCreateOk', project);
    });

  }

}
