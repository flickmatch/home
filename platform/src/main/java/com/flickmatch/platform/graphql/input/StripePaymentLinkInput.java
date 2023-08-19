package com.flickmatch.platform.graphql.input;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import lombok.Builder;

@Builder
public class StripePaymentLinkInput {
        private double amount;
        private String link;

        public StripePaymentLinkInput() {
        }

        public StripePaymentLinkInput(double amount, String link) {
            this.amount = amount;
            this.link = link;
        }
        @DynamoDBAttribute(attributeName="amount")
        public double getAmount() {
            return amount;
        }

        public void setAmount(double amount) {
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

