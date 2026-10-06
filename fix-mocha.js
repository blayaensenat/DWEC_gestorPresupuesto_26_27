import fs from 'fs';
import path from 'path';

const mochaPkgPath = path.resolve('node_modules', 'mocha', 'package.json');

if (fs.existsSync(mochaPkgPath)) {
  try {
    const pkg = JSON.parse(fs.readFileSync(mochaPkgPath, 'utf8'));
    pkg.type = 'commonjs';
    fs.writeFileSync(mochaPkgPath, JSON.stringify(pkg, null, 2));
    console.log('✔ Mocha parcheado correctamente con type: commonjs');
  } catch (err) {
    console.error('Error al parchear Mocha:', err);
  }
}