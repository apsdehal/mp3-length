'use strict'
var assert = require('assert');
var mp3Length = require('../index.js');

describe('mp3Length()', function () {
    it('should return a correct value for length', function (done) {
        mp3Length('./tests/demo.mp3', function (err, length) {
            if (err) {
                throw err;
            }
            assert.equal(length, 7);
            done();
        });
    });
});
