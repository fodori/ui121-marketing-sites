#!/usr/bin/env node
import { spawnSync } from 'node:child_process'
import { readdirSync, existsSync } from 'node:fs'
import { join, resolve } from 'node:path'

const root = resolve(process.cwd())
const sitesDir = join(root, 'sites')
const packagesDir = join(root, 'packages')
const siteFilter = process.argv[2]

const run = (label, command, args, cwd = root) => {
  console.log(`\n▶ ${label}`)
  const result = spawnSync(command, args, { cwd, stdio: 'inherit', shell: false })
  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

for (const pkg of readdirSync(packagesDir)) {
  const tsconfig = join(packagesDir, pkg, 'tsconfig.json')
  if (!existsSync(tsconfig)) continue
  run(`tsc (${pkg})`, 'yarn', ['tsc', '-p', `packages/${pkg}/tsconfig.json`, '--noEmit'])
}

const sites = siteFilter ? [siteFilter] : readdirSync(sitesDir)
for (const domain of sites) {
  const sitePath = join(sitesDir, domain)
  if (!existsSync(join(sitePath, 'package.json'))) continue
  run(`astro check (${domain})`, 'yarn', ['run', 'check'], sitePath)
}

console.log('\n✓ type-check passed')
