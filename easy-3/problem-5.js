function triangle(int) {
  let padding = int - 1;

  let stars = 1;

  while (stars <= int) {
    console.log(`${" ".repeat(padding)}${"*".repeat(stars)}`);
    padding -= 1;
    stars += 1;
  }
}

triangle(20);