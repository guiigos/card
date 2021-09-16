#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');
const figlet = require('figlet');
const argv = require('yargs').argv;

const paddingDefault = (str) => str.padStart(10, ' ');

const lang = argv.lang || 'en';

const color = '#2F7305';

const optionsBoxen = {
  padding: 1,
  margin: 1,
  dimBorder: false,
  float: 'left',
  textAlignment: 'left',
  borderStyle: 'double',
  borderColor: '#4CCC18',
};

const optionsFiglet = {
  font: 'Standard',
  horizontalLayout: 'default',
  verticalLayout: 'default',
  whitespaceBreak: false,
  width: undefined,
};

const data = {
  logo: chalk.white(figlet.textSync("GuiigO's", optionsFiglet)),
  name: chalk.white('Guilherme Alves'),
  mail: chalk.hex(color)('guiigos.alves@gmail.com'),
  work: {
    en: chalk.white('Developer · AmbevTech'),
    pt: chalk.white('Desenvolvedor · AmbevTech'),
  },
  web: chalk.hex(color)('http://guiigos.com'),
  linkedin: chalk.hex(color)('https://www.linkedin.com/in/guiigos'),
  facebook: chalk.hex(color)('https://www.facebook.com/guiigos.alves'),
  instagram: chalk.hex(color)('https://www.instagram.com/guiigos.alves'),
  github: chalk.hex(color)('https://github.com/guiigos'),
};

const defaultLabel = {
  work: chalk.white.bold(paddingDefault('Work:')),
  web: chalk.white.bold(paddingDefault('Web:')),
  linkedin: chalk.white.bold(paddingDefault('Linkedin:')),
  facebook: chalk.white.bold(paddingDefault('Facebook:')),
  instagram: chalk.white.bold(paddingDefault('Instagram:')),
  github: chalk.white.bold(paddingDefault('GitHub:')),
};

const label = {
  en: { ...defaultLabel },
  pt: {
    ...defaultLabel,
    work: chalk.white.bold('  Trabalho:'),
  },
};

const output = `${data.logo}
  
${data.name} 
${data.mail}
  
  
${label[lang].work}  ${data.work[lang]}
  
${label[lang].web}  ${data.web}
${label[lang].linkedin}  ${data.linkedin}
${label[lang].facebook}  ${data.facebook}
${label[lang].instagram}  ${data.instagram}
${label[lang].github}  ${data.github}`;

console.clear();
console.log(chalk.magenta(boxen(output, optionsBoxen)));