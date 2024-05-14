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
    'mkdir dist || true',
    'mkdir dist/bin || true',
    'mkdir dist/build || true',
    'cp -r build/* dist/build',
    'cp -r bin/* dist/bin',
  ].join(';'),
);
project.synth();
