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

Install nodemon: 
`sudo npm i -g nodemon`

Install react-router-dom:
`npm install react-router-dom`

Install material-ui
`npm install @mui/material @emotion/react @emotion/styled`

`npm install @material-ui/core`

`npm install @material/menu`

`npm install @mui/icons-material`

`npm install @mui/lab`

`npm install date-fns --save`

Install axios: 
`npm install axios`

Install cors: 
`npm install cors`

Running backend:
`npx nodemon runserver` 

## Restaurant Search API Information 

#### Fetching all the data in the database 
```http 
GET http://localhost:8001/
```

#### Fetching all unique buildings
```http
GET http://localhost:8001/buildings
```

#### Fetching all unique streets
```http
GET http://localhost:8001/streets
```

#### Fetching all unique dates for grades
```http
GET http://localhost:8001/dates
```

#### Fetching all unique grades
```http
GET http://localhost:8001/grades
```

#### Fetching all unique scores
```http
GET http://localhost:8001/scores
```

#### Fetching all unique restaurant cuisines
```http
GET http://localhost:8001/cuisines
```

#### Fetching all unique restaurant names
```http
GET http://localhost:8001/names
```

#### Fetching all unique restaurant ids
```http
GET http://localhost:8001/ids
```

#### Number of Data to be displayed
This holds the parameter of the number of data to be displayed
```http
GET http://localhost:8001/api?pagination={pagination}
GET http://localhost:8001/api?pagination=2
```

<details>
  <summary><i>Example Response</i></summary>

```JSON
{
    "data": [{
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
    }]
}
```

</details>
<br>

#### Page Number of Data
This holds the page number. If the <i>pagination</i> is 3 and <i>page</i> is 3. This will display results 7 to 9. 
```http
GET http://localhost:8001/api?page={page}
GET http://localhost:8001/api?pagination=3&page=3
```
<details>
  <summary><i>Example Response</i></summary>

```JSON
{
    "data": [{
        "address": {
            "building": "1839",
            "street": "Nostrand Avenue"
        },
        "_id": "5eb3d668b31de5d588f42932",
        "cuisine": "Ice Cream, Gelato, Yogurt, Ices",
        "grades": [
            {
                "_id": "62088f5ceebf85aed2b973a2",
                "date": "2014-07-14T00:00:00.000Z",
                "grade": "A",
                "score": 12
            },
            {
                "_id": "62088f5ceebf85aed2b973a3",
                "date": "2013-07-10T00:00:00.000Z",
                "grade": "A",
                "score": 8
            },
            {
                "_id": "62088f5ceebf85aed2b973a4",
                "date": "2012-07-11T00:00:00.000Z",
                "grade": "A",
                "score": 5
            },
            {
                "_id": "62088f5ceebf85aed2b973a5",
                "date": "2012-02-23T00:00:00.000Z",
                "grade": "A",
                "score": 8
            }
        ],
        "name": "Taste The Tropics Ice Cream",
        "restaurant_id": "40356731"
    },
    {
        "address": {
            "building": "7715",
            "street": "18 Avenue"
        },
        "_id": "5eb3d668b31de5d588f42934",
        "cuisine": "American",
        "grades": [
            {
                "_id": "62088f5ceebf85aed2b973a6",
                "date": "2014-04-16T00:00:00.000Z",
                "grade": "A",
                "score": 5
            },
            {
                "_id": "62088f5ceebf85aed2b973a7",
                "date": "2013-04-23T00:00:00.000Z",
                "grade": "A",
                "score": 2
            },
            {
                "_id": "62088f5ceebf85aed2b973a8",
                "date": "2012-04-24T00:00:00.000Z",
                "grade": "A",
                "score": 5
            },
            {
                "_id": "62088f5ceebf85aed2b973a9",
                "date": "2011-12-16T00:00:00.000Z",
                "grade": "A",
                "score": 2
            }
        ],
        "name": "C & C Catering Service",
        "restaurant_id": "40357437"
    },
    {
        "address": {
            "building": "1",
            "street": "East   66 Street"
        },
        "_id": "5eb3d668b31de5d588f42937",
        "cuisine": "American",
        "grades": [
            {
                "_id": "62088f5ceebf85aed2b973aa",
                "date": "2014-05-07T00:00:00.000Z",
                "grade": "A",
                "score": 3
            },
            {
                "_id": "62088f5ceebf85aed2b973ab",
                "date": "2013-05-03T00:00:00.000Z",
                "grade": "A",
                "score": 4
            },
            {
                "_id": "62088f5ceebf85aed2b973ac",
                "date": "2012-04-30T00:00:00.000Z",
                "grade": "A",
                "score": 6
            },
            {
                "_id": "62088f5ceebf85aed2b973ad",
                "date": "2011-12-27T00:00:00.000Z",
                "grade": "A",
                "score": 0
            }
        ],
        "name": "1 East 66Th Street Kitchen",
        "restaurant_id": "40359480"
    }]
}
```

</details>
<br>

#### Fetching raw data by Building
```http
GET http://localhost:8001/api?building={building}
GET http://localhost:8001/api?building=1007
```
<details>
  <summary><i>Example Response</i></summary>

```JSON
{
    "data": {
        "address": {
            "building": "1007",
            "street": "Morris Park Ave"
        },
        "_id": "5eb3d668b31de5d588f4292e",
        "cuisine": "Bakery",
        "grades": [
            {
                "_id": "620890cceebf85aed2b973b9",
                "date": "2014-03-03T00:00:00.000Z",
                "grade": "A",
                "score": 2
            },
            {
                "_id": "620890cceebf85aed2b973ba",
                "date": "2013-09-11T00:00:00.000Z",
                "grade": "A",
                "score": 6
            },
            {
                "_id": "620890cceebf85aed2b973bb",
                "date": "2013-01-24T00:00:00.000Z",
                "grade": "A",
                "score": 10
            },
            {
                "_id": "620890cceebf85aed2b973bc",
                "date": "2011-11-23T00:00:00.000Z",
                "grade": "A",
                "score": 9
            },
            {
                "_id": "620890cceebf85aed2b973bd",
                "date": "2011-03-10T00:00:00.000Z",
                "grade": "B",
                "score": 14
            }
        ],
        "name": "Morris Park Bake Shop",
        "restaurant_id": "30075445"
    }
}
```
</details>
<br>

#### Fetching raw data by Street
```http
GET http://localhost:8001/api?street={street}
GET http://localhost:8001/api?street=11 Avenue
```
<details>
  <summary><i>Example Response</i></summary>

```JSON
{
    "data": {
        "address": {
            "building": "6522",
            "street": "11 Avenue"
        },
        "_id": "5eb3d668b31de5d588f4327e",
        "cuisine": "Italian",
        "grades": [
            {
                "_id": "6208917aeebf85aed2b973dc",
                "date": "2014-04-04T00:00:00.000Z",
                "grade": "A",
                "score": 7
            },
            {
                "_id": "6208917aeebf85aed2b973dd",
                "date": "2013-03-26T00:00:00.000Z",
                "grade": "A",
                "score": 9
            },
            {
                "_id": "6208917aeebf85aed2b973de",
                "date": "2012-10-19T00:00:00.000Z",
                "grade": "A",
                "score": 4
            },
            {
                "_id": "6208917aeebf85aed2b973df",
                "date": "2012-03-27T00:00:00.000Z",
                "grade": "A",
                "score": 11
            }
        ],
        "name": "La Sorrentina Ristorante",
        "restaurant_id": "40650407"
    }
}
```

</details>
<br>

#### Fetching raw data by Cuisine
```http
GET http://localhost:8001/api?cuisine={cuisine}
GET http://localhost:8001/api?cuisine=Asian
```
<details>
  <summary><i>Example Response</i></summary>

```JSON
{
  "data": {
        "address": {
            "building": "51",
            "street": "West 52 Street"
        },
        "_id": "5eb3d668b31de5d588f42b9f",
        "cuisine": "Asian",
        "grades": [
            {
                "_id": "6208920ceebf85aed2b973ff",
                "date": "2014-08-12T00:00:00.000Z",
                "grade": "A",
                "score": 11
            },
            {
                "_id": "6208920ceebf85aed2b97400",
                "date": "2013-08-27T00:00:00.000Z",
                "grade": "A",
                "score": 9
            },
            {
                "_id": "6208920ceebf85aed2b97401",
                "date": "2013-04-03T00:00:00.000Z",
                "grade": "B",
                "score": 18
            },
            {
                "_id": "6208920ceebf85aed2b97402",
                "date": "2012-09-20T00:00:00.000Z",
                "grade": "A",
                "score": 12
            },
            {
                "_id": "6208920ceebf85aed2b97403",
                "date": "2011-08-17T00:00:00.000Z",
                "grade": "A",
                "score": 2
            }
        ],
        "name": "China Grill",
        "restaurant_id": "40386481"
    }
}
```

</details>
<br>

#### Fetching raw data by Date
Returns data that has a grade posted before or equal to `YYYY-MM-DD`
```http
GET http://localhost:8001/api?date={date}
GET http://localhost:8001/api?date=2015-01-05
```
<details>
  <summary><i>Example Response</i></summary>

```JSON
{
  "data": {
        "address": {
            "building": "203",
            "street": "Giffords Lane"
        },
        "_id": "5eb3d668b31de5d588f4295d",
        "cuisine": "Delicatessen",
        "grades": [
            {
                "_id": "620894ed1ce282c6e00a3d0a",
                "date": "2015-01-05T00:00:00.000Z",
                "grade": "A",
                "score": 4
            },
            {
                "_id": "620894ed1ce282c6e00a3d0b",
                "date": "2014-09-11T00:00:00.000Z",
                "grade": "C",
                "score": 39
            },
            {
                "_id": "620894ed1ce282c6e00a3d0c",
                "date": "2014-03-20T00:00:00.000Z",
                "grade": "A",
                "score": 12
            },
            {
                "_id": "620894ed1ce282c6e00a3d0d",
                "date": "2013-01-24T00:00:00.000Z",
                "grade": "A",
                "score": 13
            },
            {
                "_id": "620894ed1ce282c6e00a3d0e",
                "date": "2012-05-23T00:00:00.000Z",
                "grade": "A",
                "score": 10
            }
        ],
        "name": "B & M Hot Bagel & Grocery",
        "restaurant_id": "40364299"
    }
}
```
</details>
<br>

#### Fetching raw data by Grade 
Returns data that has a grade equal to `grade`
```http
GET http://localhost:8001/api?grade={grade}
GET http://localhost:8001/api?grade=C
```
<details>
  <summary><i>Example Response</i></summary>

```JSON
{
  "data": {
        "address": {
            "building": "0",
            "street": "Guardia Airport Parking"
        },
        "_id": "5eb3d668b31de5d588f4295a",
        "cuisine": "American",
        "grades": [
            {
                "_id": "620893e8b748ad566dd27489",
                "date": "2014-05-16T00:00:00.000Z",
                "grade": "A",
                "score": 9
            },
            {
                "_id": "620893e8b748ad566dd2748a",
                "date": "2013-05-10T00:00:00.000Z",
                "grade": "A",
                "score": 10
            },
            {
                "_id": "620893e8b748ad566dd2748b",
                "date": "2012-05-15T00:00:00.000Z",
                "grade": "A",
                "score": 9
            },
            {
                "_id": "620893e8b748ad566dd2748c",
                "date": "2011-11-02T00:00:00.000Z",
                "grade": "C",
                "score": 32
            }
        ],
        "name": "Terminal Cafe/Yankee Clipper",
        "restaurant_id": "40364262"
    }
}
```

</details>
<br>

#### Fetching raw data by Score
Returns data that has a score equal to `score`
```http
GET http://localhost:8001/api?score={score}
GET http://localhost:8001/api?score=14
```
<details>
  <summary><i>Example Response</i></summary>

```JSON
{
  "data": {
        "address": {
            "building": "405",
            "street": "East   52 Street"
        },
        "_id": "5eb3d668b31de5d588f42994",
        "cuisine": "French",
        "grades": [
            {
                "_id": "620896191ce282c6e00a3d40",
                "date": "2014-07-14T00:00:00.000Z",
                "grade": "B",
                "score": 14
            },
            {
                "_id": "620896191ce282c6e00a3d41",
                "date": "2013-12-02T00:00:00.000Z",
                "grade": "A",
                "score": 12
            },
            {
                "_id": "620896191ce282c6e00a3d42",
                "date": "2013-04-08T00:00:00.000Z",
                "grade": "B",
                "score": 22
            },
            {
                "_id": "620896191ce282c6e00a3d43",
                "date": "2012-09-17T00:00:00.000Z",
                "grade": "A",
                "score": 12
            },
            {
                "_id": "620896191ce282c6e00a3d44",
                "date": "2012-04-03T00:00:00.000Z",
                "grade": "A",
                "score": 12
            }
        ],
        "name": "Le Perigord",
        "restaurant_id": "40365414"
    }
}
```

</details>
<br>

#### Fetching raw data by Name
Returns data that has a name equal to `name`
```http
GET http://localhost:8001/api?name={name}
GET http://localhost:8001/api?name=Wendy'S
```
<details>
  <summary><i>Example Response</i></summary>

```JSON
{
  "data": {
        "address": {
            "building": "138-41",
            "street": "Jamaica Avenue"
        },
        "_id": "5eb3d668b31de5d588f43086",
        "cuisine": "Hamburgers",
        "grades": [
            {
                "_id": "620897111ce282c6e00a3d82",
                "date": "2014-04-07T00:00:00.000Z",
                "grade": "A",
                "score": 12
            },
            {
                "_id": "620897111ce282c6e00a3d83",
                "date": "2013-04-11T00:00:00.000Z",
                "grade": "A",
                "score": 13
            },
            {
                "_id": "620897111ce282c6e00a3d84",
                "date": "2012-04-02T00:00:00.000Z",
                "grade": "A",
                "score": 9
            },
            {
                "_id": "620897111ce282c6e00a3d85",
                "date": "2011-04-21T00:00:00.000Z",
                "grade": "A",
                "score": 7
            }
        ],
        "name": "Wendy'S",
        "restaurant_id": "40568945"
    }
}
```

</details>
<br>

#### Fetching raw data searched by restaurant_id
```http
GET http://localhost:8001/api?restaurant_id={restaurant_id}
GET http://localhost:8001/api?restaurant_id=40362274
```
<details>
  <summary><i>Example Response</i></summary>

```JSON
{
  "data": {
        "address": {
            "building": "18",
            "street": "West Houston Street"
        },
        "_id": "5eb3d668b31de5d588f42943",
        "cuisine": "American",
        "grades": [
            {
                "_id": "62089871c9effd8f8a070950",
                "date": "2014-04-03T00:00:00.000Z",
                "grade": "A",
                "score": 9
            },
            {
                "_id": "62089871c9effd8f8a070951",
                "date": "2013-04-05T00:00:00.000Z",
                "grade": "A",
                "score": 4
            },
            {
                "_id": "62089871c9effd8f8a070952",
                "date": "2012-03-21T00:00:00.000Z",
                "grade": "A",
                "score": 13
            },
            {
                "_id": "62089871c9effd8f8a070953",
                "date": "2011-04-27T00:00:00.000Z",
                "grade": "A",
                "score": 5
            }
        ],
        "name": "Angelika Film Center",
        "restaurant_id": "40362274"
    }
}
```

</details>
<br>


<!-- #### SAMPLE
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
<br> -->
