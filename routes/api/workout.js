const express = require('express');
const config = require('../../config/keys');
const router = require('express').Router();

let Workout = require('../../models/Workout');

//get
router.get('/me', (req, res) => {
    res.json({
        confirmation: 'success',
        data: 'hi'
    })
});

//find all data
router.get('/find', (req, res) => {
    const query = req.query
    Workout.find(query)
        .then(workout => {
            res.json(workout)
        })
});

//add method
router.post('/add', (req, res) => {
    var obj = {
        username: req.body.username,
        description: req.body.description,
        contactno: req.body.contactno,
        age: req.body.age,
        duration: Number(req.body.duration),
        level: req.body.level,
        // date: Date.parse(req.body.date)
    };

    new Workout(obj).save()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json({
                confirmaton: 'field is wrong',
                message: err.message
            })
        })
});

router.post('/edit', (req, res) => {
    Workout.findById(req.body.id)
        .then(workout => res.json(workout))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update
router.post('/update', (req, res) => {
    // const query = req.query // require: id, key=value
    // const profileId = query.id
    // delete query['id']   

    Workout.findByIdAndUpdate(req.body.id, req.body, { new: true })
        .then(workout => {
            res.json({
                confirmation: 'success',
                data: workout
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: err.message
            })
        })
})

//delete

// router.route('/delete')
//     .delete((req, res) => {
//         Workout.findByIdAndDelete(req.params.id)
//             .then(() => res.json('Workout deleted.'))
//             .catch(err => res.status(400).json('Error: ' + err));
//     });

router.get('/remove', (req, res) => {
    const query = req.query

    Workout.findByIdAndRemove(query.id)
        .then(data => {
            res.json({
                confirmation: 'success',
                data: 'Workout ' + query.id + ' successfully .'
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: err.message
            })
        })
})


module.exports = router;
