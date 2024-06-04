import { awscdk } from "projen";
import { NpmAccess } from "projen/lib/javascript";
const project = new awscdk.AwsCdkConstructLibrary({
  author: "Julian Michel",
  authorAddress: "mail@julianmichel.de",
  cdkVersion: "2.1.0",
  defaultReleaseBranch: "main",
  jsiiVersion: "~5.4.0",
  name: "@jumic/my-dummy-construct",
  projenrcTs: true,
  repositoryUrl: "https://github.com/jumic/my-dummy-construct.git",

  prettier: true,

  releaseToNpm: true,
  npmAccess: NpmAccess.RESTRICTED,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
