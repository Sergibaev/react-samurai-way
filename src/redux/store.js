
  
let store = {
  _state: {
    profilePage: {
      posts: [
        {id: '1', message:'What is this?', likesCount: 15,},
        {id: '2', message:'U are dumn', likesCount: 47,},
        {id: '3', message:'Would you break up?', likesCount: 5,},        
      ],      
      newPostText: 'new post',
    },
   
    messagesPage: {
      msg: [
        {id: '1', text:'Hay'},
        {id: '2', text:'How are you?'},
        {id: '3', text:'Would you break up?'},        
      ],

      dialogs: [
        {id: '1', name:'Aidos'},
        {id: '2', name:'Dimych'},
        {id: '3', name:'Masha'},
        {id: '4', name:'Pasha'},
        {id: '5', name:'Sasha'},
      ],
    }
   
  },
  _callSubscriber() {
    console.log('changed page')
  },
  
  getState() {
    return this._state
  },
  subscriber(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      }      
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    }
  },
}

export default store