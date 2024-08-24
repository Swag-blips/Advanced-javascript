const conan = {
  name: "Conan",
  city: "Los Angeles",
  sing: function () {
    console.log("THIS is:", this);
    return `${this.name} sings LA LA LA`;
  },
};

const lisa = {
  name: "Lisa",
  city: "Los Angeles",
};

const lisaSing = conan.sing.bind(lisa);

lisaSing();

function applySalesTax(taxRate, price) {
  return price + price * taxRate;
}

const applyCASalesTax = applySalesTax.bind(null, 0.0725);
const applyMTSalesTax = applySalesTax.bind(null, 0);
