export default {
    bundle: true,
    sourcemap: true,
    entryPoints: ["target/gen/libs.js"],
    outdir: "target/resources/public/js",
    target: ["es2020", "chrome119", "firefox120", "safari17", "edge119"],
    metafile: true,
    logLevel: 'info'
}