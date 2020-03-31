## React Native template

Created in order to reduce the number of repeated steps needed to set up React Native App.

- ### babel-plugin-module-resolver
It allows you to create import aliases leading to certain files/directories, so you don't have to do:

```
import { debounce } from "../../../../helpers"
```
because you can instead:
```
import { debounce } from "@your_own_helper_alias"
```
No matter where you are in the file tree.

This is possible thanks to the said plugin, that you first have to configure inside .babelrc file:

```
{
  "plugins": [
    [
      "module-resolver",
      {
        "root": ["./src"],
        "alias": {
          // [alias_name]: [path]
          "@helpers": "./helpers.js"
        }
      }
    ]
  ]
}
```
