'use strict';

/**
 * front-end router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::front-end.front-end');
