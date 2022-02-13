import express from 'express'
import mongoose from 'mongoose'
import Restaurants from './models/dbRestaurants.js';

//app config: 
const app = express();
const port = process.env.PORT || 8001;
const connection_url = "mongodb+srv://korekweis:backendPassword@cluster0.ps4rg.mongodb.net/MoodMeDatabase?retryWrites=true&w=majority"

//DBConfig 
mongoose.connect(connection_url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})


// API endpoints
app.get("/", (req, res) => { 
    var filters = req.query;

    // PAGINATION 
    var pagination = req.query.pagination;
    if (pagination) { 
        pagination = parseInt(req.query.pagination);
        delete filters["pagination"];
    } else { 
        pagination = 10;
    }

    // PAGE
    var page = req.query.page; 
    if (page) { 
        page = parseInt(req.query.page);
        delete filters["page"]
    } else { 
        page = 1
    }

    Restaurants.find((err, data) => { 
        console.log(data);
        res.status(200).send(data)
    })
    .skip((page-1) * pagination)
    .limit(pagination)
})

app.get("/api", (req, res) => {
    var filters = req.query;

    // SORT
    var sort = req.query.sort;
    if (sort) { 
        delete filters["sort"];
    }

    // PAGINATION 
    var pagination = req.query.pagination;
    if (pagination) { 
        pagination = parseInt(req.query.pagination);
        delete filters["pagination"];
    } else { 
        pagination = 10;
    }

    // PAGE
    var page = req.query.page; 
    if (page) { 
        page = parseInt(req.query.page);
        delete filters["page"]
    } else { 
        page = 1
    }

    // filters.address = {}

    //BUILDING
    var building = req.query.building;
    if (building) { 
        var temp = {};
        // temp.building = building; 
        filters["address.building"] = building;
        delete filters["building"];
    }

    // console.log(JSON.stringify(filters));
    // console.log(filters.address);

    //STREET
    var street = req.query.street;
    if (street) { 
        filters["address.street"] = street;
        delete filters["street"];
    }
    // console.log(`filters: ${filters}`);

    // DATE 
    var date = req.query.date;
    if (date) { 
        date = new Date(date);
        filters["grades.date"] = date
        // {$lte: date}
        delete filters["date"];
    }

    //GRADE
    var grade = req.query.grade;
    if (grade) { 
        filters["grades.grade"] = grade
        delete filters["grade"];
    }
    // console.log(JSON.stringify(filters));

    // SCORE
    var score = req.query.score;
    if (score) { 
        filters["grades.score"] = parseInt(score);
        delete filters["score"];
    }


    Restaurants.find(filters, (err, data) => { 
        res.status(200).send(data)
    })
    .skip((page-1) * pagination)
    .limit(pagination)
    .sort(sort)
});

app.get("/cuisines", (req, res) => { 
    Restaurants.distinct("cuisine", (err, data) => { 
        res.status(200).send(data);
    })
})

app.get("/names", (req, res) => { 
    Restaurants.distinct("name", (err, data) => { 
        res.status(200).send(data);
    })
})

app.get("/ids", (req, res) => { 
    Restaurants.distinct("restaurant_id", (err, data) => { 
        res.status(200).send(data);
    })
})
// listener
app.listen(port, () => console.log(`listening to localhost: ${port}`));