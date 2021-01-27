/* Source for the following on how to set up a Angular deployment via Heroku:
 * Olutunmbi Banto - https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147 */

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./dist/risk-management-platform'));

app.get('/*', function(req,res) {
    res.sendFile('index.html', {root: 'dist/risk-management-platform/'} );
});

// Attempt to listen on the Heroku env port variable, fall back to 8080 otherwise.
app.listen(process.env.PORT || 80);
