# CONSUME IT <img align="right" width="100" src="https://github.com/hackathon-rezepte-app/Frontend/blob/master/screens/android-chrome-256x256.png" />

CONSUME IT allows you to photograph left-over cooking ingredients, and get recipe ideas to use them.
So you don't have to throw food away, which saves waste and money.

## Limitations

This is a 24h hackathon project, so the functionality __and code quality__ is limited.
But its a nice showcase of the idea potential.

- The App only recognizes a few items: Bananas, Apples, Oranges and Red Bull's.
- There are only handpicked recipes available

## Credit / Architecture

The repo here contains the frontend app code: Design and mockup html/css pages done by [@heckerhere](https://github.com/heckerhere) in `/screens`, React app by [@phgn0](https://github.com/phgn0) in `/react`.

The food recognition uses the azure custom vision service, tweaked and hand-trained with examples by [@VlowTheMask](https://github.com/VlowTheMask), [@florianfricke](https://github.com/florianfricke) and [@LosSandreas](https://github.com/LosSandreas).

The corresponding C# API endpoint glue code consists of an azure function written by [@LosSandreas](https://github.com/LosSandreas), found in the [FunctionService repo](https://github.com/hackathon-rezepte-app/FunctionService).

Suggesting recipes based on ingredients is done in a simple JavaScript azure function [in this repo](https://github.com/hackathon-rezepte-app/RecipeSearch) (written by [@phgn0](https://github.com/phgn0)).

## Improvement ideas

Possible technical improvements are:
- Recognize more items by setting up a pipeline to train the vision AI with images from large existing datasets.
- Show real recipes by either integrating the [edamam api](https://www.edamam.com/recipes/banana+apple+tomatoes), or scraping recipes from [chefkoch.de](https://www.chefkoch.de/) and searching them on-demand. This would be done using a fuzzy iterative approach, to allow for recipes to match only some of the available items (which all existing solution fail to do).

New feature ideas are:
- Save recognized items for later / keep an inventory.
- Integrate supermarket search and delivery services.
- Filter results based on ratings, macronutrients / diet plan, or large-scale user behavior analysis (time of day, similar tastes, ...).
