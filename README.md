<!-- omit in toc -->
# Template React + TypeScript + Vite

## Introduction

Welcome to the **React + Typescript + Vite template** repository!

Here, you will find a **development** (not production yet) ready-to-use template that includes:

- **Babel:** javascript compiler
- **EditorConfig:** configures your environment accordingly across devices
- **ESLint:** checks for linting errors
- **Jest:** testing framework
- **Prettier:** helps format the code automatically
- **React Testing Library:** testing library to make assertions easier

Please make sure to install the [recommended extensions](./.vscode/extensions.json) for this workspace.

<!-- omit in toc -->
## Table of contents

- [Introduction](#introduction)
- [Getting started](#getting-started)
  - [Use this template](#use-this-template)
  - [Clone repository](#clone-repository)
  - [Install dependencies](#install-dependencies)
  - [Run the application](#run-the-application)
    - [Development](#development)
    - [Production](#production)
- [Build](#build)
- [Manifest](#manifest)
- [Linting \& Formatting](#linting--formatting)
- [Tests](#tests)
- [Continuous Integration](#continuous-integration)
- [Continuous Deployment](#continuous-deployment)
- [Contributing](#contributing)
- [Known Issues](#known-issues)
- [Authors](#authors)

## Getting started

Please read the steps below carefully because they will help you throughout the **template repository** setup.

If you are looking to **contribute** instead, please read the [Contributing](#contributing) section.

### Use this template

First, go to the [template's page in a separate tab](https://github.com/lgaspari/template-react-typescript-vite) and press the `Use this template` green button. Then, press the `Create a new repository` option.

You should be prompted with a new page to create a new repository. Take your time to fill out the form and submit it when finished.

### Clone repository

Now, clone your just created repository either using `SSH` or `HTTPS` to get started:

```bash
# SSH
git clone git@github.com:<organization>/<repository-name>.git

# HTTPS
git clone https://github.com/<organization>/<repository-name>.git
```

Then, move to the just generated folder:

```bash
cd <repository-name>
```

### Install dependencies

This repository uses [npm](https://www.npmjs.com/) as a package manager for dependencies. Please run the following command to download and install dependencies:

```bash
npm install   # or `npm i`
```

### Run the application

#### Development

To start the application in **development mode**, you can run the following command:

```bash
npm run start
```

> The browser **will not** open the web application automatically at **localhost**, so please click [http://localhost:5173](http://localhost:5173) to access it manually.

#### Production

If you would like to start the application in **production mode** instead, you can run the following command:

```bash
npm run start:production
```

> The browser **will not** open the web application automatically at **localhost**, so please click [http://localhost:4173](http://localhost:4173) to access it manually. Note that the port is different for production.

## Build

You may create a **production-ready bundle** at any time by running the following command:

```bash
npm run build
```

The build configuration is available in the [vite.config.ts](./vite.config.ts) file.

## Manifest

This template includes a [web manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) allowing users to download/install the application on their devices to improve their experience.

If you are looking to update your application icons, you may be able to do so by changing the [application's logo file](./public/logo.svg) and then running the following command:

```bash
npm run generate-manifest-assets
```

The manifest and assets generation configurations are available in the [manifest.webmanifest](./public/manifest.webmanifest) and [pwa-assets.config.ts](./pwa-assets.config.ts) files.

## Linting & Formatting

This template uses [ESLint](https://eslint.org/) as a linter library and [Prettier](https://prettier.io/) as a formatting library to maintain our code.

You may check your code linting and formatting status at any time by running the following command:

```bash
npm run lint
```

The lint and formatting configurations are available in the [.eslintrc.json](./.eslintrc.json) and [.prettierrc.json](./.prettierrc.json) files.

## Tests

This template uses [Jest](https://jestjs.io/) as a testing framework for component testing. There are four ways to run tests in our repository:

- `npm run test`: runs **only changed** test suites.
- `npm run test:ci`: changes snapshot behavior and runs **all** test suites.
- `npm run test:coverage`: enables coverage report and runs **all** test suites.
- `npm run test:watch`: watches for **only changed** test suites based on your git status — *most recommended for development*

The test configuration is available in the [jest.config.js](./jest.config.js) file.

## Continuous Integration

This template uses GitHub Actions to run the continuous integration workflow. This workflow will be triggered when pushing a new commit into the main branch or creating a new pull request. In addition, you could run this workflow manually if needed.

Workflow steps:

- **Lint:** check for code and lint errors
- **Test:** test components changed since the previous commit (push) or base branch (pull request)

The workflow configuration is available in the [ci.yml](./.github/workflows/ci.yml) file.

> Read the following GitHub Gist to understand how we have set up the Continuous Integration workflow to run only changed tests, [Jest and the --changedSince flag in GitHub Actions](https://gist.github.com/bnb/9de89a07278e9f57cd058a535ab89a9b).

## Continuous Deployment

Unfortunately, this feature is out of the scope of this template. Feel free to use any continuous deployment method you are familiar with.

## Contributing

There are no contributing guidelines for this repository just yet. However, feel free to create an issue reporting a problem or submit a pull request for review.

Thanks a bunch! :)

## Known Issues

**Jest watches node_modules file changes**

We couldn't determine the cause of this issue or how to solve it.

## Authors

- [@lgaspari](https://github.com/lgaspari)