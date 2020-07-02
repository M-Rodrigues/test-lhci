module.exports = {
  ci: {
    collect: {
      url: [
        'https://www.leggio.com.br',
        'https://storetheme.vtex.com/',
        'https://storetheme.vtex.com/?workspace=lhtest'
      ],
      numberOfRuns: 3
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
