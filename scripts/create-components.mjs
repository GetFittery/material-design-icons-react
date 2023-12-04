#!/usr/bin/env zx
import { $ } from "zx"

import "zx/globals"
import {stat} from "fs"
import {promisify} from "util"
const statPromise = promisify(stat)

const CLONE_DIR = "material-design-icons";
const OUT_DIR = "components";

let status
try {
    status = await statPromise("./" + CLONE_DIR)
} catch (e) {
    status = null
}

if ( status && status.isDirectory ) {
    $.cwd = CLONE_DIR
    await $`git restore .`
    await $`git pull origin main`
    $.cwd = "."
} else {
    await $`git clone git@github.com:marella/material-design-icons.git ${CLONE_DIR}`
}

await $`rm ${CLONE_DIR}/svg/svgo.config.js`

$`./node_modules/.bin/svgr --out-dir ${OUT_DIR} --typescript -- ${CLONE_DIR}/svg/`
