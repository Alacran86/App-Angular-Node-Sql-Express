const express = require("express");
const router = express.Router();
const model = require("../models/productos")

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
  const modify = (req,res) => {
      const obj = req.body;
      model.modify(req.params.id, obj).then(response => res.json(response)).catch((err) => res.status(500).json(err));
  }
  const del = (req,res) => {
    const {id} = req.params;
    del(id);
    res.end();
  };
  module.exports = {all, single, create, modify, del};