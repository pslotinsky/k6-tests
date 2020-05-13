var shell = require('shelljs');
const path = require('path');

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

// shell.exec(`k6 run --compatibility-mode=base -e LOADER=${process.argv[2]}  --out influxdb=http://localhost:8086/myk6db ./dist/index.js`);
shell.exec(`k6 run --compatibility-mode=base -e LOADER=${process.argv[2]} ./dist/index.js`);
