import { spawnSync } from 'node:child_process'
import { join } from 'node:path'

const basePath = process.argv[2] || '/'
const bin = (name) => join('node_modules', '.bin', process.platform === 'win32' ? `${name}.cmd` : name)
const environment = { ...process.env, BASE_PATH: basePath }

for (const [command, args] of [['tsc', ['-b']], ['vite', ['build']]]) {
  const result = spawnSync(bin(command), args, { env: environment, stdio: 'inherit', shell: process.platform === 'win32' })
  if (result.status !== 0) process.exit(result.status || 1)
}
