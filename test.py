#! /usr/bin/env python

import os
macros = "./macros.js"
source = "test/sweet-pattern-test.js"
output = "build/sweet-pattern-test.js"
sweetification = "sjs --module " + macros + " " + source + " -o " + output
testing = "npm run test"
print(sweetification)
os.system(sweetification + " && " + testing)
