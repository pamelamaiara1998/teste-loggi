function dados() {

  let quant = process.argv[2]

  for (let i = 0; i < quant; i++) {

    let results = Math.floor(Math.random() * 6 + 1);

    switch (results) {

      case 1:
        console.log("Resultado: 1");
        console.log("|   |");
        console.log("| o |");
        console.log("|   |");
        console.log(" ");
        break;

      case 2:
        console.log("Resultado: 2");
        console.log("|o  |");
        console.log("|   |");
        console.log("|  o|");
        console.log(" ");
        break;

      case 3:
        console.log("Resultado: 3");
        console.log("|o  |");
        console.log("| o |");
        console.log("|  o|");
        console.log(" ");
        break;

      case 4:
        console.log("Resultado: 4");
        console.log("|o o|");
        console.log("|   |");
        console.log("|o o|        ");
        console.log(" ");
        break;

      case 5:
        console.log("Resultado: 5");
        console.log("|o o|");
        console.log("| o |");
        console.log("|o o|");
        console.log(" ");
        break;

      case 6:
        console.log("Resultado: 6");
        console.log("| o o |");
        console.log("| o o |");
        console.log("| o o |")
        console.log(" ");
        break;

    }
  }
}

dados()
