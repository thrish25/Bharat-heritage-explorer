import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const viteBin = path.join(__dirname, 'node_modules', 'vite', 'bin', 'vite.js');

console.log('======================================================================');
console.log('STARTING ROYAL HERITAGE PLATFORM (FULL STACK)');
console.log('======================================================================');
console.log('Starting Backend Server (Port 3001)...');
const server = spawn('node', ['--experimental-strip-types', 'server/index.ts'], {
  cwd: __dirname,
  stdio: 'inherit',
});

console.log('Starting Vite Dev Server (Port 5173)...');
const vite = spawn('node', [viteBin, '--port=5173', '--host=127.0.0.1'], {
  cwd: __dirname,
  stdio: 'inherit',
});

const cleanup = () => {
  console.log('\nShutting down Royal Heritage Platform...');
  try { server.kill(); } catch (e) {}
  try { vite.kill(); } catch (e) {}
  process.exit(0);
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
