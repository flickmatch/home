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

  aws dynamodb put-item --table-name City --item "{\"cityId\": {\"S\": \"7\"}, \"cityName\": {\"S\": \"Gwalior\"}, \"localTimeZone\": {\"S\": \"GMT+5:30\"}, \"iconUrl\": {\"S\": \"/mount-rushmore.webp\"}, \"countryCode\": {\"S\": \"IN\"}, \"currency\": {\"S\": \"INR\"}}" --return-consumed-capacity TOTAL


  aws dynamodb create-table \
    --table-name Pass \
    --attribute-definitions \
        AttributeName=cityId,AttributeType=S \
        AttributeName=passId,AttributeType=S \
    --key-schema \
        AttributeName=cityId,KeyType=HASH \
        AttributeName=passId,KeyType=RANGE \
    --billing-mode PAY_PER_REQUEST \
    --endpoint-url http://localhost:8000


  aws dynamodb put-item \
   --table-name Pass \
   --item "{\"cityId\": {\"S\": \"1\"}, \"passId\": {\"S\": \"pass1\"}, \"passType\": {\"S\": \"LimitedGames\"}, \"totalGames\": {\"N\": \"10\"}, \"totalDays\": {\"N\": \"3000\"}, \"title\": {\"S\": \"10 games pass\"}, \"price\": {\"N\": \"1000\"}, \"status\": {\"S\": \"Active\"}}" \
   --return-consumed-capacity TOTAL \
   --endpoint-url http://localhost:8000

  aws dynamodb put-item \
   --table-name Pass \
   --item "{\"cityId\": {\"S\": \"2\"},\"passId\": {\"S\": \"pass2\"},\"passType\": {\"S\": \"LimitedDays\"},\"totalGames\": {\"N\": \"1000\"},\"totalDays\": {\"N\": \"30\"},\"title\": {\"S\": \"30 days pass\"},\"price\": {\"N\": \"1000\"},\"status\": {\"S\": \"Active\"}}" \
   --return-consumed-capacity TOTAL \
   --endpoint-url http://localhost:8000

aws dynamodb create-table \
    --table-name Subscription \
    --attribute-definitions \
        AttributeName=userId,AttributeType=S \
        AttributeName=subscriptionId,AttributeType=S \
    --key-schema \
        AttributeName=userId,KeyType=HASH \
        AttributeName=subscriptionId,KeyType=RANGE \
    --billing-mode PAY_PER_REQUEST \
    --endpoint-url http://localhost:8000

aws dynamodb put-item \
   --table-name Subscription \
   --item "{\"userId\": {\"S\": \"user123\"}, \"subscriptionId\": {\"S\": \"sub123\"}, \"status\": {\"S\": \"Active\"}, \"passId\": {\"S\": \"pass1\"}, \"gamesLeft\": {\"N\": \"10\"}, \"expiryDate\": {\"S\": \"2024-12-31\"}}" \
   --return-consumed-capacity TOTAL \
   --endpoint-url http://localhost:8000

aws dynamodb put-item \
   --table-name Subscription \
   --item "{\"userId\": {\"S\": \"user123\"}, \"subscriptionId\": {\"S\": \"sub123\"}, \"status\": {\"S\": \"Active\"}, \"passId\": {\"S\": \"pass2\"}, \"gamesLeft\": {\"N\": \"10\"}, \"expiryDate\": {\"S\": \"2024-12-31\"}}" \
   --return-consumed-capacity TOTAL \
   --endpoint-url http://localhost:8000

    aws dynamodb create-table \
     --table-name PassPaymentRequest \
     --attribute-definitions \
         AttributeName=orderId,AttributeType=S \
     --key-schema \
         AttributeName=orderId,KeyType=HASH \
     --billing-mode PAY_PER_REQUEST


