const path = require('path')
const qiniu = require('qiniu')
const glob = require('glob')

const basePath = path.resolve(`${__dirname}/../build`)
const mainFilePath = 'index.html'

// 桶配置
const bucket = 'fifa-story'
const accessKey = 'nd06GpalwOxczynsybVktSDYGJkeoXCJddO1CBfL'
const secretKey = '8deSKthwYG8Y_6VklCyhgP3uOlbEiQ43LNkWfEcB'
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)

// 得到 build 目录全部文件名
const staticFileNameList = glob.sync(path.join(`${basePath}/**/*`)).filter((fileName) => {
  const filePath = fileName.substr(basePath.length)
  return filePath.indexOf('.') !== -1 && filePath !== `/${mainFilePath}`
})
const mainFileName = `${basePath}/${mainFilePath}`

uploadMainFile(() => {
  refreshCDNCache()
  uploadStaticFile()
})

function uploadMainFile (callback) {
  const keyToOverwrite = `${mainFilePath}`
  const options = {
    scope: `${bucket}:${keyToOverwrite}`,
    returnBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}'
  }
  const putPolicy = new qiniu.rs.PutPolicy(options)
  const uploadToken = putPolicy.uploadToken(mac)
  const config = new qiniu.conf.Config()
  // config.zone = qiniu.zone.Zone_z2
  const formUploader = new qiniu.form_up.FormUploader(config)
  const putExtra = new qiniu.form_up.PutExtra()

  formUploader.putFile(uploadToken, keyToOverwrite, mainFileName, putExtra, function(respErr,
    respBody, respInfo) {
    if (respErr) {
      throw respErr
    }

    if (respInfo.statusCode == 200) {
      console.log('\x1b[32m主文件上传成功', JSON.stringify(respBody))
      callback()
    } else {
      console.log(respInfo.statusCode)
      console.log(respBody)
    }
  })
}

function uploadStaticFile () {
  staticFileNameList.forEach((fileName) => {
    const key = `${fileName.substr(basePath.length + 1)}`
    const options = {
      scope: `${bucket}:${key}`,
      // returnBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}'
      returnBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize)}'
    }
    const putPolicy = new qiniu.rs.PutPolicy(options)
    const uploadToken = putPolicy.uploadToken(mac)
    const config = new qiniu.conf.Config()
    // config.zone = qiniu.zone.Zone_z2
    const formUploader = new qiniu.form_up.FormUploader(config)
    const putExtra = new qiniu.form_up.PutExtra()

    formUploader.putFile(uploadToken, key, fileName, putExtra, function(respErr,
      respBody, respInfo) {
      if (respErr) {
        throw respErr
      }

      if (respInfo.statusCode == 200) {
        console.log('\x1b[32m静态文件上传成功', JSON.stringify(respBody))
      } else {
        console.log(respInfo.statusCode)
        console.log(respBody)
      }
    })
  })
}

function refreshCDNCache () {
  const cdnManager = new qiniu.cdn.CdnManager(mac)
  //URL 列表
  const urlsToRefresh = [
    `http://p458v950p.bkt.clouddn.com/${mainFilePath}`
  ]
  //刷新链接，单次请求链接不可以超过100个，如果超过，请分批发送请求
  cdnManager.refreshUrls(urlsToRefresh, function(err, respBody, respInfo) {
    if (err) {
      throw err
    }
    // console.log(respInfo.statusCode)
    if (respInfo.statusCode == 200) {
      console.log('\x1b[33mCDN 缓存刷新成功')
      // var jsonBody = JSON.parse(respBody)
      // console.log(jsonBody.code)
      // console.log(jsonBody.error)
      // console.log(jsonBody.requestId)
      // console.log(jsonBody.invalidUrls)
      // console.log(jsonBody.invalidDirs)
      // console.log(jsonBody.urlQuotaDay)
      // console.log(jsonBody.urlSurplusDay)
      // console.log(jsonBody.dirQuotaDay)
      // console.log(jsonBody.dirSurplusDay)
    }
  })
}
