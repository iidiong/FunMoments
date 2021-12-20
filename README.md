# FunMoments 
## Introduction
  FunMoments application Is a web based application design and build to utilize web services to provide users information about cocktail recipes, instructions on       how to make cocktails to drink and the ability to discover new one. Users would be provided with the capability to save favorite recipes, search for recipes, learn more about the ingredients that recipes contain. 

## Users
  The application can be used as a restaurant's menu for customers to choose cocktails, discover and try new cocktails, and save customers' favorites for future service. 
  
  The application can also be used at parties and similar occasions to learn about the recipes and prepare cocktails for the guests. 

  Individuals could also use the application for home entertainment to discover new cocktails and share their experience. 

## Data
  Application would use open source [Thecocktaildb API](https://www.thecocktaildb.com/api.php?ref=apilist.fun, "Thecocktaildb API") 
  * Cocktails name 
  * Cocktails ingredients 
  * Cocktails photos 
  * Ingredients details 

## Approach 
   Application would be built using Flask web application framework 
   #### Front end 
    Use Jinja2 general purpose templating language to dynamically generate and display cocktails 
    Use bootstrap for styling 
   #### Backend 
    Use postgresSQL database
   #### API
    Ajax technology would be used for API request
   #### Hosting
    Application would be hosted on Heroku

## Features:
   * Users would be able browse listings of available cocktails by name 
   * Users would be able to click the cocktail name to navigate to details page 
   * Users would be able to search for recipes 
   * Users would be able filter cocktails by category (alcoholic and non-alcoholic)
   * Users would have option to save favorites cocktails after creating an account
   * Users would be able to view saved recipes 
   * Users would be able to delete favorites recipes 
