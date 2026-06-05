export function userNamesGet(req, res) {
    // Log available usernames in DB to terminal
    console.log("usernames will be logged here");
}

export function newUserGet(req, res) {
    res.render("new");
}

export function newUserPost(req, res) {
    // Save incoming username data to DB
    console.log("username to be saved: ", req.body.username);
}