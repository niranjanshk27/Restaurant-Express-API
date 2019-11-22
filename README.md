## Prerequisites
    1. node v8.16.0 and above
    2. mongodb for database - For Installation [Click Here](https://treehouse.github.io/installation-guides/mac/mongo-mac.html)

## Usage
    $ npm install
    $ cp .env.example .env
    $ npm start


## API ACCESS PERMISIONS


#### ORDER API
|   | Admin | Customer | Kitchen | Staff|
|---|---|---|---|---|
| Get API | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Post API | &#9745; | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Patch API | :heavy_check_mark: | &#9745; | :heavy_check_mark: | :heavy_check_mark: |


#### CATEGORY API
|   | Admin | Customer | Kitchen | Staff|
|---|---|---|---|---|
| Get API | :heavy_check_mark: | :heavy_check_mark: | &#9745; | &#9745; |
| Post API | :heavy_check_mark: | &#9745; | &#9745; | &#9745; |
| Patch API | :heavy_check_mark: | &#9745; | &#9745; | &#9745; |
| Delete API | :heavy_check_mark: | &#9745; | &#9745; | &#9745; |

#### FOOD API
|   | Admin | Customer | Kitchen | Staff|
|---|---|---|---|---|
| Get API | :heavy_check_mark: | :heavy_check_mark: | &#9745; | &#9745; |
| Post API | :heavy_check_mark: | &#9745; | &#9745; | &#9745; |
| Patch API | :heavy_check_mark: | &#9745; | &#9745; | &#9745; |
| Delete API | :heavy_check_mark: | &#9745; | &#9745; | &#9745; |

#### USER API
|   | Admin | Customer | Kitchen | Staff|
|---|---|---|---|---|
| Get API | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Post API | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Delete API | :heavy_check_mark: | &#9745; | &#9745; | &#9745; |