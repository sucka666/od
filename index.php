<?php

require_once __DIR__ . '/core/vendor/autoload.php';
require_once __DIR__ . '/core/includes/bootstrap.inc';

try {
  drupal_handle_request();
}
catch (Exception $e) {
  print 'If you have just changed code (for example deployed a new module or moved an existing one) read http://drupal.org/documentation/rebuild';
  throw $e;
}
