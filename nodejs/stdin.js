process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if (input) process.stdout.write(`Input: ${input}`);
});
