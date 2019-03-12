// import express
const express = require("express");
// import mongoDbClient
const MongoClient = require("mongodb").MongoClient;

// import database connection string
const uri = require("./config/keys").mongoURI;

// database connection object
const client = new MongoClient(uri, { useNewUrlParser: true });

// creating connection
client.connect(err => {
  const database = client.db("test");
  const collection = database.collection("devices");

  // running findOne command
  collection.findOne({}, (err, result) => {
    console.log("running find one command");
    console.log(result);
  });

  // runinng find command
  collection.find({}).toArray((err, result) => {
    console.log("running find command");
    if (err) throw err;
    console.log(result);
  });
  client.close();
});
