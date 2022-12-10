
// Check if form is submitted
if (isset(document.getElementById("username")) && isset(document.getElementById("password"))) {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Connect to MySQL database
  var host = "hostname";
  var user = "username";
  var password = "password";
  var database = "database_name";

  var con = mysql.createConnection({
      host: host,
      user: user,
      password: password,
      database: database
  });

  con.connect(function(err) {
      if (err) throw err;
      console.log("Connected to MySQL database!");
  });

  // Query to check if user exists in database
  var query = "SELECT * FROM users WHERE username='" + username + "' AND password='" + password + "'";
  con.query(query, function(err, result) {
      if (err) throw err;

      // Check if user exists
      if (result.length == 1) {
          alert("Successfully logged in!");
      } else {
          alert("Invalid username or password!");
      }
  });
}
