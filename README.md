# api-ts_phrases
NodeJS, ExpressJS , MySQL - RESTful API // adicionar manipular frases e seus autores CRUD / MVC

# Installation #

npm install

# Start API #

npm run start-dev

# Routes #
<hr />
<br />

### Ping to api / test availability ###
GET - 127.0.0.1:3000/ping
<br /> <br /> 

### Lists all phrases stored in the database ###
GET - 127.0.0.1:3000/phrases
<br /> <br /> 

### Get a specific phrase from the database by id ###
GET - 127.0.0.1:3000/name/anyName
<br /> <br /> 

### Create a new sentence in the database ###
POST - 127.0.0.1:3000/phrases/newphrase

Pass the author key with the author name of the sentence
pass the content key with the phrase of the new phrase
<br /> <br /> 

### Edit a database phrase by id ###
PUT - 127.0.0.1:3000/phrases/edit/idDaFrase

Pass the key author with the new name of the author of the sentence
pass the content key with the new sentence of the new sentence
<br /> <br /> 

### Delete a phrase from the database by id ###
DELETE - 127.0.0.1:3000/phrases/delete/idDaFrase
