const { Given, When } = require('@cucumber/cucumber');
const chai = require('chai');
const chaiJsonSchema = require('chai-json-schema');
const { spec, response } = require("pactum");
const {url} = require("../../config/driver_options.js");
const { customWorld } = require("../../support/support");

chai.use(chaiJsonSchema);
const expect = chai.expect;

Given('Agent List All Movie', async function () {
    const listUrl = customWorld.state.api.base_url + '/api/movies';
    const jsonSchema = {
        type: 'object',
        properties: {
            id: { type: 'integer' },
            movie: { type: 'string' },
            rating: { type: 'number' },
            image: { type: 'string' },
            imdb_url: { type: 'string', format: 'url' },
        },
        required: ['id', 'movie', 'rating', 'image', 'imdb_url'],
    };
    const jsonArraySchema = {
        type: 'array',
        items: jsonSchema
    };
    const list = spec().get(listUrl).withHeaders({
        'a': 'a'
    }).withBody({
        'a': 'a'
    });
    await list.toss();
    customWorld.state.api.current_req = list;
    list.expectStatus(200);
    expect(list._response['json']).to.be.jsonSchema(jsonArraySchema);
});
