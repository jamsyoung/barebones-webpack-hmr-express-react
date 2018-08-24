#!/bin/bash
# shellcheck disable=SC1091
set -o errexit
. .scripts/colors.sh
declare grey magenta red reset
export ENVIRONMENT="${ENVIRONMENT:-local}"
export PORT="${PORT:-80}"
runtimeconfig=( ENVIRONMENT   PORT   WEBPACK_HMR)
maxcols=100
lwidth=29
rwidth=$((maxcols-lwidth))
set -o noglob   # Disable filename expansion (globbing) (set -f)
printf "%${maxcols}s\\n" | tr ' ' ─
printf "%$(((${#title}+maxcols)/2))s\\n" "ENVIRONMENT CONFIGURATION"
printf "%${lwidth}s%s%$((rwidth-1))s\\n" '' '┬' | tr ' ' ─
printf "${red}%-${lwidth}s${reset}│${grey}%s${reset}\\n" ' RUNTIME CONFIG' ' if value is blank the in-app default will be used'
for var in "${runtimeconfig[@]}"; do printf "%${lwidth}s│${magenta}%s${reset}\\n" " ${var} " " ${!var}"; done
printf "%${lwidth}s%s%$((rwidth-1))s\\n" '' '┴' | tr ' ' ─
