#!/usr/bin/env node

var the_app = require('commander');
the_app
  .version('1.0.0')
  .usage('<options>')
  .option('-w, --who <name>', 'Your name.')
  .option('-a, --age <integer>', 'Your age.', parseInt)
  .option('-l, --like <item>', 'You like it!')
  .option('-d, --dislike <item>', 'You don\'t like it!');

the_app.parse(process.argv);


if (typeof the_app.who === 'undefined') {
  console.log('I don\'t now who you are...');
  process.exit(1);
}
console.log('> My name is "' + the_app.who + '".');

if (typeof the_app.age !== 'undefined') {
  console.log('> I am ' + the_app.age + ' years old.');
}
if (typeof the_app.like !== 'undefined') {
  console.log('> I like "' + the_app.like + '".');
}
if (typeof the_app.dislike !== 'undefined') {
  console.log('> I don\'t like "' + the_app.dislike + '".');
}
