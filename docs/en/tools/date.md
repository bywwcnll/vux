---
title: vue date format
---

# date format

Built-in dateFormat is much smaller size than `moment`。


## Usage

``` js
import { dateFormat } from 'k12vux'

dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss')
```

## Used as Vue filter

``` js
import { dateFormat } from 'k12vux'

export default {
  filters: {
    dateFormat
  }
}

```