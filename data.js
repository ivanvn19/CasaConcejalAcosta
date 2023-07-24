var APP_DATA = {
  "scenes": [
    {
      "id": "0-frente",
      "name": "Frente",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.06151311566361528,
        "pitch": 0.027194572972442543,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -0.18479734691632288,
          "pitch": 0.07081107763866434,
          "rotation": 0,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.09973310011396563,
        "pitch": 0.0804216565534066,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 2.6013011460766133,
          "pitch": 0.14791147828903917,
          "rotation": 0,
          "target": "0-frente"
        },
        {
          "yaw": -0.18146973204896888,
          "pitch": 0.04614690765494878,
          "rotation": 0,
          "target": "9-cocina-i"
        },
        {
          "yaw": 0.8702736493707786,
          "pitch": 0.07351902542042943,
          "rotation": 11.780972450961727,
          "target": "3-ingreso-a-bao-y-habitacin-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cuarto",
      "name": "Cuarto",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.04908738521233502,
        "pitch": 0.26215575153835147,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 2.993070383725806,
          "pitch": 0.20053109465554186,
          "rotation": 0,
          "target": "6-ingreso-a-cuarto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-ingreso-a-bao-y-habitacin-principal",
      "name": "Ingreso a baño y habitación principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7035365110002143,
          "pitch": 0.03368090595989415,
          "rotation": 0,
          "target": "7-habitacin-principal"
        },
        {
          "yaw": 0.595467200761723,
          "pitch": -0.08272574378885267,
          "rotation": 1.5707963267948966,
          "target": "4-antebao"
        },
        {
          "yaw": 3.1142817993033063,
          "pitch": 0.16003649512762408,
          "rotation": 0,
          "target": "6-ingreso-a-cuarto"
        },
        {
          "yaw": -2.7813740822510375,
          "pitch": 0.08733334411829397,
          "rotation": 7.853981633974483,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-antebao",
      "name": "Antebaño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.565692038086386,
          "pitch": -0.011678655334840471,
          "rotation": 0,
          "target": "5-bao"
        },
        {
          "yaw": -3.0452115594508236,
          "pitch": 0.007244807813728826,
          "rotation": 0,
          "target": "3-ingreso-a-bao-y-habitacin-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.6772468971007353,
        "pitch": 0.7299648316442706,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 2.609272888048139,
          "pitch": 0.1647966549327755,
          "rotation": 0,
          "target": "4-antebao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-ingreso-a-cuarto",
      "name": "Ingreso a cuarto",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2125343329045073,
          "pitch": 0.09150868912576371,
          "rotation": 0,
          "target": "2-cuarto"
        },
        {
          "yaw": 2.979256665023205,
          "pitch": 0.05926474663777803,
          "rotation": 0,
          "target": "3-ingreso-a-bao-y-habitacin-principal"
        },
        {
          "yaw": 1.8728069528190812,
          "pitch": 0.18808666318388312,
          "rotation": 4.71238898038469,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-habitacin-principal",
      "name": "Habitación principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.475963899160984,
          "pitch": -0.007854618585387385,
          "rotation": 3.141592653589793,
          "target": "8-habitacin-principal-ii-"
        },
        {
          "yaw": 2.5248194208920225,
          "pitch": 0.10707840813576475,
          "rotation": 0,
          "target": "3-ingreso-a-bao-y-habitacin-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-habitacin-principal-ii-",
      "name": "Habitación principal II ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.573470172583475,
        "pitch": 0.3895423989305655,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.6330543777684454,
          "pitch": 0.10289628218928115,
          "rotation": 0,
          "target": "3-ingreso-a-bao-y-habitacin-principal"
        },
        {
          "yaw": -0.04035131009080217,
          "pitch": 0.013960570593527066,
          "rotation": 0,
          "target": "13-parque"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-cocina-i",
      "name": "Cocina I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.219838578693139,
          "pitch": -0.0027850271594189735,
          "rotation": 0,
          "target": "11-comedor"
        },
        {
          "yaw": -0.26306979136470154,
          "pitch": 0.1761391231264433,
          "rotation": 0,
          "target": "10-cocina"
        },
        {
          "yaw": -0.948096497972724,
          "pitch": 0.02894294861872382,
          "rotation": 0,
          "target": "12-ingreso-a-parque"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.2289003913224708,
        "pitch": 0.24127220131926386,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.310248711111191,
          "pitch": 0.08358834884387356,
          "rotation": 0,
          "target": "11-comedor"
        },
        {
          "yaw": 2.7772607047148714,
          "pitch": 0.13566514660598372,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": -0.34565117492670616,
          "pitch": -0.05400648952665499,
          "rotation": 0,
          "target": "13-parque"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-comedor",
      "name": "Comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2347868794260943,
          "pitch": 0.10309254092352838,
          "rotation": 0,
          "target": "10-cocina"
        },
        {
          "yaw": 2.6102429659870667,
          "pitch": 0.09833612988591511,
          "rotation": 0,
          "target": "12-ingreso-a-parque"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-ingreso-a-parque",
      "name": "Ingreso a parque",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.21350884417232407,
          "pitch": 0.1548080600159416,
          "rotation": 0,
          "target": "13-parque"
        },
        {
          "yaw": 2.449825120072905,
          "pitch": 0.18077080466524187,
          "rotation": 0,
          "target": "11-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-parque",
      "name": "Parque",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.43908468751471474,
        "pitch": -0.11811930806280913,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 2.9316188060881307,
          "pitch": 0.10596443285291812,
          "rotation": 5.497787143782138,
          "target": "12-ingreso-a-parque"
        },
        {
          "yaw": 1.1933483557592979,
          "pitch": 0.03097112220256193,
          "rotation": 0,
          "target": "8-habitacin-principal-ii-"
        },
        {
          "yaw": 1.9163815873432224,
          "pitch": 0.03282277433239145,
          "rotation": 0,
          "target": "10-cocina"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "CasaConcejalAcosta",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
