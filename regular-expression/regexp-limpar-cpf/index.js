const cpfsEl = document.querySelectorAll(".cpf li");

const elementsInnerText = ([...elements]) =>
  elements.map((item) => item.innerText);

const limparCpf = (cpf) => cpf.replace(/\D/g, "");

const construirCpf = (cpf) =>
  cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");

const formatarCpfs = (cpfs) => cpfs.map(limparCpf).map(construirCpf);

const substituirCpfs = (cpfsFormatados) =>
  cpfsEl.forEach((item, index) => (item.innerText = cpfsFormatados[index]));

const cpfs = elementsInnerText(cpfsEl);
const cpfsFormatados = formatarCpfs(cpfs);
substituirCpfs(cpfsFormatados);
