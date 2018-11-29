# Sentey
[Live link](http://sentey.herokuapp.com/)
## Background and Overview

Sentey is a data visualization tool that is used to analyze tweets for varying sentiment and emotion. Users will provide a key word or hastag, and Sentey will filter and retrive the lastest tweets that match the specific keyword or hastag and then parse the information for the context it was used in. This data will then be sent for sentiment analysis using Meaning Cloud text analysis API, which will return JSON of the completed analysis. 

The results of this analysis will be graphically displayed to the User using a data visualization tool, most likely D3 or Chart.js, etc. 

## Functionality & MVP  

In Sentey, users will be able to:

- [ ] Filter Twitter based on specific keyworks or hashtags
- [ ] View some sample tweets from the filter
- [ ] Have their filtered tweets analyzed for sentiment
- [ ] View the analyzed data in graphical form

# Design Timeline

The following are preliminary ideas in the process of designing this webpage:

## Wireframes

This app will consist of a single screen with an input form to retrieve the keyword or hashtag with a submit button. This would be used to update the data visualization portion of the page.

There will be a footer with links to the Github and my LinkedIn.
A navbar will be there for a custom logo hyperlinked to reset the data.
There will a section where the User can input a keyword/hashtag and submit the form.
There will be a data visualization section where the chart/graph will reside

![wireframes](https://github.com/nigelrodrigues15/Sentey/blob/master/images/Wireframe.png)

## Architecture and Technologies

This project will be implemented with the following technologies:

- [ ] Vanilla JavaScript for overall structure,
- [ ] D3 for data visualization,
- [ ] Twitter authenticated API to retrieve tweets,
- [ ] Microsoft Azure to analyze the retrieved tweets


## Possible Implementation Timeline

**Day 1**: 

- [ ] Create index.html and sample CSS file
- [ ] Learn how to access the twitter API
- [ ] Create a static dummy form on the webpage

**Day 2**: 

- [ ] Access the twitter api
- [ ] Recieve tweets from twitter in JSON format
- [ ] Connect it to the form on the page
- [ ] Display a few of the tweets on the webpage

**Day 3**:

- [ ] Learn how to use sentiment API
- [ ] Learn how to use D3 library
- [ ] get resulting data from sentiment API

**Day 4**:

- [ ] Format the data from the sentiment API
- [ ] Get a chart on the webpage
- [ ] Style the webpage


## Bonus features

There are many directions in which this project could evolve.

- [ ] Have a tabbed section to visualize the data in many ways
- [ ] Ability to compare search results

# Issues Encountered

* First time using OAuth
