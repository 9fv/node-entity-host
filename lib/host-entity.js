/**
 * This file is part of node-entity-host
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

const _ = require('lodash');
const {hostValidator, HostValidator} = require('host-validator');

const {HostEntityError} = require('./host-entity-error');

/**
 * Entity for host.
 *
 * @class
 * @public
 */
class HostEntity {

  /**
   * Create a new instance of {HostEntity}.
   *
   * @param value {string|HostValidator} - If {string}: IPv4/IPv6 address or hostname. An instance of {HostValidator} else.
   * @public
   * @constructor
   */
  constructor(value) {
    HostEntity.checkParameters(value);
    this.hostValidator = HostEntity.getHostValidator(value);
    Object.assign(this, this.validate());
  }

  /**
   * Check type of the provided parameter(s).
   *
   * @param value {*} - The value to check.
   */
  static checkParameters(value) {
    if ((_.isString(value) === false) && (value instanceof HostValidator === false)) {
      throw new TypeError(`Parameter <value> must be of type {string|HostValidator}. Founded: ${value}`)
    }
  }

  /**
   * Auto-convert the provided value to a {HostValidator} instance.
   *
   * @param value {*}
   * @returns {*}
   */
  static getHostValidator(value) {
    if (_.isString(value) === true) {
      try {
        return hostValidator(value);
      } catch (e) {
        throw new HostEntityError(e);
      }
    }
    return value;
  }

  /**
   *
   * @returns {{value, type}}
   */
  validate() {
    try {
      const validation = this.hostValidator.validate();
      if (validation === false) {
        throw new HostEntityError('Seems not an host');
      }
    } catch (e) {
      throw new HostEntityError(e);
    }
    return {value: this.hostValidator.value, type: this.hostValidator.type}
  }

  /**
   * A factory static method to create a new instance of {HostEntity}.
   *
   * @param value {string|HostValidator} - If {string}: IPv4/IPv6 address or hostname. An instance of {HostValidator} else.
   * @public
   * @returns {HostEntity}
   */
  static factory(value) {
    return new HostEntity(value);
  }
}

module.exports = {};
module.exports.HostEntity = HostEntity;