const createOrder = (
  uniqueEventId: string,
  objectArray: { waNumber: string; name: string }[],
  setAmount: React.Dispatch<React.SetStateAction<number>>,
): Promise<string> =>
  fetch('http://localhost:8080/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `mutation initiateRazorPayment {
        initiateRazorPayment(
            input: {
              uniqueEventId: "${uniqueEventId}"
              playerInputList: [${objectArray
                .map((obj) => `{ waNumber: "${obj.waNumber}", name: "${obj.name}" }`)
                .join(',')}]
            }
        ) {
            orderId
            isInitiated
            amount
        }
    }`,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.errors) {
        // Handle GraphQL errors
        throw new Error(result.errors[0].message);
      } else {
        setAmount(result.data.initiateRazorPayment.amount);
        return result.data.initiateRazorPayment.orderId;
      }
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });

interface Order {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

function loadRazorPay() {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const displayRazorpay = (
  amount: number,
  orderId: string,
  email: string,
  name: string,
  phoneNumber: string,
) => {
  async function displayRazorPay() {
    const res = await loadRazorPay();
    if (!res) {
      alert('Razorpay SDK failed to load.Please try again later.');
    }

    const options = {
      key: 'rzp_test_hpeD9rSq9zDwJN', // to be fixed for production
      amount: amount,
      currency: 'INR', // to be fixed
      name: 'Flickmatch',
      description: `Flickmatch transaction for football match.`,
      image:
        'https://firebasestorage.googleapis.com/v0/b/flickmatch-374a2.appspot.com/o/fm_rainbow.png?alt=media&token=1b06ae27-bf10-4974-9100-6bb5f2308314',
      order_id: orderId,
      handler: async function (res: Order) {
        fetch('http://localhost:8080/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `mutation processRazorCallback {
            processRazorCallback(
                input: {
                    razorPaymentId: "${res.razorpay_payment_id}"
                    razorPayOrderId: "${res.razorpay_order_id}"
                    razorPaySignature: "${res.razorpay_signature}"
        
                }
            ) {
                isSuccessful
                errorMessage
            }
        }`,
          }),
        })
          .then((response) => response.json())
          .then((result) => {
            if (result.errors) {
              // Handle GraphQL errors
              throw new Error(result.errors[0].message);
            } else {
              if (result.data.processRazorCallback.isSuccessful) {
                alert('Payment successful.');
              } else {
                alert('Payment failed.Please try again later.');
              }
            }
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error);
          })
          .finally(() => {
            paymentObject.close();
          });
      },
      prefill: {
        name,
        email,
        contact: phoneNumber,
      },
      notes: {
        address:
          'Tower 8 - Flat 1501, Nirvana Country Rd, The Close South, Sector 50, Gurugram, Haryana 122018',
      },
      theme: {
        color: '#4ce95a',
      },
    };

    const _window = window as any;
    const paymentObject = new _window.Razorpay(options);
    paymentObject.open();
  }

  displayRazorPay();
};

export { createOrder, displayRazorpay };
