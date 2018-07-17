var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/newsdbs";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);



$(document).ready(function() {
    var articleContainer = $(".article-container");
    $(document).on("ready",  handleArticleSave);
    $(document).on("ready",  handleArticleScrape);




})