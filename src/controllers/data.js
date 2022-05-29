const cityModel = require('../models/city');
const partnerModel = require('../models/partner');
const collectionModel = require('../models/collection');
const userModel = require('../models/user');

const helper = require('../helpers');

module.exports = {
  getAllDataCount: async (request, response) => {
    try {
      const cities = await cityModel.getCitiesCount();
      const partners = await partnerModel.getPartnersCount();
      const collections = await collectionModel.getCollectionsCount();
      const users = await userModel.getUsersCount();

      const result = {
        ...cities,
        ...partners,
        ...collections,
        ...users,
      };
      console.log(cities);

      return helper.response(response, 200, { message: 'Get All Data Count' }, result);
    } catch (error) {
      console.log(error.message);
      return helper.response(response, 500, { message: 'Failed to get Data Count' });
    }
  },
};
