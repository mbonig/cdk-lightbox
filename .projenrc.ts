import { web } from 'projen';

const project = new web.ReactTypeScriptProject({
  defaultReleaseBranch: 'main',
  name: '@mbonig/cdk-lightbox',
  projenrcTs: true,
  release: true,
  releaseToNpm: true,
  npmRegistryUrl: 'https://npm.pkg.github.com',
  deps: ['express'],
  package: true,
});
project.npmignore!.include('/build/');
project.npmignore!.exclude('/public/');

project.synth();
