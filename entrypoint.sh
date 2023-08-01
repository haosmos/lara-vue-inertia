#!/bin/bash

cp -r /home/node/cache/* /home/node/app/
exec npm run dev -- --host 0.0.0.0
