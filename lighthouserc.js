module.exports = {
  ci: {
    collect: {
      url: [
        'https://www.leggio.com.br'
      ],
      numberOfRuns: 3
    },
    assert: {
      preset: 'lighthouse:recommended',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};