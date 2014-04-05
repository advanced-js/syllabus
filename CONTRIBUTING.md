## Using this repo

[Node.js](http://nodejs.org) is required (tested w/ Node v0.10.2).  To run the `examples/`:

```bash
node scripts/run_tests.js
```

To run an individual exercise:

```bash
node scripts/run_tests.js examples/FILENAME.js
```

To build the examples as HTML:

```bash
node scripts/build.js
```

To build the README as a PDF:

```bash
gem install gimli
gimli
# outputs README.pdf
```
