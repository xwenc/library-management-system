const aliases = (prefix = `src`) => ({
  '@assets': `${prefix}/assets`,
  '@components': `${prefix}/components`,
  '@config': `${prefix}/config`,
  '@containers': `${prefix}/containers`,
  '@contexts': `${prefix}/contexts`,
  '@data': `${prefix}/data`,
  '@repositories': `${prefix}/repositories`,
  '@ts-types': `${prefix}/ts-types`,
  '@utils': `${prefix}/utils`,
});

module.exports = aliases;