import axios from 'axios';

//axios
  export const fetchBussinesDatas = () => {
    return (dispatch) => {
      axios
        .get("https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=5b68d64f98c7483a8dcde98a42ba0494")
        .then(response => {
          dispatch(bussinesDataToReducer(response.data.articles));
        })
    };
  };

  export const fetchHealthDatas = () => {
    return (dispatch) => {
        axios
        .get("https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=5b68d64f98c7483a8dcde98a42ba0494")
        .then(response => {
          dispatch(healthDataToReducer(response.data.articles));
        })
    };
  };

const bussinesDataToReducer = (bussinesdata)=>({
    type:'BUSSINESDATA',
    payload:bussinesdata
})

const healthDataToReducer = (healthdata)=>({
    type:'HEALTHDATA',
    payload:healthdata
})
