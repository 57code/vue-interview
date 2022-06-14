## 37-你是怎么处理vue项目中的错误的？

### 分析

这是一个综合应用题目，在项目中我们常常需要将App的异常上报，此时错误处理就很重要了。

这里要区分错误的类型，针对性做收集。

然后是将收集的的错误信息上报服务器。



### 思路

1. 首先区分错误类型
2. 根据错误不同类型做相应收集
3. 收集的错误是如何上报服务器的



### 回答范例

1. 应用中的错误类型分为"`接口异常`"和“`代码逻辑异常`”
2. 我们需要根据不同错误类型做相应处理：`接口异常`是我们请求后端接口过程中发生的异常，可能是请求失败，也可能是请求获得了服务器响应，但是返回的是错误状态。以Axios为例，这类异常我们可以通过封装Axios，在拦截器中统一处理整个应用中请求的错误。`代码逻辑异常`是我们编写的前端代码中存在逻辑上的错误造成的异常，vue应用中最常见的方式是使用全局错误处理函数`app.config.errorHandler`收集错误。
3. 收集到错误之后，需要统一处理这些异常：分析错误，获取需要错误信息和数据。这里应该有效区分错误类型，如果是请求错误，需要上报接口信息，参数，状态码等；对于前端逻辑异常，获取错误名称和详情即可。另外还可以收集应用名称、环境、版本、用户信息，所在页面等。这些信息可以通过vuex存储的全局状态和路由信息获取。



### 实践

axios拦截器中处理捕获异常：

```js
// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // 存在response说明服务器有响应
    if (error.response) {
      let response = error.response;
      if (response.status >= 400) {
        handleError(response);
      }
    } else {
      handleError(null);
    }
    return Promise.reject(error);
  },
);
```

vue中全局捕获异常：

```js
import { createApp } from 'vue'

const app = createApp(...)

app.config.errorHandler = (err, instance, info) => {
  // report error to tracking services
}
```

处理接口请求错误：

```js
function handleError(error, type) {
  if(type == 1) {
    // 接口错误，从config字段中获取请求信息
    let { url, method, params, data } = error.config
    let err_data = {
       url, method,
       params: { query: params, body: data },
       error: error.data?.message || JSON.stringify(error.data),
    })
  }
}
```

处理前端逻辑错误：

```js
function handleError(error, type) {
  if(type == 2) {
    let errData = null
    // 逻辑错误
    if(error instanceof Error) {
      let { name, message } = error
      errData = {
        type: name,
        error: message
      }
    } else {
      errData = {
        type: 'other',
        error: JSON.strigify(error)
      }
    }
  }
}
```
