
function dogImages(query, displayCallback) {
    fetch(`https://dog.ceo/api/breeds/image/random/${query}`)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson)
        return responseJson
      })
      .then(responseJson => displayCallback(responseJson))
      .catch(error => alert('Oh no, please try again later'));
  }
  
  function displayResults(responseJson) {
    return `<div> <img src="${responseJson}" class="results-img"> 
    </div>`;
  }
  
  function displayDogSearch(data) {
    const results = data.message.map((item, index) => displayResults(item));
    $('.js-results').html(results);
    $('.results').removeClass('hidden');
  }
  
  function Input() {
    $('.js-search-form').submit(event => {
      event.preventDefault();
      const queryTarget = $(event.currentTarget).find('.js-query');
      const query = queryTarget.val();
      queryTarget.val("3")
      dogImages(query, displayDogSearch);
    });
  }
  
  $(function () {
    console.log('App loaded, waiting for Input!');
    Input();
  });