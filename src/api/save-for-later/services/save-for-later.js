'use strict';

/**
 * save-for-later service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::save-for-later.save-for-later');
