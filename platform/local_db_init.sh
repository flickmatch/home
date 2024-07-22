#aws dynamodb delete-table --table-name City --endpoint-url http://localhost:8000
#aws dynamodb delete-table --table-name Sport --endpoint-url http://localhost:8000
#aws dynamodb delete-table --table-name SportsVenue --endpoint-url http://localhost:8000
#aws dynamodb delete-table --table-name Event --endpoint-url http://localhost:8000

aws dynamodb create-table \
    --table-name City \
    --attribute-definitions \
        AttributeName=cityId,AttributeType=S \
    --key-schema \
        AttributeName=cityId,KeyType=HASH \
    --billing-mode PAY_PER_REQUEST \
    --endpoint-url http://localhost:8000

aws dynamodb create-table \
    --table-name Sport \
    --attribute-definitions \
        AttributeName=sportId,AttributeType=S \
    --key-schema \
        AttributeName=sportId,KeyType=HASH \
    --billing-mode PAY_PER_REQUEST \
    --endpoint-url http://localhost:8000

aws dynamodb create-table \
    --table-name SportsVenue \
    --attribute-definitions \
        AttributeName=cityId,AttributeType=S \
    --key-schema \
        AttributeName=cityId,KeyType=HASH \
    --billing-mode PAY_PER_REQUEST \
    --endpoint-url http://localhost:8000

aws dynamodb create-table \
    --table-name Event \
    --attribute-definitions \
        AttributeName=cityId,AttributeType=S \
        AttributeName=date,AttributeType=S \
    --key-schema \
        AttributeName=cityId,KeyType=HASH \
        AttributeName=date,KeyType=RANGE \
    --billing-mode PAY_PER_REQUEST \
    --endpoint-url http://localhost:8000

aws dynamodb put-item \
    --table-name City \
    --item '{
        "cityId": {"S": "1"},
        "cityName": {"S": "Gurgaon"},
        "localTimeZone": {"S": "GMT+5:30"}
        }' \
    --return-consumed-capacity TOTAL \
    --endpoint-url http://localhost:8000

aws dynamodb put-item \
    --table-name City \
    --item '{
            "cityId": {"S": "2"},
            "cityName": {"S": "Hyderabad"},
            "localTimeZone": {"S": "GMT+5:30"}
            }' \
    --return-consumed-capacity TOTAL \
    --endpoint-url http://localhost:8000

aws dynamodb put-item \
    --table-name Event \
    --item '{
              "cityId": {
                "S": "2"
              },
              "date": {
                "S": "2024-07-11"
              },
              "eventDetailsList": {
                "L": [
                  {
                    "M": {
                      "charges": {
                        "N": "185"
                      },
                      "endTime": {
                        "S": "2023-07-11T15:30:00.000Z"
                      },
                      "index": {
                        "N": "1"
                      },
                      "playerDetailsList": {
                        "L": [
                          {
                            "M": {
                              "name": {
                                "S": "Abhishek"
                              }
                            }
                          },
                          {
                            "M": {
                              "name": {
                                "S": "Kanishk"
                              }
                            }
                          },
                          {
                            "M": {
                              "name": {
                                "S": "Harsh"
                              }
                            }
                          },
                          {
                            "M": {
                              "name": {
                                "S": "uday"
                              }
                            }
                          }
                        ]
                      },
                      "reservedPlayersCount": {
                        "N": "12"
                      },
                      "sportName": {
                        "S": "Football"
                      },
                      "startTime": {
                        "S": "2023-07-11T14:30:00.000Z"
                      },
                      "venueLocationLink": {
                        "S": "https://maps.app.goo.gl/axDbAHPjP648u7FZA"
                      },
                      "venueName": {
                        "S": "Bsporty"
                      },
                      "waitListPlayersCount": {
                        "N": "5"
                      }
                    }
                  }
                ]
              }
            }' \
    --return-consumed-capacity TOTAL \
    --endpoint-url http://localhost:8000

aws dynamodb put-item \
    --table-name Sport \
    --item '{
        "sportId": {"S": "1"},
        "sportName": {"S": "Football"} }' \
    --return-consumed-capacity TOTAL \
    --endpoint-url http://localhost:8000

aws dynamodb put-item \
  --table-name SportsVenue \
  --item '{
    "cityId": {"S": "1"},
    "sportsVenuesInCity": {
      "L": [
        { "M" : {
          "sportsVenueId": {"S": "1680632179435"},
          "displayName": {"S": "Gallant, Sector 29"},
          "googleMapsLink": {"S": "abc.xyz.com"},
          "availableSportsIds": {"L": [{"S": "1"}]}
          }
        }
      ]
    }
  }' \
  --return-consumed-capacity TOTAL \
  --endpoint-url http://localhost:8000