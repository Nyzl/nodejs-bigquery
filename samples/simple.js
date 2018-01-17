//really basic

'use strict';

var projectId = 'hardy-album-169409'
const google = require('googleapis');
const BigQuery = require('@google-cloud/bigquery');



const key = require('./Backlogger-dc30569f162c.json');

const jwtClient = new google.auth.JWT(
	key.client_email,
	null,
	key.private_key,
	['https://www.googleapis.com/auth/drive.file','https://www.googleapis.com/auth/spreadsheets','https://www.googleapis.com/auth/bigquery'], // an array of auth scopes
	null);


const sqlQuery = 'SELECT * FROM Automated_Backlog.Public_Content_Rating';

const options = {
  query: sqlQuery,
  useLegacySql: false // Use standard SQL syntax for queries.
};


jwtClient.authorize(function (err, tokens) {
 if (err) {
   console.log(err);
   return;
 } else {
   console.log('Successfully connected!');
   console.log('something else');
   console.log(tokens);

   const bigquery = new BigQuery({
   	keyFilename: 'Backlogger-dc30569f162c.json',
   	projectId: projectId,
   });

  bigquery
		.query(options)
		.then((results) => {
			const rows = results[0];
			console.log(rows);
		})
		.catch((err) => {
			console.error('ERROR:', err);
		});



 }
});



