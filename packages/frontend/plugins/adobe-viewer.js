// Function to asynchronously load the Adobe Document Services Viewer SDK script
const loadAdobeViewerSDK = () => {
  const script = document.createElement('script')
  script.defer = true
  script.src = 'https://documentservices.adobe.com/view-sdk/viewer.js'
  document.head.appendChild(script)
}

//   // Now, you can access the Adobe Document Services Viewer SDK globally using `adobeDC` object
//   // You can use it in your components or other parts of the application as needed
//   console.log('Adobe Document Services Viewer SDK loaded.')
// }

export default loadAdobeViewerSDK
