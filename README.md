# Homeless Data Locker (HDL)

Homeless Data Locker project for NYC and Baltimore

## Getting Started

This repository uses yarn and yarn workspaces.

Follow [instructions here](https://classic.yarnpkg.com/en/docs/install/) to install yarn on your system

Install all local dependencies via

```bash
yarn
```

## Creating a new Package (i.e. adding to the packages/ directory)

Create the new folder and move to it

```bash
mkdir -p packages/hello-world-lambda && cd packages/hello-world-lambda
```

Initialise the package

```bash
yarn init
```

and follow the prompts.

If you're using tools such as vue cli to bootstrap a project, after project set up you will need to execute the yarn commands manually to add all the packages required from the root.

### All packages MUST have

- A package.json file
- A registered `build` script in packages.json, if it needs to be built
- A registered `test` script in packages.json, if no tests a justification is required
- All dependencies added through root workspace so they are added to the lockfile

### All packages SHOULD have

- A README.md outlining any non-standard commands and how to work with the package.
- A `src` directory for all application code
- A `src/__tests__` directory for all test code
