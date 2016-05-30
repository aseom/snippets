function recurse(num) {
  console.log(num);
  if (num > 0) {
    recurse(num - 1);
  } else {
    console.log('Recurse done!');
  }
  console.log(num);
}

recurse(3);
