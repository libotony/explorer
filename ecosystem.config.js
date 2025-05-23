module.exports = {
    apps: [{
        name: 'explorer-nuxt',
        script: './node_modules/.bin/nuxt',
        args: 'start',
        instances: 1, // change to max for production
        exec_mode: 'cluster',
        watch: false,
        max_memory_restart: '1000M',
        log_date_format: 'YYYY-MM-DD HH:mm:ss'
    }]
}
