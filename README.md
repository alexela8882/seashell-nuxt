# nuxt-vuetify

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# Git Log
```
git log --stat --pretty=format:"%ad %s %N" --date=format:"%c"
```

# GUIDE FOR PRODUCTION

## Pull updates from repository
```bash
$ git branch #should be on <ees-production> branch before pulling updates
$ git pull
```

## Apply updates in production
```bash
$ npm run build #to apply changes in production
$ pm2 start npm --name multicolordot -- start
```

### Kill all process
```bash
pm2 kill
```

### Kill specific process
```bash
pm2 delete <app_name>
pm2 delete multicolordot
```

### Restart all process
```bash
pm2 restart all
```