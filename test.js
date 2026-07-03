import { readFileSync } from 'node:fs'
import assert from 'node:assert'
import test from 'node:test'

import JSON5 from 'json5'

const response = await fetch('https://spdx.org/licenses/licenses.json')
const spdx = (await response.json()).licenses.map(l => l.licenseId)

test('all valid SPDX IDs', t => {
  const data = JSON5.parse(readFileSync('index.json5', 'utf8'))
  for (const [classifier, ids] of Object.entries(data)) {
    for (const id of ids) {
      assert(spdx.includes(id), `${classifier} => ${id}`)
    }
  }
})
