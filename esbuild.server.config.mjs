import { build as esbuild } from 'esbuild';

const build = async () => {
  await esbuild({
    publicPath: '/',
    entryPoints: {
      server: './src/application/server',
    },
    assetNames: 'assets/[name]-[hash]',
    outdir: 'build',
    bundle: true,
    sourcemap: true,
    minify: false,
    jsxFactory: 'jsx',
    inject: ['./react-shim.js'],
    target: 'es2015',
    platform: 'node',
    loader: {
      '.png': 'file',
      '.jpg': 'file',
      '.jpeg': 'file',
      '.svg': 'file',
      '.ico': 'file',
      '.ttf': 'file',
      '.gif': 'file',
      '.woff': 'file',
      '.eot': 'file',
    },
    define: {
      'process.env.NODE_ENV': '"development"',
    },
  });
};

build();
