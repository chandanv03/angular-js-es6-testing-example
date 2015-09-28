// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

// 3rd party libraries
import bootstrap from 'bootstrap';
import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularUiBootstrap from 'angular-ui-bootstrap';
import angularHighlightjs from 'angular-highlightjs';

// Modules
import app from './app/app.module';
import common from './common/common.module';
import featureA from './feature-a/feature-a.module';
import featureB from './feature-b/feature-b.module';

angular.module('main', [angularAnimate, angularUiBootstrap, angularHighlightjs, app, common, featureA, featureB]);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['main']);
});
