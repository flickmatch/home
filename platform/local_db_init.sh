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
        "cityName": {"S": "Gurgaon"} }' \
    --return-consumed-capacity TOTAL \
    --endpoint-url http://localhost:8000

aws dynamodb put-item \
    --table-name City \
    --item '{
        "cityId": {"S": "2"},
        "cityName": {"S": "Hyderabad"} }' \
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

  aws dynamodb create-table \
   --table-name DaysSubscription \
   --attribute-definitions \
   AttributeName=daysSubscriptionId,AttributeType=S \
   --key-schema \
   AttributeName=daysSubscriptionId,KeyType=HASH \
   --provisioned-throughput \
   ReadCapacityUnits=5,WriteCapacityUnits=5 \
   --table-class STANDARD

   aws dynamodb create-table \
   --table-name GamesSubscription \
   --attribute-definitions \
   AttributeName=gamesSubscriptionId,AttributeType=S \
   --key-schema \
   AttributeName=gamesSubscriptionId,KeyType=HASH \
   --provisioned-throughput \
   ReadCapacityUnits=5,WriteCapacityUnits=5 \
   --billing-mode PROVISIONED

   aws dynamodb create-table \
   --table-name LoyaltyPass \
   --attribute-definitions AttributeName=passId,AttributeType=S \
   --key-schema AttributeName=passId,KeyType=HASH \
   --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 \
   --billing-mode PROVISIONED

   aws dynamodb create-table \
   --table-name Subscription \
   --attribute-definitions AttributeName=subscriptionId,AttributeType=S \
   --key-schema AttributeName=subscriptionId,KeyType=HASH \
   --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 \
   --billing-mode PROVISIONED

   aws dynamodb create-table \
   --table-name SubscriptionDetails \
   --attribute-definitions AttributeName=subscriptionDetailsId,AttributeType=S \
   --key-schema AttributeName=subscriptionDetailsId,KeyType=HASH \
   --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 \
   --billing-mode PROVISIONED