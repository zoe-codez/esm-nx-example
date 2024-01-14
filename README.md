# Zoe-Codez NX+ESM+Node20+Kitchen Sink Example Repo

## Description

This is a highly tweaked take on the a fresh nodejs project built on top of nx. Generated on `2024-01-01`.

It is intended to target node 20, and install the latest versions of dependencies. TSConfig & linting has been set up very aggressively, feel free to relax to your preferences.

### Things that have been validated working

- proper library inheritance
- unit tests
- linting
- spell checking
- prettier
- vscode features & extensions

### Haven't tested

- running applications + related vscode debugging features

> Running the applications probably shouldn't be too difficult, based off the notes below.
> I have a POC nx + vscode node debugging in another repo, will integrate here when I get it tested.

## Repo Root: Landmarks

### [tsconfig.base.json](./tsconfig.base.json)

- lots of options making things more strict
- set up @library/path mappings to a base index file inside your library
- add references to all the root tsconfig files in your own projects

### [cspell.config.yml](./cspell.config.yml)

- spellchecking, integrated through eslint

### [.eslintrc.json](./.eslintrc.json)

- keep an eye on the various `parser`, `parserOptions`, and `env` through the file
- `files` needs to be correctly targeted

### [libs/{library}/src/index.mts](./libs/utilities/src/index.mts)

- barrel files cannot export from other barrel files. be careful about creating nested definitions

## Example Libraries

Libraries have been set up with an inheritance of

- utilities (bottom)
- data-processing (middle)
- thing (inherits both)

### Utilities

Bottom level library, no imports

#### TSConfig

- [tsconfig.json](libs/utilities/tsconfig.json): minimal, contains references to the more useful tsconfigs, helps with external references
- [tsconfig.lib.json](libs/utilities/tsconfig.lib.json): sets up include / exclude
- [tsconfig.spec.json](libs/utilities/tsconfig.spec.json): same same, but for unit testing

### Support Files

- [package.json](libs/utilities/package.json): note the type: module, and the name matching the import path
- [jest.config.ts](libs/utilities/jest.config.ts): added transforms, ignorePatterns (you may have to adjust further based on your needs), and file extensions
- [project.json](libs/utilities/project.json): updates to extensions & file paths, nothing dramatic
- [.eslintrc.json](libs/utilities/.eslintrc.json): note the parser & parser options, each has a different tsconfig to support the linting

### `utilities/src/`

- [index.mts](libs/utilities/src/index.mts): This file is the root exports for the repo

### Data Processing

Intermediate library, imports from utilities

- [tsconfig.json](libs/data-processing/tsconfig.json): additional references to external tsconfig lib files. don't care about external specs
- [tsconfig.lib.json](libs/data-processing/tsconfig.lib.json): additional references
- [tsconfig.spec.json](libs/data-processing/tsconfig.spec.json): references! also, this shows some library specific loosening of restrictions for typescript for tests

### API Utils

Top level library, imports from both other libraries. Important files are the same, but just more references to deal with for tsconfig
