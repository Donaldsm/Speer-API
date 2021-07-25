# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file * for the purposes of this project please use a postgres database. *
3. Go to the `SQL stored procedures.txt` file to get the stored procedures. Run these in the query tool on PGAdmin for your selected database.
4. Run `npm run start` to run the API

To test the API use Postman to query the endpoints. To find the names of the elements in the JSON Objects you need to send as parameters you can find them in the controller files. An example is below.

### Route:
```
http://localhost:3030/speer/messages/new
```

### JSON  Object:
```
{
    "content": "Hello there",
    "sender": "Donald@theMcEacherns.com",
    "reciever": "James@theMcEacherns.com"
}
```