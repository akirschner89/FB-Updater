
//class object for updating images
class AdditionalImageUtil {
	constructor(ads_account_id, ad_ads, responses, failures, access_token) {
		this.ads_account_id = ads_account_id;
		this.ad_ids = ad_ids;
		this.access_token = access_token;
		this.additional_image_index = additional_image_index=0;
		this.failures =  failures;
		this.responses = responses;
		this.original_creative_ids = [];
		this.original_creative_specs = [];
		this.new_ad_creatives = []
		this.update = update();
	}

	update(ad_ids) {
		for(let id of ad_ids) {
			let creative_id = ad_creative_id[id];
			this.original_creative_ids.push(creative_id);
		}
		for (let id of original_creative_ids) {
			let creative_spec = creative_spec[id];
			let orig_creative = {
				ad_id: [id];
				spec: creative_spec;
			}
			this.original_creative_specs.push(orig_creative);
		}
	}




// *** node/express boilerplate = to delete ***

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(methodOverride("_method"));

//listener to run script
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});










