'use strict';

/**
 * front-end service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::front-end.front-end');
