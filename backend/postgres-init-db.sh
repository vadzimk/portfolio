#!/bin/bash
set -e

if [ psql -U $POSTGRES_USER -lqt | cut -d \| -f 1 | grep -qw $DATABASE_NAME ]; then
  echo "$DATABASE_NAME exists";
else
  createdb -U $POSTGRES_USER -T template0 $DATABASE_NAME
fi

# this step is done manually using ssh from local machine.
# scp * ubuntu@vadzimk.link:~/applications/common_db/backup
# docker exec -it postgres bash "pg_restore -U postgres --dbname=$DATABASE_NAME --verbose --no-owner ./backup/dump.tar"


# must be called as
# docker exec -i postgres bash -c "POSTGRES_USER=$POSTGRES_USER; DATABASE_NAME=$DATABASE_NAME; $(<postgres-init-db.sh)"
