/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "dc002e4534a7e42a8bf6310ae01eb0cf"
  },
  {
    "url": "about.html",
    "revision": "9b758d14819c17277acb0510dd4bcb30"
  },
  {
    "url": "assets/css/0.styles.12d0744c.css",
    "revision": "17863ffb47abf34be8086829038be229"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6c160eac.js",
    "revision": "ed935520b1705a4d4e6937d2575285e5"
  },
  {
    "url": "assets/js/11.0409c95e.js",
    "revision": "595163f1af7d970f1a22c3e137513bd3"
  },
  {
    "url": "assets/js/12.27d6c98f.js",
    "revision": "e3b854ba1f62b836d206ee0f3e017edf"
  },
  {
    "url": "assets/js/13.a3c07268.js",
    "revision": "17f092de192995da24ae938869f03697"
  },
  {
    "url": "assets/js/14.14e019d3.js",
    "revision": "22c06e9ebc445edb333d09337342f32f"
  },
  {
    "url": "assets/js/15.e322c637.js",
    "revision": "33617ace758c8593f35354c3a756da25"
  },
  {
    "url": "assets/js/16.e9949b27.js",
    "revision": "673ca71b9e39bebaa1860a34e8fa05c5"
  },
  {
    "url": "assets/js/17.c293b89d.js",
    "revision": "ba0a9f2bb0f05d9414e56b689e3e11a9"
  },
  {
    "url": "assets/js/18.48f3c7a8.js",
    "revision": "0d665ee34a4fda4dfd8369076a5601c0"
  },
  {
    "url": "assets/js/19.16b0c7e6.js",
    "revision": "eaa8d974f5e86f81569a26bece8e14e3"
  },
  {
    "url": "assets/js/2.1025e516.js",
    "revision": "341999e518f9cb42abdad44120764fda"
  },
  {
    "url": "assets/js/20.0e2c8922.js",
    "revision": "e07f4b38ac0ec703ca02f5666faeef77"
  },
  {
    "url": "assets/js/21.8d086267.js",
    "revision": "faa3987fab631729f2dd96b7dcb90cee"
  },
  {
    "url": "assets/js/22.c29786ce.js",
    "revision": "f0d8be965fc26906880f697af6bf81dc"
  },
  {
    "url": "assets/js/23.4fd34717.js",
    "revision": "868a5faaa736007b4d396c4b3baf69fb"
  },
  {
    "url": "assets/js/24.e3a3c0b9.js",
    "revision": "84afb798b876ef6c8eadd623790815e4"
  },
  {
    "url": "assets/js/25.268d5185.js",
    "revision": "10c6bd2eb5b929a16506c3d52434e680"
  },
  {
    "url": "assets/js/26.0dfa4a8d.js",
    "revision": "a4c36aebcf201faac2a10e40d13a9205"
  },
  {
    "url": "assets/js/27.b230c0dd.js",
    "revision": "0ccba0eae0d175c40c81e2a427352b85"
  },
  {
    "url": "assets/js/28.e69327d1.js",
    "revision": "7faafa84e277853b075f8a0cd8b12970"
  },
  {
    "url": "assets/js/29.1c961335.js",
    "revision": "95c9a995463d861c62f3e92c370edeb5"
  },
  {
    "url": "assets/js/3.6736e6ee.js",
    "revision": "8b08f679eb1cd8efbb0c546201b919e2"
  },
  {
    "url": "assets/js/4.a41aa6be.js",
    "revision": "0b4014143777262ee1a69abcf6874c7a"
  },
  {
    "url": "assets/js/5.d789b75a.js",
    "revision": "497a75bb51c716ddbecd6bf42da283d9"
  },
  {
    "url": "assets/js/6.e98e67e5.js",
    "revision": "c646c712435b04c7ab160698935f9f3c"
  },
  {
    "url": "assets/js/7.27e13367.js",
    "revision": "10a95f2513b1749462d831ddf53dd700"
  },
  {
    "url": "assets/js/8.5a09cfa1.js",
    "revision": "79a8a6dcc70a7b31e079aa7d04dfafec"
  },
  {
    "url": "assets/js/9.4e1e3626.js",
    "revision": "515fc6b1988f89e22933a06e18c12f5a"
  },
  {
    "url": "assets/js/app.77153f0c.js",
    "revision": "847368f652572a61472269adb788e403"
  },
  {
    "url": "demo.html",
    "revision": "92d02bb095d01e586e3f17e509755baa"
  },
  {
    "url": "en/about.html",
    "revision": "dfd5bb21b0e912ae6a30f06d2859d744"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "252e2c79e4bd9d35f8e901014f566e5f"
  },
  {
    "url": "en/guide/config.html",
    "revision": "bbdfa2d2a7e1c6718392d179f896b748"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "cafb7633a9436b3779c06d555a1485c2"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "fc92c476f53b6550c765069b0bb07135"
  },
  {
    "url": "en/guide/index.html",
    "revision": "5ac012236292d5c7ebfcc81f74b7370f"
  },
  {
    "url": "en/guide/page.html",
    "revision": "bf8dea736eec58faaca2be17bb724a5c"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "2cbc46d6845412f19cf78cec85b78517"
  },
  {
    "url": "en/guide/Todo.html",
    "revision": "8756b1eee42295653aafeff21a84c660"
  },
  {
    "url": "en/index.html",
    "revision": "db8f0048c3acbde34ed71bc10457be36"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "fb1581e6446a9ee91e80ea7f878f9918"
  },
  {
    "url": "guide/config.html",
    "revision": "d8fea8e84d03a3453962ea86e910204b"
  },
  {
    "url": "guide/faq.html",
    "revision": "a0c119cb5783eef108ff73c6cf703eec"
  },
  {
    "url": "guide/icon.html",
    "revision": "206016359659edfe818f047ff9a684d8"
  },
  {
    "url": "guide/index.html",
    "revision": "7c300b09fc51b64ebb17198b7a83a9fa"
  },
  {
    "url": "guide/page.html",
    "revision": "6b57f73cb9534844dc63981545d27979"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "a7aec580952a423a80e2d61379cf1e88"
  },
  {
    "url": "guide/Todo.html",
    "revision": "c5414451f5e857e77d225760ac2a44e3"
  },
  {
    "url": "index.html",
    "revision": "3a7c67813d4c6f428da9cf779b7bb109"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "sponsor.html",
    "revision": "aa5f92c1e51996d78dcab36e440ec2dd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
