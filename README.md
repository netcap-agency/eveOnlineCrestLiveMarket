# eveOnlineLiveMarket
Simple html/php/js app for displaying eve online markets data

Based on https://github.com/fuzzysteve/CREST-Market-Viewer

This app allow you to simply compare main commercial hubs into a eve-like interface

# Requirement

A server, php and an eve online account.
You will also need to generate an app token on https://developers.eveonline.com/
The generated Client ID should be paste line 202 in js/app.js
**Don't forget to link to your website for the callback url !**


# Installation

Edit js/app.js
* Add your domain name line 177 in var siteURL = "";
* Add your clientID line 202 in var clientId = "";
Upload the files to your server. Take care to let xdr-min.js on the root of the project in order to allow cross domain request.
The app also include a simple debug tool in order to perform debug into the eve online browser. This function can be a lot better but is sufficient to me.


# Problems

The eve online CREST API only allow logged in requests (for the moment), so when you first log in to the app, your session will be valid for a limited time.
