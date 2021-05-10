const express = require('express');

const router = express.Router()

router.get('/PersonalArea/tutorialForCSS/chapter1', (req, res)=>{
   res.render('cssPageOne');
});

router.get('/PersonalArea/tutorialForCSS/chapter2', (req, res)=>{
   res.render('cssPageTwo');
})

module.exports = router