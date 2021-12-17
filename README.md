# WINESWIPE

WineSwipe is a tinder-like carousel application designed to help wine re-sellers sell their wines.  Users of the application swipe-left or swipe-right on wine cards depending on their interest in a particular wine.  A user "likes" a wine by clicking on the checkmark - the wine will then be added to a users likes, which they are able to view at any time during a particular session. Although the wine will disappear to the right of the page -- a user may click the view likes button to see a comprehensive list of their interests. If uninterested in a particular wine, a user clicks the X button and the wine will disappear to the left of the page. 

A user also has an option to add a wine for other users to see - and potentially buy. In order to list a wine simply click the "List a New Wine to Sell" button and fill in the details of the wine.

Getting started a user simply types in their login username -- or creates a username by typing in a new username.  No password verification/creation is necessary. 

## INSTALLATION & USE INSTRUCTIONS 

WineSwipe is a Single-Page-Application(SPA) created with Object-Oriented JavaScript for the front-end and Ruby on Rails for back-end functionality. Rails is used as an API therefore the following must be run simultaneously with the JS front-end(index.html):

**$rails s** 

Due to the nature of an SPA -- any refresh will require a user to sign-in again (HTTP state is not preserved). The back-end repository is provided in the following section.

## RAILS API 

The following repository must be used in conjuction with this front-end repository in order to use the application: 
[(https://github.com/jgumerove/wine_swipe_backend)]

## CONTRIBUTOR GUIDE

Bug reports and questions are welcomed at the following [(https://github.com/jgumerove)]

## LICENSE 

Licensed under the [MIT License](LICENSE)

## VIDEO DEMONSTRATION
[![wine_swipe_frontend](https://img.youtube.com/vi/XJC0U_G9rhc/0.jpg)](https://www.youtube.com/watch?v=XJC0U_G9rhc)
