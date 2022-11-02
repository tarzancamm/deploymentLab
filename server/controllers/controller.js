const path = require('path')

module.exports = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, "../../landingPage.html"))
    },

    css: (req, res) => {
        res.sendFile(path.join(__dirname, "../../styles.css"))
    },

    life: (req, res) => {
        res.sendFile(path.join(__dirname, "../../resources/bananalife.jpg"))
    },

    lots: (req, res) => {
        res.sendFile(path.join(__dirname, "../../resources/lotsbanana.jpg"))
    },

    wood: (req, res) => {
        res.sendFile(path.join(__dirname, "../../resources/woodbanana.jpg"))
    }
}