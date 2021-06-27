import { catsAPI } from "../api"
const GET_CATS= 'GET_CATS'
const SET_MORE_CATS = 'SET_MORE_CATS'
const DELETE_MORE_CATS = 'DELETE_MORE_CATS'

let initialState = {
cats: {},
loadMoreCats: {}
};


const catReducer = (state = initialState, action) => {

   switch (action.type) {

      case GET_CATS:
     
          return {
     
              ...state,
             cats: action.payload,
              
                           
            
          }


       case SET_MORE_CATS:
     
          return {
     
              ...state,
              loadMoreCats: {...state.cats, ...state.loadMoreCats}
                           
            
          }

   case DELETE_MORE_CATS:
     
          return {
     
              ...state,
              loadMoreCats: {}
                           
            
          }
          
          default:
                return state;
      }
    
  }

    
export const setCats = (payload) =>
({ type: GET_CATS, payload });


export const setMoreCats = () =>
({ type: SET_MORE_CATS });


export const deleteMoreCats= () =>
({ type: DELETE_MORE_CATS });




export const getCats = ( page, category) => async (dispatch) => {


       const response = await catsAPI.getCats(page, category);
                     
        dispatch(setCats(response))
       
      
     
     
  }
 
  
   

export default catReducer