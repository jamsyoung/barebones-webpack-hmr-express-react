# Barebones Webpack HMR Express React

## Requires

- `jq`
- `nvm`
- `npm`

## Details

```bash
# install required node version

$ nvm install

# -- THEN --
# start it up directly on localhost

$ npm install                # install node dependencies
$ WEBPACK_HMR=1 npm start    # start it up on localhost
$ open localhost:8080        # open in a browser

# ... make a code change - watch it hot reload ...

$ ^c                         # shut it down (ctrl-c)
```
