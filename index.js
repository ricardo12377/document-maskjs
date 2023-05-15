function EncodeCPF(type, value) {
  if (type === "cpf") {
    let cpf = value;

    let first = cpf.slice(0, 2).concat(cpf[2].concat("."));

    let second = cpf.slice(3, 5).concat(cpf[5].concat("."));

    let third = cpf.slice(6, 8).concat(cpf[8].concat("-"));

    let four = cpf.slice(9, 11);

    const response = first + second + third + four;

    return response;
  }
}

function DecodeCPF(value) {
  return value.replace(".", "").replace(".", "").replace("-", "").trim();
}

module.exports = {
  EncodeCPF,
  DecodeCPF,
};
