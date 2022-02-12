import { build as esbuild } from 'esbuild';

const build = async () => {
  await esbuild({
    publicPath: '/',
    entryPoints: {
      client: './src/application/client',
    },
    outdir: 'build',
    assetNames: 'assets/[name]-[hash]',
    bundle: true,
    sourcemap: true,
    minify: false,
    jsxFactory: 'jsx',
    inject: ['./react-shim.js'],
    target: 'es2015',
    platform: 'browser',
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
      global: typeof window !== 'undefined' && window,
      'process.env.NODE_ENV': '"development"',
    },
  });
};

build();
