REPORTER = list
MOCHA_OPTS = --ui tdd -c
init_sql:   app/init/index.js
    echo "Starting init sql***************************************"; \
    DB_HOST=127.0.0.1;   \
    DB_USER=root;    \
    DB_PORT=3306;    \
    DB_PASSWORD=cy19900826;  \
    DB_DATABASE=node;    \
    node ./app/init/index.js;  \
    echo "End init sql***************************************"