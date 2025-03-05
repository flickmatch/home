const apiUrl =
  import.meta.env.MODE == 'development'
    ? import.meta.env.VITE_API_LOCAL
    : import.meta.env.VITE_API_URL;

const createOrder = (
  passId: string,
  email: string,
  setAmount: React.Dispatch<React.SetStateAction<number>>,
  cityName: string,
  currencyType: string,
): Promise<string> =>
  // fetch('http://localhost:8080/graphql', {
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `mutation InitiatePassPayment {
            initiatePassPayment(
                input: {
                    passId: "${passId}"
                    email: "${email}",
                    currency: "${currencyType}",
                    location: "${cityName}"
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
        setAmount(result.data.initiatePassPayment.amount);
        return result.data.initiatePassPayment.orderId;
      }
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });

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

function removeRazorPayScript() {
  const script = document.querySelector(
    'script[src="https://checkout.razorpay.com/v1/checkout.js"]',
  );
  if (script) {
    document.body.removeChild(script);
  }
}

const displayRazorpay = (
  amount: number,
  orderId: string,
  email: string,
  name: string,
  phoneNumber: string,
  setOrderId: React.Dispatch<React.SetStateAction<string>>,
  setRazorPay: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  async function displayRazorPay() {
    const res = await loadRazorPay();
    if (!res) {
      alert('Razorpay SDK failed to load.Please try again later.');
    }
    // Ensure amount is multiplied by 100 to convert to paise for Razorpay

    const options = {
      // key: 'rzp_live_ba3UQjRIBXdeXt', // to be fixed for production
      // key: 'rzp_live_ba3UQjRIBXdeXt', // to be fixed for production
      key:
        import.meta.env.MODE == 'development'
          ? 'rzp_test_hpeD9rSq9zDwJN'
          : 'rzp_live_ba3UQjRIBXdeXt',
      amount: amount,
      currency: 'INR',
      name: 'Flickmatch',
      description: `Flickmatch transaction for football match.`,
      image:
        'https://firebasestorage.googleapis.com/v0/b/flickmatch-374a2.appspot.com/o/fm_rainbow.png?alt=media&token=1b06ae27-bf10-4974-9100-6bb5f2308314',
      order_id: orderId,
      // callback_url: 'https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/processPassPayment',
      callback_url:
        import.meta.env.MODE == 'development'
          ? import.meta.env.VITE_CALLBACK_LOCAL
          : import.meta.env.VITE_CALLBACK_URL,
      // callback_url: 'http://localhost:5173',
      redirect: true,
      prefill: {
        name,
        email,
        contact: phoneNumber,
      },
      notes: {
        address:
          'Tower 8 - Flat 1501, Nirvana Country Rd, The Close South, Sector 50, Gurugram, Haryana 122018',
      },
      modal: {
        ondismiss: function () {
          // Handle the scenario when the user closes the payment window
          // console.log('Payment popup closed');
          // Additional cleanup actions can be added here
          setRazorPay(false);
          setOrderId('');
          removeRazorPayScript(); // Clean up Razorpay script
          delete _window.Razorpay; // Clean up Razorpay object
        },
      },
      theme: {
        color: '#4ce95a',
      },
    };
    // eslint-disable-next-line
    const _window = window as any;
    const paymentObject = new _window.Razorpay(options);
    paymentObject.open();
  }

  displayRazorPay();
};

export { createOrder, displayRazorpay };
