report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Index_0_document_0_phone.png",
        "test": "../bitmaps_test/20200202-103125/backstop_default_Index_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_Index_0_document_0_phone.png",
        "label": "Index",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Index_0_document_1_tablet.png",
        "test": "../bitmaps_test/20200202-103125/backstop_default_Index_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Index_0_document_1_tablet.png",
        "label": "Index",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "backstop_default"
});