import React, { useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import axios from "./axios";
import moment from 'moment';
import useForm from './Form';
import { Form } from './Form';
import './App.css';

const initialValues = { 
    building:'', 
    street:'', 
    cuisine: '', 
    date:'', 
    grade: '', 
    score: '', 
    name: '', 
    id: '', 
    pagination: '', 
    page: ''
}

function Search() {
    const [data, setData] = useState([]);
    const [current, setCurrent] = useState(null);
    const [showData, setShowData] = useState(false);
    const [showCurrent, setShowCurrent] = useState(false);
    const [count, setCount] = useState(0);

    const searchData = e => { 
        console.log("INSIDE SEARCH DATA");
        // e.preventDefault();
        axios.post('/search', values)
            .then(response => { 
                setData(response.data);
                setShowCurrent(false);
                setShowData(true);
                console.log(response.data);
            })
    }


    const displayResto = (resto_id) => e => { 
        axios.post('/getInfo', {"id": resto_id})
            .then(response => {
                setCurrent(response.data);
                setCount(0);
                setShowData(false);
                setShowCurrent(true);
            })
        console.log("in display resto");
        console.log(resto_id);
    }

    const getBack = e => { 
        setShowCurrent(false);
        setShowData(true);
    }

    const {
        values, 
        setValues, 
        handleInputChange
    } = useForm(initialValues);

    return (
        <div class="search">
            <div class="search-cont"> 
                <Form>
                    <Grid item>
                        <TextField 
                            required 
                            variant="outlined"
                            label="Building"
                            name="building"
                            color="secondary"
                            fullWidth
                            value={ values.building } 
                            onChange={ handleInputChange }
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            required 
                            variant="outlined"
                            label="Street"
                            name="street"
                            color="secondary"
                            fullWidth
                            value={ values.street } 
                            onChange={ handleInputChange }
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            required 
                            variant="outlined"
                            label="Cuisine"
                            name="cuisine"
                            color="secondary"
                            fullWidth
                            value={ values.cuisine } 
                            onChange={ handleInputChange }
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            required 
                            variant="outlined"
                            label="Date"
                            name="date"
                            type="date"
                            formatDate={date => moment(date).format("YYYY-MM-DD")}
                            InputLabelProps={{ shrink: true, required: true }}
                            color="secondary"
                            fullWidth
                            value={ values.date } 
                            onChange={ handleInputChange }
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            required 
                            variant="outlined"
                            label="Grade"
                            name="grade"
                            color="secondary"
                            fullWidth
                            value={ values.grade } 
                            onChange={ handleInputChange }
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            required 
                            variant="outlined"
                            label="Score"
                            name="score"
                            color="secondary"
                            fullWidth
                            value={ values.score } 
                            onChange={ handleInputChange }
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            required 
                            variant="outlined"
                            label="Name"
                            name="name"
                            color="secondary"
                            fullWidth
                            value={ values.name } 
                            onChange={ handleInputChange }
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            required 
                            variant="outlined"
                            label="Restaurant ID"
                            name="id"
                            color="secondary"
                            fullWidth
                            value={ values.id } 
                            onChange={ handleInputChange }
                        />
                    </Grid>
                    <Grid item>
                        <div className="pagination-details">
                            <div className="pagination-pagination"> 
                                <TextField
                                    required 
                                    variant="outlined"
                                    label="Number of Data"
                                    name="pagination"
                                    color="secondary"
                                    // fullWidth
                                    style={{ width: '250px'}}
                                    value={ values.pagination } 
                                    onChange={ handleInputChange }
                                />
                            </div>
                            <div className="pagination-page"> 
                                <TextField
                                    required 
                                    variant="outlined"
                                    label="Page Number"
                                    name="page"
                                    color="secondary"
                                    // fullWidth
                                    style={{ width: '250px'}}
                                    value={ values.page } 
                                    onChange={ handleInputChange }
                                />
                            </div>
                        </div>
                    </Grid>
                    <Grid item> 
                        <div class="search-button">
                            <Button 
                                className='searchButton'
                                // variant="contained"
                                onClick={ searchData } 
                                > Search
                            </Button>
                        </div>
                    </Grid>
                </Form>
                <br></br>
                <hr></hr>
                <div class="data-info"> 
                        <br></br>
                        {
                            showData ? (<div className='results'>
                                {data.map(resto => 
                                <div>
                                    <Button 
                                    color='secondary'
                                    onClick={ displayResto(resto._id) }>{resto.restaurant_id} : {resto.name}</Button>
                                </div>)}
                            </div>):null
                        } {
                            showCurrent ? (<div className='resto-info'>
                                <h1>{current.name}</h1>
                                <br></br>
                                <div class="sub-info">
                                    <p><b>restaurant_id: </b>{current.restaurant_id}</p>
                                    <p><b>address: </b></p>
                                    <p>&emsp;<b>building: </b>{current.address.building}</p>
                                    <p>&emsp;<b>street: </b>{current.address.street}</p>
                                    <p><b>cuisine: </b>{current.cuisine}</p>
                                    <p><b>grades: </b></p>
                                    {current.grades.map(grade => 
                                        <React.Fragment key={grade._id}>
                                            <p className="date">&emsp;<b>date: </b>{grade.date}</p>
                                            <p>&emsp;<b>grade: </b>{grade.grade}</p>
                                            <p>&emsp;<b>score: </b>{grade.score}</p>
                                            <br></br>
                                        </React.Fragment>
                                    )}
                                </div>
                                <Button className='backButton' onClick={ getBack }>Back</Button>
                            </div>) : null
                        }
                    </div>
            </div>
        </div>
    )
}

export default Search