/* eslint-env node, mocha */
"use strict";

const should = require("chai").should();
const path = require("path");

describe("Utility", function() {
	before(function() {
		this.utility = require(path.join("..", "..", "src", "utility"));
	});

	it("should exist", function() {
		should.exist(this.utility);
	});

	["normalizePort"].forEach(propertyName => {
		it(`should have a public property called ${propertyName}`, function() {
			this.utility.should.have.property(propertyName);
		});
	});

	describe("normalizePort", function() {
		it("should be a function", function() {
			this.utility.normalizePort.should.be.a("function");
		});

		it("should expect a single parameter", function() {
			this.utility.normalizePort.length.should.equal(1);
		});

		it("should return the value passed in as an integer when an integer is passed in", function() {
			this.utility.normalizePort("42").should.deep.equal(42);
		});

		it("should return the value passed in as an string when a named port is passed in", function() {
			this.utility.normalizePort("http").should.deep.equal("http");
		});

		it("should return false when a negative value is passed in", function() {
			this.utility.normalizePort("-42").should.be.false;
		});
	});
});
