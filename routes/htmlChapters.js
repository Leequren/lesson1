const express = require('express')

const router = express.Router();

router.get('/PersonalArea/tutorialForHTML/chapter1', (req, res)=>{
    res.render('htmlPageOne');
})

router.get('/PersonalArea/tutorialForHTML/chapter2', (req, res)=>{
    res.render('htmlPageTwo');
})

router.get('/PersonalArea/tutorialForHTML/chapter3', (req, res)=>{
    res.render('htmlPageThree');
})

router.get('/PersonalArea/tutorialForHTML/chapter4', (req, res)=>{
    res.render('htmlPageFour');
})

module.exports = router