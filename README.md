# Mood-Me-Backend

Create React app: 
`npx create-react-app backend-app`

Running frontend-backend-app folder in terminal: 
`npm start`

Password for db: 
backendPassword

In backend-backend-app folder
Version control:
`git init`
`npm init`

Install mongoose: 
`npm i express mongoose`

install nodemon: 
`sudo npm i -g nodemon`

Running backend:
`npx nodemon runserver` 

## Case Information 
#### Fetching all unique restaurant names
```http
GET http://localhost:8001/names
```

#### Fetching all unique restaurant ids
```http
GET http://localhost:8001/ids
```

#### Fetching all unique restaurant cuisines
```http
GET http://localhost:8001/cuisines
```

#### Number of data to be displayed
```http
GET http://localhost:8001/api?pagination={pagination}
GET http://localhost:8001/api?pagination=2
```

<details>
  <summary><i>Example Response</i></summary>

```JSON
{
        "address": {
            "building": "97-22",
            "street": "63 Road"
        },
        "_id": "5eb3d668b31de5d588f4292f",
        "cuisine": "Jewish/Kosher",
        "grades": [
            {
                "_id": "62088ae6408448377263c2a7",
                "date": "2014-11-24T00:00:00.000Z",
                "grade": "Z",
                "score": 20
            },
            {
                "_id": "62088ae6408448377263c2a8",
                "date": "2013-01-17T00:00:00.000Z",
                "grade": "A",
                "score": 13
            },
            {
                "_id": "62088ae6408448377263c2a9",
                "date": "2012-08-02T00:00:00.000Z",
                "grade": "A",
                "score": 13
            },
            {
                "_id": "62088ae6408448377263c2aa",
                "date": "2011-12-15T00:00:00.000Z",
                "grade": "B",
                "score": 25
            }
        ],
        "name": "Tov Kosher Kitchen",
        "restaurant_id": "40356068"
    },
    {
        "address": {
            "building": "469",
            "street": "Flatbush Avenue"
        },
        "_id": "5eb3d668b31de5d588f4292d",
        "cuisine": "Hamburgers",
        "grades": [
            {
                "_id": "62088ae6408448377263c2ab",
                "date": "2014-12-30T00:00:00.000Z",
                "grade": "A",
                "score": 8
            },
            {
                "_id": "62088ae6408448377263c2ac",
                "date": "2014-07-01T00:00:00.000Z",
                "grade": "B",
                "score": 23
            },
            {
                "_id": "62088ae6408448377263c2ad",
                "date": "2013-04-30T00:00:00.000Z",
                "grade": "A",
                "score": 12
            },
            {
                "_id": "62088ae6408448377263c2ae",
                "date": "2012-05-08T00:00:00.000Z",
                "grade": "A",
                "score": 12
            }
        ],
        "name": "Wendy'S",
        "restaurant_id": "30112340"
    }
```

</details>

#### Number of data to be displayed
```http
GET http://localhost:8001/api?pagination={pagination}
GET http://localhost:8001/api?pagination=2
```
<details>
  <summary><i>Example Response</i></summary>

```JSON
{
  "data": {
    "total": 89374,
    "recoveries": 65064,
    "deaths": 1983,
    "active_cases": 22327,
    "fatality_rate": "2.22",
    "recovery_rate": "72.80"
  }
}
```

</details>

