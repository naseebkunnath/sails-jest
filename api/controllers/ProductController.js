/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getProducts: function (req, res) {
        return res.send([
            {
                id: 1,
                name: 'Apple'
            },
            {
                id: 2,
                name: 'Grape'
            }
        ]);
    }
};

