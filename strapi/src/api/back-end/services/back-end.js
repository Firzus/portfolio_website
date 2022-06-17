'use strict';

/**
 * back-end service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::back-end.back-end');
