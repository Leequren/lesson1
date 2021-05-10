const express = require('express');
const router = express.Router();
const { checkedAuth, straightAuth } = require('../config/auth');
const { PythonShell } = require('python-shell');
const cheerio = require("cheerio");
const axios = require("axios");
const fs = require("fs");
router.get('/', straightAuth, (req, res) => res.render('firstPage'));

router.get('/PersonalArea', checkedAuth, (req, res) =>

  res.render('PersonalArea', {
    user: req.user
  })
);

router.get('/PersonalArea/tutorialForHTML', checkedAuth, (req, res) =>
  res.render('tutorialCounterPageHTML')
);

router.get('/PersonalArea/tutorialForCSS', checkedAuth, (req, res) =>
  res.render('tutorialCounterPageCSS')
);

router.get('/PersonalArea/tutorialForJS', checkedAuth, (req, res) =>
  res.render('tutorialCounterPageJS')
);
module.exports = router;