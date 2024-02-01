
const dateNow = (new Date()).toString();

module.exports.paths = [
    {
      path: '/',
      lastmod: dateNow,
      priority: 1,
      changefreq: 'monthly'
    },
    {
      path: '/proektirovshchikam/',
      lastmod: dateNow,
      priority: 0.8,
      changefreq: 'monthly'
    },
     
];