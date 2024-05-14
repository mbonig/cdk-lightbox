import { web } from 'projen';
const project = new web.ReactTypeScriptProject({
  defaultReleaseBranch: 'main',
  name: '@matthewbonig/cdk-lightbox',
  projenrcTs: true,
  release: true,
  releaseToNpm: true,
  npmRegistryUrl: 'https://npm.pkg.github.com',
  deps: ['express'],
});
project.npmignore!.include('/build/');
project.npmignore!.exclude('/public/');

project.synth();
