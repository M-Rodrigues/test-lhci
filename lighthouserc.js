module.exports = {
  ci: {
    collect: {
      url: [
        'https://www.leggio.com.br',
        'https://www.leggio.com.br/market-analytics'
      ],
      numberOfRuns: 3
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
