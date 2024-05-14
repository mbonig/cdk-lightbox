import { web } from 'projen';
const project = new web.ReactTypeScriptProject({
  defaultReleaseBranch: 'main',
  name: '@matthewbonig/cdk-lightbox',
  projenrcTs: true,
  release: true,
  releaseToNpm: true,
  npmRegistryUrl: 'https://npm.pkg.github.com',
  deps: ['express'],
  npmIgnoreOptions: {
    ignorePatterns: [
      '!build',
    ],
  },
});

project.tasks.tryFind('post-compile')!.exec(
  [
    'mkdir -p dist/js || true',
    'tar -zcf dist/js/dist.tgz build/* bin/*',
  ].join(';'),
);
project.synth();
