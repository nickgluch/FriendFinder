// ==============================================================================
// DEPENDENCIES
// ==============================================================================

var express = require("express");

var app = express();
var PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// ================================================================================

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

// =============================================================================
// LISTENER
// =============================================================================

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
