function maximumContainers(scenarios) {
  debugger;
  for (let i = 0; i < scenarios.length; i++) {
    let scenario = scenarios[i].split(" ");
    let budget = scenario[0];
    let cost = scenario[1];
    let conversion = scenario[2];
    let purchased = Math.floor(budget / cost);
    let total = purchased;
    while (purchased >= conversion) {
      purchased -= conversion;
      total++;
      purchased++;
    }
    console.log(total);
  }
}

maximumContainers(["6 2 2"]);
