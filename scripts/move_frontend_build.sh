#!/bin/bash

npm run build --prefix ./src/apps/CourtsManager/frontend

mv ./src/apps/CourtsManager/frontend/build/* ./dist/src/apps/CourtsManager/frontend
