const apiUrl =
  import.meta.env.MODE == 'development'
    ? import.meta.env.VITE_API_LOCAL
    : import.meta.env.VITE_API_URL;

type checkoutOutput = {
  sessionId: string;
  sessionUrl: string;
  status: string;
  message: string;
};

const checkoutProducts = (
  uniqueEventId: string,
  objectArray: { waNumber: string; name: string; email: string }[],
  setAmount: React.Dispatch<React.SetStateAction<number>>,
  currency: string,
  email: string,
  phoneNumber: string,
  teamColor: string,
  venuePinCode: string,
): Promise<checkoutOutput> =>
  // fetch('http://localhost:8080/graphql', {
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `mutation  CheckoutProducts{
       checkoutProducts(
            input: {
              uniqueEventId: "${uniqueEventId}"
              playerInputList: [${objectArray
                .map(
                  (obj) =>
                    `{ waNumber: "${obj.waNumber}", name: "${obj.name}",teamColor: "${teamColor}",email: "${obj.email}" }`,
                )
                .join(',')}],
                currency : "${currency}"
                email : "${email}"
                phoneNumber: "${phoneNumber}"
                redirectUrl: "${window.location.origin}"
                venuePinCode: "${venuePinCode}"
            }
        ) {
        sessionId
        sessionUrl
        status
        message
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
        return result.data.checkoutProducts;
      }
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });

export { checkoutProducts };
