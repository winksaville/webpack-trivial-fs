# Webpack trivial fs example that doesn't work :)

So it turns out you can't use the node.js modules on the client side,
i.e. in the browser.
See [this](https://gitter.im/webpack/webpack?at=5890dc402ff29dec065dd0f8)
webpack gitter converstion.

What does work is:
```
$ node app.js
Synchronous read: from x.txt
```

So using webpack isn't really useful on the server side.
