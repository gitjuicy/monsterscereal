const performanceCookieCategory = 'C0002,';
function waitForOneTrust() {
  hasOneTrustLoaded();
  let attempts = 0;
  const interval = setInterval(function () {
    if (hasOneTrustLoaded() || attempts > 100){
      clearInterval(interval);
    } 
    attempts++;
  }, 100)
}

function hasOneTrustLoaded() {
  if (typeof window.OnetrustActiveGroups === 'string') {
    //check now
    optanonWrapper()
    // and wrap and trigger after cookie opt-in
    window.OptanonWrapper = optanonWrapper;
    return true;
  }
  return false;
}

function sendConsent(trackingConsent) {
  window.Shopify.customerPrivacy.setTrackingConsent(trackingConsent, () => {
    console.log('Happy Days')
  });
}

function optanonWrapper() {
  if (typeof(OneTrust) !== 'undefined') {
    OneTrust.OnConsentChanged(function() {
      location.reload();
    });
  }
  const trackingConsent = !!window.OnetrustActiveGroups.includes(performanceCookieCategory);
  window.Shopify.loadFeatures(
    [
      {
        name: 'consent-tracking-api',
        version: '0.1',
      },
    ],
    error => {
      if (error) {
        throw error; 
      }
      sendConsent(trackingConsent)
    },
  );
}

(function () {
  waitForOneTrust();
})();

// Opens OneTrust when #preference-center footer link is clicked
theme.jQuery(function() {
  document.querySelectorAll('a[href="#preference-center"]').forEach(function(v) {
    v.addEventListener('click', function(e) {
      e.preventDefault();
      if (typeof(OneTrust) != 'undefined')
        OneTrust.ToggleInfoDisplay();
    });
  });
});
