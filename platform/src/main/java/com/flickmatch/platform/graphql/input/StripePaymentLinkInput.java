package com.flickmatch.platform.graphql.input;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import lombok.Builder;

@Builder
public class StripePaymentLinkInput {
        private float amount;
        private String link;

        public StripePaymentLinkInput() {
        }

        public StripePaymentLinkInput(float amount, String link) {
            this.amount = amount;
            this.link = link;
        }
        @DynamoDBAttribute(attributeName="amount")
        public float getAmount() {
            return amount;
        }

        public void setAmount(float amount) {
            this.amount = amount;
        }
        @DynamoDBAttribute(attributeName="link")
        public String getLink() {
            return link;
        }

        public void setLink(String link) {
            this.link = link;
        }
}

