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