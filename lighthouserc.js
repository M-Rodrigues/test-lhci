module.exports = {
  ci: {
    collect: {
      url: [
        'https://www.leggio.com.br'
      ],
      numberOfRuns: 3
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
