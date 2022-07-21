# Working on Q1

**requirements:** Implement one or more types of charts to visualize data supplied from the API endpoints effectively. Users should be able to pick different metrics to visualize and compare with others.

- Element in each module should be compared with the same module
- eventDaily is the sum of eventHourly for each day ==> get the same time period

=> Use can choose the metric to visualize based on the following list:

User can choose single day or time period they want to visualize
User can choose type data to visualize

- events
- ===> Compare day vs day, hour vs hour

* eventDaily: date + number events

* eventHourly: date + hour + number events

The latest day is 2017-01-01
The newest day is 2017-03-11

## Compare single day vs single day (eventDaily)

## **The flow**

1. By default, the visualization will be shown whole time period.
2. The time will effect the data that is shown for the visualization + data table.
