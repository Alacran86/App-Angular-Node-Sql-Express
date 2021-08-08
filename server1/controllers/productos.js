const express = require("express");
const router = express.Router();
const model = require("../models/productos")
const service = require('./../services/nuevoProducto');

const all = (req, res) => {
    model.getALL().then((response) => res.json(response)).catch((err) => res.status(500).json(err));
  }
  const single = (req,res) => {
      model.single(req.params.id).then((response) => res.json(response)).catch((err) => res.status(500).json(err));
  }
  const create = (req,res) => {
      const obj = req.body;
      model.create(obj).then(response => res.json(response)).catch((err) => res.status(500).json(err));
  }

  const create2 = (req, res) => {
    try {
        const idImg = service.createProduct(req.body, req.files);
        res.json({idImg});
    }
    catch (err) {
        res.sendStatus(500);
    }
}

  const modify = (req,res) => {
      const obj = req.body;
      model.modify(req.params.id, obj).then(response => res.json(response)).catch((err) => res.status(500).json(err));
  }
 
  module.exports = {all, single, create,create2, modify};