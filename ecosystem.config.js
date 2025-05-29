module.exports = {
    apps: [{
        name: 'explorer-ssr',
        script: './node_modules/nuxt/bin/nuxt.js',
        args: `start -c ${process.cwd()}/nuxt.config.js`,
        instances: 'max',
        exec_mode: 'cluster',
        watch: false,
        max_memory_restart: '1000M',
        log_date_format: 'YYYY-MM-DD HH:mm'
    }]
}
