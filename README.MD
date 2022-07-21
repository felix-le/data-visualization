# Overview

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

### Live Front end demo:

### Link to Back end server live demo:

### Link to Back end Github:

## The flow of the project:

This application used the following technologies:

- Micro front end structure
- Controlling the state of the application: using redux
- Controlling the state of feature modules: using useContext (Events and Stats Module)
- UI component: using Material UI (ver 5)
- API: using Axios

# Installation

# install node version

Please install v14.x.x version node (Currently using v14.19.1)

# install npm version

Please install v6.x.x version node (Currently using v6.14.16)

# Scripts

```
# dev server with PORT 3002 at http://localhost:3000/

$ yarn start
```

```
# build for production with minify

$ yarn build
```

```
# run `lint` to tell you what is wrong code.

$ yarn lint
```

# Convention code

Component's file name should be in Pascal Case.
Component names should be like ProductCard and not like productCard, product-card, etc. This way when we see a filename in Pascal Case, it is immediately clear that the file is a react component.

Component having own folders should have a component file with the same name.
This way when we search for files, we don't get a list of index.ts but will receive the actual component files.

Create an index.ts file in that component folder which export the named component.

```
import Product from './EventModule';
export default EventModule;
```

```
export { default } from './EventModule';
```

## Components which can be used in other project or reuse.

Components can be keep in components/ folder (atom, molecules...). You can refer design system of Atomic Design.

https://bradfrost.com/blog/post/atomic-web-design/

## Hooks

When we want to share logic between two javascript functions, we will extract it to a third function. Both components and hooks are functions, so this work for them too.

A custom Hook is a javascript function whose name starts with "use" and that may call other hook. For example, usePagination below is a custom hook:

```js
# usePagination.js
const usePaginationParams = (listLength = 0) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(ROW_PER_PAGE_DEFAULT);

  // reset pagination when list length changes: especially when list shrinks by being filtered, searched, etc.

  useEffect(() => {
    setCurrentPage(1);
  }, [listLength]);

  const handleChangePage = (e, newPage) => {
    e.preventDefault();
    setCurrentPage(parseInt(newPage));
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setCurrentPage(1);
  };

  return {
    currentPage,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    setCurrentPage,
    setRowsPerPage,
  };
};
export default usePaginationParams;
```

# Directory structure code

```tree
src
├─ api
│ ├─ baseApi.js
│ ├─ getEvents.js
│ ├─ getPoiApi.js
│ └─ getStats.js
├─ components
│ ├─ EventModule
│ │ ├─ utils
│ │ │ ├─ getEventDaily.js
│ │ │ ├─ getEventHour.js
│ │ │ ├─ getTableEventDaily.js
│ │ │ └─ getTableEventHourly.js
│ │ ├─ CompareSection.js
│ │ ├─ DiagramSection.js
│ │ ├─ EventDailySingleTable.js
│ │ ├─ EventDailyTable.js
│ │ ├─ EventHourlySingleTable.js
│ │ ├─ EventHourlyTable.js
│ │ ├─ EventModule.js
│ │ ├─ EventModuleWithContext.js
│ │ ├─ EventSummarySection.js
│ │ ├─ index.js
│ │ └─ styles.js
│ ├─ Layout
│ │ ├─ Layout.js
│ │ └─ index.js
│ ├─ Mapbox
│ │ ├─ ControlPanel.css
│ │ ├─ ControlPanel.js
│ │ ├─ Mapbox.css
│ │ ├─ Mapbox.js
│ │ ├─ index.js
│ │ └─ layers.js
│ ├─ NavBar
│ │ ├─ NavBar.js
│ │ └─ index.js
│ ├─ Pagination
│ │ ├─ Pagination.js
│ │ └─ index.js
│ ├─ StatsModule
│ │ ├─ utils
│ │ │ ├─ getStatsDaily.js
│ │ │ ├─ getStatsHour.js
│ │ │ ├─ getTableStatsDaily.js
│ │ │ └─ getTableStatsHourly.js
│ │ ├─ CompareSection.js
│ │ ├─ DiagramSection.js
│ │ ├─ StatsDailyTable.js
│ │ ├─ StatsHourlyTable.js
│ │ ├─ StatsModule.js
│ │ ├─ StatsModuleWithContext.js
│ │ ├─ StatsSummarySection.js
│ │ ├─ Table.js
│ │ ├─ index.js
│ │ └─ styles.js
│ ├─ comparingCharts
│ │ ├─ chart
│ │ │ ├─ BaseOptionChart.js
│ │ │ ├─ ChartStyle.js
│ │ │ └─ index.js
│ │ ├─ AnalyticsConversionRates.js
│ │ ├─ AnalyticsCurrentSubject.js
│ │ ├─ AnalyticsCurrentVisits.js
│ │ ├─ AnalyticsWebsiteVisits.js
│ │ ├─ AnalyticsWidgetSummary.js
│ │ ├─ AppAreaInstalled.js
│ │ └─ index.js
│ ├─ Iconify.js
│ ├─ SearchBar.js
│ └─ constants.js
├─ helpers
│ └─ index.js
├─ hooks
│ ├─ usePagination.js
│ └─ useResponsive.js
├─ pages
│ ├─ Events
│ │ ├─ Events.js
│ │ └─ index.js
│ ├─ GeoPage
│ │ ├─ Geo.js
│ │ └─ index.js
│ ├─ HomePage
│ │ ├─ HomePage.js
│ │ └─ index.js
│ ├─ StatsPage
│ │ ├─ StatsPage.js
│ │ └─ index.js
│ └─ Router.js
├─ store
│ ├─ actions
│ │ ├─ event.actions.js
│ │ ├─ poi.actions.js
│ │ └─ stats.actions.js
│ ├─ reducers
│ │ ├─ event.reducers.js
│ │ ├─ poi.reducers.js
│ │ └─ stats.reducers.js
│ └─ index.js
├─ theme
│ ├─ overrides
│ │ ├─ Accordion.js
│ │ ├─ Alert.js
│ │ ├─ Autocomplete.js
│ │ ├─ Avatar.js
│ │ ├─ Backdrop.js
│ │ ├─ Badge.js
│ │ ├─ Breadcrumbs.js
│ │ ├─ Button.js
│ │ ├─ ButtonGroup.js
│ │ ├─ Card.js
│ │ ├─ Checkbox.js
│ │ ├─ Chip.js
│ │ ├─ ControlLabel.js
│ │ ├─ CssBaseline.js
│ │ ├─ CustomIcons.js
│ │ ├─ DataGrid.js
│ │ ├─ Dialog.js
│ │ ├─ Drawer.js
│ │ ├─ Fab.js
│ │ ├─ Input.js
│ │ ├─ Link.js
│ │ ├─ List.js
│ │ ├─ LoadingButton.js
│ │ ├─ Menu.js
│ │ ├─ Pagination.js
│ │ ├─ Paper.js
│ │ ├─ Popover.js
│ │ ├─ Progress.js
│ │ ├─ Radio.js
│ │ ├─ Rating.js
│ │ ├─ Select.js
│ │ ├─ Skeleton.js
│ │ ├─ Slider.js
│ │ ├─ Stepper.js
│ │ ├─ SvgIcon.js
│ │ ├─ Switch.js
│ │ ├─ Table.js
│ │ ├─ Tabs.js
│ │ ├─ Timeline.js
│ │ ├─ ToggleButton.js
│ │ ├─ Tooltip.js
│ │ ├─ TreeView.js
│ │ ├─ Typography.js
│ │ └─ index.js
│ ├─ breakpoints.js
│ ├─ index.js
│ ├─ palette.js
│ ├─ shadows.js
│ └─ typography.js
├─ utils
│ ├─ cssStyles.js
│ ├─ formatNumber.js
│ └─ getFontValue.js
├─ App.js
├─ Root.js
├─ browserHistory.js
└─ index.js
```
