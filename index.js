function EncodeCPF(value) {
  if (value.length === 11) {
    return new Error("Invalid CPF lenght, please input a valid document.");
  }

  let cpf = value;

  let first = cpf.slice(0, 2).concat(cpf[2].concat("."));

  let second = cpf.slice(3, 5).concat(cpf[5].concat("."));

  let third = cpf.slice(6, 8).concat(cpf[8].concat("-"));

  let four = cpf.slice(9, 11);

  const response = first + second + third + four;

  return response;
}

function EncodeCNPJ(value) {
  if (value.length === 14) {
    return new Error("Invalid CNPJ lenght, please input a valid document.");
  }

  let cnpj = value;

  let first = cnpj.slice(0, 1).concat(cnpj[1].concat("."));

  let second = cnpj.slice(2, 4).concat(cnpj[4].concat("."));

  let third = cnpj.slice(5, 7).concat(cnpj[7].concat("/"));

  let fourth = cnpj.slice(8, 11).concat(cnpj[11].concat("-"));

  let fifth = cnpj.slice(12, 14);

  const response = first + second + third + fourth + fifth;

  return response;
}

function DecodeCNPJ(value) {
  if (value.lenght !== 18) {
    return new Error(
      "Invalid CNPJ lenght,  make sure if the document has the following special characters."
    );
  }

  return value
    .replace(".", "")
    .replace(".", "")
    .replace("/", "")
    .replace("-", "")
    .trim();
}

function DecodeCPF(value) {
  if (value.lenght !== 14) {
    return new Error(
      "Invalid CPF lenght, make sure if the document has the following special characters"
    );
  }

  return value.replace(".", "").replace(".", "").replace("-", "").trim();
}

module.exports = {
  EncodeCPF,
  DecodeCPF,
};
