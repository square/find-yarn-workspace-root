'use strict';

const expect = require('chai').expect;
const path = require('path');
const findWorkspaceRoot = require('../index');

describe('findWorkspaceRoot', function() {
  let fixtureDirectory = path.resolve(__dirname, './fixtures');

  const tests = [
    {
      description: 'normal yarn project',
      baseDir: path.join(fixtureDirectory, 'normal-yarn-project'),
      expectedResult: null,
    },
    {
      description: 'not a yarn project',
      baseDir: path.join(fixtureDirectory, 'not-yarn'),
      expectedResult: null,
    },
    {
      description: 'yarn workspace root',
      baseDir: path.join(fixtureDirectory, 'yarn-workspace'),
      expectedResult: path.join(fixtureDirectory, 'yarn-workspace'),
    },
    {
      description: 'package-a in yarn workspace root',
      baseDir: path.join(fixtureDirectory, 'yarn-workspace', 'package-a'),
      expectedResult: path.join(fixtureDirectory, 'yarn-workspace'),
    },
    {
      description: 'package-b in yarn workspace root',
      baseDir: path.join(fixtureDirectory, 'yarn-workspace', 'package-b'),
      expectedResult: path.join(fixtureDirectory, 'yarn-workspace'),
    },
    {
      description: 'package not listed in yarn workspace root',
      baseDir: path.join(fixtureDirectory, 'yarn-workspace', 'not-in-workspace'),
      expectedResult: null,
    },
    {
      description: 'yarn workspace root without a lockfile',
      baseDir: path.join(fixtureDirectory, 'yarn-workspace-no-lockfile'),
      expectedResult: path.join(fixtureDirectory, 'yarn-workspace-no-lockfile'),
    },
  ];

  for (let i = 0; i < tests.length; i++) {
    const description = tests[i].description;
    const baseDir = tests[i].baseDir;
    const expectedResult = tests[i].expectedResult;

    it(description, function() {
      expect(findWorkspaceRoot(baseDir)).to.equal(expectedResult);
    });
  }
});
