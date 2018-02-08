/**
 * This file is part of node-entity-host
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

const should = require('should'); // eslint-disable-line no-unused-vars

const {HostEntity} = require('../lib/host-entity');
const {HostEntityError} = require('../lib/host-entity-error');


describe('Class named {HostEntity}', () => {
  it('should be a function', () => {
    (HostEntity).should.be.a.Function();
  });
});

describe('Create a {HostEntity}', () => {
  it('without parameter should be throw a {TypeError}', () => {
    (() => { new HostEntity(); }).should.throw(TypeError);
  });

  it('using an empty string should be throw a {TypeError}', () => {
    (() => { new HostEntity(''); }).should.throw(HostEntityError);
  });

  it('using an invalid hostname should be throw a {HostEntityError}', () => {
    (() => { new HostEntity('.poulet'); }).should.throw(HostEntityError);
  });

  it('using an valid IPv4 should be a {HostEntity}', () => {
    (new HostEntity('172.17.0.2')).should.be.instanceOf(HostEntity);
  });

  it('using an valid IPv6 should be a {HostEntity}', () => {
    (new HostEntity('2001:0db8:0a0b:12f0:0000:0000:0000:0001')).should.be.instanceOf(HostEntity);
  });

  it('using an valid compressed IPv6 should be a {HostEntity}', () => {
    (new HostEntity('2001:db8:a0b:12f0::1')).should.be.instanceOf(HostEntity);
  });

  it('using an valid hostname should be a {HostEntity}', () => {
    (new HostEntity('myhostname.tld')).should.be.instanceOf(HostEntity);
  });
});

describe('{HostEntity}', () => {
  it('should have a <value> property when using an valid IPv4', () => {
    (new HostEntity('172.17.0.2')).should.have.a.property('value');
  });

  it('should have a <value> property when using an valid IPv6', () => {
    (new HostEntity('2001:0db8:0a0b:12f0:0000:0000:0000:0001')).should.have.a.property('value');
  });

  it('should have a <value> property when using an valid compressed IPv6', () => {
    (new HostEntity('2001:db8:a0b:12f0::1')).should.have.a.property('value');
  });

  it('should have a <value> property when using an valid hostname', () => {
    (new HostEntity('myhostname.tld')).should.have.a.property('value');
  });
});


