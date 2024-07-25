// Scroll to Top Button
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/*offer js*/
document.addEventListener('DOMContentLoaded', function () {
  const confirmButton = document.getElementById('offer_confirm');

  confirmButton.addEventListener('click', function () {
    showConfirmBox('Are you sure you want to proceed?', function (confirmed) {
      if (confirmed) {
        alert('You have availed 40% offer');
        // Add your logic here for what happens when the user confirms

      } else {
        alert('User canceled!');
        // Add your logic here for what happens when the user cancels
      }
    });
  });

  function showConfirmBox(message, callback) {
    // Create the confirm box elements
    const confirmOverlay = document.createElement('div');
    const confirmBox = document.createElement('div');
    const confirmMessage = document.createElement('p');
    const confirmYesButton = document.createElement('button');
    const confirmNoButton = document.createElement('button');

    // Set up the styles for the elements
    confirmOverlay.style.position = 'fixed';
    confirmOverlay.style.top = '0';
    confirmOverlay.style.left = '0';
    confirmOverlay.style.width = '100%';
    confirmOverlay.style.height = '100%';
    confirmOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    confirmOverlay.style.display = 'flex';
    confirmOverlay.style.justifyContent = 'center';
    confirmOverlay.style.alignItems = 'center';
    confirmOverlay.style.zIndex = '1000';

    confirmBox.style.backgroundColor = '#fff';
    confirmBox.style.padding = '20px';
    confirmBox.style.borderRadius = '8px';
    confirmBox.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    confirmBox.style.textAlign = 'center';
    confirmBox.style.width = '300px';

    confirmMessage.innerText = message;
    confirmMessage.style.marginBottom = '20px';

    confirmYesButton.innerText = 'Yes';
    confirmYesButton.style.marginRight = '10px';
    confirmYesButton.style.padding = '10px 20px';
    confirmYesButton.style.backgroundColor = '#007bff';
    confirmYesButton.style.color = '#fff';
    confirmYesButton.style.border = 'none';
    confirmYesButton.style.borderRadius = '4px';
    confirmYesButton.style.cursor = 'pointer';

    confirmNoButton.innerText = 'No';
    confirmNoButton.style.padding = '10px 20px';
    confirmNoButton.style.backgroundColor = '#6c757d';
    confirmNoButton.style.color = '#fff';
    confirmNoButton.style.border = 'none';
    confirmNoButton.style.borderRadius = '4px';
    confirmNoButton.style.cursor = 'pointer';

    // Append elements to the confirm box
    confirmBox.appendChild(confirmMessage);
    confirmBox.appendChild(confirmYesButton);
    confirmBox.appendChild(confirmNoButton);
    confirmOverlay.appendChild(confirmBox);

    // Append the confirm box to the body
    document.body.appendChild(confirmOverlay);

    // Event listeners for the buttons
    confirmYesButton.addEventListener('click', function () {
      callback(true);
      document.body.removeChild(confirmOverlay);
    });

    confirmNoButton.addEventListener('click', function () {
      callback(false);
      document.body.removeChild(confirmOverlay);
    });
  }
});



/* For coupon valiation*/
document.addEventListener('DOMContentLoaded', function () {
  const correctPassword = '01234'; // Define the correct password

  // Function to create and display the password prompt
  function showPasswordPrompt() {
    // Create the prompt box elements
    const promptOverlay = document.createElement('div');
    const promptBox = document.createElement('div');
    const promptMessage = document.createElement('p');
    const promptInput = document.createElement('input');
    const promptSubmitButton = document.createElement('button');
    const promptCancelButton = document.createElement('button');

    // Set up the styles for the elements
    promptOverlay.style.position = 'fixed';
    promptOverlay.style.top = '0';
    promptOverlay.style.left = '0';
    promptOverlay.style.width = '100%';
    promptOverlay.style.height = '100%';
    promptOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    promptOverlay.style.display = 'flex';
    promptOverlay.style.justifyContent = 'center';
    promptOverlay.style.alignItems = 'center';
    promptOverlay.style.zIndex = '1000';

    promptBox.style.backgroundColor = '#fff';
    promptBox.style.padding = '20px';
    promptBox.style.borderRadius = '8px';
    promptBox.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    promptBox.style.textAlign = 'center';
    promptBox.style.width = '300px';

    promptMessage.innerText = 'Please enter valid coupon id:';
    promptMessage.style.marginBottom = '20px';


    promptInput.type = 'password';
    promptInput.style.marginBottom = '20px';
    promptInput.style.width = '100%';
    promptInput.style.padding = '10px';
    promptInput.style.border = '1px solid #ccc';
    promptInput.style.borderRadius = '4px';


    promptSubmitButton.innerText = 'Submit';
    promptSubmitButton.style.marginRight = '10px';
    promptSubmitButton.style.padding = '10px 20px';
    promptSubmitButton.style.backgroundColor = '#007bff';
    promptSubmitButton.style.color = '#fff';
    promptSubmitButton.style.border = 'none';
    promptSubmitButton.style.borderRadius = '4px';
    promptSubmitButton.style.cursor = 'pointer';

    promptCancelButton.innerText = 'Cancel';
    promptCancelButton.style.padding = '10px 20px';
    promptCancelButton.style.backgroundColor = '#6c757d';
    promptCancelButton.style.color = '#fff';
    promptCancelButton.style.border = 'none';
    promptCancelButton.style.borderRadius = '4px';
    promptCancelButton.style.cursor = 'pointer';

    // Append elements to the prompt box
    promptBox.appendChild(promptMessage);
    promptBox.appendChild(promptInput);
    promptBox.appendChild(promptSubmitButton);
    promptBox.appendChild(promptCancelButton);
    promptOverlay.appendChild(promptBox);

    // Append the prompt box to the body
    document.body.appendChild(promptOverlay);

    // Event listeners for the buttons
    promptSubmitButton.addEventListener('click', function () {
      const userPassword = promptInput.value;
      if (userPassword === correctPassword) {
        alert('Coupon is valid!');
        alert('So you have availed 30% offer')
        // Add your logic here for successful password entry
      } else {
        alert('Coupon is invalid!');
        // Add your logic here for unsuccessful password entry
      }
      document.body.removeChild(promptOverlay);
    });

    promptCancelButton.addEventListener('click', function () {
      document.body.removeChild(promptOverlay);
    });
  }

  // Trigger the password prompt (for example, on button click)
  const confirmButton = document.getElementById('coupon_confirm');
  confirmButton.addEventListener('click', showPasswordPrompt);
});



document.addEventListener('DOMContentLoaded', function () {
  const priceRangeInput = document.getElementById('priceRange');
  const minPriceDisplay = document.getElementById('minPrice');
  const maxPriceDisplay = document.getElementById('maxPrice');

  // Initialize price display
  const maxPrice = priceRangeInput.max;
  minPriceDisplay.textContent = priceRangeInput.value;
  maxPriceDisplay.textContent = maxPrice;

  // Update price display based on slider input
  priceRangeInput.addEventListener('input', function () {
    minPriceDisplay.textContent = priceRangeInput.value;
  });
});



//cart page

document.getElementById('addToCartBtn').addEventListener('click', function () {
  // Get product details
  const productName = document.querySelector('.title h3').innerText;
  const productPrice = parseFloat(document.querySelector('.price span').innerText);
  const quantity = parseInt(document.querySelector('input[name="quantity"]').value);

  // Check if quantity is valid
  if (quantity <= 0) {
    alert('Please select a valid quantity.');
    return;
  }

  // Create a cart item object
  const cartItem = {
    name: productName,
    price: productPrice,
    quantity: quantity,
  };

  // Get cart from local storage or initialize it
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Add item to cart
  cart.push(cartItem);

  // Save cart back to local storage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Redirect to cart page
  window.location.href = 'cart.html';
});
