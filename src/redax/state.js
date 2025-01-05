const addPost = "ADD-POST";
const updateNewPostText = "UPDATE-NEW-POST-TEXT";

const store = {
    _state: {
        profileData: {
            userInfo: {
                id: 0,
                avaImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XIwy1-Y3ryDKHhyXMGTALfaC2HPIH_5i5kkWU6oT3LmLnEqVk4Nxe3JAVg&s",
                userName: "Vlad V.",
                birthday: "January 9",
                city: "Rivne",
                education: "SSS 'RVCNU of B and NM of Ukraine'"
            },
            
            postsMass: [
                {message: "kkkkkksss", likesCount: 1, id:0},
                {message: "Sigmo is top", likesCount: 11, id:1},
                {message: "Life is beateful", likesCount: 999999, id:2}
            ],
    
            currentNewPostText: "",
        },
     
        messageData: {messageMass: [
                {message: "Hi", youAuthor: true},
                {message: "Hi", youAuthor: false},
                {message: "What are you", youAuthor: true},
                {message: "I'm great", youAuthor: false},
                {message: "I'm great", youAuthor: false},
                {message: "I'm great", youAuthor: false},
                {message: "I'm great", youAuthor: false},
                {message: "I'm great", youAuthor: false},
                {message: "I'm great", youAuthor: false},
                {message: "I'm great", youAuthor: false},
                {message: "I'm great", youAuthor: false},
                {message: "I'm great", youAuthor: false},
                {message: "I'm great", youAuthor: false},
                {message: "I'm great", youAuthor: false},
                {message: "I'm great", youAuthor: false},
            ],
    
            contactMass: [
                {name: "Sigmo", id: 1, avaSrc: "https://i1.sndcdn.com/artworks-ObPJ3Klt2IV4QMlX-W4lBmQ-t500x500.jpg"},
                {name: "Tidjoy", id: 2, avaSrc: "https://i.pinimg.com/736x/c2/17/03/c21703e6afaf99779d0baeaae798229d.jpg"},
                {name: "Vitaly", id: 3, avaSrc: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQpmmwhk99OJtXRtOtyC8hhQ9mKJAqK0YDM6EPbFXe7PAH6gxcu"},
                {name: "Arbuz", id: 4, avaSrc: "https://i.ytimg.com/vi/B870sXlIjNs/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH6A4AC4AOKAgwIABABGGUgZShlMA8=&rs=AOn4CLCS_-dG5SO0tBAXENbbYYiwvo9Mog"},
                {name: "Gomniak", id: 5, avaSrc: "https://inweb.ua/blog/wp-content/uploads/2024/05/hamster-kombat-mozhe-buti-1120x588.jpg"},
            ]
        }
    },

    _informObserver () {},

    getState () {
        return this._state
    },

    subscribe (observer) {
        this._informObserverDOM = observer
    },

    dispatch(action) {
        if (action.type === "ADD-POST"){
            const newPost = {
                message: this._state.profileData.currentNewPostText,
                likesCount: 0,
                id:3
            }
            this._state.profileData.currentNewPostText = "";
            this._state.profileData.postsMass.unshift(newPost);
            this._informObserverDOM(this._state)
        }

        else if(action.type === "UPDATE-NEW-POST-TEXT"){
            this._state.profileData.currentNewPostText = action.text    
            this._informObserverDOM(this._state)
        }
    }
}

export const addPostActionCreator = () =>{
    return{
        type: addPost
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return{
        type: updateNewPostText, text: text
    }
}

export default store