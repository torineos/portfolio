
<template>
    <div>
      <download-pdf-button :pdf-url="pdfUrl" :pdf-file-name="pdfFileName" />
    </div>
  </template>
  
  <script>
  import DownloadPdfButton from '@/components/DownloadPdfButton.vue';
  
  export default {
    name: 'MyProject',
    components: {
      DownloadPdfButton
    },
    data() {
      return {
        pdfUrl: '/src/assets/TESTCV.pdf',
        pdfFileName: 'TESTCV.pdf'
      };
    }
  };
  </script>