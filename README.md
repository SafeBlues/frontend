# KPMG README

Please view the deployed site at https://participant.safeblues.org/

still under construction is migrating these two pages from the defunct vue based
frontend to the new react based frontend.

- https://safeblues.github.io/frontend/#/admin
- https://safeblues.github.io/frontend/#/dashboard

# Safe Blues Dashboard
## local testing and development

```docker-compose build frontend-dev && docker-compose run frontend-dev```
note you need to have run `npm i` in the frontend repo first.

otherwise you can just test with `npm run serve`

## testing prod build

```docker-compose build frontend && docker-compose run frontend```

## Running tests

for interacting with the test suite:
```
dc up frontend-dev
docker ps # get the container id
docker exec -it 413eaf851c79 npm run test
```
or for live reload without interactivity:
```
dc up tests
```
