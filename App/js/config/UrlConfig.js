const UrlConfig = {
  host: 'http://mobileapi.5sing.kugou.com',
  version: '6.7.14',
  headers: {
    'apptime': Date.parse(new Date()) / 1000
  }
};

export default UrlConfig;