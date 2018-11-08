export const isMobile = () => {
  let mobileReg = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  let matchRes = navigator.userAgent.match(mobileReg)
  return matchRes && matchRes.length > 0
}

export const downloadFile = async ({action = '', params = {}, method = 'GET'}) => {
  if (method === 'GET' && action.indexOf('?') > -1) {
    let queryStr = action.slice(action.indexOf('?') + 1) || ''
    if (queryStr.length > 0) {
      let queryParamsArray = queryStr.split('&')
      queryParamsArray.forEach(el => {
        let kw = el.split('=')
        if (kw.length === 2) {
          let tmp = {}
          tmp[kw[0]] = kw[1]
          params = {...tmp, ...params}
        }
      })
    }
  }
  let form = window.document.createElement('form')
  form.id = form.name = 'downloadFileForm'
  form.action = action
  form.method = method
  window.document.body.appendChild(form)
  Object.keys(params).forEach(el => {
    let input = document.createElement('input')
    input.tpye = 'hidden'
    input.name = el
    input.value = params[el]
    form.appendChild(input)
  })
  form.submit()
  window.document.body.removeChild(form)
}
