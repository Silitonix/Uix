
Bun.build({
  minify: {
    identifiers:true,
    syntax:true,
    whitespace:true
  },
  entrypoints: [ "source/Uix.ts" ],
  outdir: "build/script"
});

