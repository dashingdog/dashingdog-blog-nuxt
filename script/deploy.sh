pm2 stop dashingdog-blog-nuxt

npm install

echo 'build'

npm run build

pm2 restart dashingdog-blog-nuxt

echo 'success'
