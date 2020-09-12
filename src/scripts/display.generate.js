import fs from 'fs'

import {
    DISPLAY_SOURCE,
    DISPLAY_CONFIG
} from '../config'

let files = fs.readdirSync(DISPLAY_SOURCE)
let i 
for (i = 0; files[i]; i++) {
    console.log(files[i])    
}
