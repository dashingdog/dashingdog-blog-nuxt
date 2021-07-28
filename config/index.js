const Config = {
  baseUrl: process.env.NODE_ENV === 'production' ? 'https://api.dashingdog.cn' : 'http://127.0.0.1:5000',
  staticPath: 'resource.dashingdog.cn'
}

export default Config
