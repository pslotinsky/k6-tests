var shell = require('shelljs');
const path = require('path');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const { compilerOptions } = require('../tsconfig.json');

shell.exec(`rm -rf dist`);

shell.exec(`yarn tsc`);

shell.exec(`find dist -type f -exec sed -i 's/\\.ts"/\\.js"/g' {} +`);

Object.keys(compilerOptions.paths).forEach(key => {
    const name = key.substr(0, key.length - 2);
    const value = compilerOptions.paths[key][0].substr(0, key.length - 2);
    const absolutePath = path.resolve(__dirname, '../dist/' + value).replace(/\//g, '\\/');

    shell.exec(`find dist -type f -exec sed -i 's/${name}/${absolutePath}/g' {} +`);
});

(async () => {
    const moduleDirNames = process.argv[2].split(',');

    shell.exec(`mkdir -p results`);

    for (let moduleDirName of moduleDirNames) {

        const { loaderNames } = require(`../dist/modules/${moduleDirName}/loaderNames`);
        shell.exec(`mkdir -p results/${moduleDirName}`);

        for (let loaderName of loaderNames) {
            shell.exec(`k6 run --summary-export=results/${moduleDirName}/${loaderName}.json \
         --compatibility-mode=base -e LOADER=${moduleDirName}/loader/${loaderName} ./dist/index.js`);
            await sleep(15000);
        }
    }
})();


