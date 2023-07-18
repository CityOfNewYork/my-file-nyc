// Function to asynchronously load the Adobe Document Services Viewer SDK script
function loadAdobeViewerSDK() {
  const script = document.createElement('script')
  script.defer = true
  script.src = 'https://documentservices.adobe.com/view-sdk/viewer.js'
  document.head.appendChild(script)
}

export default () => {
  const res = loadAdobeViewerSDK()
  console.log(res)

  //   console.log(
  //     await res.addEventListener('adobe_dc_view_sdk.ready', function () {
  //       // @ts-ignore
  //       const adobeDCView = new AdobeDC.View({
  //         clientId: process.env.ADOBE_CLIENT_ID,
  //         divId: 'adobe-dc-view',
  //       })

  //       adobeDCView.previewFile({
  //         content: {
  //           location: {},
  //         },
  //         metaData: { fileName: 'Yuriy' },
  //       })
  //     }),
  //   )

  // Now, you can access the Adobe Document Services Viewer SDK globally using `adobeDC` object
  // You can use it in your components or other parts of the application as needed
  console.log('Adobe Document Services Viewer SDK loaded.')
}
