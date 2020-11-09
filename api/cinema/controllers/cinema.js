'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.cinema.search(ctx.query,["location"]);
    } else {
      entities = await strapi.services.cinema.find(ctx.query,["location"]);
    }

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.cinema }));
  },
};
