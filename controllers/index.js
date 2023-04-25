const express=require('express')
var router=express.Router()
var client=require('../db/db.js')


router.get('/',(req,res)=>{
  //res.redirect('/list')
  res.render("elements/index", { viewTitle: 'Steady News' });
})

router.get('/business', (req, res) => {
  //res.redirect('/list')
  res.render("elements/business", { viewTitle: 'About' });
})


router.get('/art', (req, res) => {
  //res.redirect('/list')
  res.render("elements/art", { viewTitle: 'Art' });
})

router.get('/news', (req, res) => {
  //res.redirect('/list')
  res.render("elements/news", { viewTitle: 'News' });
})

router.get('/politic', (req, res) => {
  //res.redirect('/list')
  res.render("elements/politic", { viewTitle: 'Politic' });
})

router.get('/realestate', (req, res) => {
  //res.redirect('/list')
  res.render("elements/realestate", { viewTitle: 'Real estate' });
})
router.get('/sport', (req, res) => {
  //res.redirect('/list')
  res.render("elements/sport", { viewTitle: 'Sport' });
})
router.get('/travel', (req, res) => {
  //res.redirect('/list')
  res.render("elements/travel", { viewTitle: 'Travel' });
})
router.get('/world', (req, res) => {
  //res.redirect('/list')
  res.render("elements/world", { viewTitle: 'World' });
})
module.exports=router;