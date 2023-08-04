export const browserDetector = () => {
  const userAgent = navigator.userAgent
  const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
  let isPdfBrowser = false

  if (!isMobile) {
    if (userAgent.includes('Chrome')) {
      isPdfBrowser = true
      return isPdfBrowser
    } else if (userAgent.includes('Safari')) {
      isPdfBrowser = true
      return isPdfBrowser
    } else if (userAgent.includes('Edge')) {
      isPdfBrowser = true
      return isPdfBrowser
    } else {
      isPdfBrowser = false
      return isPdfBrowser
    }
  } else {
    if (/Android/i.test(userAgent)) {
      if (
        /Chrome/i.test(userAgent) &&
        /Safari/i.test(userAgent) &&
        /SamsungBrowser/i.test(userAgent)
      ) {
        isPdfBrowser = false
        return isPdfBrowser
      } else if (
        /Chrome/i.test(userAgent) &&
        /Safari/i.test(userAgent) &&
        !/SamsungBrowser/i.test(userAgent)
      ) {
        isPdfBrowser = true
        return isPdfBrowser
      } else if (
        /Chrome/i.test(userAgent) &&
        !/Safari/i.test(userAgent) &&
        !/SamsungBrowser/i.test(userAgent)
      ) {
        isPdfBrowser = true
        return isPdfBrowser
      } else {
        isPdfBrowser = false
        return isPdfBrowser
      }
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
      if (
        /Safari/i.test(userAgent) &&
        /CriOS/i.test(userAgent) &&
        /FxiOS/i.test(userAgent)
      ) {
        isPdfBrowser = false
        return isPdfBrowser
      } else if (
        /Safari/i.test(userAgent) &&
        /CriOS/i.test(userAgent) &&
        !/FxiOS/i.test(userAgent)
      ) {
        isPdfBrowser = true
        return isPdfBrowser
      } else if (/Safari/i.test(userAgent) && /FxiOS/i.test(userAgent)) {
        isPdfBrowser = false
        return isPdfBrowser
      } else if (
        /Safari/i.test(userAgent) &&
        !/CriOS/i.test(userAgent) &&
        !/FxiOS/i.test(userAgent)
      ) {
        isPdfBrowser = true
        return isPdfBrowser
      } else {
        isPdfBrowser = false
        return isPdfBrowser
      }
    }
  }
}

//   // Now, you can access the Adobe Document Services Viewer SDK globally using `adobeDC` object
//   // You can use it in your components or other parts of the application as needed
//   console.log('Adobe Document Services Viewer SDK loaded.')
// }
