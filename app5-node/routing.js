const express = require('express');
const router = express.Router();
const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:postgrespw@localhost:55000')


// db.query("DELETE FROM store WHERE products = 'book1' OR products = 'book2'")
// db.query("DROP TABLE IF EXISTS store")
// db.query("CREATE TABLE IF NOT EXISTS  store (products  TEXT)")
//   .then((data) => {console.log('TABLE CREATED')})
//   .catch((e) => {console.log('ERROR:', e)})
  
// db.query("INSERT INTO store (products) VALUES ('Wiedźmin')")
// .then((data) => {console.log('INSERT DONE')})
// .catch((e) => {console.log('ERROR:', e)})
// db.query("INSERT INTO store (products) VALUES ('Solaris')")
// .then((data) => {console.log('INSERT DONE')})
// .catch((e) => {console.log('ERROR:', e)})
// db.query("INSERT INTO store (products) VALUES ('Upiory')")
// .then((data) => {console.log('INSERT DONE')})
// .catch((e) => {console.log('ERROR:', e)})
// db.query("INSERT INTO store (products) VALUES ('Lśnienie')")
// .then((data) => {console.log('INSERT DONE')})
// .catch((e) => {console.log('ERROR:', e)})
db.query("INSERT INTO store (products) VALUES ('test')")
.then((data) => {console.log('INSERT DONE')})
.catch((e) => {console.log('ERROR:', e)})

db.query('SELECT products AS value FROM store')
.then((data) => {console.log('DATA:', data)})
.catch((e) => {console.log('ERROR:', e)})

// router.use((request, response, next) => {
//     cart[request.sessionID] = [];
//     next();
// })
router.post('/store/addItem:element', (request, response) => {
    el = request.params.element;
    if (!cart[request.sessionID].find(e => e == el)) {
        cart[request.sessionID].push(el);
        console.log("Passed " + el)
    }
    else {
        console.log("Not passed " + el);
    }
    response.redirect('/store')
})

router.post('/store/removeItem:element', (request, response) => {
    el = request.params.element;
    if (cart[request.sessionID].find(e => e == el)) {
        console.log("INFO", cart, el)
        cart[request.sessionID] = cart[request.sessionID].filter(item => item != el)
        console.log("Removed " + el)
    }
    else {
        console.log("Not removed " + el);
    }
    response.redirect('/cart')
})

router.post('/store/clear', (request, response) => {
    cart[request.sessionID] = [];
    response.redirect('/cart')
})

router.post('/checkout', (request, response) => {
    var result
    let alert = require('alert'); 
    cart[request.sessionID]?.map((item, index) => {
        console.log(item, index)
        result = db.query("DELETE FROM store WHERE products = '" + item + "'")
        .then(console.log('Deleted ' + item + 'from store table'))
        .catch((e) => {console.log('ERROR:', e)});
    })
    console.log("RESULT", result)
    alert("DB response: " + result)
    cart[request.sessionID] = [];
    response.redirect('/cart')
})


router.all('/', (request, response) => {
    cart[request.sessionID] = [];
    console.log("CART", cart);
    response.redirect('/store');
});
router.get('/store', (request, response) => {
    if (cart.valueOf(request.sessionID) == {}) 
        cart[request.sessionID] = [];
    db.query('SELECT products AS value FROM store')
    .then((data) => {response.render('store/index', {'data': data, 'port': port, adddItem: 'addItem'});})
    .catch((e) => {console.log('ERROR:', e)})
})


router.get('/cart', (request, response) => {
    response.render('cart/index', {'cart': cart[request.sessionID]});
})

module.exports = router;