let express = require('express')
let router = express.Router()
let validateSession = require('../middleware/validate-session')
const Log = require('../db').import('../models/log')

router.post('/', validateSession, (req, res) => {
    const logEntry = {
        description: req.body.log.description,
        definition: req.body.log.definition,
        result: req.body.log.result,
        owner_id: req.user.id
    }
    Log.create(logEntry)
        .then(log => res.status(200).json(log))
        .catch(err => res.status(500).json({ error: err }))
})

router.get("/", validateSession, (req,res) => {
    let userid = req.user.id
    Log.findAll({
        where: { owner_id: userid }
    })
        .then(log => res.status(200).json(log))
        .catch(err => res.status(500).json({ error: err }))
})

router.get('/:entryId', function (req,res) {
    let userId = req.params.entryId

    Log.findAll({
        where: { owner_id: userId}
    })
    .then(logs => res.status(200).json(logs))
    .catch(err => res.status(500).json({ error: err }))   
})

router.put("/update/:entryId", validateSession, function (req,res) {
    const updateLogEntry = {
        description: req.body.description,
        definition: req.body.definition,
        result: req.body.result,
    }

    const query = {where: { id: req.params.entryId, owner_id: req.user.id }}

    Log.update(updateLogEntry, query)
        .then((logs) => res.status(200).json(logs))
        .catch((err) => res.status(500).json({error: err}))
})

router.delete("/delete/:entryId", validateSession, function (req,res) {
    const query = {where: {id: req.params.entryId, owner_id: req.user.id}}

    Log.destroy(query)
        .then(() => res.status(200).json({message: "Log Entry Removed"}))
        .catch((err) => res.status(500).json({error: err}))
})

module.exports = router;