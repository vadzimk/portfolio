#!/bin/bash

set -e
echo POSTGRES_USER=$POSTGRES_USER;
echo DATABASE_NAME=$DATABASE_NAME;

if psql -U $POSTGRES_USER -lqt | cut -d \| -f 1 | grep -qw $DATABASE_NAME;
then
  echo $DATABASE_NAME exists;
else
  createdb -U $POSTGRES_USER -T template0 $DATABASE_NAME && echo $DATABASE_NAME created;
fi;

# this step is done manually using ssh from local machine.
# scp * ubuntu@vadzimk.link:~/applications/common_db/backup
# docker exec -it postgres bash "pg_restore -U postgres --dbname=$DATABASE_NAME --verbose --no-owner ./backup/dump.tar"