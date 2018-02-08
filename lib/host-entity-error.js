/**
 * This file is part of node-entity-host
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * A specific error type for {HostEntity}.
 *
 * @class
 */
class HostEntityError extends Error {

  /**
   * Create an new instance of {HostEntityError}.
   *
   * @param args - The arguments.
   * @constructor
   */
  constructor(...args) {
    super(...args);
    // Error.captureStackTrace(this, HostEntityError);
  }
}

module.exports = {};
module.exports.HostEntityError = HostEntityError;
