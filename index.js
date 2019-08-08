const degit = require("degit");
const yargs = require("yargs");

main(yargs.argv).then(
  () => {},
  error => {
    console.error(error);
    process.exit(1);
  }
);

function main(options) {
  const bundler = options.webpack ? "webpack" : "rollup";
  const [destination = "create-sapper-app"] = options._;

  const repo = degit(`sveltejs/sapper-template#${bundler}`);
  return repo.clone(destination);
}
