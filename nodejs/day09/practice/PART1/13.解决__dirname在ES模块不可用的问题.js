// ? Solve - __dirname is not defined in ES module scope in JS

// import path from 'path'
// const __dirname = path.resolve()
// console.log('directory-name 👉️', __dirname)

import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
console.log('file-name 👉️', __filename)
console.log('directory-name 👉️', __dirname)
