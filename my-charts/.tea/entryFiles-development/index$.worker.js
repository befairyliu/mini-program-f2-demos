require('./config$');

function success() {
require('../..//app');
require('../..//pages/index/index');
require('../..//pages/charts/dot/dot');
require('../..//pages/charts/line/line');
require('../..//pages/charts/area/area');
require('../..//pages/charts/bar/bar');
require('../..//pages/charts/pie/pie');
require('../..//pages/charts/radar/radar');
require('../..//pages/charts/k/k');
require('../..//pages/charts/doubleY/doubleY');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
