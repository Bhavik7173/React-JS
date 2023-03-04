JSON : javascript object notation
     : data format
     : platform ind
     : arch ind
     : lang ind

JSON ELEMENT
    key & value 
    key & value must be separated by semicolon
    Example : 
        - "id":101
        - "name":"Akshay"
JSON Object
    group of json elements,json objects, josn array
    wrapped by curly brackets {}
    Ex:
        - {"id":101}
        - {"id":101,"name":"Akshay"}
        - {"first":{"id":101,"name":"Akshay"},"second":{"id":101,"name":"Akshay"}}
JSON Array
    group of json elements or json objects
    wrapped by square brackets []
    [1,2,3,4,5,6]
    ['Akshay','Amit','Kunal']
    [{"id":101,"name":"Akshay"},{"id":101,"name":"Akshay"}]

How to get URL?
- install nodejs
- npm install -g json-server
- json-server --watch filename.json
