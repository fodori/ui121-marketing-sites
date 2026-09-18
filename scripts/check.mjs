#!/usr/bin/env node
import { spawnSync } from 'node:child_process'
import { resolve } from 'node:path'

const domain = process.argv[2]
if (!domain) {
  console.error('Usage: yarn site:check <domain>')
  process.exit(1)
}

const cwd = resolve(process.cwd(), 'sites', domain)
const result = spawnSync('yarn', ['check'], { cwd, stdio: 'inherit', shell: true })
process.exit(result.status ?? 1)
