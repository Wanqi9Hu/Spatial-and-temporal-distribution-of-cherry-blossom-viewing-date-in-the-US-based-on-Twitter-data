# Spatial and temporal distribution of cherry blossom-viewing date in the US based on Twitter data

**by Wanqi Hu, Xinran Wang, Yijia Xue**

*names by the alphabetical order of the last names*

**This is our final project for Stats401: Data Visualization.**

## Introduction
Phenology has become the "diagnostic fingerprint" of global climate change. As an essential phenological indicator, the blossom-viewing date is a sensitive and intuitive reflection of the environmental changes. However, most blossom phenological site observation data show a pattern of incompleteness, which can hardly support the overall spatial and temporal analysis. As a result, the big data from Twitter, a widely used social media platform, has become a complementary source to solve this problem. 

Different flowers’ blossom-viewing phases vary significantly. To more accurately show the influence of climate change on the viewing dates, this project tends to focus on one specific kind of blossom with a short blossom-viewing phase. In Figure.1, the average starting date and ending date of the ten most popular ornamental flowers’  blossom phases are shown on the x-axis, and the length of the phase is shown on the y-axis in the unit of days. From Figure.1, the cherry blossom shows the shortest blossom-viewing phase, from late March to middle April. 

Thus, this project takes the cherry blossom as the research object, Twitter as the data crawling source, and the United States as the geographical research scope to analyze cherry blossom viewing dates' spatial and temporal distribution patterns.

## Data
The main data source for this project is Twitter. Tweets are scrawled using snscrape (Blair et al. 2021), a scraper for social networking services based on Python. With the keyword “cherry blossom,” 44915 pieces of tweets are found from 2011 to 2021 with the location in the US. The information for each tweet includes the time (ordinal), location (categorical), and content (categorical).

The data of different flowers’ blossom-viewing phases (ordinal) from Wikipedia (Wikipedia 2004) and data of elevation distribution (numerical) in the US from Google earth (Lisle 2006) are used as complementary data in this project.

## Poster
<div align=center>
<img src="https://github.com/Wanqi9Hu/Spatial-and-temporal-distribution-of-cherry-blossom-viewing-date-in-the-US-based-on-Twitter-data/blob/main/poster.png" width="2000" height="625">
</div>
