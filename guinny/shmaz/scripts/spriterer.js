for (let i = 0; i < 30; i++) {
  const x = (i % 10) * 50;
  const y = Math.floor(i / 10) * 50;
  console.log(
    `"purple-gem-${i}": { "frame": { "x": ${x}, "y": ${y}, "w": 50, "h": 50 } },`
  );
}
