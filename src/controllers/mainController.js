const express = require("express");
const path = require('path')

let mainController = {
  home: function (req, res) {
    res.sendFile(path.join(__dirname, "../views/home.html"));
  },
  about: function (req, res) {
    res.sendFile(path.join(__dirname, "../views/about.html"));
  },
  contact: function (req, res) {
    res.sendFile(path.join(__dirname, "../views/contact.html"));
  },
  logIn: function (req, res) {
    res.sendFile(path.join(__dirname, "../views/logIn.html"));
  },
  carrito: function (req, res) {
    res.sendFile(path.join(__dirname, "../views/carrito.html"));
  },
};

module.exports = mainController;
