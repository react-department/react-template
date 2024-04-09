#!/usr/bin/env node

require('dotenv').config();
const glob = require('glob');
const testsFolderName = 'tests';
const srcPath = process.env.SRC_PATH;
const excludedFilesString = process.env.EXCLUDED_FILES;
const componentsExtension = '.tsx';
const logicFilesExtension = '.ts';
const sliceFolderName = 'slices';

function findFilesByExtension(directory, extension, excludedFiles = []) {
  return glob.sync(`**/*${extension}`, { cwd: directory, ignore: excludedFiles });
}

function getEndOfPath(arrayPath) {
  let endOfPath = 2;
  if(arrayPath.includes(sliceFolderName)) {
    endOfPath = 3;
  } else if (arrayPath.length === 2) {
    endOfPath = -1;
  }
  return endOfPath;
}

function checkIsTestExists(file, extension) {
    const arrayPath = file.split('/');
    const fileName = arrayPath[arrayPath.length - 1];
    const testsFile = `${testsFolderName}/${fileName.replace(extension, `.test${extension}`)}`;
    const isOneLevelFolder = arrayPath.length === 2;
    const parentFolder = `${srcPath}/${arrayPath.slice(0, getEndOfPath(arrayPath)).join('/')}`;
    return glob.sync(`**/${testsFile}`, { cwd: parentFolder }).length > 0;
}

function checkFiles(files, extension) {
  const missingTests = [];
  files.forEach((file) => {
    const isTestExists = checkIsTestExists(file, extension);
    if (!isTestExists) {
      missingTests.push(`${srcPath}/${file}`);
    }
  });
  return missingTests;
}

function throwError(message) {
  console.error('\x1b[31m', message);
  process.exit(1);
}

if (srcPath && excludedFilesString) {
  const excludedFiles = excludedFilesString.split(',');
  const tsxFiles = findFilesByExtension(srcPath, componentsExtension, excludedFiles);
  const tsFiles = findFilesByExtension(srcPath, logicFilesExtension, excludedFiles);
  const missingLogicTests = checkFiles(tsFiles, logicFilesExtension);
  const missingComponentsTests = checkFiles(tsxFiles, componentsExtension);
  const missingTests = [
    ...missingComponentsTests,
    ...missingLogicTests
  ];
  if (missingTests.length > 0) {
    throwError(`Missing tests for the following files:\n - ${missingTests.join('\n - ')}`);
  }
  process.exit(0);
} else {
  throwError('Add SRC_PATH and TESTS_EXCLUDED_FILES to .env file!');
}
