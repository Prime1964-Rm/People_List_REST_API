const express = require('express');
const People = require('../Models/people');
const router = express.Router();


//Get list of people from db
router.get('/people', (req,res,next)=>{
    People.find({}).then((people)=>{
        res.send(people)
    })
    
})

router.post('/people', (req,res,next)=>{
    // var people = new People(req.body)
    // people.save();
    
    //or
      People.create(req.body).then((people)=>{                              //Returns a Promise
        res.send(people)
    }).catch(next)                                                     
    
    console.log(req.body)
})

router.put('/people/:id', (req,res,next)=>{
    People.findByIdAndUpdate({_id:req.params.id},req.body).then(()=>{
        People.findOne({_id:req.params.id}).then((person)=>{
            res.send(person)
        })
    })
    
})

router.delete('/people/:id', (req,res,next)=>{
    People.findByIdAndRemove({_id:req.params.id}).then((person)=>{
        res.send(person);
    }).catch(err)
    

})

module.exports = router;