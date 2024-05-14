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
  autoDetectBin: false,
  bin: {
    'cdk-lightbox': 'bin/cdk-lightbox',
  },
});
project.gitignore!.exclude('/build/', '/bin/cdk-lightbox');

project.npmignore!.include('/build/');
project.npmignore!.exclude('/public/', '/bin/**/*.ts');


let compileTask = project.tasks.tryFind('compile')!;
compileTask.exec('tsc --esModuleInterop  bin/cdk-lightbox.ts');
compileTask.exec('mv bin/cdk-lightbox.js bin/cdk-lightbox');
compileTask.exec('chmod +x bin/cdk-lightbox');


project.synth();
