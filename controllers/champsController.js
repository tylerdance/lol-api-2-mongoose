const router = require('express').Router()
const models = require('../models')

// read all
router.get('/', (req, res) => {
    models.Champs.find().then((foundChamps) => {
        res.status(200).json({ champs: foundChamps })
    })
})

// read one
router.get('/:id', (req ,res) => {
    models.Champs.find({ _id: req.params.id }).then((champ) => {
        res.status(200).json({ champ })
    })
})

router.post('/', (req, res) => {
    console.log('post route', req.body);
    models.Champs.create(req.body)
    .then((champ) => {
        res.status(201).json({ champ })
    })
    .catch(error => {
        console.log(error);
    })
})

router.put('/:name', (req, res) => {
    models.Champs.update({ name: req.params.name }, { $set: {name: 'Updated Name'}})
    .then((updatedChamps) => {
        res.status(200).json({ updatedChamps })
    })
})

router.delete('/delete', (req, res) => {
    models.Champs.deleteMany().then(() => {
        console.log('Deleted');
    })
})

module.exports = router;