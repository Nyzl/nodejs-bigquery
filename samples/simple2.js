//new bs module

'use strict';

var projectId = 'hardy-album-169409'
const google = require('googleapis');
const BigQuery = require('@google-cloud/bigquery');
const key = require('./Backlogger-dc30569f162c.json');
var request = require('google-oauth-jwt').requestWithJWT();

request({
  url: 'https://www.googleapis.com/drive/v2/files',
  jwt: {
  	email:'backlogger-service@hardy-album-169409.iam.gserviceaccount.com',
    keyFile: 'Backlogger-dc30569f162c.json',
    // specify the scopes you wish to access - each application has different scopes
    scopes: ['https://www.googleapis.com/auth/drive.readonly']
  }
}, function (err, res, body) {
	console.log(JSON.parse(body));
});