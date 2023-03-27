const aliases = (prefix = `src`) => ({
  '@assets': `${prefix}/assets`,
  '@components': `${prefix}/components`,
  '@config': `${prefix}/config`,
  '@containers': `${prefix}/containers`,
  '@contexts': `${prefix}/contexts`,
  '@utils': `${prefix}/utils`
});

module.exports = aliases;