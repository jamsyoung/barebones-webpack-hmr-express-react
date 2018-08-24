#!/bin/bash
# shellcheck disable=SC2034

black="$(tput setaf 0)"
red="$(tput setaf 1)"
green="$(tput setaf 2)"
yellow="$(tput setaf 3)"
blue="$(tput setaf 4)"
magenta="$(tput setaf 5)"
cyan="$(tput setaf 6)"
white="$(tput setaf 7)"
grey="$(tput setaf 8)"
reset="$(tput sgr0)"

good_mark="${green}✔︎${reset}"
bad_mark="${red}𝗫${reset}"
