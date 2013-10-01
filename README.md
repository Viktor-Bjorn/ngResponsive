ngResponsive
============

AngularJS directive to make Bootstrap responsive layouts easier to write

See bootstrap documentation for grids [here](http://getbootstrap.com/2.3.2/scaffolding.html#gridSystem)

### Usage:

Add the 'ngResponsive' module as a dependency in your app, then use it:

= as tag attributes:

    <div container fluid>
        <div row fluid>
            <span block size="7" offset="1">...</span>
            <span block size="4">...</span>
        </div>
        <div row>
            <span block></span>
        </div>
    </div>

= as custom tags:

    <container fluid>
        <row fluid>
            <block size="7" offset="1">...</block>
            <block size="4">...</block>
        </row>

        <row>
            <block>12 is the default size</block>
        </row>
    </container>
