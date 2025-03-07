console.log(process.argv);

let agrs = process.argv;

for (let i = 2; i < agrs.length; i++) {
  console.log("hello & welcome ", agrs[i]);
}
