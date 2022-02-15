import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors';
import Restaurants from './models/dbRestaurants.js';

//app config: 
const app = express();
const port = process.env.PORT || 8001;
const connection_url = "mongodb+srv://korekweis:backendPassword@cluster0.ps4rg.mongodb.net/MoodMeDatabase?retryWrites=true&w=majority"

//Middleware 
app.use(express.json());
app.use(Cors());

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

    //BUILDING
    var building = req.query.building;
    if (building) { 
        var temp = {};
        filters["address.building"] = building;
        delete filters["building"];
    }

    //STREET
    var street = req.query.street;
    if (street) { 
        filters["address.street"] = street;
        delete filters["street"];
    }

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

app.post("/search", (req, res) => { 
    var filters = req.body;

    // SORT
    var sort = req.body.sort;
    if (sort) { 
        delete filters["sort"];
    }

    // PAGINATION 
    var pagination = req.body.pagination;
    if (pagination) { 
        pagination = parseInt(req.body.pagination);
    } else { 
        pagination = 10;
    }
    delete filters["pagination"];

    // PAGE
    var page = req.body.page; 
    if (page) { 
        page = parseInt(req.body.page);
    } else { 
        page = 1
    }
    delete filters["page"]

    //BUILDING
    var building = req.body.building;
    if (building) { 
        var temp = {}; 
        filters["address.building"] = building;
    }
    delete filters["building"];

    //STREET
    var street = req.body.street;
    if (street) { 
        filters["address.street"] = street;
    }
    delete filters["street"];

    // DATE 
    var date = req.body.date;
    if (date) { 
        date = new Date(date);
        filters["grades.date"] = date
    }
    delete filters["date"];

    //GRADE
    var grade = req.body.grade;
    if (grade) { 
        filters["grades.grade"] = grade
    }
    delete filters["grade"];

    // SCORE
    var score = req.body.score;
    if (score) { 
        filters["grades.score"] = parseInt(score);
    }
    delete filters["score"];

    // RESTAURANT ID 
    var id = req.body.id;
    if (id) { 
        filters["restaurant_id"] = id;
    }
    delete filters["id"];

    if (!filters["cuisine"]) { 
        delete filters["cuisine"];
    }
    if (!filters["name"]) { 
        delete filters["name"];
    }

    Restaurants.find(filters, (err, data) => { 
        if (err) { 
            res.status(500).send(err);
        } else { 
            res.status(200).send(data)
        }
    })
    .skip((page-1) * pagination)
    .limit(pagination)
    .sort(sort)
})

app.post("/getInfo", (req, res) => { 
    var getId = mongoose.Types.ObjectId(req.body);
    Restaurants.findOne({_id: getId}, (err, data) => { 
        res.status(200).send(data);
    })
})

app.get("/buildings", (req, res) => { 
    Restaurants.distinct("address.building", (err, data) => { 
        res.status(200).send(data);
    })
})

app.get("/streets", (req, res) => { 
    Restaurants.distinct("address.street", (err, data) => { 
        res.status(200).send(data);
    })
})

app.get("/dates", (req, res) => { 
    Restaurants.distinct("grades.date", (err, data) => { 
        res.status(200).send(data);
    })
})

app.get("/grades", (req, res) => { 
    Restaurants.distinct("grades.grade", (err, data) => { 
        res.status(200).send(data);
    })
})

app.get("/scores", (req, res) => { 
    Restaurants.distinct("grades.score", (err, data) => { 
        res.status(200).send(data);
    })
})

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