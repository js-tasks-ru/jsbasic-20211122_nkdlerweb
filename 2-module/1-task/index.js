function sumSalary(salaries) {
    let sumSal = 0;
    for(let s in salaries) {
        if (typeof salaries[s] === "number" && !isNaN(salaries[s]) && salaries[s] != Infinity && salaries[s] != -Infinity)
            sumSal += salaries[s];          
    }
    return sumSal;
  }